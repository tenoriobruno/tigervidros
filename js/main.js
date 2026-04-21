const header = document.querySelector('header');
const nav = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

const portfolioData = [
  { title: 'Box de Banheiro', desc: 'Vidro temperado com acabamento em alumínio' },
  { title: 'Espelho Decorativo', desc: 'Espelho sob medida para sala de estar' },
  { title: 'Divisória em Vidro', desc: 'Divisória para ambientes corporativos' },
  { title: 'Fachada Moderna', desc: 'Fachada de vidro para edifício comercial' },
  { title: 'Sacada Fechada', desc: 'Fechamento de sacada com vidro temperado' },
  { title: 'Espelho Banheiro', desc: 'Espelho bisotado com iluminação embutida' }
];

function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  portfolioData.forEach(item => {
    const el = document.createElement('div');
    el.className = 'portfolio-item';
    el.innerHTML = `
      <div class="portfolio-img">[Imagem]</div>
      <div class="portfolio-info">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;
    grid.appendChild(el);
  });
}

renderPortfolio();

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 80);
});

hamburger.addEventListener('click', () => nav.classList.toggle('open'));

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
