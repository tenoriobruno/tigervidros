const header = document.querySelector('header');
const nav = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 80);
});

hamburger.addEventListener('click', () => nav.classList.toggle('open'));

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
