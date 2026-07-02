/**
 * Generates branded SVG placeholder images into public/images/.
 * These stand in for real portfolio photography until the client
 * supplies final assets — each file is labelled with what belongs there.
 *
 * Run: node scripts/gen-placeholders.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = join(import.meta.dirname, '..', 'public', 'images');
mkdirSync(OUT, { recursive: true });

const RED = '#e0202a';

// Thin line-art motifs, drawn in a 100x100 box, stroke-only.
const motifs = {
  shade: `
    <circle cx="50" cy="50" r="30"/>
    <path d="M50 20 A30 30 0 0 0 50 80"/>
    <path d="M38 25 L38 75 M31 31 L31 69 M26 39 L26 61 M44 21.5 L44 78.5"/>`,
  drop: `
    <path d="M50 18 C50 18 26 48 26 64 a24 24 0 0 0 48 0 C74 48 50 18 50 18 Z"/>
    <path d="M38 62 a12 12 0 0 0 10 14"/>`,
  triangle: `
    <path d="M50 22 L82 76 L18 76 Z"/>
    <path d="M50 40 L50 58"/>
    <circle cx="50" cy="66" r="1.6"/>`,
  leaf: `
    <path d="M50 82 C50 82 50 52 50 44"/>
    <path d="M50 52 C36 52 26 42 26 26 C42 26 52 36 50 52 Z"/>
    <path d="M50 44 C64 44 74 34 74 20 C58 20 48 30 50 44 Z"/>`,
  heart: `
    <path d="M50 78 C22 58 18 40 28 30 C36 22 48 26 50 36 C52 26 64 22 72 30 C82 40 78 58 50 78 Z"/>`,
  bubble: `
    <path d="M26 30 H74 A6 6 0 0 1 80 36 V58 A6 6 0 0 1 74 64 H48 L36 74 V64 H26 A6 6 0 0 1 20 58 V36 A6 6 0 0 1 26 30 Z"/>
    <path d="M42 52 C38 48 38 44 41 42 C44 40 47 42 47 45 C47 42 50 40 53 42 C56 44 56 48 52 52 L47 56 Z" stroke-width="1.6"/>`,
  rose: `
    <circle cx="50" cy="38" r="7"/>
    <path d="M50 31 C40 31 34 38 36 46 C38 53 45 56 50 54 C55 56 62 53 64 46 C66 38 60 31 50 31"/>
    <path d="M50 54 L50 80 M50 64 C42 62 38 58 37 54 M50 70 C58 68 61 64 62 60"/>`,
  machine: `
    <path d="M34 26 L58 26 L58 40 L50 40 L50 66 L44 66 L44 40 L34 40 Z"/>
    <path d="M47 66 L47 80 M43 80 L51 80"/>
    <circle cx="64" cy="33" r="5"/>`,
  moonsun: `
    <path d="M40 36 a12 12 0 1 0 6 22 a12 12 0 0 1 -6 -22 Z"/>
    <circle cx="64" cy="58" r="8"/>
    <path d="M64 44 L64 40 M64 76 L64 72 M50 58 L46 58 M82 58 L78 58 M54 48 L51 45 M77 71 L74 68 M74 48 L77 45 M51 71 L54 68"/>`,
  clover: `
    <path d="M50 54 C42 46 32 46 30 38 C28 30 36 26 42 30 C40 24 46 18 52 22 C50 14 60 12 64 18 C68 24 62 30 56 30 C64 32 66 42 58 46 C54 48 52 50 50 54 Z" stroke-width="1.6"/>
    <path d="M50 54 C48 64 46 72 40 80"/>`,
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function svg({ w, h, motif, label, sub, light = false, healed = false }) {
  const bg = light ? '#f0ede7' : '#101010';
  const bg2 = light ? '#e7e3db' : '#0a0a0a';
  const line = light ? '#2a2723' : RED;
  const frame = light ? 'rgba(28,26,23,0.25)' : 'rgba(224,32,42,0.45)';
  const text = light ? 'rgba(28,26,23,0.55)' : 'rgba(245,245,245,0.55)';
  const subText = light ? 'rgba(28,26,23,0.35)' : 'rgba(245,245,245,0.3)';
  const glow = light
    ? ''
    : `<circle cx="${w / 2}" cy="${h / 2 - h * 0.06}" r="${Math.min(w, h) * 0.16}" fill="none" stroke="rgba(224,32,42,0.18)" stroke-width="10" filter="url(#blur)"/>`;
  const m = Math.min(w, h) * 0.028;
  const iconBox = Math.min(w, h) * 0.24;
  const ix = w / 2 - iconBox / 2;
  const iy = h / 2 - h * 0.06 - iconBox / 2;
  const badge = healed
    ? `<g font-family="Arial, sans-serif" font-size="${Math.min(w, h) * 0.026}" letter-spacing="3">
         <text x="${w / 2}" y="${m * 3.4}" text-anchor="middle" fill="${RED}">${esc(healed)}</text>
       </g>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <radialGradient id="g" cx="50%" cy="42%" r="75%">
      <stop offset="0%" stop-color="${bg}"/>
      <stop offset="100%" stop-color="${bg2}"/>
    </radialGradient>
    <filter id="blur"><feGaussianBlur stdDeviation="14"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect x="${m}" y="${m}" width="${w - m * 2}" height="${h - m * 2}" fill="none" stroke="${frame}" stroke-width="1.5"/>
  ${glow}
  ${badge}
  <g transform="translate(${ix} ${iy}) scale(${iconBox / 100})" fill="none" stroke="${line}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    ${motifs[motif]}
  </g>
  <g font-family="Arial, sans-serif" text-anchor="middle">
    <text x="${w / 2}" y="${h * 0.72}" fill="${text}" font-size="${Math.min(w, h) * 0.034}" letter-spacing="4">${esc(label)}</text>
    <text x="${w / 2}" y="${h * 0.72 + Math.min(w, h) * 0.055}" fill="${subText}" font-size="${Math.min(w, h) * 0.024}" letter-spacing="2">${esc(sub)}</text>
  </g>
</svg>`;
}

const P = '[ PLACEHOLDER ]';
const files = [
  ['hero.svg', { w: 1200, h: 1500, motif: 'rose', label: P, sub: 'HERO — BOLD COLOUR REALISM / BLACK & GREY PIECE' }],

  ['bg-1.svg', { w: 900, h: 1125, motif: 'shade', label: P, sub: 'BLACK & GREY — PORTFOLIO PIECE 01' }],
  ['bg-2.svg', { w: 900, h: 1125, motif: 'machine', label: P, sub: 'BLACK & GREY — PORTFOLIO PIECE 02' }],
  ['bg-3.svg', { w: 900, h: 1125, motif: 'rose', label: P, sub: 'BLACK & GREY — PORTFOLIO PIECE 03' }],
  ['bg-4.svg', { w: 900, h: 1125, motif: 'shade', label: P, sub: 'BLACK & GREY — PORTFOLIO PIECE 04' }],

  ['cr-1.svg', { w: 900, h: 1125, motif: 'drop', label: P, sub: 'COLOUR REALISM — PORTFOLIO PIECE 01' }],
  ['cr-2.svg', { w: 900, h: 1125, motif: 'rose', label: P, sub: 'COLOUR REALISM — PORTFOLIO PIECE 02' }],
  ['cr-3.svg', { w: 900, h: 1125, motif: 'drop', label: P, sub: 'COLOUR REALISM — PORTFOLIO PIECE 03' }],
  ['cr-4.svg', { w: 900, h: 1125, motif: 'machine', label: P, sub: 'COLOUR REALISM — PORTFOLIO PIECE 04' }],

  ['cu-1.svg', { w: 900, h: 1125, motif: 'triangle', label: P, sub: 'COVER UP — BEFORE / AFTER PIECE 01' }],
  ['cu-2.svg', { w: 900, h: 1125, motif: 'triangle', label: P, sub: 'COVER UP — BEFORE / AFTER PIECE 02' }],
  ['cu-3.svg', { w: 900, h: 1125, motif: 'machine', label: P, sub: 'COVER UP — BEFORE / AFTER PIECE 03' }],
  ['cu-4.svg', { w: 900, h: 1125, motif: 'triangle', label: P, sub: 'COVER UP — BEFORE / AFTER PIECE 04' }],

  ['healed-1-fresh.svg', { w: 1000, h: 1000, motif: 'heart', label: P, sub: 'HEALED WORK 01 — FRESH', healed: 'FRESH — DAY 0' }],
  ['healed-1-healed.svg', { w: 1000, h: 1000, motif: 'heart', label: P, sub: 'HEALED WORK 01 — FULLY HEALED', healed: 'HEALED — 12 MONTHS' }],
  ['healed-2-fresh.svg', { w: 1000, h: 1000, motif: 'shade', label: P, sub: 'HEALED WORK 02 — FRESH', healed: 'FRESH — DAY 0' }],
  ['healed-2-healed.svg', { w: 1000, h: 1000, motif: 'shade', label: P, sub: 'HEALED WORK 02 — FULLY HEALED', healed: 'HEALED — 18 MONTHS' }],
  ['healed-3-fresh.svg', { w: 1000, h: 1000, motif: 'drop', label: P, sub: 'HEALED WORK 03 — FRESH', healed: 'FRESH — DAY 0' }],
  ['healed-3-healed.svg', { w: 1000, h: 1000, motif: 'drop', label: P, sub: 'HEALED WORK 03 — FULLY HEALED', healed: 'HEALED — 2 YEARS' }],

  ['fl-1.svg', { w: 900, h: 1125, motif: 'leaf', label: P, sub: 'FINE LINE — BOTANICAL 01', light: true }],
  ['fl-2.svg', { w: 900, h: 1125, motif: 'moonsun', label: P, sub: 'FINE LINE — MINIMAL 02', light: true }],
  ['fl-3.svg', { w: 900, h: 1125, motif: 'clover', label: P, sub: 'FINE LINE — MINIMAL 03', light: true }],
  ['fl-4.svg', { w: 900, h: 1125, motif: 'rose', label: P, sub: 'FINE LINE — BOTANICAL 04', light: true }],
  ['fl-5.svg', { w: 900, h: 1125, motif: 'leaf', label: P, sub: 'FINE LINE — BOTANICAL 05', light: true }],
  ['fl-6.svg', { w: 900, h: 1125, motif: 'heart', label: P, sub: 'FINE LINE — MINIMAL 06', light: true }],

  ['about-sergio.svg', { w: 1000, h: 1250, motif: 'machine', label: P, sub: 'SERGIO — ARTIST PORTRAIT / AT WORK, NEON STUDIO' }],
  ['studio-wide.svg', { w: 1600, h: 1000, motif: 'bubble', label: P, sub: 'STUDIO — NEON-LIT INTERIOR, WIDE SHOT' }],
  ['studio-detail.svg', { w: 1200, h: 900, motif: 'machine', label: P, sub: 'STUDIO — WORKSTATION DETAIL' }],
];

for (const [name, opts] of files) {
  writeFileSync(join(OUT, name), svg(opts));
}
console.log(`Wrote ${files.length} placeholder SVGs to public/images/`);
