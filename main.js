// ============================================================
// MAROUANE BENAISSA — Portfolio interactions
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Loader ----
  var loader = document.getElementById('loader');
  window.setTimeout(function () {
    if (loader) loader.classList.add('hide');
  }, 900);

  // ---- Year ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Header on scroll ----
  var header = document.getElementById('site-header');
  var backTop = document.getElementById('back-to-top');
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('scrolled', y > 40);
    if (backTop) backTop.classList.toggle('show', y > 500);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Mobile menu ----
  var menuToggle = document.getElementById('menu-toggle');
  var mainNav = document.getElementById('main-nav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      var open = mainNav.classList.toggle('open');
      menuToggle.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a[data-nav]').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Reveal on scroll ----
  var revealTargets = document.querySelectorAll('.reveal, .fade-up, .section-head, .about-grid, .skill-item, .case-study, .poster-gallery .placeholder-box, .social-card, .branding-grid .placeholder-box, .photo-gallery .placeholder-box, .video-card, .process-line li, .timeline-item');

  revealTargets.forEach(function (el) {
    if (!el.classList.contains('reveal') && !el.classList.contains('fade-up')) {
      el.classList.add('fade-up');
    }
  });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(function (el) { observer.observe(el); });

    // Hero reveals immediately with slight stagger
    document.querySelectorAll('#cover .reveal').forEach(function (el, i) {
      window.setTimeout(function () { el.classList.add('in'); }, 300 + i * 140);
    });
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in'); });
  }

  // ---- Placeholder boxes: click to hint upload ----
  document.querySelectorAll('.placeholder-box').forEach(function (box) {
    box.addEventListener('click', function () {
      var label = box.getAttribute('data-label') || 'Ajouter un visuel';
      box.setAttribute('title', label + ' — envoyez votre image pour la remplacer ici.');
    });
  });

});
