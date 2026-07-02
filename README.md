# Sergio Furlan Tattoo — Pitch Demo Site

Premium single-page studio site for Sergio Furlan, tattoo artist in Dublin
(@sergiofurlantattoo). Red & black identity built around his Instagram
highlight-icon language, with his fine line sub-brand
(@sergiofurlanfineline) given its own tonally lighter section.

## Stack

- [Astro](https://astro.build) (static output)
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- GSAP + ScrollTrigger (scroll-driven reveals, icon glow pulses)
- Lenis (smooth scroll)
- Deploy target: Vercel

## Commands

| Command           | Action                                      |
| ----------------- | ------------------------------------------- |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `localhost:4321`              |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |

## Placeholder assets

All imagery is generated, clearly-labelled placeholder SVG art
(`public/images/`, regenerate with `node scripts/gen-placeholders.mjs`).
Swap in real assets by replacing files with the same names, or update
`src/data/site.ts`. Still needed from the client:

- Real logo / icon set (wordmark currently stands in)
- Hero shot — bold colour realism or black & grey piece
- Main gallery photography (black & grey / colour realism / cover up)
- Healed work before/after pairs
- Fine line gallery images
- Sergio artist/studio photos (neon interior)
- Client testimonials (from the IG "Feedback" highlight) — `src/data/site.ts`
- Studio address, hours, and real WhatsApp number — `src/data/site.ts`,
  `src/components/Studio.astro`, `src/components/Footer.astro`

The booking form is front-end only in this demo — wire `#booking-form` to a
form backend (Vercel function, Formspree, etc.) before launch.
