export const site = {
  name: 'Sergio Furlan',
  tagline: 'Living art on skin',
  city: 'Dublin',
  instagramMain: 'https://www.instagram.com/sergiofurlantattoo/',
  instagramFineLine: 'https://www.instagram.com/sergiofurlanfineline/',
  // [PLACEHOLDER: real booking contact details + WhatsApp link]
  whatsapp: 'https://wa.me/353000000000',
};

export type GalleryItem = {
  src: string;
  alt: string;
  category: 'black-grey' | 'colour-realism' | 'cover-up';
};

export const gallery: GalleryItem[] = [
  { src: '/images/bg-1.svg', alt: 'Black and grey tattoo — placeholder for portfolio piece 01', category: 'black-grey' },
  { src: '/images/cr-1.svg', alt: 'Colour realism tattoo — placeholder for portfolio piece 01', category: 'colour-realism' },
  { src: '/images/cu-1.svg', alt: 'Cover up tattoo — placeholder for portfolio piece 01', category: 'cover-up' },
  { src: '/images/cr-2.svg', alt: 'Colour realism tattoo — placeholder for portfolio piece 02', category: 'colour-realism' },
  { src: '/images/bg-2.svg', alt: 'Black and grey tattoo — placeholder for portfolio piece 02', category: 'black-grey' },
  { src: '/images/cu-2.svg', alt: 'Cover up tattoo — placeholder for portfolio piece 02', category: 'cover-up' },
  { src: '/images/bg-3.svg', alt: 'Black and grey tattoo — placeholder for portfolio piece 03', category: 'black-grey' },
  { src: '/images/cr-3.svg', alt: 'Colour realism tattoo — placeholder for portfolio piece 03', category: 'colour-realism' },
  { src: '/images/cu-3.svg', alt: 'Cover up tattoo — placeholder for portfolio piece 03', category: 'cover-up' },
  { src: '/images/bg-4.svg', alt: 'Black and grey tattoo — placeholder for portfolio piece 04', category: 'black-grey' },
  { src: '/images/cr-4.svg', alt: 'Colour realism tattoo — placeholder for portfolio piece 04', category: 'colour-realism' },
  { src: '/images/cu-4.svg', alt: 'Cover up tattoo — placeholder for portfolio piece 04', category: 'cover-up' },
];

export const fineLineGallery = [
  { src: '/images/fl-1.svg', alt: 'Fine line botanical tattoo — placeholder 01' },
  { src: '/images/fl-2.svg', alt: 'Fine line moon and sun tattoo — placeholder 02' },
  { src: '/images/fl-3.svg', alt: 'Fine line clover tattoo — placeholder 03' },
  { src: '/images/fl-4.svg', alt: 'Fine line floral tattoo — placeholder 04' },
  { src: '/images/fl-5.svg', alt: 'Fine line botanical tattoo — placeholder 05' },
  { src: '/images/fl-6.svg', alt: 'Fine line minimal heart tattoo — placeholder 06' },
];

export const healedPairs = [
  {
    fresh: '/images/healed-1-fresh.svg',
    healed: '/images/healed-1-healed.svg',
    caption: 'Colour realism sleeve — settled and vibrant at 12 months.',
  },
  {
    fresh: '/images/healed-2-fresh.svg',
    healed: '/images/healed-2-healed.svg',
    caption: 'Black & grey back piece — contrast holding strong at 18 months.',
  },
  {
    fresh: '/images/healed-3-fresh.svg',
    healed: '/images/healed-3-healed.svg',
    caption: 'Full colour cover up — clean and saturated two years on.',
  },
];

// [PLACEHOLDER: client testimonials — pull real quotes from the IG "Feedback" highlight]
export const testimonials = [
  {
    quote:
      '[PLACEHOLDER: client testimonial — realism piece. Pull a real quote from the Feedback highlight on Instagram.]',
    name: 'Client Name',
    detail: 'Colour realism, full sleeve',
  },
  {
    quote:
      '[PLACEHOLDER: client testimonial — cover up story. Ideally one that mentions trusting Sergio with an old tattoo.]',
    name: 'Client Name',
    detail: 'Cover up',
  },
  {
    quote:
      '[PLACEHOLDER: client testimonial — black & grey portrait or detail work.]',
    name: 'Client Name',
    detail: 'Black & grey',
  },
  {
    quote:
      '[PLACEHOLDER: client testimonial — fine line piece, softer tone.]',
    name: 'Client Name',
    detail: 'Fine line',
  },
];
