// The four time-of-day images behind the Home hero's 24-hour dial.
// The dial crossfades between them as the hour changes.
//
// TO SWAP IN YOUR OWN IMAGES:
//   1. Export four versions of the SAME framing (dawn, day, dusk, night),
//      square, at least 1600 × 1600px, JPG or WebP, ~150–300KB each.
//   2. Put them in public/images/hero/ (e.g. shad-thames-dawn.jpg).
//   3. Change each `src` below to the file path, e.g. '/images/hero/shad-thames-dawn.jpg'.
//
// While all four point at the same photo, the dial simulates the lighting
// instead (blue at night, warm at dusk). Once the images differ, it uses the
// real photos and switches the simulation off.

export type HeroTime = {
  /** Hour this image is at its fullest (0–24). */
  hour: number;
  label: string;
  src: string;
  alt: string;
};

const BASE = 'https://images.unsplash.com/photo-1753699298279-6c58a0691535'; // Shad Thames, Bermondsey

// Each image appears twice where it should HOLD (e.g. night stays night from
// 21:00 to 04:30); between holds the dial crossfades to the next image.
const dawn = { label: 'Dawn', src: BASE, alt: 'Shad Thames, with its iron walkways overhead, at dawn' };
const day = { label: 'Day', src: BASE, alt: 'Shad Thames, with its iron walkways overhead, by day' };
const dusk = { label: 'Dusk', src: BASE, alt: 'Shad Thames, with its iron walkways overhead, at dusk' };
const night = { label: 'Night', src: BASE, alt: 'Shad Thames, with its iron walkways overhead, at night' };

export const heroTimes: HeroTime[] = [
  { hour: 4.5, ...night },
  { hour: 6.5, ...dawn },
  { hour: 9, ...day },
  { hour: 16, ...day },
  { hour: 18.5, ...dusk },
  { hour: 21, ...night },
];

/** True while every slot uses the same photo — the dial then simulates the lighting. */
export const simulateLighting = new Set(heroTimes.map((t) => t.src)).size === 1;
