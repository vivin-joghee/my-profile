/**
 * Cloudflare Worker — AI-powered resume chatbot backend.
 * Uses Claude API (Haiku) to answer questions about the profile.
 * Resume data is sent from the frontend (data.js) — single source of truth.
 *
 * Secrets required:
 *   ANTHROPIC_API_KEY — set via: npx wrangler secret put ANTHROPIC_API_KEY
 */

const SYSTEM_RULES = `
You are a personal profile assistant on a website. Answer questions based ONLY on the resume data provided below.

=== RULES ===
- Answer in short, concise paragraphs. Use bullet points when listing items.
- Be warm and professional.
- Answer questions about ALL sections of the profile, including experience, skills, certifications, education, memberships, awards, volunteer work, football, books, blogs, and contact information. All of these are valid topics.
- If asked about something that is genuinely NOT covered in the data (e.g., personal opinions, unrelated topics), say: "I can only answer questions about this profile. Feel free to ask about experience, skills, certifications, education, volunteering, football, blogs, or books!"
- Do NOT invent or assume information not provided.
- Format responses in plain text (no markdown). Use simple bullet points with "•" character.
`;

// In-memory conversation store (per isolate lifetime, not persistent across restarts)
const conversations = {};

// In-memory rate limit store
const rateLimitStore = {};

function isRateLimited(ip, maxReqs, windowSecs) {
  const now = Date.now() / 1000;
  if (!rateLimitStore[ip]) rateLimitStore[ip] = [];

  // Clean old entries
  rateLimitStore[ip] = rateLimitStore[ip].filter(t => now - t < windowSecs);

  if (rateLimitStore[ip].length >= maxReqs) {
    const oldest = rateLimitStore[ip][0];
    const resetIn = Math.ceil(windowSecs - (now - oldest));
    return { limited: true, remaining: 0, resetIn };
  }

  rateLimitStore[ip].push(now);
  return { limited: false, remaining: maxReqs - rateLimitStore[ip].length, resetIn: 0 };
}

function buildResumeContext(resume) {
  const lines = [];

  lines.push("=== PERSONAL ===");
  lines.push("Name: " + (resume.name || ""));
  lines.push("Title: " + (resume.title || ""));
  for (const c of (resume.contact || [])) {
    lines.push((c.type || "").charAt(0).toUpperCase() + (c.type || "").slice(1) + ": " + (c.value || ""));
  }

  lines.push("\n=== ABOUT ===");
  lines.push(resume.objective || "");

  if (resume.memberships && resume.memberships.length) {
    lines.push("\n=== PROFESSIONAL MEMBERSHIPS ===");
    for (const m of resume.memberships) lines.push("- " + m);
  }

  lines.push("\n=== EXPERIENCE ===");
  (resume.experience || []).forEach((job, i) => {
    lines.push((i + 1) + ". " + (job.role || ""));
    lines.push("   Company: " + (job.company || ""));
    lines.push("   Duration: " + (job.date || ""));
    for (const b of (job.bullets || [])) lines.push("   - " + b);
  });

  lines.push("\n=== SKILLS ===");
  lines.push((resume.skills || []).join(", "));

  lines.push("\n=== EDUCATION ===");
  for (const e of (resume.education || [])) {
    lines.push("- " + (e.name || "") + " — " + (e.detail || ""));
  }

  lines.push("\n=== CERTIFICATIONS ===");
  for (const c of (resume.certifications || [])) {
    lines.push("- " + (c.name || "") + " — " + (c.detail || ""));
  }

  if (resume.awards && resume.awards.length) {
    lines.push("\n=== AWARDS ===");
    for (const a of resume.awards) lines.push("- " + (a.name || "") + " — " + (a.detail || ""));
  }

  if (resume.volunteer && resume.volunteer.length) {
    lines.push("\n=== VOLUNTEER ===");
    for (const v of resume.volunteer) lines.push("- " + (v.name || "") + " — " + (v.detail || ""));
  }

  if (resume.football && resume.football.length) {
    lines.push("\n=== FOOTBALL ===");
    for (const f of resume.football) lines.push("- " + (f.name || "") + " — " + (f.detail || ""));
  }

  lines.push("\n=== BOOKS ===");
  if (resume.books2026 && resume.books2026.length) {
    lines.push("2026: " + resume.books2026.map(b => b.title || "").join(", "));
  }
  if (resume.books2025 && resume.books2025.length) {
    lines.push("2025: " + resume.books2025.map(b => b.title || "").join(", "));
  }

  if (resume.blogs && resume.blogs.length) {
    lines.push("\n=== BLOG POSTS ===");
    for (const b of resume.blogs) {
      lines.push("- " + (b.title || "") + " (" + (b.date || "") + ")");
    }
  }

  return lines.join("\n");
}

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin || "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "*";
    const headers = corsHeaders(origin);

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    // Health check
    if (url.pathname === "/health" && request.method === "GET") {
      return new Response(JSON.stringify({ status: "ok" }), { headers });
    }

    // Chat endpoint
    if (url.pathname === "/chat" && request.method === "POST") {
      // Rate limiting
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      const maxReqs = parseInt(env.RATE_LIMIT_MAX || "50");
      const windowSecs = parseInt(env.RATE_LIMIT_WINDOW || "3600");
      const rl = isRateLimited(ip, maxReqs, windowSecs);

      if (rl.limited) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in " + rl.resetIn + " seconds.", retry_after: rl.resetIn }),
          { status: 429, headers }
        );
      }

      let data;
      try {
        data = await request.json();
      } catch {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers });
      }

      const userMessage = (data.message || "").trim();
      const sessionId = data.session_id || "default";
      const resume = data.resume || {};

      if (!userMessage) {
        return new Response(JSON.stringify({ error: "Empty message" }), { status: 400, headers });
      }

      // Build context
      const resumeContext = buildResumeContext(resume);
      const systemPrompt = SYSTEM_RULES + "\n\n=== RESUME DATA ===\n" + resumeContext;

      // Conversation history
      if (!conversations[sessionId]) conversations[sessionId] = [];
      conversations[sessionId].push({ role: "user", content: userMessage });

      // Keep last 20 messages
      if (conversations[sessionId].length > 20) {
        conversations[sessionId] = conversations[sessionId].slice(-20);
      }

      try {
        const apiResponse = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": env.ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
          },
          body: JSON.stringify({
            model: "claude-3-haiku-20240307",
            max_tokens: 1024,
            system: systemPrompt,
            messages: conversations[sessionId],
          }),
        });

        if (!apiResponse.ok) {
          const errText = await apiResponse.text();
          console.error("Claude API error:", errText);
          return new Response(
            JSON.stringify({ error: "AI service temporarily unavailable" }),
            { status: 502, headers }
          );
        }

        const result = await apiResponse.json();
        const assistantMessage = result.content[0].text;

        conversations[sessionId].push({ role: "assistant", content: assistantMessage });

        return new Response(JSON.stringify({ response: assistantMessage }), { headers });

      } catch (err) {
        console.error("Error:", err);
        return new Response(
          JSON.stringify({ error: "Internal server error" }),
          { status: 500, headers }
        );
      }
    }

    // 404 for everything else
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404, headers });
  },
};
