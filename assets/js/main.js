const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

const projects = document.getElementById('project-grid');
const prev = document.getElementById('project-prev');
const next = document.getElementById('project-next');
if (projects && prev && next) {
  const cards = Array.from(projects.children);
  let index = 0;
  function updateProjects() {
    if (window.innerWidth <= 760) {
      cards.forEach((card, i) => card.style.display = i === index ? 'block' : 'none');
    } else {
      cards.forEach(card => card.style.display = 'block');
      if (index === 0) projects.prepend(cards[0]);
    }
  }
  prev.addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length;
    if (window.innerWidth <= 760) updateProjects();
    else projects.prepend(cards[index]);
  });
  next.addEventListener('click', () => {
    index = (index + 1) % cards.length;
    if (window.innerWidth <= 760) updateProjects();
    else projects.append(cards[index]);
  });
  window.addEventListener('resize', updateProjects);
  updateProjects();
}


// Subtle scroll reveal animations; disabled when reduced motion is requested.
(() => {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  elements.forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i % 3, 2) * 75}ms`;
    observer.observe(el);
  });
})();
