/**
 * portfolio — script.js
 * Roel Andre S. Magbitang
 *
 * Handles:
 *  1. Navbar scroll state
 *  2. Mobile drawer (open / close / focus-trap / keyboard)
 *  3. Scroll-spy (active nav link)
 *  4. Scroll-in reveal animations (IntersectionObserver)
 *  5. Contact form mailto fallback
 *  6. Smooth-scroll polyfill for anchor links
 */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────────
     1. DOM REFERENCES
  ────────────────────────────────────────────────────────────── */
  const navbar         = document.getElementById('navbar');
  const menuBtn        = document.getElementById('menu-btn');
  const drawer         = document.getElementById('mobile-drawer');
  const drawerClose    = document.getElementById('drawer-close');
  const drawerOverlay  = document.getElementById('drawer-overlay');
  const drawerLinks    = drawer.querySelectorAll('.drawer__link');
  const desktopLinks   = document.querySelectorAll('.nav-link');
  const revealEls      = document.querySelectorAll('.reveal');
  const sections       = document.querySelectorAll('section[id]');
  const contactForm    = document.getElementById('contact-form');
  const allAnchors     = document.querySelectorAll('a[href^="#"]');

  /* ──────────────────────────────────────────────────────────────
     2. NAVBAR SCROLL STATE
     Adds `.scrolled` class after 80 px to enable backdrop blur.
  ────────────────────────────────────────────────────────────── */
  const SCROLL_THRESHOLD = 80;

  function updateNavbar() {
    navbar.classList.toggle('scrolled', window.scrollY > SCROLL_THRESHOLD);
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar(); // initial state on load

  /* ──────────────────────────────────────────────────────────────
     3. MOBILE DRAWER
  ────────────────────────────────────────────────────────────── */
  let previouslyFocused = null;

  /** Collect all keyboard-focusable elements inside the drawer. */
  function getFocusableEls() {
    return Array.from(
      drawer.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
      )
    );
  }

  function openDrawer() {
    previouslyFocused = document.activeElement;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    // Focus the close button once the CSS transition begins
    requestAnimationFrame(() => drawerClose.focus());
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (previouslyFocused) previouslyFocused.focus();
  }

  menuBtn.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  drawerOverlay.addEventListener('click', closeDrawer);

  // Close on any drawer nav-link click
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // Keyboard: Escape & focus trap
  drawer.addEventListener('keydown', function handleDrawerKeydown(e) {
    if (!drawer.classList.contains('is-open')) return;

    if (e.key === 'Escape') {
      closeDrawer();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = getFocusableEls();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last  = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ──────────────────────────────────────────────────────────────
     4. SCROLL-SPY
     Uses IntersectionObserver to highlight the matching desktop
     nav link when a section is in view.
  ────────────────────────────────────────────────────────────── */
  const setActiveLink = (sectionId) => {
    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${sectionId}`);
    });
  };

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      // Top margin removes the navbar height; bottom margin biases
      // activation to the upper portion of the viewport.
      rootMargin: `-${navbar.offsetHeight}px 0px -55% 0px`,
      threshold: 0,
    }
  );

  sections.forEach(sec => spyObserver.observe(sec));

  /* ──────────────────────────────────────────────────────────────
     5. SCROLL-IN REVEAL ANIMATIONS
     Elements with class `.reveal` fade up into view once.
     respects prefers-reduced-motion via CSS — JS still runs but
     CSS will suppress the transition.
  ────────────────────────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target); // animate once only
        }
      });
    },
    {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.06,
    }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  /* ──────────────────────────────────────────────────────────────
     6. SMOOTH-SCROLL POLYFILL
     CSS `scroll-behavior: smooth` handles modern browsers.
     This JS fallback ensures exact offset accounting for the
     sticky navbar height, and handles browsers that ignore CSS
     smooth-scroll on programmatic scrolls.
  ────────────────────────────────────────────────────────────── */
  allAnchors.forEach(anchor => {
    anchor.addEventListener('click', function handleAnchorClick(e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = navbar.offsetHeight;
      const top    = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ──────────────────────────────────────────────────────────────
     7. CONTACT FORM — mailto fallback
     Composes a mailto: URI from form values. Until a backend
     is configured, this opens the user's mail client.
  ────────────────────────────────────────────────────────────── */
  if (contactForm) {
    contactForm.addEventListener('submit', function handleFormSubmit(e) {
      e.preventDefault();

      const name    = document.getElementById('form-name').value.trim();
      const email   = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        // Simple native validation feedback
        contactForm.reportValidity();
        return;
      }

      const recipientEmail = 'roel_magbitang@dlsu.edu.ph';
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body    = encodeURIComponent(
        `Name:    ${name}\nEmail:   ${email}\n\n${message}`
      );

      window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    });
  }

  /* ──────────────────────────────────────────────────────────────
     8. LIGHT / DARK THEME TOGGLE
     Persists preference in localStorage under 'theme'.
     Applies 'data-theme="light"' on <html> for light mode.
  ────────────────────────────────────────────────────────────── */
  const STORAGE_KEY   = 'theme';
  const htmlEl        = document.documentElement;
  const toggleBtn     = document.getElementById('theme-toggle-btn');
  const drawerToggle  = document.getElementById('drawer-theme-toggle');
  const drawerLabel   = document.getElementById('drawer-theme-label');

  /** Apply the theme and sync all button states */
  function applyTheme(theme) {
    if (theme === 'light') {
      htmlEl.setAttribute('data-theme', 'light');
      if (toggleBtn)    toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
      if (drawerLabel)  drawerLabel.textContent = 'Switch to Dark Mode';
    } else {
      htmlEl.removeAttribute('data-theme');
      if (toggleBtn)    toggleBtn.setAttribute('aria-label', 'Switch to light mode');
      if (drawerLabel)  drawerLabel.textContent = 'Switch to Light Mode';
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function toggleTheme() {
    const current = htmlEl.getAttribute('data-theme');
    applyTheme(current === 'light' ? 'dark' : 'light');
  }

  // Load saved preference on page load
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme) {
    applyTheme(savedTheme);
  }

  if (toggleBtn)   toggleBtn.addEventListener('click', toggleTheme);
  if (drawerToggle) drawerToggle.addEventListener('click', toggleTheme);

})();

