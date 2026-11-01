// Services — client-approved copy (R5 Global Website Copy, 28 Oct 2026).
// 5 Consultancy & Intelligence, 3 Security Operations. Each block keeps the
// client's structure: quote → line → body → "We can help with" → closer.
import type { ImageKey } from './images';

export type Quote = { text: string; cite: string };

export type Service = {
  id: string;
  name: string;
  /** Short label for the sticky service index. */
  short: string;
  quote?: Quote;
  line: string;
  body: string[];
  listIntro: string;
  list: string[];
  closer?: string;
  image: ImageKey;
  caption: string;
};

export const consulting: Service[] = [
  {
    id: 'security-risk-consultancy',
    name: 'Security & Risk Consultancy',
    short: 'Security & risk',
    quote: { text: 'We suffer more often in imagination than in reality.', cite: 'Seneca' },
    line: "Some things are worth worrying about. Let's work out which.",
    body: [
      'We look at the risks you face and the measures you rely on: what’s working, where the gaps are and what deserves your attention.',
      'Then we help you put a sensible plan in place, with clear priorities and practical advice that fits your business, your people and your budget.',
      'If you need someone to stay involved and manage it, we can do that too.',
    ],
    listIntro: 'We can help with:',
    list: [
      'Threat and risk assessments',
      'Security audits and benchmarking',
      'Security policies, procedures and outsourced management',
      'Licensing support',
    ],
    image: 'planning',
    caption: 'Risk · understood before it’s managed',
  },
  {
    id: 'physical-penetration-testing',
    name: 'Physical Penetration Testing',
    short: 'Penetration testing',
    quote: { text: 'Men of Troy, trust not the horse.', cite: 'Virgil, The Aeneid' },
    line: 'An early lesson in access control.',
    body: [
      'A convincing story can still open doors that should stay closed.',
      'We carry out controlled, authorised attempts to get past your physical security, testing how your people, procedures and protective measures hold up in practice.',
      'You get clear evidence of what happened, what worked and where the gaps are, along with practical advice on closing them.',
    ],
    listIntro: 'We can test:',
    list: [
      'Perimeters, buildings and restricted areas',
      'Access controls and staff challenge procedures',
      'Detection, escalation and response',
    ],
    closer: 'Better to find out with us.',
    image: 'accessControl',
    caption: 'Access points · tested, not assumed',
  },
  {
    id: 'corporate-investigations',
    name: 'Corporate Investigations',
    short: 'Investigations',
    quote: { text: 'A liar should have a good memory.', cite: 'Roman proverb, recorded by Quintilian' },
    line: 'We’re professionally difficult to fob off.',
    body: [
      'When accounts conflict, questions go unanswered or something simply doesn’t add up, we help you establish the facts.',
      'We shape each investigation around what you need to know, drawing on discreet enquiries, research, surveillance and evidence gathering. We follow the evidence, test explanations and make clear what we can substantiate.',
      'You get clear findings and supporting evidence to help you decide what to do next.',
    ],
    listIntro: 'We can help with:',
    list: [
      'Suspected wrongdoing and internal concerns',
      'Discreet surveillance and enquiries',
      'Evidence gathering and reporting',
    ],
    image: 'filing',
    caption: 'Records · reviewed in confidence',
  },
  {
    id: 'intelligence-threat-monitoring',
    name: 'Intelligence & Threat Monitoring',
    short: 'Intelligence',
    quote: { text: 'He keeps furthest from danger who looks out while he is safe.', cite: 'Publilius Syrus' },
    line: 'Hindsight is a bit late for our liking.',
    body: [
      'We monitor developments that could affect your people, premises and operations, from planned disruption to emerging threats.',
      'We assess what’s relevant, check the credibility of reporting and explain what it means for your business. You get clear updates and useful context to help you plan ahead and respond as things change.',
    ],
    listIntro: 'We can help with:',
    list: [
      'Threat and disruption monitoring',
      'Location and event intelligence',
      'Regular briefings and tailored reporting',
    ],
    closer: 'A little notice can make a considerable difference.',
    image: 'worldMap',
    caption: 'Threat picture · watched, not guessed',
  },
  {
    id: 'technical-surveillance-countermeasures',
    name: 'Technical Surveillance Countermeasures',
    short: 'TSCM',
    quote: { text: 'If you wish another to keep your secret, first keep it yourself.', cite: 'Seneca' },
    line: 'Slightly impractical in a board meeting.',
    body: [
      'Some conversations need to happen. They just don’t need an uninvited audience.',
      'Our technical surveillance countermeasures (TSCM) service helps protect sensitive information by checking for covert listening and recording equipment.',
      'We carry out discreet physical inspections and technical sweeps, tailored to your premises and concerns. You get clear findings and practical advice on reducing the risk of someone listening in.',
    ],
    listIntro: 'We can help with:',
    list: [
      'Technical sweeps of offices and meeting rooms',
      'Checks for concealed listening and recording devices',
      'Advice on protecting confidential conversations',
    ],
    closer: 'Private should mean private.',
    image: 'meetingRoom',
    caption: 'Meeting rooms · swept, not assumed',
  },
];

