// Structured data helpers — FAQPage, Service list and breadcrumbs for SEO.
import { site } from './site';
import type { Service } from './services';
import type { Faq } from './pages';

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const servicesSchema = (name: string, path: string, services: Service[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name,
  itemListElement: services.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: s.name,
      description: s.body[0],
      url: `${site.url}${path}#${s.id}`,
      provider: { '@id': `${site.url}/#organisation` },
      areaServed: ['London', 'United Kingdom', 'Worldwide'],
    },
  })),
});

export const breadcrumbSchema = (name: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
    { '@type': 'ListItem', position: 2, name, item: `${site.url}${path}` },
  ],
});
