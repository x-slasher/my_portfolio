// ─────────────────────────────────────────────────
// All portfolio content lives here.
// Edit this file to update the website without
// touching any component code.
// ─────────────────────────────────────────────────

export const profile = {
  name: 'Nayeem Hasan',
  role: 'Senior Software Engineer',
  location: 'Dhaka, Bangladesh',
  email: 'nayeem.hasanewu@gmail.com',
  phone: '+880-1516149084',
  github: 'https://github.com/x-slasher',
  linkedin: 'https://linkedin.com/in/nayeem-hasan',
  cvFile: '/Nayeem_Hasan_CV.pdf',
  available: true,
  remote: true,
  bio: [
    `I'm a Senior Software Engineer based in Dhaka, Bangladesh, with over 8 years of experience designing and shipping production systems that prioritise performance, security, and reliability.`,
    `My work spans EU healthcare AI research (federated learning platforms for cancer treatment workflows), fintech (payment gateways, mobile banking APIs), and e-commerce (high-traffic platforms serving millions of users).`,
    `I delivered backend infrastructure for FLUTE — an active EU research project enabling privacy-preserving ML workflows across distributed European hospitals without raw clinical data ever leaving local premises.`,
    `Outside of work, I enjoy deep-diving into distributed systems papers, exploring new backend frameworks, and contributing to projects that push what software can do for society.`,
  ],
  stats: [
    { num: '8', suffix: '+', label: 'Years Exp.' },
    { num: '2', suffix: 'M+', label: 'Records Migrated' },
    { num: '65', suffix: '%', label: 'API Speedup' },
    { num: '2', suffix: '×', label: 'Traffic Capacity' },
  ],
  typewriterRoles: [
    'Senior Software Engineer',
    'Distributed Systems Architect',
    'Backend Platform Engineer',
    'Federated Learning Developer',
  ],
  infoRows: [
    { key: 'status',     value: '● open to work',      green: true },
    { key: 'location',   value: 'Dhaka, Bangladesh' },
    { key: 'remote',     value: 'yes',                  green: true },
    { key: 'experience', value: '8+ years' },
    { key: 'education',        value: 'B.Sc CSE' },
    { key: 'university', value: 'East West University' },
    { key: 'graduated',  value: 'Dec 2017' },
    { key: 'languages',  value: 'Bengali · English' },
    { key: 'english',    value: 'Full professional' },
    { key: 'domains',    value: 'Healthcare · Fintech' },
    { key: '',           value: 'E-Commerce · Research' },
  ],
}

export const experience = [
  {
    id: 'technovative',
    company: 'Technovative Solutions LTD',
    role: 'Senior Software Engineer',
    dates: 'May 2024 — May 2026',
    location: { code: 'bd gb', label: 'Remote' },
    current: false,
    stack: ['Python', 'FastAPI', 'Django', 'Celery', 'PostgreSQL', 'Docker', 'SPIRE', 'Envoy', 'Azure'],
    bullets: [
      'Engineered backend platform for two EU federated learning research projects (FLUTE & TRUMPET), building cloud platforms and on-premises Data Hub/Data Owner Nodes enabling privacy-preserving AI workflows.',
      'Built role-based dashboards and RESTful APIs serving Researchers, Data Hub operators, and Governance/Admin roles with audit-ready access control and study approval workflows.',
    ],
    extraBullets: [
      'Integrated HL7 FHIR and DICOM/Orthanc multimodal data pipelines standardising clinical datasets across hospital partners, supporting federated oncology workflows for NSCLC, HNC, and SBRT use cases.',
      'Implemented decentralised infrastructure security using mTLS with SPIRE/Envoy zero-trust architecture between cloud and on-premises hospital nodes.',
    ],
  },
  {
    id: 'shajgoj',
    company: 'Shajgoj Limited',
    role: 'Software Engineer',
    dates: 'Mar 2022 — Apr 2024',
    location: { code: 'bd', label: 'Dhaka' },
    current: false,
    stack: ['PHP', 'Laravel', 'Redis', 'MySQL', 'Node.js', 'MongoDB', 'Apache Solr', 'Neo4j'],
    bullets: [
      'Redeveloped the core e-commerce backend from scratch, achieving 2× current traffic capacity with architecture capable of handling 4× peak load, reducing average API response time by ~65%.',
      'Orchestrated migration of 2M+ orders, user records, and transactional data with zero downtime.',
    ],
    extraBullets: [
      'Implemented a graph-based recommendation engine (Neo4j) and Apache Solr-powered search, improving product discovery and conversion.',
      'Delivered business-critical discount, cart, and order logic across desktop, mobile, and CRM platforms.',
      'Deployed and optimised cloud infrastructure on Digital Ocean, implemented event-driven background job processing using Laravel Queues with Redis.',
    ],
  },
  {
    id: 'walletmix',
    company: 'Walletmix Limited',
    role: 'Full Stack Developer',
    dates: 'Feb 2021 — Feb 2022',
    location: { code: 'bd', label: 'Dhaka' },
    current: false,
    stack: ['PHP', 'Laravel', 'PostgreSQL', 'Redis', 'Vue.js', 'Docker'],
    bullets: [
      'Built a citizen engagement platform for Dhaka North City Corporation (DNCC), serving 241K+ citizen records across active and in-process service workflows.',
      'Developed mobile APIs for Robi Alpha subscriber platform with full backward compatibility.',
      'Maintained and extended a homegrown payment gateway platform providing infrastructure services to Bangladeshi businesses.',
    ],
    extraBullets: [],
  },
  {
    id: 'japan',
    company: 'Japan Marketing & Consultancy',
    role: 'Full Stack Developer',
    dates: 'Jul 2019 — Jan 2021',
    location: { code: 'bd jp', label: 'Remote' },
    current: false,
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'AWS', 'Docker'],
    bullets: [
      'Collaborated across a 6-person cross-cultural team (Bangladesh & Japan) to deliver a hotel booking platform for the Japanese market.',
      'Implemented server-side business logic and RESTful APIs for hotel registration, search, and booking. Deployed on AWS.',
    ],
    extraBullets: [],
  },
  {
    id: 'orange',
    company: 'Orange Business Development',
    role: 'Junior Software Engineer',
    dates: 'Oct 2018 — Jun 2019',
    location: { code: 'bd', label: 'Dhaka' },
    current: false,
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    bullets: [
      'Contributed to an a2i initiative platform streamlining website launches. Delivered features per project requirements across cross-functional teams.',
    ],
    extraBullets: [],
  },
  {
    id: 'dream71',
    company: 'Dream 71 Bangladesh Limited',
    role: 'Junior Software Engineer',
    dates: 'Jan 2018 — Sep 2018',
    location: { code: 'bd', label: 'Dhaka' },
    current: false,
    stack: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    bullets: [
      'Developed client-facing software as part of a collaborative backend team, following agile/scrum practices.',
    ],
    extraBullets: [],
  },
]

