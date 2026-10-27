/**
 * AI InfraNext | Malaysia 2027 — Client Script
 * Sticky navigation, interactive components, accordions, count-up & local routing helper.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Local Protocol & Clean Link Resolution Helper
  // Allows testing either directly in file explorer (file://) or over localhost/web server
  const isFileProtocol = window.location.protocol === 'file:';
  if (isFileProtocol) {
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      const originalHref = link.getAttribute('href');
      if (originalHref === '/') {
        link.setAttribute('href', 'index.html');
      } else if (!originalHref.includes('#') && !originalHref.includes('.')) {
        link.setAttribute('href', originalHref.replace(/^\//, '') + '.html');
      } else if (originalHref.startsWith('/')) {
        link.setAttribute('href', originalHref.replace(/^\//, ''));
      }
    });
  }

  // 2. Sticky Header Condensation
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        header.classList.add('condensed');
      } else {
        header.classList.remove('condensed');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  // 4. Dropdown Toggle for Mobile / Touch
  const dropdownToggle = document.querySelector('.nav-dropdown-btn');
  const dropdownParent = document.querySelector('.nav-dropdown');
  if (dropdownToggle && dropdownParent) {
    dropdownToggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dropdownParent.classList.toggle('open');
      }
    });
  }

  // 5. C1 Stat Row Count-Up Animation (runs once on scroll)
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statNumbers.forEach(stat => {
            const rawText = stat.textContent.trim();
            const numericMatch = rawText.match(/^([0-9,.]+)(.*)$/);
            if (numericMatch) {
              const targetVal = parseFloat(numericMatch[1].replace(/,/g, ''));
              const suffix = numericMatch[2];
              let currentVal = 0;
              const duration = 1200;
              const startTime = performance.now();

              const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                // easeOutQuad
                const eased = progress * (2 - progress);
                const current = Math.floor(eased * targetVal);
                stat.textContent = current.toLocaleString() + suffix;
                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                } else {
                  stat.textContent = rawText;
                }
              };
              requestAnimationFrame(updateCount);
            }
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    const statContainer = document.querySelector('.stat-grid') || statNumbers[0];
    observer.observe(statContainer);
  }

  // 6. C3 Expandable Pillar Cards
  const pillarHeaders = document.querySelectorAll('.pillar-header');
  pillarHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.pillar-card');
      const isOpen = card.classList.contains('open');
      // Optional accordion behavior: close others in same grid
      const siblings = card.parentElement.querySelectorAll('.pillar-card');
      siblings.forEach(s => s.classList.remove('open'));
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });

  // 7. Find Your Row Accordion (LP1 S4)
  const findRowBtns = document.querySelectorAll('.find-row-btn');
  findRowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.find-row-item');
      item.classList.toggle('open');
    });
  });

  // 8. FAQ Accordion (Home S13)
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // 9. Standard Form Handler
  document.querySelectorAll('form.ajax-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';

      setTimeout(() => {
        form.innerHTML = `
          <div style="background:#EAF6F0;border:1px solid #1F6B45;border-radius:6px;padding:24px;text-align:center;color:#1F6B45;">
            <div style="font-family:var(--mono);font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Submission Received</div>
            <h3 style="color:#1F6B45;font-size:19px;margin-bottom:8px;">Thank you for your submission</h3>
            <p style="color:#1F6B45;font-size:14px;margin:0;">Your enquiry has been securely logged. Our team will review your details and follow up within the specified timeframe.</p>
          </div>
        `;
      }, 700);
    });
  });

  // 10. Scroll Up CTA
  const scrollUpBtn = document.createElement('button');
  scrollUpBtn.className = 'scroll-up-cta';
  scrollUpBtn.setAttribute('type', 'button');
  scrollUpBtn.setAttribute('aria-label', 'Scroll to top of page');
  scrollUpBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  `;
  document.body.appendChild(scrollUpBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollUpBtn.classList.add('visible');
    } else {
      scrollUpBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
