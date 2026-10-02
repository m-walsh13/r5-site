// The canonical service list — 7 Consulting, 4 Security Operations — from
// r5-kit/docs/content.md. Do not add services here. SEO phrases are worked
// into copy and headings, never turned into new services.
//
// FILLER COPY: written to brief for layout and SEO review. Client to confirm.
import type { ImageKey } from './images';

export type Service = {
  id: string;
  name: string;
  /** Short label for the sticky service index. */
  short: string;
  summary: string;
  body: string[];
  approach: { title: string; text: string }[];
  features: string[];
  sectors: string[];
  image: ImageKey;
  caption: string;
};

export const consulting: Service[] = [
  {
    id: 'physical-penetration-testing',
    short: 'Penetration testing',
    name: 'Physical penetration testing',
    summary: 'We try to get in, so nobody else does.',
    body: [
      'Physical penetration testing shows how your buildings, people and procedures hold up against a determined intruder. Under an agreed scope and with written authorisation, we attempt to gain access the way a real adversary would — testing reception, badges, doors, deliveries and the habits of the people inside.',
      'We carry out physical penetration testing across the UK, and it is particularly useful for organisations facing activist threats, preparing for an audit or protecting restricted areas. You get evidence, not opinion.',
    ],
    approach: [
      { title: 'Scope', text: 'Agree the targets, the rules of engagement and exactly who knows.' },
      { title: 'Reconnaissance', text: 'Study the site, its routines and what can be learned from outside.' },
      { title: 'Test', text: 'Attempt entry, record everything and stop precisely where agreed.' },
      { title: 'Debrief', text: 'Walk your team through what worked, what failed and what to fix first.' },
    ],
    features: [
      'Fully authorised, tightly scoped',
      'Evidence-led reporting',
      'Prioritised, practical fixes',
      'Suited to activist-threat environments',
      'UK-wide, with international reach',
    ],
    sectors: ['Defence', 'Corporate headquarters', 'Activist-threat'],
    image: 'accessControl',
    caption: 'Access points · tested, not assumed',
  },
  {
    id: 'supporting-intelligence-operations',
    short: 'Intelligence',
    name: 'Supporting intelligence operations',
    summary: 'Research and analysis that sits behind better decisions.',
    body: [
      'Some decisions need more than instinct. We support clients and their teams with open-source research, discreet enquiries and analysis — gathered lawfully, verified carefully and delivered in plain English.',
      'We can work as an extension of an in-house security or risk function, or stand up a focused piece of work around a single, difficult question.',
    ],
    approach: [
      { title: 'Brief', text: 'Define the question and what a useful answer looks like.' },
      { title: 'Collect', text: 'Lawful open-source research and discreet enquiries.' },
      { title: 'Verify', text: 'Corroborate, grade and strip out the noise.' },
      { title: 'Report', text: 'A clear assessment, with confidence levels and next steps.' },
    ],
    features: [
      'Lawful, auditable methods',
      'Graded, sourced reporting',
      'Works alongside in-house teams',
      'Strict need-to-know handling',
    ],
    sectors: ['Media-related support', 'Corporate', 'Ultra-high-net-worth'],
    image: 'analyst',
    caption: 'Analysis · verified before it is reported',
  },
  {
    id: 'corporate-investigations',
    short: 'Investigations',
    name: 'Corporate investigations',
    summary: 'Facts first. Conclusions second.',
    body: [
      'When something goes wrong inside an organisation — fraud, theft, leaks, misconduct or a dispute with a third party — you need to know what happened, and be able to show it. Our corporate investigations are discreet, methodical and built to stand up to scrutiny.',
      'We work with legal, HR and leadership teams to gather evidence properly, so your next step rests on what can be demonstrated rather than what is suspected.',
    ],
    approach: [
      { title: 'Assess', text: 'Understand the allegation, the stakes and the constraints.' },
      { title: 'Plan', text: 'Set a lawful, proportionate line of enquiry.' },
      { title: 'Investigate', text: 'Gather documents, data and accounts — quietly.' },
      { title: 'Report', text: 'Clear findings your advisers can act on.' },
    ],
    features: [
      'Discreet from the first call',
      'Evidence gathered with proceedings in mind',
      'Interviews and document review',
      'Close working with legal counsel',
    ],
    sectors: ['Sensitive investigations', 'Corporate', 'Media-related support'],
    image: 'filing',
    caption: 'Records · reviewed in confidence',
  },
  {
    id: 'country-regional-risk-assessments',
    short: 'Risk assessments',
    name: 'Country & regional risk assessments',
    summary: 'Know the ground before you stand on it.',
    body: [
      'Opening an office, sending a team or moving an executive somewhere unfamiliar? Our security risk assessments set out the threats that actually apply — political, criminal, environmental and reputational — and what to do about each one.',
      'Closer to home, we carry out physical security risk assessments for sites across London and the UK, looking at the building, the people in it and the procedures around it.',
    ],
    approach: [
      { title: 'Scope', text: 'Where, who, for how long and what matters most.' },
      { title: 'Research', text: 'Current, sourced analysis of the local threat picture.' },
      { title: 'Visit', text: 'On-the-ground assessment where it adds value.' },
      { title: 'Advise', text: 'Prioritised recommendations, in plain English.' },
    ],
    features: [
      'Country, city and site-level assessments',
      'Travel and deployment briefings',
      'Physical security risk assessments across the UK',
      'Updated as the picture changes',
    ],
    sectors: ['Corporate', 'Media-related support', 'Ultra-high-net-worth'],
    image: 'worldMap',
    caption: 'Threat picture · country, city, site',
  },
  {
    id: 'loss-prevention',
    short: 'Loss prevention',
    name: 'Loss prevention',
    summary: 'Stop the leak, not just the thief.',
    body: [
      'Loss rarely has a single cause. Stock, equipment, cash and information disappear through a mix of weak processes, blind spots and opportunity. We look at the whole picture — people, systems and premises — and close the gaps that matter most.',
      'The result is fewer losses and a clearer view of where risk actually sits in your operation. Often without adding a single guard.',
    ],
    approach: [
      { title: 'Review', text: 'Walk the operation and follow the losses.' },
      { title: 'Identify', text: 'Find the process gaps and blind spots.' },
      { title: 'Recommend', text: 'Practical controls that fit how you work.' },
      { title: 'Embed', text: 'Help your team make the changes stick.' },
    ],
    features: [
      'Retail, warehouse and site reviews',
      'Process and controls assessment',
      'Support for internal investigations',
      'Controls that fit the operation',
    ],
    sectors: ['Retail', 'Hospitality', 'Construction'],
    image: 'warehouse',
    caption: 'Stock · accounted for',
  },
  {
    id: 'counterfeit-supply-chain-investigations',
    short: 'Supply chain',
    name: 'Counterfeit & supply chain investigations',
    summary: "Find out where it's really coming from.",
    body: [
      'Counterfeit goods and compromised supply chains cost more than revenue. They damage trust, create safety risks and put your brand in the wrong hands. We trace products, suppliers and routes to establish where the problem starts and who is behind it.',
      'Findings are built to support action — commercial, civil or criminal — alongside your legal advisers.',
    ],
    approach: [
      { title: 'Identify', text: 'Confirm what is fake, diverted or compromised.' },
      { title: 'Trace', text: 'Follow products, money and routes back to source.' },
      { title: 'Evidence', text: 'Build a record that will stand up.' },
      { title: 'Act', text: 'Support enforcement with your advisers.' },
    ],
    features: [
      'Marketplace and supplier enquiries',
      'Supply chain due diligence',
      'International investigations',
      'Evidence packs for legal action',
    ],
    sectors: ['Retail', 'Corporate', 'Commercial'],
    image: 'port',
    caption: 'Supply routes · traced to source',
  },
  {
    id: 'asset-people-tracing',
    short: 'Tracing',
    name: 'Asset & people tracing',
    summary: 'Locating what — and who — has gone missing.',
    body: [
      "Whether it's a debtor, a missing beneficiary, a witness or assets moved out of reach, our tracing work combines comprehensive research with discreet enquiries to find what you need — in the UK and internationally.",
      'Every case is handled in confidence, and every finding is verified before it reaches you.',
    ],
    approach: [
      { title: 'Brief', text: 'What is known, what is needed and why.' },
      { title: 'Research', text: 'Comprehensive records and open-source work.' },
      { title: 'Enquire', text: 'Discreet enquiries, at home and abroad.' },
      { title: 'Verify', text: 'Confirmed findings, with legal support where needed.' },
    ],
    features: [
      'Confidentiality',
      'Comprehensive research',
      'International expertise',
      'Expert analysis',
      'Legal support',
    ],
    sectors: ['Ultra-high-net-worth', 'Sensitive investigations', 'Corporate'],
    image: 'mapPins',
    caption: 'Last known · confirmed, not guessed',
  },
];

