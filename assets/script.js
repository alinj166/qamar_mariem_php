(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  // Reveal-on-scroll; gracefully show all content when IntersectionObserver is unavailable.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealItems.forEach(el => observer.observe(el));
  } else revealItems.forEach(el => el.classList.add('visible'));

  // French / Arabic language switch. Form field placeholders remain French for clarity.
  const langToggle = document.getElementById('langToggle');
  let currentLang = 'fr';
  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.body.classList.toggle('rtl', lang === 'ar');
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-fr][data-ar]').forEach(el => {
      const value = el.dataset[lang];
      if (value !== undefined) el.innerHTML = value;
    });
    if (langToggle) langToggle.textContent = lang === 'fr' ? 'عربي' : 'FR';
  }
  if (langToggle) langToggle.addEventListener('click', () => setLanguage(currentLang === 'fr' ? 'ar' : 'fr'));

  // Three-step quote form: client-side validation plus server-side validation in PHP.
  const form = document.getElementById('quoteForm');
  if (!form) return;
  const steps = [...form.querySelectorAll('.form-step')];
  const next = document.getElementById('nextStep');
  const prev = document.getElementById('prevStep');
  const submit = document.getElementById('submitQuote');
  const stepNumber = document.getElementById('stepNumber');
  const progress = document.getElementById('progressBar');
  const error = document.getElementById('formError');
  let activeStep = 0;

  function showStep(index) {
    activeStep = index;
    steps.forEach((step, i) => step.classList.toggle('active', i === index));
    stepNumber.textContent = String(index + 1).padStart(2, '0');
    progress.style.width = `${((index + 1) / steps.length) * 100}%`;
    prev.hidden = index === 0;
    next.hidden = index === steps.length - 1;
    submit.hidden = index !== steps.length - 1;
    error.textContent = '';
  }
  function validateStep() {
    const fields = [...steps[activeStep].querySelectorAll('input[required], select[required], textarea[required]')];
    for (const field of fields) {
      if (!field.checkValidity() || !field.value.trim()) {
        field.reportValidity();
        field.focus();
        return false;
      }
    }
    if (activeStep === 1) {
      const phone = document.getElementById('phone');
      if (phone.value.trim().length < 6) {
        error.textContent = 'Veuillez saisir un numéro de téléphone valide.';
        phone.focus(); return false;
      }
      const email = document.getElementById('email');
      if (email.value && !email.checkValidity()) {
        error.textContent = 'Veuillez vérifier votre adresse e-mail.';
        email.focus(); return false;
      }
    }
    if (activeStep === 2 && !document.getElementById('privacy').checked) {
      error.textContent = 'Veuillez accepter l’utilisation de vos informations pour traiter la demande.';
      document.getElementById('privacy').focus(); return false;
    }
    return true;
  }
  next.addEventListener('click', () => { if (validateStep()) showStep(Math.min(activeStep + 1, steps.length - 1)); });
  prev.addEventListener('click', () => showStep(Math.max(activeStep - 1, 0)));
  form.addEventListener('submit', event => {
    if (!validateStep()) { event.preventDefault(); }
  });
  showStep(0);

  // Keep FAQ plus indicators in sync with open/closed state.
  document.querySelectorAll('.faq-list details').forEach(detail => {
    detail.addEventListener('toggle', () => {
      const icon = detail.querySelector('summary span');
      if (icon) icon.textContent = detail.open ? '−' : '+';
    });
  });
})();
