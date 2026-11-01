// Page-level copy: SEO meta, section headings, case studies and FAQs.
// Layout lives in src/pages — this file is the editable layer.
//
// Client-approved copy from "R5 Global Website Copy" (28 Oct 2026) where
// supplied. Anything still ours is marked NOT CLIENT COPY.
import type { ImageKey } from './images';
import type { Quote } from './services';

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

/* --------------------------------------------------- Shared client copy */

export type Pillar = {
  name: string;
  quote: Quote;
  line: string;
  body: string[];
  closer?: string;
  cta: string;
};

// Client copy: used as the Home overviews AND as each pillar page's opening.
export const consultingIntro: Pillar = {
  name: 'Consultancy & Intelligence',
  quote: { text: 'Why all this guesswork?', cite: 'Marcus Aurelius' },
  line: 'We’re with Marcus on this one.',
  body: [
    'How secure are you, really? What have you missed? And does everything work quite as well as everyone thinks?',
    'We help you find out. Our consultancy, investigations and intelligence establish the facts, test assumptions and give you clear advice on what to do next. Something firmer than a hunch to go on.',
  ],
  cta: 'Take a closer look',
};

export const operationsIntro: Pillar = {
  name: 'Security Operations',
  quote: { text: 'Enough to keep all bad men away.', cite: 'Agis, King of Sparta, when asked how many Spartans there were' },
  line: 'A reasonably clear staffing brief.',
  body: [
    'We’d add: the right people, properly briefed, exactly where you need them.',
    'From busy events to sensitive sites, we provide carefully selected security teams with R5’s leadership behind them. People who know when to be visible, when to be discreet and when to step in.',
    'Your business is in their hands. We’re particular about whose hands those are.',
  ],
  closer: 'Security where you need it. When you need it.',
  cta: 'Explore Security Operations',
};

export const contactCta = {
  title: 'You’ve got our attention.',
  lead: 'Tell us about your organisation, what you’re dealing with and what you need to achieve. We’ll ask a few useful questions, listen carefully and work out how we can help.',
  cta: 'Discuss your requirements',
};

/* ------------------------------------------------------------------ Home */
export const home = {
  // SEO meta written by us, not the client — client to confirm.
  meta: {
    title: 'R5 Global | Physical Security Consultancy & SIA Guarding, London',
    description:
      'A physical security consultancy with the people to put plans into practice. Risk consultancy, penetration testing, investigations, intelligence and SIA-licensed guarding from London.',
  },
  opening: {
    quote: { text: 'Let no act be done without a purpose.', cite: 'Marcus Aurelius' },
    title: 'Good advice. Especially when you’re paying for it.',
    body: [
      'We’re a physical security consultancy with the people to put plans into practice. Our SIA-licensed guards work everywhere from hospitality to the defence sector. Our risk consultancy and intelligence work spans manufacturing, critical infrastructure and plenty in between.',
      'It starts with understanding your business and what you need from your security. That might mean the right officer at your front door, clear advice on a complicated risk, or a team that can help you manage both.',
      'We work out what’s needed, put it in place and stay involved. Every recommendation should have a reason. Everyone on site should know why they’re there.',
    ],
    cta: 'Let’s talk',
  },
  why: {
    kicker: 'Why R5',
    quote: { text: 'Be tolerant with others and strict with yourself.', cite: 'Marcus Aurelius' },
    title: 'We’re quite demanding. Starting with ourselves.',
    lead: 'Our leadership brings experience in specialist policing and security management to the way we plan, select our people and oversee the work.',
    points: [
      {
        title: 'People worth introducing.',
        text: 'They’ll be working with your team and representing your business. We choose people for their experience, judgement and suitability for the assignment. Being good with people is part of being good at security.',
      },
      {
        title: 'Properly prepared.',
        text: 'Clear briefs, defined responsibilities and plans grounded in how your operation works. Everyone should understand what’s expected before they’re expected to deliver it.',
      },
      {
        title: 'Management you can get hold of.',
        text: 'Our managers stay involved, support the team and deal with issues that need attention. You know who’s responsible and who to call. We’re quite comfortable being that call.',
      },
    ],
    cta: 'Meet the people behind R5',
  },
  sectors: {
    kicker: 'Who we work with',
    title: 'We keep interesting company.',
    lead: 'From art galleries to critical infrastructure, the surroundings change. The attention to detail doesn’t.',
  },
  reviews: {
    kicker: 'What our clients say',
    title: 'We’ve said quite enough about ourselves.',
  },
};

