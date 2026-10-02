// Page-level copy: SEO meta, section headings, case studies and FAQs.
// Layout lives in src/pages — this file is the editable layer.
//
// FILLER COPY: written to brief for layout and SEO review. Client to confirm.
import type { ImageKey } from './images';

// One featured case study per service page — anonymous, sector and geography only.
export type CaseStudy = {
  ref: string;
  sector: string;
  title: string;
  situation: string;
  approach: string;
  result: string;
  service: string;
  serviceId: string;
  image: ImageKey;
};

export type Faq = { q: string; a: string };

/* ------------------------------------------------------------------ Home */
export const home = {
  meta: {
    title: 'R5 Global | Corporate Security Consultancy, London',
    description:
      'London-based risk and security consultancy, operating globally. Security consulting, penetration testing, investigations and SIA-licensed manned guarding. ACS accredited.',
  },
  hero: {
    kicker: 'Risk & security consultancy · London',
    lead: 'Risk and security consultancy for organisations that would rather be prepared than surprised. London-based, operating globally.',
  },
  proof: {
    kicker: 'Sectors & accreditations',
    title: 'Trusted where discretion matters.',
    lead: "We don't publish client names. We'll tell you the sectors instead.",
  },
  pillars: {
    kicker: 'What we do',
    title: 'Two ways we work.',
    lead: 'Different buyers, different problems. The same standard.',
    consulting: {
      title: 'Know before you act.',
      text: 'Risk intelligence for security and risk leads — penetration testing, investigations, risk assessment and tracing.',
    },
    operations: {
      title: 'Security that runs like a system.',
      text: 'Guarding, asset protection, close protection and mobile response — planned from intelligence, run with discipline.',
    },
  },
  why: {
    kicker: 'The difference',
    title: 'Why R5',
    lead: "Strength doesn't come from looking tough. It comes from knowing more, planning better and answering for the result.",
    points: [
      {
        title: 'Intelligence-led',
        text: 'Every engagement starts with understanding the risk. Consulting and operations share the same thinking.',
      },
      {
        title: 'Discreet by default',
        text: 'No client names. No logos. Confidentiality is part of the service, not a clause in the contract.',
      },
      {
        title: 'Deployed 24 / 7 / 365',
        text: 'Guards deployed 24 hours a day, 365 days a year.',
      },
      {
        title: 'Accountable',
        text: 'SIA-licensed, ACS accredited, ICO registered — with clear lines of responsibility from the first call.',
      },
    ],
  },
  reviews: {
    kicker: 'Client reviews',
    title: 'What clients say.',
    lead: 'Five-star rated on Trustpilot and Google. Reviews load here, live from both.',
  },
  book: {
    kicker: 'Book a call',
    title: 'Prepared, not surprised.',
    lead: "A short call with a consultant. No sales script — you explain the problem, and we'll tell you honestly whether we're the right people to solve it.",
    steps: [
      'Tell us what is worrying you.',
      'We ask the awkward questions.',
      'You leave with a clear next step.',
    ],
  },
};

/* ----------------------------------------------------------------- About */
export const about = {
  meta: {
    title: 'About R5 Global | Risk & Security Consultancy, London',
    description:
      'R5 Global is a London-based risk and security consultancy operating globally. SIA-licensed, ACS accredited and ICO registered, working with SMEs and multinationals.',
  },
  hero: {
    kicker: 'About R5',
    lead: 'A London-based risk and security consultancy, operating globally. A small, flexible team with backgrounds in public and corporate security, risk management and operational strategy.',
    body: [
      'R5 exists to do security differently. Not louder, not bigger — sharper. Our strength comes from intelligence, strong systems and accountability, and from a team that has done this work across the public and private sectors.',
      'We work with SMEs and large multinationals, and we treat both the same way: carefully, discreetly and with a plan.',
    ],
    facts: [
      { label: 'Base', value: 'London' },
      { label: 'Reach', value: 'Operating globally' },
      { label: 'Clients', value: 'SMEs to multinationals' },
      { label: 'Registered', value: 'England & Wales' },
    ],
  },
  whatWeDo: {
    kicker: 'What we do',
    title: 'Two service lines. One way of thinking.',
    lead: 'Consulting finds and understands the risk. Security Operations manages it on the ground. Most clients use one; the best-protected use both.',
  },
  people: {
    kicker: 'Our people',
    title: 'Our people',
    lead: 'Experienced, discreet and deliberately few. Backgrounds in public and corporate security, risk management and operational strategy.',
  },
  accreditations: {
    kicker: 'Accreditations',
    title: 'Our accreditations',
    lead: 'Independent standards, independently checked.',
  },
  reviews: {
    kicker: 'Reviews & testimonials',
    title: 'In their words.',
    lead: 'Five-star rated on Trustpilot and Google. Every review below loads live from the source — we don’t edit them.',
  },
};

