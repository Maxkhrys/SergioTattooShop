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

## Assets

The hero, main gallery (black & grey / colour realism) and the full Fine
Line gallery use real client photography in `public/images/` (`hero.jpg`,
`bg-*.jpg`, `cr-*.jpg`, `fl-*.jpg`), wired up in `src/data/site.ts`.

Cover Up, healed before/after pairs, and Sergio's studio/artist photos are
still generated, clearly-labelled placeholder SVG art (regenerate with
`node scripts/gen-placeholders.mjs`). Swap in real assets by replacing
files with the same names, or update `src/data/site.ts`. Still needed from
the client:

- Real logo / icon set (wordmark currently stands in)
- Cover up gallery photography (before/after or finished pieces)
- Healed work before/after pairs
- Sergio artist/studio photos (neon interior)
- Client testimonials (from the IG "Feedback" highlight) — `src/data/site.ts`
- Studio address, hours, and real WhatsApp number — `src/data/site.ts`,
  `src/components/Studio.astro`, `src/components/Footer.astro`

The booking form is front-end only in this demo — wire `#booking-form` to a
form backend (Vercel function, Formspree, etc.) before launch.