/* ----------------------------------------------------------------- About */
export type Person = { name: string; role: string; bio: string };

export const about = {
  // SEO meta written by us, not the client — client to confirm.
  meta: {
    title: 'About R5 Global | Physical Security Consultancy, London',
    description:
      'R5 means you’re coming through loud and clear. Meet the team behind R5 Global: physical security consultancy and SIA-licensed security operations, led by specialist policing and security experience.',
  },
  hero: {
    kicker: 'About R5',
    title: 'We like to know who we’re dealing with. You probably do too.',
    line: 'R5 means you’re coming through loud and clear.',
    body: [
      'It’s radio shorthand used in parts of UK policing. We liked the principle enough to name the business after it.',
      'Before we can help, we need to understand what we’re helping with. Your organisation, the pressures you’re facing and what you need to achieve. Including the bits that don’t fit neatly into a brief.',
      'That might mean choosing the right SIA-licensed officer for your gallery opening. Or helping a multinational rethink its security as the business changes.',
      'The scale changes. Our starting point doesn’t: understand properly, then work out how to help.',
    ],
    cta: 'Meet the team',
    // NOT CLIENT COPY — kept from the build; client to confirm or remove.
    facts: [
      { label: 'Base', value: 'London' },
      { label: 'Reach', value: 'Operating globally' },
      { label: 'Clients', value: 'SMEs to multinationals' },
      { label: 'Registered', value: 'England & Wales' },
    ],
  },
  // NOT CLIENT COPY — no wording supplied for this sitemap section.
  whatWeDo: {
    kicker: 'What we do',
    title: 'Two service lines. One way of thinking.',
    lead: 'Consultancy & Intelligence establishes the facts. Security Operations puts the right people on the ground. Many clients use both.',
  },
  team: {
    kicker: 'Team profiles',
    title: 'Meet the team.',
    people: [
      { name: 'Rich Hammond', role: 'Founder', bio: 'Rich is passionate about high standards and delivering the best possible security services across everything R5 does.' },
      { name: 'Mark McSweeney', role: 'Director of Security Operations', bio: 'Mark leads R5’s security operations, drawing on his experience as a senior police leader. He’s responsible for making sure our teams are properly prepared and supported.' },
      { name: 'Alannah', role: 'Operations Officer', bio: 'Alannah looks after the day-to-day running of R5, keeping the planning, administration and practical details organised so our people can get on with their work.' },
      { name: 'Gabriel', role: 'Operations Support Lead', bio: 'Gabriel supports everything from operational deployments to troubleshooting with clients, and the practicalities in between. He’s there to make sure the right people are in the right place at the right time.' },
    ] satisfies Person[],
  },
  // NOT CLIENT COPY — no wording supplied for these sitemap sections.
  accreditations: {
    kicker: 'Accreditations',
    title: 'Our accreditations',
    lead: 'Independent standards, independently checked.',
  },
  reviews: {
    kicker: 'What our clients say',
    title: 'We’ve said quite enough about ourselves.',
  },
};

