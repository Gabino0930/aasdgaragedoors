script.js

// Menú móvil
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// CAMBIO DE IDIOMA
function toggleLang() {
  const btn = document.getElementById('lang-btn');
  const isES = btn.textContent === 'ES';
  const newLang = isES ? 'en' : 'es';
  btn.textContent = isES ? 'EN' : 'ES';

  // Actualiza todos los elementos con data-en / data-es
  document.querySelectorAll('[data-en][data-es]').forEach(el => {
    el.textContent = el.getAttribute('data-' + newLang);
  });
}