export const projects = [
  {
    id: 'flute',
    icon: '🧬',
    name: 'FLUTE',
    type: 'EU Research',
    typeStyle: 'eu',
    subtitle: 'Federated Learning & Multi-Party Computation',
    description:
      'Backend platform enabling privacy-preserving ML workflows across European hospitals. Integrated the FL Core and HL7 FHIR pipelines for multimodal clinical datasets. Uses SPIRE/Envoy mTLS zero-trust architecture across distributed hospital Data Hub nodes.',
    tags: ['Python', 'FastAPI', 'HL7 FHIR', 'DICOM', 'SPIRE', 'Azure'],
    link: 'https://www.fluteproject.eu',
  },
  {
    id: 'trumpet',
    icon: '🔬',
    name: 'TRUMPET',
    type: 'EU Research',
    typeStyle: 'eu',
    subtitle: 'TRUstworthy Multi-site Privacy Enhancing Technologies',
    description:
      'Built the cloud platform powering Researcher, Data Owner, and Governance dashboards. Designed the on-prem Data Owner Node covering dataset ingestion, FHIR-based data publishing, and study approvals. Validated across NSCLC, HNC & SBRT clinical use cases.',
    tags: ['Python', 'Django', 'PostgreSQL', 'Celery', 'Federated ML', 'RBAC'],
    link: 'https://trumpetproject.eu',
  },
  {
    id: 'shajgoj',
    icon: '🛍️',
    name: 'Shajgoj Platform',
    type: 'E-Commerce',
    typeStyle: 'ecommerce',
    subtitle: "Bangladesh's Leading Beauty E-Commerce",
    description:
      'Full backend and API redevelopment — 2× traffic capacity with 4× peak load architecture, 65% API response time improvement, and zero-downtime migration of 2M+ records. Built graph-based recommendation engine with Neo4j and Solr-powered search.',
    tags: ['Laravel', 'Redis', 'Neo4j', 'Apache Solr', 'Node.js', 'MySQL'],
    link: 'https://shop.shajgoj.com',
  },
  {
    id: 'bangladesh-national-portal',
    icon: '🏛️',
    name: 'Bangladesh National Portal',
    type: 'Gov · a2i',
    typeStyle: 'gov',
    subtitle: 'National e-Governance Digital Platform',
    description:
      "Contributed to Bangladesh's largest government digital platform, connecting 45,000+ government offices across all divisions, districts, upazilas and unions under a single centralised portal framework. The platform acts as a one-stop information gateway for citizens and government employees — eliminating the need to navigate multiple sources for public services. Delivered features to streamline website launches with essential onboarding information as part of the a2i (Access to Information) initiative.",
    tags: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'e-Governance'],
    link: 'https://bangladesh.gov.bd',
  },
  {
    id: 'shobar-dhaka',
    icon: '🏙️',
    name: 'Shobar Dhaka',
    type: 'Civic Tech',
    typeStyle: 'civic',
    subtitle: 'Dhaka North City Corporation — Citizen App',
    description:
      "Built the backend and mobile APIs for a one-stop citizen engagement platform serving Dhaka North City Corporation (DNCC). The platform allows 241K+ registered citizens to access DNCC services, report issues in their area directly to city administration, and track resolutions. Implemented OTP-based registration, geo-location tracking, complaint workflow management, and real-time issue reporting across the city's entire service network. Ensured full backward compatibility for the Robi Alpha subscriber platform mobile API integrations.",
    tags: ['PHP', 'Laravel', 'PostgreSQL', 'Redis', 'Mobile API', 'Vue.js'],
    link: 'https://www.shobardhaka.online',
  },
  {
    id: 'cholbe-robi',
    icon: '📱',
    name: 'Cholbe Robi',
    type: 'Fintech · Telecom',
    typeStyle: 'fintech',
    subtitle: 'Social Digital Entrepreneur Recharge Platform',
    description:
      'Maintained and extended the payment gateway infrastructure powering Cholbe Robi — a social entrepreneur recharge app by Robi Axiata that enables anyone to become a digital micro-entrepreneur by recharging Robi/Airtel numbers and earning a 1.75% commission per transaction. Supported 2,200+ brand promoters and was recognised with an Honourable Mention at the Bangladesh Innovation Award 2018. The platform onboarded 6,000+ Union Digital Centre (UDC) entrepreneurs across Bangladesh to deliver Robi services to rural communities.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Payment Gateway', 'Redis', 'Mobile API'],
    link: null,
  },
  {
    id: 'walletmix-gateway',
    icon: '💳',
    name: 'Walletmix Payment Gateway',
    type: 'Fintech',
    typeStyle: 'payment',
    subtitle: 'B2B Open Banking Payment Infrastructure',
    description:
      'Maintained and extended a homegrown payment gateway platform providing core payment infrastructure services to Bangladeshi businesses. The platform integrates with banks and mobile financial services to enable online transactions for merchants across Bangladesh. Handled bug fixes, feature rollouts, API stability, and system reliability — supporting payment flows for clients including Robi Axiata (Cholbe Robi) and other fintech partners.',
    tags: ['PHP', 'Laravel', 'PostgreSQL', 'MySQL', 'Docker', 'Redis'],
    link: null,
  },
  {
    id: 'jobradar',
    icon: '📡',
    name: 'JobRadar',
    type: 'Open Source',
    typeStyle: 'opensource',
    subtitle: 'Self-Hosted AI Job Aggregator',
    description:
      'Built a self-hosted job aggregator that automatically fetches listings daily from 8 platforms (We Work Remotely, Himalayas, Arc.dev, RemoteOK, Remotive, and more), deduplicates across sources, pre-filters by role and tech stack, and scores each job against the active CV using a keyword + tech-stack matching algorithm. Runs fully automated on a VPS via Celery Beat with a React dashboard for tracking applications.',
    tags: ['Python', 'FastAPI', 'Celery', 'Redis', 'SQLite', 'React', 'Docker'],
    link: 'https://github.com/x-slasher/jobradar',
  },
]