export const securityOperations: Service[] = [
  {
    id: 'guarding-asset-protection',
    name: 'Guarding & Asset Protection',
    short: 'Guarding',
    quote: { text: 'A man is known by the company he keeps.', cite: 'Aesop' },
    line: 'We’re rather particular about ours.',
    body: [
      'We provide carefully selected SIA-licensed security officers to protect your people, premises and assets. Properly briefed, actively supervised and backed by R5’s leadership.',
      'People who notice what’s out of place, know how to welcome your visitors and can handle an awkward conversation without making it considerably more awkward.',
      'From a gallery reception to a sensitive site, we match the team to the setting, the risks and the way your business works.',
    ],
    listIntro: 'We can help with:',
    list: [
      'Guarding and asset protection',
      'Front-of-house security and access control',
      'Galleries and exhibitions',
      'SC-cleared personnel for sensitive environments',
    ],
    closer: 'Good people. Good judgement. Fewer surprises.',
    image: 'lobby',
    caption: 'Front of house · first impression, first line',
  },
  {
    // CLIENT TO CONFIRM: heading reads "Event & Film, TV & Production Security"
    // in the service section but "Event & Production Security" in the menu.
    id: 'event-production-security',
    name: 'Event & Production Security',
    short: 'Events & production',
    line: 'Quite happy to stay out of the spotlight.',
    body: [
      'We provide security teams and stewards for public events, private functions and film and production work.',
      'We work with organisers, venues and crews to understand the plans, the people and the practicalities. Who needs to be where, what needs protecting and how the day is meant to run.',
      'Then we put the right team in place, properly briefed and ready to adapt when the running order becomes more of a suggestion.',
      'From welcoming guests to protecting equipment, we help keep things running smoothly.',
    ],
    listIntro: 'We can help with:',
    list: [
      'Public events and private functions',
      'Film and production security',
      'Stewarding and access control',
      'Protection for crews, equipment and working areas',
    ],
    closer: 'Your event. Our full attention.',
    image: 'media',
    caption: 'Events & production · on schedule',
  },
  {
    id: 'property-site-security',
    name: 'Property & Site Security',
    short: 'Property & site',
    line: 'Empty doesn’t mean up for grabs.',
    body: [
      'Vacant, under construction or waiting to open — a property still needs looking after when there’s nobody making the tea.',
      'We put practical protection in place around your site, its condition and the risks. That might mean security officers, CCTV and alarms, secure boarding or a combination that makes sense for the property.',
      'We bring these measures together with monitoring and clear arrangements for responding when something needs attention. As the site changes, we help you adjust the protection around it.',
    ],
    listIntro: 'We can help with:',
    list: [
      'Vacant, construction and pre-opening sites',
      'CCTV, intruder alarms and monitoring',
      'Security boarding and doors',
      'Site guarding and response coordination',
    ],
    closer: 'You’ve got plans for the place. We’ll help protect them.',
    image: 'construction',
    caption: 'Sites · looked after, empty or not',
  },
];
