// script.js — Portfolio interactivity and animations

document.addEventListener('DOMContentLoaded', function () {
  console.log('Owaga Jadoh portfolio loaded.');
  initScrollAnimations();
  initHoverEffects();
  initSmoothScroll();
});

// ============ SCROLL ANIMATIONS ============
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .project-card, .testimonial-card, .pricing-card, .step').forEach((el) => {
    observer.observe(el);
  });
}

// ============ HOVER EFFECTS ============
function initHoverEffects() {
  const cards = document.querySelectorAll('.service-card, .project-card, .testimonial-card, .pricing-card');
  cards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease';
    });
  });
}

// ============ SMOOTH SCROLL ============
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        const target = document.querySelector(href);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ============ FADE-IN ANIMATION (CSS REQUIRED) ============
// Add this to styles.css:
// .fade-in { animation: fadeIn 0.6s ease-in forwards; }
// @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
