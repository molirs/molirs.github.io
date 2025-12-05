const btn = document.getElementById('langBtn');
const flagEs = document.getElementById('flag-es');
const flagEn = document.getElementById('flag-en');
let current = localStorage.getItem('lang') || 'es';

function switchLang() {
  current = current === 'es' ? 'en' : 'es';
  localStorage.setItem('lang', current);
  applyLang();
}

function applyLang() {
  // nav links
  document.getElementById('nav-es').hidden = current !== 'es';
  document.getElementById('nav-en').hidden = current !== 'en';
  // sections (hero, about, etc.) – add same logic to your other bilingual blocks
  document.querySelectorAll('.lang-content.es').forEach(el => el.hidden = current !== 'es');
  document.querySelectorAll('.lang-content.en').forEach(el => el.hidden = current !== 'en');
  // flag switch
  flagEs.hidden = current == 'es';
  flagEn.hidden = current == 'en';
  // text on the button
  btn.textContent = current === 'es' ? 'EN' : 'ES';
}

btn.addEventListener('click', switchLang);
applyLang();