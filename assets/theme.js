/* ===== THEME TOGGLE ===== */
(function() {
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = localStorage.getItem('poltevskaya-theme');

  if (!theme) {
    theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  root.setAttribute('data-theme', theme);

  function updateIcons() {
    const icon = theme === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    toggles.forEach(function(t) {
      t.innerHTML = icon;
      t.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    });
  }
  updateIcons();

  toggles.forEach(function(t) {
    t.addEventListener('click', function() {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      localStorage.setItem('poltevskaya-theme', theme);
      updateIcons();
    });
  });
})();

/* ===== MOBILE MENU ===== */
(function() {
  var btn = document.querySelector('.mobile-menu-btn');
  var mobileNav = document.querySelector('.mobile-nav');
  if (!btn || !mobileNav) return;

  btn.addEventListener('click', function() {
    var isOpen = mobileNav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileNav.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileNav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
})();

/* ===== SCROLL REVEAL ===== */
(function() {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(function(el) { observer.observe(el); });
})();

/* Lightbox removed — gallery items now link directly to product pages */

/* ===== PRODUCT IMAGE THUMBS ===== */
(function() {
  var thumbs = document.querySelectorAll('.product-thumb');
  if (!thumbs.length) return;

  var mainImg = document.getElementById('product-main-img');
  if (!mainImg) return;

  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      thumbs.forEach(function(t) { t.classList.remove('active'); });
      thumb.classList.add('active');
      mainImg.src = thumb.getAttribute('data-src');
      mainImg.alt = thumb.getAttribute('data-alt') || '';
    });
  });
})();

/* ===== HEADER SCROLL BEHAVIOR ===== */
(function() {
  var header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', function() {
    var current = window.scrollY;
    if (current > 100) {
      header.style.borderBottomColor = 'oklch(from var(--color-text) l c h / 0.08)';
    } else {
      header.style.borderBottomColor = 'oklch(from var(--color-text) l c h / 0.06)';
    }
  }, { passive: true });
})();