/* ------------------------------------------------------------ Consulting */
export const consultingPage = {
  meta: {
    title: 'Corporate Security Consultancy UK | R5 Global Consulting',
    description:
      'Physical penetration testing, corporate investigations, security risk assessments and asset tracing. A London-based physical security consultancy working across the UK and overseas.',
  },
  hero: {
    kicker: 'Consulting · Risk intelligence',
    title: 'Intelligence first. Everything else follows.',
    lead: 'Corporate security consultancy for organisations that need to know before they act. Penetration testing, investigations, risk assessment and tracing — run discreetly from London, wherever the problem is.',
    body: 'Consulting is where most of our work begins. Before anyone is posted on a door, we find out what the risk actually is, who it comes from and what it would cost you. Sometimes the answer is more security. Often it is better security, in fewer places.',
  },
  cases: {
    kicker: 'Case study',
    title: 'Sector-led. No names.',
    lead: 'A glimpse of the work. Details are kept deliberately thin — that is rather the point.',
    item: {
      ref: 'R5/021',
      sector: 'Defence supplier, South East',
      title: 'A restricted facility, tested before the audit.',
      situation:
        'A defence supplier needed to know whether a restricted area would stand up to scrutiny ahead of a compliance audit.',
      approach:
        'Under an agreed scope and written authorisation, our team attempted entry the way a real adversary would — through reception, deliveries and everyday staff routines — recording every step.',
      result:
        'A prioritised set of fixes, completed before the audit, and a clear picture of which controls were already doing their job.',
      service: 'Physical penetration testing',
      serviceId: 'physical-penetration-testing',
      image: 'defence',
    } satisfies CaseStudy,
  },
  contact: {
    kicker: 'Speak to a consultant',
    title: 'Got a question that needs a proper answer?',
    lead: "Talk it through with a consultant. We'll tell you what we'd look at first — and whether you need us at all.",
  },
  faqs: [
    {
      q: 'What does a physical penetration test involve?',
      a: 'We agree a scope with you first: which sites, which areas, what is off-limits and who knows. We then attempt to gain access as a real intruder would — within those limits and with written authorisation — and report on what worked, what failed and what to fix first.',
    },
    {
      q: 'Will our staff know you are testing?',
      a: 'Only the people you choose. Most tests run with a small number of named contacts, so we can see how everyone else responds naturally.',
    },
    {
      q: 'Do you work outside the UK?',
      a: "Yes. We're London-based and operate globally — including country and regional risk assessments, international investigations and tracing.",
    },
    {
      q: 'How do you keep investigations confidential?',
      a: "Need-to-know from the start: a limited team, careful handling of information and nothing published that could identify a client. We don't name clients, and we don't share case details.",
    },
    {
      q: 'Can you work alongside our in-house security or legal team?',
      a: 'Often that is the best way. We can support an existing function, add specialist capability, or take on a defined piece of work end to end.',
    },
    {
      q: 'How do we get started?',
      a: "Book a call. You tell us what's worrying you, we ask a few questions, and you leave with a clear idea of whether — and how — we can help.",
    },
  ] satisfies Faq[],
};

