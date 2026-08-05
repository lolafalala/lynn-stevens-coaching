// Lynn Stevens Coaching — vanilla JS, no dependencies

(function () {
  'use strict';

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');

  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu after tapping a link (mobile)
    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form — progressive enhancement over Netlify Forms.
  // Without JS this still POSTs natively and Netlify handles it.
  // With JS, we submit via fetch and show an inline status message.
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  function encodeForm(data) {
    return Object.keys(data)
      .map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
      })
      .join('&');
  }

  if (form && status) {
    form.addEventListener('submit', function (event) {
      // Honeypot check
      var honeypot = form.querySelector('#company');
      if (honeypot && honeypot.value) {
        // Silently drop likely bot submissions.
        event.preventDefault();
        return;
      }

      event.preventDefault();

      var data = {};
      new FormData(form).forEach(function (value, key) {
        data[key] = value;
      });

      status.textContent = 'Sending...';
      status.className = 'form-status';

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(data)
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            status.textContent = "Got it — I'll be in touch soon.";
            status.className = 'form-status success';
          } else {
            throw new Error('Network response was not ok');
          }
        })
        .catch(function () {
          status.textContent =
            "Something went wrong. Please email bizcoachlynn@gmail.com directly.";
          status.className = 'form-status error';
        });
    });
  }
})();
