// Site-wide facts and navigation. Only facts approved in r5-kit/docs/content.md
// belong here — no invented stats, people, clients or accreditations.
import type { ImageKey } from './images';
import { link } from '../lib/link';

export const site = {
  name: 'R5 Global',
  url: 'https://www.r5global.co.uk',
  phone: '0203 633 0964',
  phoneHref: 'tel:+442036330964',
  city: 'London',
  coords: '51.5074° N · 0.1278° W',
  masterLine: 'Composure is the capability.',
  secondaryLine: 'Prepared, not surprised.',
  aboutLine: 'Founded without fear.',
  // Never translated on-page.
  latin: 'Omnes moriuntur, non omnes queruntur',
  status: 'Operational · 24 / 7 / 365',
  registered: 'Registered in England & Wales',
  description:
    'R5 Global is a physical security consultancy with the people to put plans into practice: risk consultancy, investigations and intelligence, and SIA-licensed security operations.',
};

export const nav = [
  { label: 'Consultancy & Intelligence', href: link('/consulting/') },
  { label: 'Security Operations', href: link('/security-operations/') },
  { label: 'Case Studies', href: link('/case-studies/') },
  { label: 'About', href: link('/about/') },
];

// The single contact action in the nav (replaces separate Contact + Book a call).
export const contactHref = link('/contact/');

export const bookHref = link('/contact/#book');

export const accreditations = [
  {
    code: 'SIA',
    name: 'SIA-licensed officers',
    detail:
      'Every officer holds a Security Industry Authority licence and is hand-selected for the deployment.',
  },
  {
    code: 'ACS',
    name: 'ACS accredited',
    detail:
      "Accredited under the Approved Contractor Scheme — the SIA's independent quality standard for security providers.",
  },
  {
    code: 'ICO',
    name: 'ICO registered',
    detail:
      "Registered with the Information Commissioner's Office. Sensitive information is handled accordingly.",
  },
] as const;

// Client copy: "Who we work with". Sector names only — never a client.
export const sectors: { name: string; image: ImageKey }[] = [
  { name: 'Corporate & Commercial', image: 'commercialProperty' },
  { name: 'Retail & Hospitality', image: 'hospitality' },
  { name: 'Property & Construction', image: 'construction' },
  { name: 'Arts & Culture', image: 'gallery' },
  { name: 'Events & Production', image: 'media' },
  { name: 'Defence & Critical Infrastructure', image: 'defence' },
];