/* --------------------------------------------------- Security Operations */
export const operationsPage = {
  meta: {
    title: 'Manned Guarding & Security Services London | R5 Global',
    description:
      'SIA-licensed manned guarding, front of house and concierge security, asset protection, close protection and mobile patrols across London. ACS accredited, deployed 24/7/365.',
  },
  hero: {
    kicker: 'Security Operations',
    title: 'Not more guards. Better security.',
    lead: 'Manned guarding, asset protection, close protection and mobile response — planned from intelligence, run as a system and accountable to you.',
    body: 'Most guarding companies sell hours. We sell outcomes. Every deployment starts with an understanding of the risk, every officer is SIA-licensed and hand-selected for the site, and every shift is run with the same discipline as our consulting work.',
    sectorsLine:
      'Hospitality and restaurant security, retail security, construction site security and commercial property security across London.',
  },
  always: {
    kicker: 'Deployment & confidentiality',
    title: 'Always on. Never on the record.',
    deployed: {
      title: 'Deployed 24 / 7 / 365',
      text: "Our guards are deployed 24 hours a day, 365 days a year. Christmas Day, bank holidays, 3am on a Tuesday — security doesn't keep office hours, so neither do we.",
    },
    confidential: {
      title: 'Confidential by default',
      text: "We don't name clients, show logos or share details that could identify anyone. If you've worked with us, only you get to say so.",
    },
  },
  cases: {
    kicker: 'Case study',
    title: 'Sector-led. No names.',
    lead: 'The sites change; the standard does not.',
    item: {
      ref: 'R5/012',
      sector: 'Hospitality, central London',
      title: 'Front of house, rebuilt around one standard.',
      situation:
        'A hotel and restaurant group had security that varied from venue to venue, and from shift to shift.',
      approach:
        'We hand-selected SIA-licensed officers for each venue, briefed them on site-specific risks and put one briefing standard in place across the group.',
      result:
        'Consistent front of house security, one point of contact and clear reporting across every venue.',
      service: 'Manned guarding',
      serviceId: 'manned-guarding',
      image: 'hospitality',
    } satisfies CaseStudy,
  },
  contact: {
    kicker: 'Speak to a consultant',
    title: 'Need people on the ground?',
    lead: "Tell us about the site and the risk. We'll tell you what good looks like — and what it takes to get there.",
  },
  faqs: [
    {
      q: 'How is R5 different from a standard manned guarding company?',
      a: 'We start with the risk, not the rota. Every deployment is planned from an understanding of the site, officers are SIA-licensed and hand-selected for the environment, and the work is supervised and reported rather than left to run.',
    },
    {
      q: 'Are your officers SIA licensed?',
      a: "Yes. Every officer holds an SIA licence, and R5 is accredited under the SIA's Approved Contractor Scheme (ACS).",
    },
    {
      q: 'Can you provide cover around the clock?',
      a: 'Yes. Our guards are deployed 24 hours a day, 365 days a year.',
    },
    {
      q: 'Do you provide front of house and concierge security?',
      a: 'Yes. Front of house and corporate concierge security is a core part of our manned guarding — officers who look after your visitors as well as your building.',
    },
    {
      q: 'Can you manage security across multiple sites?',
      a: 'Yes. Mobile patrols and a single point of contact let us keep standards consistent across several locations — guarding where it is needed, patrols where it is not.',
    },
    {
      q: 'How quickly can you deploy?',
      a: "It depends on the site and the requirement. Book a call and we'll give you a realistic timeline — not an optimistic one.",
    },
  ] satisfies Faq[],
};

/* --------------------------------------------------------------- Contact */
export const contactPage = {
  meta: {
    title: 'Contact R5 Global | Book a Call With a Security Consultant',
    description:
      'Book a call with an R5 Global security consultant, or send a confidential enquiry about consulting, penetration testing, investigations or manned guarding in London.',
  },
  book: {
    kicker: 'Contact',
    title: 'Start with a conversation.',
    lead: 'Book a call with a consultant, or tell us what you need below. Everything you share is treated in confidence.',
  },
  form: {
    kicker: 'Enquiry',
    title: 'Tell us what you need.',
    lead: 'A few details help us put the right person on the call.',
    success: {
      title: 'Received.',
      text: "A consultant will be in touch shortly. And yes — we'll keep it to ourselves.",
    },
  },
};
