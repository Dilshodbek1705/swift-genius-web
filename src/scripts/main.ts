// src/scripts/main.ts
// Sahifaning barcha klient-tomon interaktivligi.
// (avval index.astro ichidagi <script> blokida edi)

// ── 1. Language Toggle ──────────────────────────────────────────────
function setLangCookie(lang: string) {
  document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
  window.location.reload();
}

function bindLangToggle(containerId: string) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.querySelectorAll<HTMLButtonElement>('button[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      if (lang) setLangCookie(lang);
    });
  });
}

bindLangToggle('lang-toggle-desktop');
bindLangToggle('lang-toggle-mobile');

// ── 2. Mobile Menu ──────────────────────────────────────────────────
const menuToggle = document.getElementById('menu-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');
const menuIcon = document.getElementById('menu-icon');
let isOpen = false;

const toggleMenu = () => {
  isOpen = !isOpen;
  if (isOpen) {
    mobileOverlay?.classList.add('active');
    menuIcon?.classList.add('menu-open');
    document.body.style.overflow = 'hidden';
  } else {
    mobileOverlay?.classList.remove('active');
    menuIcon?.classList.remove('menu-open');
    document.body.style.overflow = '';
  }
};

menuToggle?.addEventListener('click', toggleMenu);
document.querySelectorAll('#mobile-overlay a').forEach(link => {
  link.addEventListener('click', () => { if (isOpen) toggleMenu(); });
});

// ── 3. Scroll animations ────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('sg-visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.sg-scroll-in').forEach(el => observer.observe(el));

// ── 4. Curriculum toggle ────────────────────────────────────────────
document.querySelectorAll('.toggle-module').forEach(card => {
  card.addEventListener('click', function (this: HTMLElement) {
    this.classList.toggle('active');
  });
});

// ── 5. Active nav links ─────────────────────────────────────────────
const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');
const sections = document.querySelectorAll<HTMLElement>('section[id], footer[id]');

const handleScroll = () => {
  let currentId = '';
  sections.forEach(section => {
    if (window.scrollY >= (section.offsetTop - window.innerHeight / 3)) {
      currentId = section.getAttribute('id') ?? '';
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) link.classList.add('active');
  });
};

window.addEventListener('scroll', handleScroll, { passive: true });
window.addEventListener('DOMContentLoaded', handleScroll);
