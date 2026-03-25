/* ── Chatbot — smart resume assistant ── */

(function () {
  var R = RESUME;

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
      '<span>Ask me anything</span>' +
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

  btn.addEventListener("click", function () {
    isOpen = !isOpen;
    win.classList.toggle("open", isOpen);
    btn.classList.toggle("active", isOpen);
    if (isOpen && !greeted) {
      greeted = true;
      addBotMessage("Hi! I'm Vivin's profile assistant. Feel free to ask me anything, for example:<br><br>" +
        "\u2022 \"What did Vivin do at BNY Mellon?\"<br>" +
        "\u2022 \"Does he know Python?\"<br>" +
        "\u2022 \"How many years of experience?\"<br>" +
        "\u2022 \"What certifications does he have in blockchain?\"<br>" +
        "\u2022 \"Where did he work in 2018?\"");
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
    var response = getResponse(text);
    setTimeout(function () { addBotMessage(response); }, 250);
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

  /* ── Helpers ── */
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

  function fuzzyMatch(haystack, needle) {
    return lower(haystack).indexOf(lower(needle)) !== -1;
  }

  function calcExperience() {
    var dates = R.experience.map(function (e) { return extractYears(e.date); });
    var earliest = 9999;
    dates.forEach(function (yrs) {
      yrs.forEach(function (y) { if (y < earliest) earliest = y; });
    });
    return new Date().getFullYear() - earliest;
  }

  function searchAllData(query) {
    var q = lower(query);
    var results = [];

    // Search experience bullets
    R.experience.forEach(function (job) {
      job.bullets.forEach(function (b) {
        if (lower(b).indexOf(q) !== -1) {
          results.push({ type: "experience", text: b, context: job.role + " at " + job.company });
        }
      });
    });

    // Search certifications
    R.certifications.forEach(function (c) {
      if (lower(c.name).indexOf(q) !== -1 || lower(c.detail).indexOf(q) !== -1) {
        results.push({ type: "certification", text: c.name + " \u2014 " + c.detail });
      }
    });

    // Search blogs
    R.blogs.forEach(function (b) {
      if (lower(b.title).indexOf(q) !== -1 || lower(b.intro || "").indexOf(q) !== -1) {
        results.push({ type: "blog", text: b.title + " (" + b.date + ")" });
      }
    });

    // Search books
    var allBooks = (R.books2026 || []).concat(R.books2025 || []);
    allBooks.forEach(function (b) {
      if (lower(b.title).indexOf(q) !== -1 || lower(b.author).indexOf(q) !== -1) {
        results.push({ type: "book", text: b.title + " by " + b.author });
      }
    });

    return results;
  }

  /* ── Intent Detection & Response ── */
  function getResponse(input) {
    var q = lower(input.trim());

    // Greetings
    if (/^(hi|hey|hello|howdy|good\s*(morning|afternoon|evening)|greetings|yo)\b/.test(q)) {
      return "Hello! What would you like to know about Vivin? I can answer questions about his experience, skills, education, certifications, blogs, and more.";
    }

    // Thanks
    if (/^(thanks|thank you|thx|cheers|appreciate)/.test(q)) {
      return "You're welcome! Let me know if you have more questions.";
    }

    // How many years of experience
    if (containsAny(q, ["how many years", "years of experience", "how long has", "total experience"])) {
      var yrs = calcExperience();
      return "Vivin has <strong>" + yrs + "+ years</strong> of professional experience in financial technology, spanning Swift messaging, cross-border payments, and enterprise infrastructure.";
    }

    // Current role / what does he do now
    if (containsAny(q, ["current role", "current job", "currently", "right now", "present role", "what does he do now", "what do you do", "doing now", "working now"])) {
      var current = R.experience[0];
      return "Vivin is currently a <strong>" + current.role + "</strong> at <strong>" + current.company + "</strong> (" + current.date + ").<br><br>" +
        "Key responsibilities:<br>" + current.bullets.map(function (b) { return "\u2022 " + b; }).join("<br>");
    }

    // Where does he work / who does he work for
    if (containsAny(q, ["where does", "where do you work", "who do you work", "employer", "which company now"])) {
      var cur = R.experience[0];
      return "Vivin currently works at <strong>" + cur.company + "</strong> as a <strong>" + cur.role + "</strong>.";
    }

    // Specific company questions
    var companyAliases = [
      { names: ["swift", "swiftterminal"], idx: 0 },
      { names: ["bny", "mellon", "bny mellon"], idx: 1 },
      { names: ["standard chartered", "scb", "stanchart"], idx: 2 },
      { names: ["syntel"], idx: 3 },
    ];
    for (var ci = 0; ci < companyAliases.length; ci++) {
      var ca = companyAliases[ci];
      if (containsAny(q, ca.names) && containsAny(q, ["what", "role", "do", "did", "work", "responsib", "achieve", "tell me"])) {
        var job = R.experience[ca.idx];
        return "<strong>" + job.role + "</strong> at <strong>" + job.company + "</strong> (" + job.date + ")<br><br>" +
          job.bullets.map(function (b) { return "\u2022 " + b; }).join("<br>");
      }
    }

    // Year-specific experience questions
    var yearAsked = extractYear(q);
    if (yearAsked && containsAny(q, ["work", "role", "job", "company", "doing", "where", "what"])) {
      var matches = [];
      R.experience.forEach(function (job) {
        if (yearInRange(yearAsked, job.date)) {
          matches.push(job);
        }
      });
      if (matches.length > 0) {
        return "In <strong>" + yearAsked + "</strong>, Vivin was working as:<br><br>" +
          matches.map(function (j) {
            return "<strong>" + j.role + "</strong> at <strong>" + j.company + "</strong> (" + j.date + ")";
          }).join("<br>");
      }
      return "I don't have records of Vivin's work in " + yearAsked + ". His career history spans from 2012 to present.";
    }

    // Does he know / have skill X
    if (containsAny(q, ["does he know", "do you know", "experience with", "familiar with", "proficient", "expertise in", "work with", "worked with", "have you used", "has he used"])) {
      var foundSkills = [];
      R.skills.forEach(function (s) {
        if (q.indexOf(lower(s)) !== -1) foundSkills.push(s);
      });

      // Also search experience bullets for the query terms
      var words = q.replace(/does he know|do you know|experience with|familiar with|proficient|expertise in|work with|worked with|have you used|has he used/g, "").trim();
      var bulletMatches = [];
      if (words.length > 2) {
        R.experience.forEach(function (job) {
          job.bullets.forEach(function (b) {
            if (lower(b).indexOf(words) !== -1) {
              bulletMatches.push({ bullet: b, context: job.company });
            }
          });
        });
      }

      if (foundSkills.length > 0 || bulletMatches.length > 0) {
        var resp = "Yes! ";
        if (foundSkills.length > 0) {
          resp += "<strong>" + foundSkills.join(", ") + "</strong> is listed in Vivin's skills.";
        }
        if (bulletMatches.length > 0) {
          resp += "<br><br>Relevant experience:<br>" + bulletMatches.slice(0, 3).map(function (m) {
            return "\u2022 " + m.bullet + " <em>(" + m.context + ")</em>";
          }).join("<br>");
        }
        return resp;
      }

      return "I couldn't find a direct match for that in Vivin's profile. His key skills include: <strong>" + R.skills.slice(0, 6).join(", ") + "</strong>, and more.";
    }

    // Specific skill check (e.g., "Python", "Docker")
    if (containsAny(q, ["skill", "skills", "tools", "technologies", "tech stack", "technical"])) {
      // Check if asking about a specific skill
      var specificSkill = null;
      R.skills.forEach(function (s) {
        if (q.indexOf(lower(s)) !== -1) specificSkill = s;
      });
      if (specificSkill) {
        // Find related experience bullets
        var related = [];
        R.experience.forEach(function (job) {
          job.bullets.forEach(function (b) {
            if (lower(b).indexOf(lower(specificSkill)) !== -1) {
              related.push({ bullet: b, context: job.company });
            }
          });
        });
        var resp = "Yes, <strong>" + specificSkill + "</strong> is one of Vivin's skills.";
        if (related.length > 0) {
          resp += "<br><br>Here's how he's used it:<br>" + related.slice(0, 3).map(function (r) {
            return "\u2022 " + r.bullet + " <em>(" + r.context + ")</em>";
          }).join("<br>");
        }
        return resp;
      }
      return "<strong>Tools & Technologies:</strong><br>" + R.skills.join(", ");
    }

    // How many certifications / specific cert
    if (containsAny(q, ["certification", "certifications", "certified", "certificate", "certs"])) {
      if (containsAny(q, ["how many", "count", "number"])) {
        return "Vivin holds <strong>" + R.certifications.length + " certifications</strong>, including AWS, Azure, Python, Blockchain, Machine Learning, and more.";
      }
      // Search for specific cert
      var certMatches = [];
      R.certifications.forEach(function (c) {
        if (fuzzyMatch(c.name, q.replace(/certification|certifications|certified|certificate|certs|does|have|he|has|any|in|for|a/g, "").trim()) ||
            containsAny(q, lower(c.name).split(/[\s,]+/))) {
          certMatches.push(c);
        }
      });
      if (certMatches.length > 0 && certMatches.length < R.certifications.length) {
        return "Found " + certMatches.length + " matching certification(s):<br><br>" +
          certMatches.map(function (c) { return "<strong>" + c.name + "</strong> \u2014 " + c.detail; }).join("<br>");
      }
      return "Vivin's certifications:<br><br>" +
        R.certifications.map(function (c) { return "<strong>" + c.name + "</strong> \u2014 " + c.detail; }).join("<br>");
    }

    // Education questions
    if (containsAny(q, ["education", "degree", "university", "ntu", "masters", "bachelor", "msc", "fintech", "anna university", "study", "studied", "school", "college", "qualification", "academic"])) {
      if (containsAny(q, ["where", "which university"])) {
        return "Vivin studied at:<br><br>" +
          R.education.map(function (e) { return "<strong>" + e.name + "</strong> \u2014 " + e.detail; }).join("<br>");
      }
      if (containsAny(q, ["masters", "msc", "postgrad", "fintech"])) {
        var masters = R.education[0];
        return "<strong>" + masters.name + "</strong><br>" + masters.detail;
      }
      if (containsAny(q, ["bachelor", "undergrad", "engineering", "btech", "be"])) {
        var bachelors = R.education[1];
        return "<strong>" + bachelors.name + "</strong><br>" + bachelors.detail;
      }
      return R.education.map(function (e) {
        return "<strong>" + e.name + "</strong> \u2014 " + e.detail;
      }).join("<br>");
    }

    // Memberships
    if (containsAny(q, ["membership", "memberships", "member", "association", "sfa", "scs", "bas", "professional body", "professional bodies"])) {
      return "<strong>Professional Memberships:</strong><br>" +
        R.memberships.map(function (m) { return "\u2022 " + m; }).join("<br>");
    }

    // Blog questions
    if (containsAny(q, ["blog", "blogs", "write", "writing", "articles", "article", "written", "post", "posts"])) {
      if (containsAny(q, ["how many", "count", "number"])) {
        return "Vivin has written <strong>" + R.blogs.length + " blog posts</strong> covering topics like cryptography, blockchain, AI, and fintech.";
      }
      if (containsAny(q, ["latest", "recent", "newest", "last"])) {
        var sorted = R.blogs.slice().sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
        var latest = sorted[0];
        return "The latest blog post is:<br><br><strong>" + latest.title + "</strong><br>" + latest.date + "<br><em>" + (latest.intro || "") + "</em>";
      }
      // Search for specific blog
      var blogMatches = [];
      R.blogs.forEach(function (b) {
        if (fuzzyMatch(b.title, q) || fuzzyMatch(b.intro || "", q)) {
          blogMatches.push(b);
        }
      });
      if (blogMatches.length > 0 && blogMatches.length < R.blogs.length) {
        return blogMatches.map(function (b) {
          return "<strong>" + b.title + "</strong> (" + b.date + ")<br><em>" + (b.intro || "") + "</em>";
        }).join("<br><br>");
      }
      var sortedAll = R.blogs.slice().sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
      return "Blog posts:<br><br>" + sortedAll.map(function (b) {
        return "<strong>" + b.title + "</strong> (" + b.date + ")";
      }).join("<br>");
    }

    // Books
    if (containsAny(q, ["book", "books", "reading", "read"])) {
      if (containsAny(q, ["how many", "count", "number"])) {
        var total = (R.books2026 || []).length + (R.books2025 || []).length;
        return "Vivin has read <strong>" + total + " books</strong> across 2025 and 2026.";
      }
      if (containsAny(q, ["2026"])) {
        return "<strong>Books 2026:</strong><br>" + R.books2026.map(function (b) {
          return "\u2022 " + b.title + " by " + b.author;
        }).join("<br>");
      }
      if (containsAny(q, ["2025"])) {
        return "<strong>Books 2025:</strong><br>" + R.books2025.map(function (b) {
          return "\u2022 " + b.title + " by " + b.author;
        }).join("<br>");
      }
      // Search specific book
      var allBooks = (R.books2026 || []).concat(R.books2025 || []);
      var bookMatches = [];
      allBooks.forEach(function (b) {
        if (fuzzyMatch(b.title, q) || fuzzyMatch(b.author, q)) bookMatches.push(b);
      });
      if (bookMatches.length > 0 && bookMatches.length < allBooks.length) {
        return bookMatches.map(function (b) {
          return "<strong>" + b.title + "</strong> by " + b.author;
        }).join("<br>");
      }
      return "<strong>Books 2026:</strong><br>" + R.books2026.map(function (b) { return "\u2022 " + b.title; }).join("<br>") +
        "<br><br><strong>Books 2025:</strong><br>" + R.books2025.map(function (b) { return "\u2022 " + b.title; }).join("<br>");
    }

    // Volunteer
    if (containsAny(q, ["volunteer", "volunteering", "nea", "community", "social work", "giving back"])) {
      return "Volunteering activities:<br><br>" +
        R.volunteer.map(function (v) { return "<strong>" + v.name + "</strong> \u2014 " + v.detail; }).join("<br>");
    }

    // Football
    if (containsAny(q, ["football", "soccer", "coach", "coaching", "fas", "sport"])) {
      return "Football involvement:<br><br>" +
        R.football.map(function (f) { return "<strong>" + f.name + "</strong> \u2014 " + f.detail; }).join("<br>");
    }

    // Contact
    if (containsAny(q, ["contact", "email", "phone", "linkedin", "github", "reach", "hire", "connect", "get in touch"])) {
      var lines = [];
      R.contact.forEach(function (c) {
        if (c.type === "email") lines.push("\u2709 Email: <strong>" + c.value + "</strong>");
        if (c.type === "phone") lines.push("\u260e Phone: <strong>" + c.value + "</strong>");
        if (c.type === "linkedin") lines.push("\ud83d\udd17 LinkedIn: <strong>" + c.value + "</strong>");
        if (c.type === "github") lines.push("\ud83d\udcbb GitHub: <strong>" + c.value + "</strong>");
        if (c.type === "location") lines.push("\ud83d\udccd Location: <strong>" + c.value + "</strong>");
      });
      return lines.join("<br>");
    }

    // About / summary
    if (containsAny(q, ["about", "who is", "who are you", "yourself", "summary", "objective", "introduce", "profile", "tell me about"])) {
      var obj = R.objective.replace(/\n/g, "<br><br>");
      return "<strong>" + R.name + "</strong><br><br>" + obj;
    }

    // Experience (general)
    if (containsAny(q, ["experience", "work", "career", "employment", "jobs", "roles", "professional"])) {
      return "Vivin has <strong>" + calcExperience() + "+ years</strong> of experience across " + R.experience.length + " roles:<br><br>" +
        R.experience.map(function (e) {
          return "<strong>" + e.role + "</strong><br>" + e.company + " (" + e.date + ")";
        }).join("<br><br>");
    }

    // ISO 20022 / payments specific
    if (containsAny(q, ["iso 20022", "iso20022", "payment", "payments", "cross-border", "cross border", "meps", "chaps", "chats", "bahtnet", "cbpr"])) {
      var paymentBullets = [];
      R.experience.forEach(function (job) {
        job.bullets.forEach(function (b) {
          if (containsAny(lower(b), ["iso 20022", "iso20022", "payment", "meps", "chaps", "chats", "bahtnet", "cbpr", "cross-border"])) {
            paymentBullets.push({ bullet: b, context: job.company });
          }
        });
      });
      if (paymentBullets.length > 0) {
        return "Vivin's payment and ISO 20022 experience:<br><br>" +
          paymentBullets.map(function (p) {
            return "\u2022 " + p.bullet + " <em>(" + p.context + ")</em>";
          }).join("<br>");
      }
    }

    // AI / automation
    if (containsAny(q, ["ai", "artificial intelligence", "automation", "copilot", "machine learning", "ml"])) {
      var aiBullets = [];
      R.experience.forEach(function (job) {
        job.bullets.forEach(function (b) {
          if (containsAny(lower(b), ["ai", "copilot", "machine", "automat", "python"])) {
            aiBullets.push({ bullet: b, context: job.company });
          }
        });
      });
      if (aiBullets.length > 0) {
        return "Vivin's AI and automation experience:<br><br>" +
          aiBullets.map(function (p) {
            return "\u2022 " + p.bullet + " <em>(" + p.context + ")</em>";
          }).join("<br>");
      }
    }

    // Cloud / Azure / DevOps
    if (containsAny(q, ["cloud", "azure", "devops", "ci/cd", "cicd", "deployment", "infrastructure"])) {
      var cloudBullets = [];
      R.experience.forEach(function (job) {
        job.bullets.forEach(function (b) {
          if (containsAny(lower(b), ["azure", "cloud", "docker", "ansible", "ci/cd", "jenkins", "deploy", "provision"])) {
            cloudBullets.push({ bullet: b, context: job.company });
          }
        });
      });
      if (cloudBullets.length > 0) {
        return "Vivin's cloud and DevOps experience:<br><br>" +
          cloudBullets.map(function (p) {
            return "\u2022 " + p.bullet + " <em>(" + p.context + ")</em>";
          }).join("<br>");
      }
    }

    // Location
    if (containsAny(q, ["where is", "location", "based", "live", "country", "singapore"])) {
      var loc = R.contact.find(function (c) { return c.type === "location"; });
      return "Vivin is based in <strong>" + (loc ? loc.value : "Singapore") + "</strong>.";
    }

    // Full-text search fallback: search all data for keywords
    var searchTerms = q.replace(/\b(what|who|where|when|how|does|did|do|is|are|was|were|has|have|had|the|a|an|in|at|of|for|to|and|or|he|his|him|vivin|tell|me|about|can|you)\b/g, "").trim();
    if (searchTerms.length > 2) {
      var results = searchAllData(searchTerms);
      if (results.length > 0) {
        var grouped = {};
        results.forEach(function (r) {
          if (!grouped[r.type]) grouped[r.type] = [];
          grouped[r.type].push(r);
        });
        var resp = "Here's what I found:<br><br>";
        Object.keys(grouped).forEach(function (type) {
          resp += "<strong>" + type.charAt(0).toUpperCase() + type.slice(1) + ":</strong><br>";
          grouped[type].slice(0, 3).forEach(function (r) {
            resp += "\u2022 " + r.text;
            if (r.context) resp += " <em>(" + r.context + ")</em>";
            resp += "<br>";
          });
          resp += "<br>";
        });
        return resp;
      }
    }

    // Fallback
    return "I couldn't find a specific answer for that. Try asking something like:<br><br>" +
      "\u2022 \"What did Vivin do at Standard Chartered?\"<br>" +
      "\u2022 \"Does he have AWS certification?\"<br>" +
      "\u2022 \"How many years of experience?\"<br>" +
      "\u2022 \"What blogs has he written?\"<br>" +
      "\u2022 \"Where did he work in 2017?\"<br>" +
      "\u2022 \"Tell me about his education\"";
  }
})();
