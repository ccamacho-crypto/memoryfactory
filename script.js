const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => { const expanded = menuButton.getAttribute('aria-expanded') === 'true'; menuButton.setAttribute('aria-expanded', String(!expanded)); nav.classList.toggle('open', !expanded); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const endpoint = window.MEMORY_FACTORY_CONFIG?.formspreeEndpoint?.trim() || 'https://formspree.io/f/mqpevlgo';
  if (!endpoint || !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) { status.textContent = 'The contact form is temporarily unavailable. Please try again later.'; status.className = 'form-status error'; return; }
  const button = form.querySelector('button[type="submit"]'); button.disabled = true; button.textContent = 'Sending…'; status.textContent = '';
  try {
    const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
    if (!response.ok) throw new Error('Submission failed');
    form.reset(); status.textContent = 'Thank you! Your message has been sent successfully.'; status.className = 'form-status success';
  } catch (error) { status.textContent = 'Your message could not be sent. Please try again.'; status.className = 'form-status error'; }
  finally { button.disabled = false; button.textContent = 'Send Message ↗'; }
});

// Lightweight parallax effect; respects reduced-motion preferences.
(() => {
  const hero = document.querySelector('.hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let pending = false;
  function update() {
    const rect = hero.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < innerHeight) {
      const offset = Math.max(-90, Math.min(90, -rect.top * 0.22));
      hero.style.setProperty('--hero-parallax', `${offset}px`);
    }
    pending = false;
  }
  window.addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(update); } }, {passive:true});
  window.addEventListener('resize', update, {passive:true});
  update();
})();

// Contact background parallax, disabled when reduced motion is preferred.
(() => {
 const section=document.querySelector('.contact');
 if(!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
 let scheduled=false;
 const update=()=>{
  const rect=section.getBoundingClientRect();
  if(rect.bottom>0 && rect.top<innerHeight){
   const centerDelta=(innerHeight/2)-(rect.top+rect.height/2);
   section.style.setProperty('--contact-parallax', `${Math.max(-65,Math.min(65,centerDelta*.13))}px`);
  }
  scheduled=false;
 };
 window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}},{passive:true});
 window.addEventListener('resize',update,{passive:true});
 update();
})();

// Compact floating header while scrolling; no layout overlap.
(() => {
 const header=document.querySelector('.site-header');
 if(!header)return;
 let queued=false;
 const update=()=>{header.classList.toggle('is-scrolled',window.scrollY>110);queued=false};
 window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update)}},{passive:true});
 update();
})();

// Reserve the header's original document space while the fixed header floats.
(() => {
 const header=document.querySelector('.site-header');
 if(!header)return;
 const spacer=document.createElement('div');
 spacer.className='fixed-header-spacer';
 spacer.setAttribute('aria-hidden','true');
 header.insertAdjacentElement('afterend',spacer);
 const measure=()=>{
  const compact=header.classList.contains('is-scrolled');
  header.classList.remove('is-scrolled');
  spacer.style.height=header.getBoundingClientRect().height+'px';
  if(compact)header.classList.add('is-scrolled');
 };
 measure();
 window.addEventListener('load',measure,{once:true});
 window.addEventListener('resize',measure,{passive:true});
})();

// Dropdown navigation in the compact floating header.
(()=>{
 const button=document.querySelector('.scroll-menu-toggle');
 const menu=document.querySelector('#scroll-nav');
 if(!button||!menu)return;
 const close=()=>{menu.classList.remove('open');button.setAttribute('aria-expanded','false')};
 button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';menu.classList.toggle('open',open);button.setAttribute('aria-expanded',String(open))});
 menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',close));
 document.addEventListener('click',event=>{if(!button.contains(event.target)&&!menu.contains(event.target))close()});
 document.addEventListener('keydown',event=>{if(event.key==='Escape')close()});
 window.addEventListener('scroll',()=>{if(!document.querySelector('.site-header')?.classList.contains('is-scrolled'))close()},{passive:true});
})();
