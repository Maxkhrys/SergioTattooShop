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
  { src: '/images/bg-1.jpg', alt: 'Black and grey tattoo of a bearded god surrounded by lightning, shoulder piece', category: 'black-grey' },
  { src: '/images/cr-1.jpg', alt: 'Colour realism tattoo of a butterfly and blue daisy, thigh piece', category: 'colour-realism' },
  { src: '/images/cu-1.svg', alt: 'Cover up tattoo — placeholder for portfolio piece 01', category: 'cover-up' },
  { src: '/images/cr-2.jpg', alt: 'Colour comic-style tattoo of Groot and Rocket, forearm sleeve', category: 'colour-realism' },
  { src: '/images/bg-2.jpg', alt: 'Black and grey tattoo of cherub angels in the clouds, upper arm sleeve', category: 'black-grey' },
  { src: '/images/cu-2.svg', alt: 'Cover up tattoo — placeholder for portfolio piece 02', category: 'cover-up' },
  { src: '/images/bg-3.jpg', alt: 'Black and grey tattoo of two masked faces with the word Trust, forearm piece', category: 'black-grey' },
  { src: '/images/cr-3.jpg', alt: 'Colour realism tattoo of a snarling jaguar in jungle foliage, full sleeve', category: 'colour-realism' },
  { src: '/images/cu-3.svg', alt: 'Cover up tattoo — placeholder for portfolio piece 03', category: 'cover-up' },
  { src: '/images/bg-4.jpg', alt: 'Black and grey tattoo of a cracked clock face over a city street scene, forearm sleeve', category: 'black-grey' },
  { src: '/images/cr-4.jpg', alt: 'Colour tattoo of a samurai mask with cherry blossoms, forearm sleeve', category: 'colour-realism' },
  { src: '/images/cu-4.svg', alt: 'Cover up tattoo — placeholder for portfolio piece 04', category: 'cover-up' },
  { src: '/images/bg-5.jpg', alt: 'Black and grey hannya mask tattoo, forearm piece', category: 'black-grey' },
  { src: '/images/bg-6.jpg', alt: 'Black and grey tattoo of a hand holding hands with palm tree beach scene and the word Family, forearm piece', category: 'black-grey' },
  { src: '/images/bg-7.jpg', alt: 'Black and grey tattoo of a joker card motif with playing cards and cash, forearm piece', category: 'black-grey' },
  { src: '/images/bg-8.jpg', alt: 'Black and grey tattoo of a roaring jaguar in jungle foliage, full sleeve', category: 'black-grey' },
  { src: '/images/bg-9.jpg', alt: 'Black and grey tattoo of an owl and monkey in dappled light, forearm sleeve', category: 'black-grey' },
  { src: '/images/bg-10.jpg', alt: 'Black and grey tattoo of a bearded god portrait with tribal border, shoulder piece', category: 'black-grey' },
  { src: '/images/bg-11.jpg', alt: 'Large scale black and grey tribal floral tattoo covering the full back', category: 'black-grey' },
];

export const fineLineGallery = [
  { src: '/images/fl-1.jpg', alt: 'Fine line brontosaurus outline tattoo' },
  { src: '/images/fl-2.jpg', alt: 'Fine line dinosaur outline tattoo' },
  { src: '/images/fl-3.jpg', alt: 'Fine line stegosaurus outline tattoo' },
  { src: '/images/fl-4.jpg', alt: 'Fine line duck wearing a bow tie tattoo' },
  { src: '/images/fl-5.jpg', alt: 'Fine line tattoo of fries and ice cream holding hands' },
  { src: '/images/fl-6.jpg', alt: 'Fine line lily flowers tattoo with soft shading' },
  { src: '/images/fl-7.jpg', alt: 'Fine line abstract animal outline tattoo' },
  { src: '/images/fl-8.jpg', alt: 'Fine line thistle and wildflower botanical tattoo' },
  { src: '/images/fl-9.jpg', alt: 'Fine line four-leaf clover swirl tattoo' },
  { src: '/images/fl-10.jpg', alt: 'Fine line rose outline tattoo' },
  { src: '/images/fl-11.jpg', alt: 'Fine line moon and sun tattoo' },
  { src: '/images/fl-12.jpg', alt: 'Fine line sheep outline tattoo' },
  { src: '/images/fl-13.jpg', alt: 'Fine line botanical flower tattoo with dotted accent circle' },
  { src: '/images/fl-14.jpg', alt: 'Fine line daisy pair tattoo' },
  { src: '/images/fl-15.jpg', alt: 'Fine line heart-shaped floral vine tattoo' },
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
