/* ── Render resume from RESUME object in data.js ── */

(function () {
  var R = RESUME;

  /* ── HERO ── */
  var nameParts = R.name.split(' ');
  document.getElementById('hero-name').innerHTML =
    nameParts[0] + ' <span class="accent-text">' + nameParts.slice(1).join(' ') + '</span>';
  document.getElementById('hero-title').textContent = R.title;

  /* ── HERO SOCIAL ── */
  var heroSocial = document.getElementById('hero-social');
  var iconMap = {
    linkedin: 'fab fa-linkedin-in',
    github: 'fab fa-github',
    email: 'fas fa-envelope',
  };

  R.contact.forEach(function (c) {
    if (!iconMap[c.type]) return;
    var a = document.createElement('a');
    a.className = 'social-icon';
    a.target = '_blank';
    a.rel = 'noopener';
    if (c.type === 'email') {
      a.href = 'mailto:' + c.value;
    } else {
      a.href = c.url || '#';
    }
    a.innerHTML = '<i class="' + iconMap[c.type] + '"></i>';
    heroSocial.appendChild(a);
  });

  /* ── ABOUT — OBJECTIVE ── */
  var objEl = document.getElementById('objective');
  R.objective.split('\n').forEach(function (para, i) {
    if (i > 0) {
      objEl.appendChild(document.createElement('br'));
      objEl.appendChild(document.createElement('br'));
    }
    objEl.appendChild(document.createTextNode(para));
  });

  /* ── ABOUT — MEMBERSHIPS ── */
  if (R.memberships && R.memberships.length > 0) {
    var memContainer = document.getElementById('memberships-list');
    R.memberships.forEach(function (m) {
      var tag = document.createElement('span');
      tag.className = 'membership-tag';
      tag.textContent = m;
      memContainer.appendChild(tag);
    });
  }

  /* ── ABOUT — CONTACT CARDS ── */
  var contactContainer = document.getElementById('contact-cards');
  var contactIcons = {
    email: 'fas fa-envelope',
    phone: 'fas fa-phone',
    linkedin: 'fab fa-linkedin-in',
    github: 'fab fa-github',
    location: 'fas fa-location-dot',
  };

  R.contact.forEach(function (c) {
    var div = document.createElement('div');
    div.className = 'contact-card';
    var icon = contactIcons[c.type] || 'fas fa-circle';
    var valueHtml;
    if (c.type === 'email') {
      valueHtml = '<a href="mailto:' + c.value + '">' + c.value + '</a>';
    } else if (c.url) {
      valueHtml = '<a href="' + c.url + '" target="_blank" rel="noopener">' + c.value + '</a>';
    } else {
      valueHtml = '<span>' + c.value + '</span>';
    }
    div.innerHTML = '<i class="' + icon + '"></i>' + valueHtml;
    contactContainer.appendChild(div);
  });

  /* ── ABOUT — EDUCATION ── */
  var eduContainer = document.getElementById('education-list');
  R.education.forEach(function (e) {
    var div = document.createElement('div');
    div.className = 'edu-card';
    div.innerHTML =
      '<i class="fas fa-graduation-cap"></i>' +
      '<div class="edu-card-content">' +
      '<h4>' + e.name + '</h4>' +
      '<p>' + e.detail + '</p>' +
      '</div>';
    eduContainer.appendChild(div);
  });

  /* ── EXPERIENCE ── */
  var expContainer = document.getElementById('experience-list');
  R.experience.forEach(function (job, i) {
    var card = document.createElement('div');
    card.className = 'exp-card';

    var num = String(i + 1).padStart(2, '0');
    var bulletsHtml = '';
    job.bullets.forEach(function (b) {
      bulletsHtml += '<li>' + b + '</li>';
    });

    card.innerHTML =
      '<div class="exp-header">' +
      '<span class="exp-num">' + num + '</span>' +
      '<div class="exp-info">' +
      '<div class="exp-role">' + job.role + '</div>' +
      '<div class="exp-company">' + job.company + '</div>' +
      '<div class="exp-date"><i class="far fa-calendar"></i> ' + job.date + '</div>' +
      '</div>' +
      '</div>' +
      '<ul class="exp-bullets">' + bulletsHtml + '</ul>';

    expContainer.appendChild(card);
  });

  /* ── SKILLS ── */
  var skillsContainer = document.getElementById('skills-list');
  R.skills.forEach(function (s) {
    var span = document.createElement('span');
    span.className = 'skill-tag';
    span.textContent = s;
    skillsContainer.appendChild(span);
  });

  /* ── AWARDS ── */
  var awardsContainer = document.getElementById('awards-list');
  if (R.awards) {
    R.awards.forEach(function (a) {
      var div = document.createElement('div');
      div.className = 'award-item';
      div.innerHTML =
        '<i class="fas fa-trophy award-icon"></i>' +
        '<span class="award-name">' + a.name + '</span>' +
        '<span class="award-detail">' + a.detail + '</span>';
      awardsContainer.appendChild(div);
    });
  }

  /* ── CERTIFICATIONS ── */
  var certContainer = document.getElementById('certifications-list');
  R.certifications.forEach(function (c) {
    var card = document.createElement('div');
    card.className = 'cert-card';
    var nameHtml = c.url
      ? '<a href="' + c.url + '" target="_blank" rel="noopener">' + c.name + ' <i class="fas fa-external-link-alt" style="font-size:0.7em"></i></a>'
      : c.name;
    card.innerHTML =
      '<i class="fas fa-certificate"></i>' +
      '<div class="cert-card-content">' +
      '<strong>' + nameHtml + '</strong>' +
      '<span>' + c.detail + '</span>' +
      '</div>';
    certContainer.appendChild(card);
  });

  /* ── VOLUNTEER ── */
  var volContainer = document.getElementById('volunteer-list');
  R.volunteer.forEach(function (v) {
    var card = document.createElement('div');
    card.className = 'list-card';
    var nameHtml = v.url
      ? '<a href="' + v.url + '" target="_blank" rel="noopener">' + v.name + ' <i class="fas fa-external-link-alt" style="font-size:0.7em"></i></a>'
      : v.name;
    card.innerHTML =
      '<i class="fas fa-hands-helping"></i>' +
      '<div class="list-card-content">' +
      '<strong>' + nameHtml + '</strong>' +
      '<span>' + v.detail + '</span>' +
      '</div>';
    volContainer.appendChild(card);
  });

  /* ── FOOTBALL ── */
  var footContainer = document.getElementById('football-list');
  if (R.football && footContainer) {
    R.football.forEach(function (f) {
      var card = document.createElement('div');
      card.className = 'list-card';
      var nameHtml = f.url
        ? '<a href="' + f.url + '" target="_blank" rel="noopener">' + f.name + ' <i class="fas fa-external-link-alt" style="font-size:0.7em"></i></a>'
        : f.name;
      card.innerHTML =
        '<i class="fas fa-futbol"></i>' +
        '<div class="list-card-content">' +
        '<strong>' + nameHtml + '</strong>' +
        '<span>' + f.detail + '</span>' +
        '</div>';
      footContainer.appendChild(card);
    });
  }

  /* ── BOOKS ── */
  function renderBooks(list, containerId) {
    var container = document.getElementById(containerId);
    list.forEach(function (b) {
      var card = document.createElement('div');
      card.className = 'book-card';
      var titleHtml = b.link
        ? '<a href="' + b.link + '" target="_blank" rel="noopener">' + b.title + '</a>'
        : b.title;
      card.innerHTML =
        '<i class="fas fa-book"></i>' +
        '<div class="book-card-content">' +
        '<strong>' + titleHtml + '</strong>' +
        '<span>' + b.author + '</span>' +
        '</div>';
      container.appendChild(card);
    });
  }
  renderBooks(R.books2026, 'books-2026-list');
  renderBooks(R.books2025, 'books-2025-list');

  /* ── BLOGS — fetch from CMS, fallback to data.js ── */
  var blogContainer = document.getElementById('blogs-list');
  var CMS_API = 'http://localhost:3000/api/posts';

  function renderBlogCards(blogs) {
    blogContainer.innerHTML = '';
    if (!blogs || blogs.length === 0) {
      blogContainer.innerHTML = '<p style="color:var(--gray);font-style:italic;">Coming soon...</p>';
      return;
    }
    blogs.forEach(function (b) {
      var card = document.createElement('div');
      card.className = 'blog-card';
      var blogUrl = b.cmsId
        ? ('blog.html?id=' + b.cmsId)
        : ('blog.html#' + (b.slug || ''));
      card.innerHTML =
        '<div class="blog-card-date">' + (b.date || '') + '</div>' +
        '<div class="blog-card-title"><a href="' + blogUrl + '">' + b.title + '</a></div>' +
        '<p class="blog-card-intro">' + (b.intro || '') + '</p>' +
        '<a href="' + blogUrl + '" class="blog-card-link">Read more <i class="fas fa-arrow-right"></i></a>';
      blogContainer.appendChild(card);
    });
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    var d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  // Try CMS first, then fallback to data.js
  fetch(CMS_API + '?where[_status][equals]=published&sort=-publishedAt&limit=50&depth=0')
    .then(function (res) {
      if (!res.ok) throw new Error('CMS unavailable');
      return res.json();
    })
    .then(function (data) {
      console.log('[Blog CMS] Fetched', data.totalDocs, 'posts from CMS');
      var cmsPosts = (data.docs || []).map(function (p) {
        return {
          title: p.title,
          slug: p.slug,
          date: formatDate(p.publishedAt),
          intro: p.intro || (p.meta && p.meta.description) || '',
          cmsId: p.id,
        };
      });

      // Merge: CMS posts first, then data.js posts (deduplicated by slug)
      var cmsSlugSet = {};
      cmsPosts.forEach(function (p) { cmsSlugSet[p.slug] = true; });

      var localPosts = (R.blogs || [])
        .filter(function (b) { return !cmsSlugSet[b.slug]; })
        .map(function (b) {
          return { title: b.title, slug: b.slug, date: b.date, intro: b.intro || '' };
        });

      var allPosts = cmsPosts.concat(localPosts);
      allPosts.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
      renderBlogCards(allPosts);
    })
    .catch(function (err) {
      console.log('[Blog CMS] Fetch failed, using data.js fallback:', err.message);
      var localBlogs = (R.blogs || []).slice();
      localBlogs.sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
      var mapped = localBlogs.map(function (b) {
        return { title: b.title, slug: b.slug, date: b.date, intro: b.intro || '' };
      });
      renderBlogCards(mapped);
    });

  /* ── NAVBAR — scroll effect & scroll spy ── */
  var navbar = document.getElementById('navbar');
  var sections = document.querySelectorAll('.section, .hero-section');
  var navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    // Navbar shadow on scroll
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll spy
    var scrollPos = window.scrollY + 150;
    sections.forEach(function (sec) {
      if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
        var id = sec.id;
        navLinks.forEach(function (l) {
          l.classList.remove('active');
          if (l.getAttribute('href') === '#' + id) {
            l.classList.add('active');
          }
        });
      }
    });
  });

  /* ── MOBILE TOGGLE ── */
  var toggle = document.getElementById('navToggle');
  var navLinksContainer = document.getElementById('nav-links');

  toggle.addEventListener('click', function () {
    navLinksContainer.classList.toggle('open');
    // Animate hamburger
    toggle.classList.toggle('active');
  });

  // Close menu on link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinksContainer.classList.remove('open');
      toggle.classList.remove('active');
    });
  });
})();
