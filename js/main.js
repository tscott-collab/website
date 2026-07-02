document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal (defined first so it's ready before dynamic content renders)
const revealIO = 'IntersectionObserver' in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    )
  : null;

function observeReveals(els) {
  els.forEach((el) => {
    if (revealIO) {
      revealIO.observe(el);
    } else {
      el.classList.add('in-view');
    }
  });
}

// Product grid, built from js/products.js
const STORE_BASE = 'https://www.stonecreekscents.com/products/';
const grid = document.getElementById('product-grid');
const tabsEl = document.getElementById('filter-tabs');
const emptyEl = document.getElementById('product-empty');
const CATEGORY_ORDER = ['All', 'Candles', 'Wax Melts', 'Body & Bath', 'Home & Extras'];

function renderCard(p) {
  const card = document.createElement('article');
  card.className = 'product-card reveal';
  card.dataset.category = p.category;

  const media = document.createElement('div');
  media.className = 'product-media';
  const img = document.createElement('img');
  img.src = p.image;
  img.alt = p.title;
  img.loading = 'lazy';
  media.appendChild(img);
  card.appendChild(media);

  const catTag = document.createElement('span');
  catTag.className = 'product-cat';
  catTag.textContent = p.category;
  card.appendChild(catTag);

  const h3 = document.createElement('h3');
  h3.textContent = p.title;
  card.appendChild(h3);

  if (p.note) {
    const note = document.createElement('p');
    note.className = 'product-note';
    note.textContent = p.note;
    card.appendChild(note);
  }

  const desc = document.createElement('p');
  desc.className = 'product-desc';
  desc.textContent = p.desc;
  card.appendChild(desc);

  const footer = document.createElement('div');
  footer.className = 'product-footer';
  const price = document.createElement('span');
  price.className = 'product-price';
  price.textContent = p.price;
  footer.appendChild(price);
  const link = document.createElement('a');
  link.className = 'product-link';
  link.href = STORE_BASE + p.handle;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = 'Shop this scent →';
  footer.appendChild(link);
  card.appendChild(footer);

  return card;
}

function renderGrid(category) {
  grid.innerHTML = '';
  const items = category === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category);
  items.forEach((p) => grid.appendChild(renderCard(p)));
  emptyEl.hidden = items.length > 0;
  observeReveals(grid.querySelectorAll('.reveal'));
}

function renderTabs() {
  const present = new Set(PRODUCTS.map((p) => p.category));
  const categories = CATEGORY_ORDER.filter((c) => c === 'All' || present.has(c));
  categories.forEach((cat, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-tab';
    btn.textContent = cat;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', String(i === 0));
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      tabsEl.querySelectorAll('.filter-tab').forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      renderGrid(cat);
    });
    tabsEl.appendChild(btn);
  });
}

if (typeof PRODUCTS !== 'undefined') {
  renderTabs();
  renderGrid('All');
}

// Reveal everything else on the page (hero, story, craft, contact, etc.)
observeReveals(document.querySelectorAll('.reveal:not(.product-card)'));

// Header background on scroll
const header = document.getElementById('site-header');
const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
};
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
});
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Static contact form (no backend wired up yet)
const form = document.getElementById('signup-form');
const note = document.getElementById('form-note');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = "Thanks! This form isn't connected to anything yet—wire it up to your email or CRM to start receiving messages.";
  form.reset();
});
