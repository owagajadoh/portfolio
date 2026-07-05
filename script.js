// script.js — Portfolio interactivity and animations

document.addEventListener('DOMContentLoaded', function () {
  console.log('🚀 Owaga Jadoh portfolio loaded.');
  initScrollAnimations();
  initHoverEffects();
  initSmoothScroll();
  initScrollToTop();
  initActiveNavigation();
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

// ============ SCROLL TO TOP BUTTON ============
function initScrollToTop() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('show');
    } else {
      scrollToTopBtn.classList.remove('show');
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ============ ACTIVE NAVIGATION LINK ============
function initActiveNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}

// ============ COUNTER ANIMATION ============
function animateCounter(element, target, duration = 2000) {
  let current = 0;
  const increment = target / (duration / 16);
  
  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(counter);
    }
    element.textContent = Math.floor(current);
  }, 16);
}

// ============ PERFORMANCE OPTIMIZATION ============
if ('loading' in HTMLImageElement.prototype) {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  });
}

// ============ CONSOLE GREETING ============
console.log('%c🚀 Welcome to Owaga Jadoh\'s Portfolio', 'color: #8b7bff; font-size: 16px; font-weight: bold;');
console.log('%cAI Engineer & Full-Stack Developer', 'color: #5fe3a3; font-size: 12px;');
console.log('%cLet\'s build something amazing together!', 'color: #f2b84b; font-size: 12px;');
