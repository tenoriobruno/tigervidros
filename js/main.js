const header = document.querySelector('header');
const nav = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

const portfolioData = [
  { title: 'Box de Banheiro', desc: 'Vidro temperado com acabamento em alumínio — Mês passado' },
  { title: 'Espelho Decorativo', desc: 'Espelho sob medida para sala de estar — São Paulo' },
  { title: 'Divisória em Vidro', desc: 'Divisória para consultório corporativo — Guarulhos' },
  { title: 'Fachada Moderna', desc: 'Fachada de vidro para edifício de escritórios — Alto Tietê' },
  { title: 'Sacada Fechada', desc: 'Fechamento de sacada em vidro temperado — Projeto recente' },
  { title: 'Espelho Banheiro', desc: 'Espelho bisotado com acabamento em alumínio — Poá' }
];

function renderPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  portfolioData.forEach((item, idx) => {
    const el = document.createElement('div');
    el.className = 'portfolio-item';
    el.innerHTML = `
      <div class="portfolio-img" role="img" aria-label="${item.title} — ${item.desc}">[Imagem]</div>
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
