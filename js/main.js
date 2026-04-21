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

const reviewsData = [
  { name: 'Joyce Silva.', rating: 5, text: 'Quero deixar registrado minha excelente experiência. Desde o primeiro contato, foram extremamente dedicados, atenciosos e prestativos. O atendimento foi impecável, e o comprometimento com prazos me surpreendeu, tudo foi entregue exatamente no dia combinado, com um acabamento perfeito e de altíssima qualidade. É raro encontrar profissionais tão pontuais e comprometidos com a satisfação do cliente. Estou muito feliz com o resultado e recomendo de olhos fechados!' },
  { name: 'Luana Teixeira.', rating: 5, text: 'Equipe nota 10000%. Muito educados e atenciosos. Cuidadoso com o trabalho. Excelente profissionais! Só sei que ficou lindoooo meu apê 😍' },
  { name: 'Fernando Tavares.', rating: 5, text: 'Contratamos a instalação de um box. O serviço ficou excelente. Eles foram rápidos no atendimento e na colocação. Indicamos o trabalho.' }
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

function renderReviews() {
  const grid = document.getElementById('reviews-grid');
  if (!grid) return;
  reviewsData.forEach(review => {
    const el = document.createElement('div');
    el.className = 'review-card';
    el.innerHTML = `
      <div class="review-stars">${'★'.repeat(review.rating)}</div>
      <p class="review-text">"${review.text}"</p>
      <p class="review-name">— ${review.name}</p>
    `;
    grid.appendChild(el);
  });
}

renderPortfolio();
renderReviews();

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', scrollY > 80);
});

hamburger.addEventListener('click', () => nav.classList.toggle('open'));

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});