export const skills = {
  groups: [
    {
      label: 'Backend Languages',
      items: [
        { name: 'Python',              level: 'Expert',     pct: 90 },
        { name: 'PHP (Laravel)',        level: 'Expert',     pct: 92 },
        { name: 'JavaScript / Node.js', level: 'Proficient', pct: 78 },
      ],
    },
    {
      label: 'Frameworks & APIs',
      items: [
        { name: 'FastAPI',      level: 'Expert',     pct: 84 },
        { name: 'Django + DRF', level: 'Expert',     pct: 75 },
        { name: 'Express.js',   level: 'Proficient', pct: 80 },
      ],
    },
    {
      label: 'Databases & Caching',
      items: [
        { name: 'PostgreSQL',      level: 'Expert',     pct: 91 },
        { name: 'Redis',           level: 'Proficient', pct: 85 },
        { name: 'MongoDB + Neo4j', level: 'Proficient', pct: 78 },
      ],
    },
    {
      label: 'Cloud & Infrastructure',
      items: [
        { name: 'Azure',  level: 'Proficient', pct: 82 },
        { name: 'AWS',    level: 'Proficient', pct: 76 },
        { name: 'Docker', level: 'Expert',     pct: 88 },
      ],
    },
  ],
  extras: [
    'Federated Learning', 'HL7 FHIR', 'DICOM / Orthanc',
    'Zero-Trust Architecture', 'mTLS / SPIRE / Envoy', 'OAuth2',
    'Microservices', 'Event-Driven Architecture', 'Celery',
    'Apache Solr', 'REST API Design', 'Vue.js',
    'Apache JMeter', 'Pytest', 'Git',
    'Digital Ocean', 'Google Cloud',
  ],
}