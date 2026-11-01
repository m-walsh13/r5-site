// Case studies — client-supplied copy ("Security Case Studies"), verbatim.
// Each section keeps the client's own heading, so the structure can vary
// (e.g. "The next phase", "The outcome").
//
// CLIENT TO CONFIRM: named clients (Nike, Elizabeth Xi Bauer, Raising Cane's)
// have agreed to be named before launch.
import type { ImageKey } from './images';

export type CaseSection = { heading: string; body: string[] };

export type CaseStudyEntry = {
  slug: string;
  title: string;
  standfirst: string;
  sector: string;
  line: 'consulting' | 'operations' | 'both';
  /** Service ids from services.ts this case demonstrates. */
  services: string[];
  image: ImageKey;
  sections: CaseSection[];
};

export const caseStudies: CaseStudyEntry[] = [
  {
    slug: 'security-cleared-asset-protection',
    title: 'Security-cleared asset protection',
    standfirst: 'Fast mobilisation. Hands-on leadership. Thorough preparation.',
    sector: 'Defence',
    line: 'operations',
    services: ['guarding-asset-protection'],
    image: 'defence',
    sections: [
      {
        heading: 'The request',
        body: [
          'A client in the defence sector needed specialist asset protection—and a team that could mobilise quickly.',
          'The assignment called for appropriately licensed, UK security-cleared personnel with the experience and judgement to work in a sensitive environment. Getting the right people in place required a clear understanding of the task from the outset.',
        ],
      },
      {
        heading: 'Pre-deployment',
        body: [
          'R5’s senior leadership went to site.',
          'We walked the ground with the client, carried out a risk assessment and worked through the practical demands of the assignment. That face-to-face involvement gave us the understanding to make informed decisions about staffing, supervision and how the security operation would run.',
          'We then developed the deployment plan and coordinated with the other parties involved. Mobilisation moved quickly, with the assessment shaping the operation from the start.',
        ],
      },
      {
        heading: 'The deployment',
        body: [
          'R5 brought together personnel selected for the specific requirements of the task, under a dedicated on-site team leader.',
          'Clear responsibilities, active supervision and direct support from senior management gave the team a firm operational structure. The client had an accountable lead on the ground, backed by R5’s management team throughout the assignment.',
          'We applied the same discipline and oversight we bring to our ongoing security operations: understand the environment, select the right people and give them the leadership and support to deliver.',
        ],
      },
      {
        heading: 'Post-deployment',
        body: [
          'The client’s feedback recognised the value of the initial site visit and the quality of the support delivered on site.',
          'They made clear that R5 would be their first call should a similar requirement arise again.',
        ],
      },
    ],
  },
  {
    slug: 'nike-after-dark-tour-london',
    title: 'Nike After Dark Tour London',
    standfirst: 'Rapid mobilisation for a major live event.',
    sector: 'Events & Production',
    line: 'operations',
    services: ['event-production-security'],
    image: 'eventTrusses',
    sections: [
      {
        heading: 'The request',
        body: [
          'With Nike After Dark Tour London approaching, the production team needed additional security support at short notice.',
          'The brief required R5 to protect high-value production equipment and support crews working across different parts of the event. They needed a team that could get organised quickly and work confidently within a busy event operation.',
        ],
      },
      {
        heading: 'Pre-deployment',
        body: [
          'R5 mobilised personnel and coordinated with the production team, Nike representatives and event organisers to establish how the deployment would run.',
          'With multiple teams operating across separate locations, clear communication was essential. We aligned security responsibilities and equipment movements with the production schedule, ensuring our teams understood their roles and how they fitted into the wider operation.',
          'That preparation gave the production team organised security support, ready to work alongside them on the ground.',
        ],
      },
      {
        heading: 'The deployment',
        body: [
          'R5 teams provided security across several event locations, protecting production assets and supporting crews throughout the operation.',
          'Our officers worked closely with production personnel as activity moved from setup into the live event and through to pack-down. Coordination between locations kept security support aligned with the changing demands of the schedule.',
          'This gave the production team the freedom to concentrate on delivering the event, with R5 managing the security responsibilities entrusted to us.',
        ],
      },
      {
        heading: 'Post-deployment',
        body: [
          'R5 maintained support through the secure return of the equipment. Our deployment concluded without reported security incidents.',
          'The client praised the team’s performance and said they would use R5 again, recognising a team that responded quickly, worked effectively alongside their crews and delivered throughout the assignment.',
        ],
      },
    ],
  },
  {
    slug: 'elizabeth-xi-bauer',
    title: 'Elizabeth Xi Bauer',
    standfirst: 'Protecting the art. Preserving the experience.',
    sector: 'Arts & Culture',
    line: 'operations',
    services: ['guarding-asset-protection'],
    image: 'gallery',
    sections: [
      {
        heading: 'The request',
        body: [
          'Elizabeth Xi Bauer approached R5 looking for a security service better suited to its gallery environment.',
          'The brief called for a careful balance: protect the artwork, support the gallery team and provide reassurance to visitors, while preserving the atmosphere of the space. With installations forming part of the room itself, the security presence needed to be considered, discreet and appropriate.',
        ],
      },
      {
        heading: 'Pre-deployment',
        body: [
          'We worked closely with the gallery to shape the service around its expectations and the requirements of its events.',
          'Professionalism, presentation and judgement were central to the approach. Our personnel needed to understand how to work within a sensitive creative environment, where the way security interacts with people matters as much as its presence.',
          'Clear communication with the gallery helped establish the right level of support for each booking, with attention to the details that make the service feel like a natural fit.',
        ],
      },
      {
        heading: 'The deployment',
        body: [
          'R5 provided a calm, approachable and attentive security presence, working closely alongside the gallery team.',
          'Our staff understood the balance between remaining alert and giving visitors the space to experience the artwork. Their conduct and communication helped security sit comfortably within the event, providing protection without imposing on its character.',
          'This was a bespoke service shaped around the people, the artwork and the setting. The gallery had professional support it could rely on, delivered by personnel who understood how to pitch their presence at the right level.',
        ],
      },
      {
        heading: 'Post-deployment',
        body: [
          'The gallery has praised R5’s communication, attention to detail and the professionalism of our staff, particularly their ability to deliver security appropriate to the environment.',
          'What began as a change of provider has developed into an ongoing partnership. R5 is now Elizabeth Xi Bauer’s chosen security partner for its events, earning that trust through consistent delivery and a clear understanding of what matters to the gallery.',
        ],
      },
    ],
  },
  {
    slug: 'raising-canes',
    title: 'Raising Cane’s',
    standfirst: 'Strategic security expertise behind a major UK expansion.',
    sector: 'Retail & Hospitality',
    line: 'both',
    services: ['security-risk-consultancy', 'guarding-asset-protection'],
    image: 'westEnd',
    sections: [
      {
        heading: 'The request',
        body: [
          'Bringing an established US restaurant brand into the UK requires an understanding of a new operating environment, different regulatory expectations and the challenges of each location.',
          'Raising Cane’s needed a security partner that could help inform major decisions, support its launch preparations and protect its growing property portfolio.',
          'R5’s role brings together strategic consultancy and sustained operational support, working closely with the brand’s UK and US teams throughout its market entry.',
        ],
      },
      {
        heading: 'Pre-deployment',
        body: [
          'Our consultancy began well ahead of opening.',
          'R5 undertook local security benchmarking, assessed site-specific risks and engaged with policing teams to build a detailed picture of the environments in which Raising Cane’s would operate.',
          'We translated that research into practical advice for the client’s planning and project teams. Our findings informed security recommendations, design considerations and preparations for future restaurant operations, helping Raising Cane’s make decisions grounded in local knowledge.',
          'This early involvement brought security expertise into the decisions shaping the UK rollout.',
        ],
      },
      {
        heading: 'The deployment',
        body: [
          'As the programme developed, R5’s consultancy expanded across some of the most consequential questions facing the launch.',
          'For the Piccadilly flagship, we developed the risk assessment, supporting evidence and security management plan for the legal team’s application for extended opening hours. The work connected the brand’s commercial ambitions with a detailed approach to managing the realities of a busy West End location.',
          'Our involvement also extends into grand-opening planning, engagement with Westminster and support with the associated permitting requirements. Working across client teams and external stakeholders, we help turn complex requirements into clear, practical next steps.',
          'Alongside this consultancy, R5 provides long-term manned security and asset protection for Raising Cane’s central London properties. That ongoing presence gives our advice a direct connection to conditions on the ground and provides continuity throughout the development programme.',
        ],
      },
      {
        heading: 'The next phase',
        body: [
          'R5’s partnership with Raising Cane’s continues as the business moves towards opening and expands its UK presence.',
          'The next phase will extend our security model nationally, helping protect customers and Crew as restaurants begin trading. Our consultancy and operational delivery will support a consistent standard across the UK estate, with the approach at each location shaped by its particular risks and requirements.',
          'Regular briefings and direct access to R5’s senior team will continue to support decisions as the business grows.',
          // CLIENT TO CONFIRM: "one of the best vendor service experienced" — likely "vendor services".
          'Client feedback has described R5’s service as one of the best vendor service experienced across the company. That trust provides the foundation for the next stage of the partnership: supporting Raising Cane’s transition from market entry to nationwide operations.',
        ],
      },
    ],
  },
  {
    slug: 'critical-infrastructure-penetration-testing',
    title: 'Critical infrastructure: Physical penetration testing',
    standfirst: 'Uncovering hidden risk. Turning operational evidence into clear decisions.',
    sector: 'Defence & Critical Infrastructure',
    line: 'consulting',
    services: ['physical-penetration-testing', 'security-risk-consultancy'],
    image: 'substation',
    sections: [
      {
        heading: 'The request',
        body: [
          'R5 was tasked with assessing the physical security of government critical infrastructure outside the UK.',
          'The brief was to establish how effectively existing security arrangements would resist a hostile actor seeking unauthorised access. The client needed an independent assessment that challenged assumptions, examined performance on the ground and provided a clear basis for strengthening protection.',
          'The assignment brought together R5’s specialist consultancy and the operational experience of our testing teams.',
        ],
      },
      {
        heading: 'Pre-deployment',
        body: [
          'We began by examining the threat environment, the information available to a potential hostile actor and the operational context of the assignment.',
          'That research informed a bespoke testing plan, with agreed objectives, boundaries and controls appropriate to the sensitive environment. Testing was authorised through the relevant channels, and R5 liaised with local authorities in advance to coordinate the activity and ensure any response could be managed safely.',
          'Within the client organisation, knowledge of the planned testing was restricted to the nominated point of contact. This preserved the opportunity to assess a realistic security response, while the necessary authorisation and external coordination remained in place.',
          'Our PASS framework provided the structure for the assessment, covering perimeter security, access controls, alarm systems, security and response, and surveillance. This allowed us to examine how the different elements of protection worked together and where further scrutiny was needed.',
        ],
      },
      {
        heading: 'The deployment',
        body: [
          'Experienced operatives conducted controlled physical penetration testing within the agreed scope, examining how security measures, procedures and personnel performed under realistic challenge.',
          'Their operational judgement was central to the work. Understanding how security functions in practice enabled the team to recognise weaknesses, assess responses and manage the exercise safely. Coordination with the relevant authorities supported the controlled handling of responses generated by the testing.',
          'Evidence gathered on site fed directly into the consultancy assessment. Each observation could then be considered in context: its relevance to a credible threat, the potential consequences and the action needed to address it.',
          'This connection between fieldwork and analysis gave the assessment its depth, grounding recommendations in the conditions our teams encountered.',
        ],
      },
      {
        heading: 'Post-deployment',
        body: [
          'R5 translated the assessment into a structured risk register and prioritised recommendations, giving the client a clear view of the security issues requiring attention.',
          'The reporting connected findings with practical mitigation options, helping decision-makers understand where action and investment would have the greatest value.',
          'The result was an evidence-based foundation for strengthening security: a clear understanding of the risks, their significance and the steps available to manage them.',
        ],
      },
    ],
  },
  {
    slug: 'complex-international-investigation',
    title: 'Complex international investigation',
    standfirst: 'Connecting intelligence. Establishing the evidence.',
    sector: 'International',
    line: 'consulting',
    services: ['corporate-investigations', 'intelligence-threat-monitoring'],
    image: 'casePapers',
    sections: [
      {
        heading: 'The request',
        body: [
          'R5 conducted a sustained covert investigation into suspected financial fraud spanning multiple jurisdictions.',
          'The task was to establish the connections between an individual, relevant transactions and associated assets. This required patient investigation, careful analysis and evidence capable of supporting a clear account of a complex international case.',
        ],
      },
      {
        heading: 'Planning and preparation',
        body: [
          'R5 brought together its investigative capability and the expertise of specialist private intelligence providers.',
          'The approach combined complementary sources of information, with enquiries focused on establishing what could be evidenced and how the different elements of the case connected.',
          'Discretion remained central throughout, protecting the confidentiality of the investigation as the work developed.',
        ],
      },
      {
        heading: 'The investigation',
        body: [
          'Over an extended period, R5 used surveillance and other investigative techniques to develop the evidence surrounding the subject’s activities.',
          'Working alongside intelligence partners, we examined transactions and assets, assessed their connections and built a progressively clearer picture of the case.',
          'Our role extended through the gathering, analysis and presentation of evidence. Material was organised into supporting exhibits and documented findings, making the connections understandable and the basis for those findings clear.',
          'That combination of operational investigation and analytical discipline helped turn a fragmented body of information into a coherent evidential account.',
        ],
      },
      {
        heading: 'The outcome',
        body: [
          'The investigation contributed to national press coverage of the case, bringing the findings to wider public attention.',
          'R5’s contribution included gathering, preparing and submitting evidence and supporting exhibits. The work gave those taking the investigation forward a documented foundation on which to examine the subject’s activities and the transactions and assets connected to them.',
          'The assignment demonstrates R5’s ability to sustain a complex international investigation and carry the work through from discreet intelligence gathering to clear, substantiated reporting.',
        ],
      },
    ],
  },
];

export const lineLabel = {
  consulting: 'Consultancy & Intelligence',
  operations: 'Security Operations',
  both: 'Consultancy & Operations',
} as const;

/** Cases relevant to a pillar page — "both" appears on each. */
export const casesFor = (line: 'consulting' | 'operations') =>
  caseStudies.filter((c) => c.line === line || c.line === 'both');
