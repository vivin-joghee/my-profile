/* ── Render resume from RESUME object in data.js ── */

(function () {
  var R = RESUME;

  /* ── ABOUT / CONTACT LINE ── */
  var contactParts = [];
  var socialContainer = document.getElementById("social-icons");

  R.contact.forEach(function (c) {
    if (c.type === "location") {
      contactParts.push(c.value);
    } else if (c.type === "phone") {
      contactParts.push(c.value);
    } else if (c.type === "email") {
      contactParts.push('<a href="mailto:' + c.value + '">' + c.value + "</a>");
    }

    // Social icons
    var iconMap = {
      linkedin: "fab fa-linkedin-in",
      github: "fab fa-github",
      email: "fas fa-envelope",
    };
    if (iconMap[c.type] && c.type !== "email") {
      var a = document.createElement("a");
      a.className = "social-icon";
      a.href = c.url || "#";
      a.target = "_blank";
      a.rel = "noopener";
      a.innerHTML = '<i class="' + iconMap[c.type] + '"></i>';
      socialContainer.appendChild(a);
    }
    if (c.type === "email") {
      var a2 = document.createElement("a");
      a2.className = "social-icon";
      a2.href = "mailto:" + c.value;
      a2.innerHTML = '<i class="fas fa-envelope"></i>';
      socialContainer.appendChild(a2);
    }
  });

  document.getElementById("contact-line").innerHTML = contactParts.join(" &middot; ");

  /* ── OBJECTIVE ── */
  document.getElementById("objective").textContent = R.objective;

  /* ── EXPERIENCE ── */
  var expContainer = document.getElementById("experience-list");
  R.experience.forEach(function (job) {
    var div = document.createElement("div");
    div.className = "resume-item";
    var content = document.createElement("div");
    content.className = "resume-item-content";
    var h3 = document.createElement("h3");
    h3.textContent = job.role;
    content.appendChild(h3);
    var sub = document.createElement("div");
    sub.className = "item-subtitle";
    sub.textContent = job.company;
    content.appendChild(sub);
    var ul = document.createElement("ul");
    job.bullets.forEach(function (b) {
      var li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });
    content.appendChild(ul);
    var dateDiv = document.createElement("div");
    dateDiv.className = "resume-item-date";
    dateDiv.textContent = job.date;
    div.appendChild(content);
    div.appendChild(dateDiv);
    expContainer.appendChild(div);
  });

  /* ── EDUCATION ── */
  var eduContainer = document.getElementById("education-list");
  R.education.forEach(function (e) {
    var div = document.createElement("div");
    div.className = "resume-item";
    var content = document.createElement("div");
    content.className = "resume-item-content";
    var h3 = document.createElement("h3");
    h3.textContent = e.name;
    content.appendChild(h3);
    var sub = document.createElement("div");
    sub.className = "item-subtitle";
    sub.textContent = e.detail;
    content.appendChild(sub);
    div.appendChild(content);
    eduContainer.appendChild(div);
  });

  /* ── SKILLS ── */
  var skillsContainer = document.getElementById("skills-list");
  var skillsDiv = document.createElement("div");
  skillsDiv.className = "skills-category";
  var skillsH3 = document.createElement("h3");
  skillsH3.textContent = "Tools & Technologies";
  skillsDiv.appendChild(skillsH3);
  var tagList = document.createElement("div");
  tagList.className = "skills-list";
  R.skills.forEach(function (s) {
    var span = document.createElement("span");
    span.className = "skill-tag";
    span.textContent = s;
    tagList.appendChild(span);
  });
  skillsDiv.appendChild(tagList);
  skillsContainer.appendChild(skillsDiv);

  /* ── CERTIFICATIONS ── */
  var certContainer = document.getElementById("certifications-list");
  R.certifications.forEach(function (c) {
    var li = document.createElement("li");
    var nameHtml = c.url
      ? '<a href="' + c.url + '" target="_blank" rel="noopener" title="Verify credential"><strong>' + c.name + '</strong> <i class="fas fa-external-link-alt" style="font-size:0.75em"></i></a>'
      : '<strong>' + c.name + '</strong>';
    li.innerHTML =
      '<span class="fa-li"><i class="fas fa-certificate"></i></span>' +
      nameHtml + " &mdash; " + c.detail;
    certContainer.appendChild(li);
  });

  /* ── AWARDS ── */
  var awardContainer = document.getElementById("awards-list");
  R.awards.forEach(function (a) {
    var li = document.createElement("li");
    li.innerHTML =
      '<span class="fa-li"><i class="fas fa-trophy"></i></span>' +
      "<strong>" + a.name + "</strong> &mdash; " + a.detail;
    awardContainer.appendChild(li);
  });

  /* ── VOLUNTEER ── */
  var volContainer = document.getElementById("volunteer-list");
  R.volunteer.forEach(function (v) {
    var li = document.createElement("li");
    var nameHtml = v.url
      ? '<a href="' + v.url + '" target="_blank" rel="noopener" title="View certificate"><strong>' + v.name + '</strong> <i class="fas fa-external-link-alt" style="font-size:0.75em"></i></a>'
      : '<strong>' + v.name + '</strong>';
    li.innerHTML =
      '<span class="fa-li"><i class="fas fa-hands-helping"></i></span>' +
      nameHtml + " &mdash; " + v.detail;
    volContainer.appendChild(li);
  });

  /* ── FOOTBALL ── */
  var footContainer = document.getElementById("football-list");
  if (R.football && footContainer) {
    R.football.forEach(function (f) {
      var li = document.createElement("li");
      var nameHtml = f.url
        ? '<a href="' + f.url + '" target="_blank" rel="noopener" title="View certificate"><strong>' + f.name + '</strong> <i class="fas fa-external-link-alt" style="font-size:0.75em"></i></a>'
        : '<strong>' + f.name + '</strong>';
      li.innerHTML =
        '<span class="fa-li"><i class="fas fa-futbol"></i></span>' +
        nameHtml + " &mdash; " + f.detail;
      footContainer.appendChild(li);
    });
  }

  /* ── BOOKS ── */
  var bookContainer = document.getElementById("books-list");
  R.books.forEach(function (b) {
    var li = document.createElement("li");
    var titleHtml = b.link
      ? '<a href="' + b.link + '" target="_blank" rel="noopener"><strong>' + b.title + '</strong> <i class="fas fa-external-link-alt" style="font-size:0.75em"></i></a>'
      : '<strong>' + b.title + '</strong>';
    li.innerHTML =
      '<span class="fa-li"><i class="fas fa-book"></i></span>' +
      titleHtml + " &mdash; " + b.author;
    bookContainer.appendChild(li);
  });

  /* ── BLOGS ── */
  var blogContainer = document.getElementById("blogs-list");
  if (R.blogs && R.blogs.length > 0) {
    R.blogs.forEach(function (b) {
      var div = document.createElement("div");
      div.className = "blog-item";
      var h3 = document.createElement("h3");
      var blogUrl = b.url || ("blog.html?slug=" + (b.slug || ""));
      h3.innerHTML = '<a href="' + blogUrl + '">' + b.title + "</a>";
      div.appendChild(h3);
      if (b.date) {
        var dateP = document.createElement("div");
        dateP.className = "blog-date";
        dateP.textContent = b.date;
        div.appendChild(dateP);
      }
      if (b.intro) {
        var intro = document.createElement("p");
        intro.className = "blog-intro";
        intro.textContent = b.intro;
        div.appendChild(intro);
      }
      blogContainer.appendChild(div);
    });
  } else {
    var placeholder = document.createElement("p");
    placeholder.className = "blog-placeholder";
    placeholder.textContent = "Coming soon...";
    blogContainer.appendChild(placeholder);
  }

  /* ── SIDEBAR NAV — scroll spy & mobile toggle ── */
  var sections = document.querySelectorAll(".resume-section");
  var navLinks = document.querySelectorAll(".nav-link");

  // Scroll spy
  window.addEventListener("scroll", function () {
    var scrollPos = window.scrollY + 100;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
        navLinks.forEach(function (l) { l.classList.remove("active"); });
        var active = document.querySelector('.nav-link[href="#' + sec.id + '"]');
        if (active) active.classList.add("active");
      }
    });
  });

  // Mobile toggle
  var toggle = document.getElementById("navToggle");
  var sidebar = document.getElementById("sidebar");
  toggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });

  // Close sidebar on link click (mobile)
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      sidebar.classList.remove("open");
    });
  });
})();