/* ------------------------------------------------------------ Consulting */
export const consultingPage = {
  // SEO meta written by us, not the client — client to confirm.
  meta: {
    title: 'Security Consultancy, Penetration Testing & Investigations UK | R5 Global',
    description:
      'Security and risk consultancy, physical penetration testing, corporate investigations, intelligence and threat monitoring, and TSCM sweeps. Clear findings and practical advice from R5 Global.',
  },
  process: {
    kicker: 'How we work',
    title: 'We like to know what we’re getting into.',
    steps: [
      { title: 'Get properly acquainted.', text: 'We get to know your operation, your team and the pressures you’re working under. The priorities, the practicalities and the things that don’t make it into the brief.' },
      { title: 'Ask the useful questions.', text: 'We work with the people closest to the issue to understand what’s happening, what’s already known and what you need the work to achieve. Good advice starts with paying attention.' },
      { title: 'Agree the work. Then get on with it.', text: 'Clear scope, responsibilities, timescales and cost. We agree who needs to be involved and how we’ll keep you informed. If the scope needs to change, we talk it through.' },
      { title: 'Make the findings earn their keep.', text: 'What we found, what it means and what you can do about it, with the evidence behind it. Useful for the people making the decisions and the people who need to make them happen.' },
    ],
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
      service: 'Physical Penetration Testing',
      serviceId: 'physical-penetration-testing',
      image: 'defence',
    } satisfies CaseStudy,
  },
  contact: {
    kicker: 'Get in touch',
    title: 'Tell us what you’re dealing with.',
  },
  // NOT CLIENT COPY — FAQs kept from the build; client to supply or confirm.
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
      a: "Yes. We're London-based and operate globally — including threat and risk assessments, investigations and intelligence work.",
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
  // SEO meta written by us, not the client — client to confirm.
  meta: {
    title: 'SIA Security Guarding, Event & Site Security London | R5 Global',
    description:
      'Carefully selected SIA-licensed security officers for guarding and asset protection, events and film and production, and vacant, construction and pre-opening sites. Managed by R5 Global.',
  },
  process: {
    kicker: 'How we work',
    title: 'Excellent security takes exceptional management.',
    steps: [
      { title: 'Understand the operation.', text: 'We get to know your operation, your people and the issues you’re facing. Then we agree what protection is needed, how it will work and what it will cost.' },
      { title: 'Put the right people on it.', text: 'We choose the team for the setting and give them a proper brief: the risks, the responsibilities and how you expect things to be handled. The introductions come with instructions.' },
      { title: 'Stay close to the work.', text: 'Our managers stay involved, supervise the work and support the team. You have a clear point of contact and someone responsible for sorting things out.' },
      { title: 'Keep the plan current.', text: 'Sites change. Schedules move. Someone adds another hundred guests. We review the arrangements with you and agree adjustments as your needs change.' },
    ],
  },
  // NOT CLIENT COPY — sitemap section, no wording supplied.
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
      service: 'Guarding & Asset Protection',
      serviceId: 'guarding-asset-protection',
      image: 'hospitality',
    } satisfies CaseStudy,
  },
  contact: {
    kicker: 'Get in touch',
    title: 'Tell us what needs looking after.',
  },
  // NOT CLIENT COPY — FAQs kept from the build; client to supply or confirm.
  faqs: [
    {
      q: 'How is R5 different from a standard guarding company?',
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
      q: 'Do you provide front-of-house security?',
      a: 'Yes. Front-of-house security and access control are a core part of our guarding — officers who look after your visitors as well as your building.',
    },
    {
      q: 'Can you look after a vacant or construction site?',
      a: 'Yes. We combine officers, CCTV and alarms, secure boarding and monitoring as the property needs, and adjust the protection as the site changes.',
    },
    {
      q: 'How quickly can you deploy?',
      a: "It depends on the site and the requirement. Book a call and we'll give you a realistic timeline — not an optimistic one.",
    },
  ] satisfies Faq[],
};

/* --------------------------------------------------------------- Contact */
export const contactPage = {
  // SEO meta written by us, not the client — client to confirm.
  meta: {
    title: 'Contact R5 Global | Discuss Your Security Requirements',
    description:
      'Tell us about your organisation, what you’re dealing with and what you need to achieve. Contact R5 Global about security consultancy, investigations, intelligence or SIA-licensed security operations.',
  },
  book: {
    kicker: 'Contact',
    title: contactCta.title,
    lead: contactCta.lead,
  },
  // NOT CLIENT COPY — form headings and confirmation kept from the build.
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
