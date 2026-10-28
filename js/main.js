
const $ = id => document.getElementById(id);
const L = CONFIG.links;
const icons = {
  github:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.200a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.200v3.200c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.4 20.400h-3.600v-5.600c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.900v5.700H9.400V9h3.400v1.600c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.500v6.100zM5.3 7.400a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.200zM7.1 20.400H3.600V9h3.500v11.400zM22.2 0H1.800C.8 0 0 .8 0 1.700v20.600c0 .9.8 1.7 1.8 1.700h20.400c1 0 1.8-.8 1.8-1.700V1.700C24 .8 23.2 0 22.2 0z"/></svg>',
  email:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5h20v14H2V5zm2 2v.5l8 5 8-5V7H4zm16 3-8 5-8-5v7h16v-7z"/></svg>'
};
icons.pin = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>';
icons.mail2 = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="1"/><path d="m3 6 9 7 9-7"/></svg>';
icons.code = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/><path d="M9.5 18.5h5M10.5 21h3"/></svg>';
icons.tech = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="M8.5 14 7 22l5-3 5 3-1.5-8"/></svg>';
icons.method = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/><circle cx="17" cy="9" r="2.8"/><path d="M17 14c2.8 0 4.8 1.8 4.8 4.5"/></svg>';
icons.linkedinBig = icons.linkedin.replace('<svg','<svg class="ico fill"');
function buttons(){
  return `<a class="btn" href="#about">More About Me</a>`
       + `<a class="btn primary" href="#contact">Hire Me</a>`;
}

document.title = CONFIG.name;
$('role').innerHTML = CONFIG.role;
$('lede').innerHTML = CONFIG.lede;
$('heroBtns').innerHTML = buttons();
$('aboutText').innerHTML = CONFIG.about.map(p => `<p>${p}</p>`).join('');

// Photo: shown only if CONFIG.photo is set and the file exists
const ph = $('photo');
if (CONFIG.photo) { ph.onload = () => { ph.hidden = false; }; ph.onerror = () => ph.remove(); ph.alt = "Portrait of " + CONFIG.name; ph.src = CONFIG.photo; }
else ph.remove();

const briefcase = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 3h6a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v4H3V7a1 1 0 0 1 1-1h4V4a1 1 0 0 1 1-1zm1 2v1h4V5h-4z"/><path d="M3 12h7v1.5h4V12h7v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7z"/></svg>';
$('expList').innerHTML = CONFIG.experience.map(j => `
  <article class="job">
    <div class="left">
      <h3>${j.role}</h3>
      <div class="when">${j.dates}</div>
    </div>
    <div class="dot">${briefcase}</div>
    <div class="body">
      <h4 class="org">${j.org}</h4>
      <ul class="pts">${j.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
  </article>`).join('');

// ---------- Projects carousel ----------
const projEl = $('projList');
let perPage = 0, page = 0;
const perPageFor = w => w >= 900 ? 3 : (w >= 600 ? 2 : 1);
function projCard(p){
  const open = p.link ? `<a href="${p.link}" target="_blank" rel="noopener"` : '';
  const icon = p.link ? `${open} class="picon" aria-label="Open ${p.name}"><i class="${p.icon}" aria-hidden="true"></i></a>` : `<span class="picon"><i class="${p.icon}" aria-hidden="true"></i></span>`;
  const title = p.link ? `${open}>${p.name}</a>` : p.name;
  return `<article class="pcard">${icon}<h3>${title}</h3><p>${p.text}</p></article>`;
}
function buildProjects(){
  const total = Math.ceil(CONFIG.projects.length / perPage);
  page = Math.max(0, Math.min(page, total - 1));
  let pages = '';
  for (let i = 0; i < total; i++) {
    const items = CONFIG.projects.slice(i * perPage, (i + 1) * perPage).map(projCard).join('');
    pages += `<div class="ppage" style="--pp:${perPage}">${items}</div>`;
  }
  const dots = total > 1
    ? `<div class="pdots">${Array.from({length: total}, (_, i) => `<button type="button" aria-label="Show projects page ${i + 1}" data-i="${i}"></button>`).join('')}</div>`
    : '';
  projEl.innerHTML = `<div class="pview"><div class="ptrack">${pages}</div></div>${dots}`;
  projEl.querySelectorAll('.pdots button').forEach(b => b.onclick = () => goPage(+b.dataset.i));
  goPage(page);
}
function goPage(i){
  page = i;
  projEl.querySelector('.ptrack').style.transform = `translateX(-${i * 100}%)`;
  projEl.querySelectorAll('.ppage').forEach((el, k) => { el.inert = k !== i; });
  projEl.querySelectorAll('.pdots button').forEach((b, k) => { b.classList.toggle('on', k === i); if (k === i) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
}
function initProjects(){
  const n = perPageFor(window.innerWidth);
  if (n === perPage) return;
  const firstItem = perPage ? page * perPage : 0;   // keep the same first project in view when resizing
  perPage = n; page = Math.floor(firstItem / n);
  buildProjects();
}
initProjects();
window.addEventListener('resize', initProjects);
let sx = null;
projEl.addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, {passive:true});
projEl.addEventListener('touchend', e => {
  if (sx === null) return;
  const dx = e.changedTouches[0].clientX - sx; sx = null;
  const total = Math.ceil(CONFIG.projects.length / perPage);
  if (Math.abs(dx) > 50) goPage(Math.max(0, Math.min(total - 1, page + (dx < 0 ? 1 : -1))));
});

$('toolGrid').innerHTML = CONFIG.skills.map(t => `
  <div class="tool">${icons[t.type]}<h3>${t.name}</h3><span class="label">${t.level}</span></div>`).join('');

$('contactGrid').innerHTML = [
  [icons.pin, 'Where to find me', CONFIG.location],
  [icons.mail2, 'Email me at', `<a href="mailto:${L.email}">${L.email}</a>`],
  [icons.linkedinBig, 'Message me on', `<a href="${L.linkedin}" target="_blank" rel="noopener">LinkedIn</a>`]
].map(c => `<div>${c[0]}<span class="label">${c[1]}</span>${c[2]}</div>`).join('');

$('foot').textContent = `© 2026 ${CONFIG.name}. All Rights Reserved.`;

// Highlight the top-bar link of the section you are in
const navLinks = [...document.querySelectorAll('.topbar nav a')];
function spy(){
  const bar = document.querySelector('.topbar').offsetHeight;
  const line = bar + window.innerHeight * 0.3;
  let current = null;
  navLinks.forEach(a => { const s = document.querySelector(a.getAttribute('href')); if (s && s.getBoundingClientRect().top <= line) current = a; });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = navLinks[navLinks.length - 1];
  navLinks.forEach(a => a.classList.toggle('active', a === current));
}
window.addEventListener('scroll', spy, {passive:true});
window.addEventListener('resize', spy);
spy();
