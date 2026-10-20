const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => { const expanded = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!expanded)); nav.classList.toggle('open', !expanded); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const endpoint = window.MEMORY_FACTORY_CONFIG?.formspreeEndpoint?.trim();
  if (!endpoint || !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) { status.textContent = 'Contact form is not connected yet. Please call 305.668.1801 to reach us.'; status.className = 'form-status error'; return; }
  const button = form.querySelector('button[type="submit"]'); button.disabled = true; button.textContent = 'Sending…'; status.textContent = '';
  try {
    const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
    if (!response.ok) throw new Error('Submission failed');
    form.reset(); status.textContent = 'Thanks! Your message was sent successfully.'; status.className = 'form-status success';
  } catch (error) { status.textContent = 'We could not send your message. Please try again or call us.'; status.className = 'form-status error'; }
  finally { button.disabled = false; button.textContent = 'Send Message ↗'; }
});
