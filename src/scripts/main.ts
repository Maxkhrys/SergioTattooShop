import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches;

/* ---------- Smooth scroll (Lenis) ---------- */
if (!prefersReducedMotion) {
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Anchor links route through Lenis for a controlled glide.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href') ?? '');
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -72 });
      closeMobileNav();
    });
  });
}

/* ---------- Scroll-driven reveals ---------- */
if (!prefersReducedMotion) {
  // Standard register: confident, controlled rise.
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 36 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: Number(el.dataset.revealDelay ?? 0),
        scrollTrigger: { trigger: el, start: 'top 86%', once: true },
      },
    );
  });

  // Fine Line register: slower, calmer — the one deliberate tonal break.
  gsap.utils.toArray<HTMLElement>('[data-reveal-slow]').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: 'power2.out',
        delay: Number(el.dataset.revealDelay ?? 0),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });

  // Highlight icons: red glow pulse as they enter the viewport.
  gsap.utils.toArray<HTMLElement>('[data-icon-glow]').forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => el.classList.add('is-glowing'),
    });
  });
} else {
  document
    .querySelectorAll('[data-reveal], [data-reveal-slow]')
    .forEach((el) => el.removeAttribute('data-reveal'));
}

/* ---------- Gallery filter ---------- */
const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-filter]');
const galleryItems = document.querySelectorAll<HTMLElement>('[data-category]');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    filterButtons.forEach((b) =>
      b.setAttribute('aria-pressed', String(b === btn)),
    );
    galleryItems.forEach((item) => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !show);
    });
    if (!prefersReducedMotion) {
      gsap.fromTo(
        '[data-category]:not(.hidden)',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out' },
      );
    }
    ScrollTrigger.refresh();
  });
});

/* ---------- Booking form (demo build — no backend wired yet) ---------- */
const form = document.querySelector<HTMLFormElement>('#booking-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  form.classList.add('hidden');
  document.querySelector('#booking-success')?.classList.remove('hidden');
});

/* ---------- Mobile nav ---------- */
const navToggle = document.querySelector<HTMLButtonElement>('#nav-toggle');
const mobileNav = document.querySelector<HTMLElement>('#mobile-nav');

function closeMobileNav() {
  mobileNav?.classList.add('hidden');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileNav?.classList.toggle('hidden', isOpen);
});

mobileNav?.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', closeMobileNav);
});
