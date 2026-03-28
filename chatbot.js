/* ── Chatbot — AI-powered resume assistant with local fallback ── */

(function () {
  var R = RESUME;
  var API_URL = "https://profile-chatbot.vivinjoghee.workers.dev/chat";
  var sessionId = "s_" + Date.now() + "_" + Math.random().toString(36).substr(2, 6);
  var useAI = true; // Will auto-fallback to keyword mode if API is unavailable

  /* ── DOM Construction ── */
  var btn = document.createElement("button");
  btn.className = "chatbot-btn";
  btn.setAttribute("aria-label", "Chat with me");
  btn.innerHTML = '<i class="fas fa-comment-dots"></i>';
  document.body.appendChild(btn);

  var win = document.createElement("div");
  win.className = "chatbot-window";
  win.innerHTML =
    '<div class="chatbot-header">' +
      '<span>Ask me anything <span class="chatbot-mode" id="chatbot-mode"></span></span>' +
      '<button class="chatbot-close" aria-label="Close chat"><i class="fas fa-times"></i></button>' +
    '</div>' +
    '<div class="chatbot-messages" id="chatbot-messages"></div>' +
    '<div class="chatbot-input-area">' +
      '<input type="text" class="chatbot-input" id="chatbot-input" placeholder="Type a question..." autocomplete="off">' +
      '<button class="chatbot-send" id="chatbot-send" aria-label="Send"><i class="fas fa-paper-plane"></i></button>' +
    '</div>';
  document.body.appendChild(win);

  var messagesEl = document.getElementById("chatbot-messages");
  var inputEl = document.getElementById("chatbot-input");
  var sendBtn = document.getElementById("chatbot-send");
  var closeBtn = win.querySelector(".chatbot-close");
  var isOpen = false;
  var greeted = false;

  var modeEl = document.getElementById("chatbot-mode");

  function updateModeBadge() {
    if (useAI) {
      modeEl.textContent = "AI";
      modeEl.className = "chatbot-mode chatbot-mode-ai";
    } else {
      modeEl.textContent = "Offline";
      modeEl.className = "chatbot-mode chatbot-mode-local";
    }
  }

  // Check if API is available on load
  fetch(API_URL.replace("/chat", "/health"))
    .then(function (res) { useAI = res.ok; updateModeBadge(); })
    .catch(function () { useAI = false; updateModeBadge(); });

  btn.addEventListener("click", function () {
    isOpen = !isOpen;
    win.classList.toggle("open", isOpen);
    btn.classList.toggle("active", isOpen);
    if (isOpen && !greeted) {
      greeted = true;
      addBotMessage("Hi! I'm Vivin's AI profile assistant. Feel free to ask me anything about his career, skills, certifications, education, blogs, or interests!");
    }
    if (isOpen) inputEl.focus();
  });

  closeBtn.addEventListener("click", function () {
    isOpen = false;
    win.classList.remove("open");
    btn.classList.remove("active");
  });

  sendBtn.addEventListener("click", sendMessage);
  inputEl.addEventListener("keydown", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    var text = inputEl.value.trim();
    if (!text) return;
    addUserMessage(text);
    inputEl.value = "";
    inputEl.disabled = true;
    sendBtn.disabled = true;

    if (useAI) {
      callAI(text);
    } else {
      var response = getLocalResponse(text);
      setTimeout(function () {
        addBotMessage(response);
        inputEl.disabled = false;
        sendBtn.disabled = false;
        inputEl.focus();
      }, 250);
    }
  }

  function callAI(text) {
    // Show typing indicator
    var typing = document.createElement("div");
    typing.className = "chatbot-msg chatbot-msg-bot chatbot-typing";
    typing.innerHTML = '<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>';
    messagesEl.appendChild(typing);
    messagesEl.scrollTop = messagesEl.scrollHeight;

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text, session_id: sessionId, resume: R }),
    })
      .then(function (res) {
        if (!res.ok) throw new Error("API error: " + res.status);
        return res.json();
      })
      .then(function (data) {
        // Remove typing indicator
        if (typing.parentNode) typing.parentNode.removeChild(typing);

        if (data.error) {
          addBotMessage("Sorry, I encountered an error. " + data.error);
        } else {
          // Convert plain text line breaks to HTML
          var html = data.response
            .replace(/\n/g, "<br>")
            .replace(/•/g, "\u2022");
          addBotMessage(html);
        }
      })
      .catch(function (err) {
        // Remove typing indicator
        if (typing.parentNode) typing.parentNode.removeChild(typing);

        // Fallback to keyword mode
        console.warn("AI API unavailable, falling back to keyword mode:", err.message);
        useAI = false;
        updateModeBadge();
        var response = getLocalResponse(text);
        addBotMessage(response);
      })
      .finally(function () {
        inputEl.disabled = false;
        sendBtn.disabled = false;
        inputEl.focus();
      });
  }

  function addUserMessage(text) {
    var div = document.createElement("div");
    div.className = "chatbot-msg chatbot-msg-user";
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function addBotMessage(html) {
    var div = document.createElement("div");
    div.className = "chatbot-msg chatbot-msg-bot";
    div.innerHTML = html;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  /* ═══════════════════════════════════════════════════════════
     LOCAL FALLBACK — keyword-based engine (used when API is down)
     ═══════════════════════════════════════════════════════════ */

  function lower(s) { return (s || "").toLowerCase(); }

  function containsAny(text, words) {
    for (var i = 0; i < words.length; i++) {
      if (text.indexOf(words[i]) !== -1) return true;
    }
    return false;
  }

  function extractYear(text) {
    var m = text.match(/\b(19|20)\d{2}\b/);
    return m ? parseInt(m[0]) : null;
  }

  function extractYears(dateStr) {
    var years = [];
    var matches = dateStr.match(/\d{4}/g);
    if (matches) matches.forEach(function (y) { years.push(parseInt(y)); });
    if (lower(dateStr).indexOf("present") !== -1) years.push(new Date().getFullYear());
    return years;
  }

  function yearInRange(year, dateStr) {
    var yrs = extractYears(dateStr);
    if (yrs.length === 0) return false;
    if (yrs.length === 1) return year === yrs[0];
    return year >= yrs[0] && year <= yrs[yrs.length - 1];
  }

  function calcExperience() {
    var earliest = 9999;
    R.experience.forEach(function (e) {
      extractYears(e.date).forEach(function (y) { if (y < earliest) earliest = y; });
    });
    return new Date().getFullYear() - earliest;
  }

  function getLocalResponse(input) {
    var q = lower(input.trim());

    if (/^(hi|hey|hello|howdy|good\s*(morning|afternoon|evening)|greetings|yo)\b/.test(q)) {
      return "Hello! What would you like to know about Vivin? I can answer questions about his experience, skills, education, certifications, blogs, and more.";
    }

    if (/^(thanks|thank you|thx|cheers)/.test(q)) {
      return "You're welcome! Let me know if you have more questions.";
    }

    if (containsAny(q, ["how many years", "years of experience", "total experience"])) {
      return "Vivin has <strong>" + calcExperience() + "+ years</strong> of professional experience in financial technology.";
    }

    if (containsAny(q, ["current role", "currently", "present role", "doing now", "working now"])) {
      var cur = R.experience[0];
      return "<strong>" + cur.role + "</strong> at <strong>" + cur.company + "</strong> (" + cur.date + ")<br><br>" +
        cur.bullets.map(function (b) { return "\u2022 " + b; }).join("<br>");
    }

    // Year-specific
    var yearAsked = extractYear(q);
    if (yearAsked && containsAny(q, ["work", "role", "job", "company", "doing", "where", "what"])) {
      var matches = [];
      R.experience.forEach(function (job) {
        if (yearInRange(yearAsked, job.date)) matches.push(job);
      });
      if (matches.length > 0) {
        return "In <strong>" + yearAsked + "</strong>:<br><br>" +
          matches.map(function (j) { return "<strong>" + j.role + "</strong> at " + j.company; }).join("<br>");
      }
    }

    if (containsAny(q, ["experience", "work", "career", "employment", "roles"])) {
      return R.experience.map(function (e) {
        return "<strong>" + e.role + "</strong><br>" + e.company + " (" + e.date + ")";
      }).join("<br><br>");
    }

    if (containsAny(q, ["skill", "skills", "tools", "technologies"])) {
      return "<strong>Tools & Technologies:</strong><br>" + R.skills.join(", ");
    }

    if (containsAny(q, ["certification", "certifications", "certified"])) {
      return R.certifications.map(function (c) {
        return "<strong>" + c.name + "</strong> \u2014 " + c.detail;
      }).join("<br>");
    }

    if (containsAny(q, ["education", "degree", "university", "ntu", "masters", "bachelor"])) {
      return R.education.map(function (e) {
        return "<strong>" + e.name + "</strong> \u2014 " + e.detail;
      }).join("<br>");
    }

    if (containsAny(q, ["membership", "member", "association"])) {
      return "<strong>Professional Memberships:</strong><br>" +
        R.memberships.map(function (m) { return "\u2022 " + m; }).join("<br>");
    }

    if (containsAny(q, ["blog", "blogs", "article", "written", "post"])) {
      var sorted = R.blogs.slice().sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
      return sorted.map(function (b) { return "<strong>" + b.title + "</strong> (" + b.date + ")"; }).join("<br>");
    }

    if (containsAny(q, ["book", "books", "reading", "read"])) {
      return "<strong>2026:</strong><br>" + R.books2026.map(function (b) { return "\u2022 " + b.title; }).join("<br>") +
        "<br><br><strong>2025:</strong><br>" + R.books2025.map(function (b) { return "\u2022 " + b.title; }).join("<br>");
    }

    if (containsAny(q, ["volunteer", "volunteering"])) {
      return R.volunteer.map(function (v) { return "<strong>" + v.name + "</strong> \u2014 " + v.detail; }).join("<br>");
    }

    if (containsAny(q, ["football", "soccer", "coach"])) {
      return R.football.map(function (f) { return "<strong>" + f.name + "</strong> \u2014 " + f.detail; }).join("<br>");
    }

    if (containsAny(q, ["contact", "email", "phone", "linkedin", "reach"])) {
      var lines = [];
      R.contact.forEach(function (c) {
        if (c.type === "email") lines.push("Email: " + c.value);
        if (c.type === "phone") lines.push("Phone: " + c.value);
        if (c.type === "linkedin") lines.push("LinkedIn: " + c.value);
        if (c.type === "location") lines.push("Location: " + c.value);
      });
      return lines.join("<br>");
    }

    if (containsAny(q, ["about", "who", "yourself", "summary", "profile", "tell me"])) {
      return "<strong>" + R.name + "</strong><br><br>" + R.objective.replace(/\n/g, "<br><br>");
    }

    return "I'm not sure about that. Try asking about experience, skills, certifications, education, blogs, books, or contact info!";
  }
})();