export const securityOperations: Service[] = [
  {
    id: 'manned-guarding',
    short: 'Manned guarding',
    name: 'Manned guarding',
    summary: 'A visible presence, with a plan behind it.',
    body: [
      'We provide professional, SIA-licensed officers hand-selected for each deployment. Every guard is matched to the environment and briefed on your operational risks — visible presence, control and reliability. Not just manpower: precision in protection.',
      'From office security guards and front of house security to corporate concierge security, our officers set the tone for your building before anyone reaches the lift. Security guarding services across London, from a single reception desk to a multi-site estate.',
    ],
    approach: [
      { title: 'Assess', text: 'Understand the site, its people and its risks.' },
      { title: 'Select', text: 'Hand-pick officers who suit the environment.' },
      { title: 'Brief', text: 'Site-specific briefing before the first shift.' },
      { title: 'Supervise', text: 'Ongoing oversight and clear reporting.' },
    ],
    features: [
      'SIA-licensed, hand-selected officers',
      'Front of house and corporate concierge security',
      'Briefed on your operational risks',
      'Deployed 24 hours a day, 365 days a year',
    ],
    sectors: ['Commercial property', 'Hospitality', 'Corporate offices'],
    image: 'lobby',
    caption: 'Front of house · first impression, first line',
  },
  {
    id: 'asset-protection',
    short: 'Asset protection',
    name: 'Asset protection',
    summary: "Protection placed where the risk is — not spread thinly everywhere.",
    body: [
      'High-value asset protection for property, stock, equipment, art and information. We combine physical security with an understanding of how assets are actually targeted, so protection goes where it counts.',
      'For commercial property security in London, that might mean protecting a vacant building, controlling access during a refurbishment, or securing a site through a sale.',
    ],
    approach: [
      { title: 'Value', text: 'Establish what matters most and why.' },
      { title: 'Threat', text: 'Understand how it could be targeted.' },
      { title: 'Protect', text: 'Physical measures and people, in proportion.' },
      { title: 'Review', text: 'Adjust as the asset or the risk changes.' },
    ],
    features: [
      'Commercial property security',
      'High-value asset protection',
      'Risk-led security plans',
      'Discreet or visible, as required',
    ],
    sectors: ['Commercial property', 'Ultra-high-net-worth', 'Construction'],
    image: 'gallery',
    caption: 'High-value assets · protected in proportion',
  },
  {
    id: 'close-executive-protection',
    short: 'Close protection',
    name: 'Close & executive protection',
    summary: 'Discreet protection for people who need to keep moving.',
    body: [
      'Discreet, intelligence-led protection for corporate leaders, VIPs and visiting teams. We deliver safety through planning, professionalism and forward thinking — so the principal gets on with the day, and the day goes to plan.',
      'Protection is planned from the route backwards: venues, travel, timings and people are assessed before anyone steps out of the car.',
    ],
    approach: [
      { title: 'Advance', text: 'Routes, venues and timings assessed ahead.' },
      { title: 'Plan', text: 'Contingencies agreed before they are needed.' },
      { title: 'Protect', text: 'Low-profile, close and composed.' },
      { title: 'Debrief', text: 'Lessons fed into the next movement.' },
    ],
    features: [
      'Executive and VIP protection',
      'Visiting teams and delegations',
      'Residential security for private clients',
      'Low-profile by default',
    ],
    sectors: ['Ultra-high-net-worth', 'Corporate', 'Media-related support'],
    image: 'executiveCar',
    caption: 'Movement · planned from the route back',
  },
  {
    id: 'security-patrols-mobile-response',
    short: 'Patrols & response',
    name: 'Security patrols & mobile response',
    summary: 'Eyes on every site, not just the biggest one.',
    body: [
      "Planned and randomised patrols and alarm response for sites that don't need a permanent guard — or need backup when something happens. Routes are set by risk, and every visit is logged.",
      'For clients with several properties, mobile patrols form the backbone of multi-site security management: one plan, one point of contact and consistent standards at every location.',
    ],
    approach: [
      { title: 'Map', text: 'Plot every site and its risk profile.' },
      { title: 'Route', text: 'Patrols planned by risk, varied by design.' },
      { title: 'Respond', text: 'Attend alarms and incidents promptly.' },
      { title: 'Report', text: 'Every visit logged and shared.' },
    ],
    features: [
      'Planned and randomised patrols',
      'Alarm and incident response',
      'Multi-site security management',
      'Logged, reported visits',
    ],
    sectors: ['Construction', 'Retail', 'Commercial property'],
    image: 'londonStreet',
    caption: 'Multi-site · one plan, every location',
  },
];
