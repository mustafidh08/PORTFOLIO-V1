import {
  Project,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  SocialLink,
  Testimonial
} from '../types';

export const PERSONAL_INFO = {
  name: 'Alex Morgan',
  title: 'Senior Full-Stack & Cloud Systems Engineer',
  tagline: 'Crafting resilient distributed backends and high-performance, accessible web interfaces.',
  shortBio:
    'Senior engineer with 7+ years of experience architecting large-scale TypeScript applications, cloud microservices, and design systems. Passionate about web performance, clean architecture, accessibility, and developer ergonomics.',
  location: 'San Francisco, CA (Open to Remote / Worldwide)',
  email: 'alex.morgan.dev@gmail.com',
  availableForHire: true,
  availabilityStatus: 'Available for Select Contracts & Senior Roles',
  yearsOfExperience: '7+',
  completedProjects: '48+',
  codeContributions: '2.4k+',
  githubUsername: 'alexmorgan-dev',
  linkedinUsername: 'alex-morgan-engineer',
  twitterUsername: 'alexmorgan_code',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com',
    iconName: 'Github',
    username: '@alexmorgan-dev',
    category: 'code',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    iconName: 'Linkedin',
    username: '/in/alex-morgan-engineer',
    category: 'social',
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    url: 'https://x.com',
    iconName: 'Twitter',
    username: '@alexmorgan_code',
    category: 'social',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:alex.morgan.dev@gmail.com',
    iconName: 'Mail',
    username: 'alex.morgan.dev@gmail.com',
    category: 'contact',
  },
];

export const BIOGRAPHY_SECTIONS = {
  headline: 'Engineering scalable solutions with architectural rigor and human-centered design.',
  paragraphs: [
    'I am a senior full-stack engineer who bridges the gap between deep infrastructure engineering and pixel-perfect, accessible user interfaces. Over the last 7 years, I have helped venture-backed startups and high-growth enterprise teams design distributed microservices, scale event-driven pipelines, and ship modern React web applications that serve millions of monthly active users.',
    'My core engineering philosophy centers on simplicity, type safety, observability, and web performance. I believe software should be blazingly fast on low-end mobile devices, fully accessible to people using assistive technology, and pleasant to maintain over decades.',
    'When I am not designing APIs or refining component systems, I write technical articles on distributed consistency models, contribute to open-source developer tooling, and mentor junior engineers entering the tech industry.',
  ],
  highlights: [
    {
      title: 'Performance Obsessed',
      description: 'Zero-bloat bundle strategies, Sub-100ms API responses, 99+ Core Web Vitals.',
      icon: 'Zap',
    },
    {
      title: 'Architectural Resilience',
      description: 'Distributed event sourcing, graceful degradation, zero-downtime CI/CD pipelines.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Inclusive & Accessible',
      description: 'WCAG 2.1 AA certified UI patterns, keyboard navigation, screen reader first approach.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Collaborative Leadership',
      description: 'Empowering cross-functional squads, design-system governance, and clean code reviews.',
      icon: 'Users',
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'nexus-flow',
    title: 'NexusFlow Engine',
    tagline: 'Visual Workflow Orchestration & Real-Time Event Engine',
    description:
      'A node-based distributed workflow builder allowing teams to trigger asynchronous distributed jobs, visualize state machines in real-time, and monitor telemetry pipelines.',
    fullStory:
      'NexusFlow was built to eliminate brittle custom cron jobs and monolithic microservice calls. It provides an intuitive canvas interface powered by WebGL/HTML5 Canvas and a Go/Node.js reactive streaming engine capable of processing 15,000 events/sec with sub-50ms node state transitions.',
    category: 'fullstack',
    featured: true,
    thumbnail:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'Redis Streams', 'Tailwind CSS', 'Docker', 'PostgreSQL'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    metrics: [
      { label: 'Event Throughput', value: '15k / sec' },
      { label: 'Latency', value: '< 42ms' },
      { label: 'Active Orgs', value: '120+' },
    ],
    keyFeatures: [
      'Interactive visual DAG node canvas with auto-routing bezier curves',
      'Fault-tolerant retry mechanisms with exponential backoff & dead-letter queues',
      'Real-time WebSocket telemetry debugger with playback timeline',
      'Fine-grained Role-Based Access Control (RBAC) and Audit Logging',
    ],
    architecturalHighlights: [
      'Stateless execution pods coordinated via Redis distributed locks',
      'Zero-allocation JSON parser for high-frequency telemetry events',
      'Virtual canvas rendering handling 2,000+ interactive nodes without frame drops',
    ],
  },
  {
    id: 'aura-intelligence',
    title: 'Aura Document Intelligence',
    tagline: 'Multi-Modal Neural Search & Automated Contract Extraction',
    description:
      'Enterprise semantic search platform that indexes unstructured PDFs, contracts, and codebases into a vector space with hybrid lexical and semantic retrieval.',
    fullStory:
      'Aura revolutionizes how legal and engineering teams query multi-gigabyte document repositories. By leveraging vector embeddings alongside BM25 keyword scoring, it extracts key clauses, entities, and citations with 99.4% precision.',
    category: 'ai',
    featured: true,
    thumbnail:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: ['Next.js', 'Python FastAPI', 'Vector DB', 'TypeScript', 'Tailwind CSS', 'Docker'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    metrics: [
      { label: 'Search Recall', value: '99.4%' },
      { label: 'Doc Indexing Speed', value: '450 pgs/min' },
      { label: 'Query Latency', value: '88ms' },
    ],
    keyFeatures: [
      'Hybrid dense & sparse vector retrieval with reciprocal rank fusion',
      'Dynamic PDF visual highlighter pointing directly to grounded source citations',
      'Batch ingestion pipeline with asynchronous OCR worker queues',
      'Secure on-premise deployment mode with full data sovereignty',
    ],
    architecturalHighlights: [
      'Streaming token responses via Server-Sent Events (SSE)',
      'Client-side PDF canvas caching for instant multi-page navigation',
      'Asynchronous task scheduling with Celery and Redis broker',
    ],
  },
  {
    id: 'hyperion-db',
    title: 'Hyperion DB Observability',
    tagline: 'Cloud-Native Database Profiler & Query Performance Analyzer',
    description:
      'Real-time metrics explorer for Postgres and MySQL clusters. Identifies slow queries, lock contention, buffer cache misses, and index bloat automatically.',
    fullStory:
      'Hyperion analyzes query execution plans (EXPLAIN ANALYZE) and visualizes index usage bottlenecks. It helps DBAs and backend engineers optimize queries before they cause production outages.',
    category: 'cloud',
    featured: true,
    thumbnail:
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: ['React', 'TypeScript', 'Go', 'PostgreSQL', 'Prometheus', 'Tailwind CSS', 'Recharts'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    metrics: [
      { label: 'Cost Reduction', value: '34%' },
      { label: 'Analyzed Queries', value: '25M+' },
      { label: 'Alerting Speed', value: 'Sub-second' },
    ],
    keyFeatures: [
      'Visual query plan tree with heatmap bottlenecks highlighting sequential scans',
      'Continuous index recommendation engine based on live query frequency',
      'Automated vacuum bloat detection & connection pool saturation monitoring',
      'Customizable threshold alerts sent to Slack, PagerDuty, and Webhooks',
    ],
    architecturalHighlights: [
      'Lightweight eBPF metric collectors with negligible CPU overhead (<0.5%)',
      'Time-series aggregation rollups using TimescaleDB hypertable partitioning',
    ],
  },
  {
    id: 'pulse-design-system',
    title: 'Pulse Design System',
    tagline: 'Headless, Accessible React Component Library & Token Studio',
    description:
      'An enterprise UI component library engineered with strict WCAG 2.1 AAA accessibility standards, tokenized theming, and zero runtime CSS overhead.',
    fullStory:
      'Built to unify product styling across 8 distinct web applications. Pulse includes 45+ headless primitives, exhaustive keyboard accessibility test suites, automated visual regression tests, and full dark/high-contrast mode support.',
    category: 'frontend',
    featured: false,
    thumbnail:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Radix Primitives', 'Storybook', 'Vite'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    metrics: [
      { label: 'Bundle Size', value: '4.2 kB gzip' },
      { label: 'A11y Coverage', value: '100% WCAG AA' },
      { label: 'Weekly Downloads', value: '18k' },
    ],
    keyFeatures: [
      'Fully keyboard navigable with automated focus traps and ARIA live regions',
      'Semantic token management system with Figma token sync integration',
      'Zero layout-shift (CLS) component architecture with responsive presets',
      'Comprehensive Storybook documentation with live interactive code sandbox',
    ],
    architecturalHighlights: [
      'Tree-shakeable micro-package architecture',
      'Automated axe-core accessibility unit tests in continuous integration',
    ],
  },
  {
    id: 'terraform-fleet',
    title: 'FleetOps Multi-Cloud Infrastructure',
    tagline: 'Infrastructure as Code Policy Engine & Self-Service Portal',
    description:
      'Internal developer platform (IDP) enabling engineering teams to provision ephemeral environments, Kubernetes clusters, and cloud databases within guardrails.',
    fullStory:
      'Designed to reduce DevOps ticket bottlenecks while maintaining strict security compliance. FleetOps translates high-level YAML service templates into validated Terraform plans with cost estimation prior to merge.',
    category: 'cloud',
    featured: false,
    thumbnail:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: ['TypeScript', 'Node.js', 'Terraform', 'Kubernetes', 'AWS', 'GCP', 'Tailwind CSS'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    metrics: [
      { label: 'Deploy Time', value: '5 mins' },
      { label: 'Monthly Cloud Savings', value: '$45,000' },
      { label: 'Environments', value: '350+' },
    ],
    keyFeatures: [
      'Ephemeral branch preview environments with automatic TTL teardown',
      'Infracost integration predicting cloud bill impact directly in GitHub PRs',
      'Open Policy Agent (OPA) compliance checks blocking non-compliant firewall rules',
      'Multi-region failover automation with health check DNS routing',
    ],
    architecturalHighlights: [
      'GitOps reconciler loop built with custom Kubernetes operators',
      'Secret rotation managed via HashiCorp Vault with dynamic ephemeral credentials',
    ],
  },
  {
    id: 'veloce-audio-studio',
    title: 'Veloce Audio Workstation',
    tagline: 'Low-Latency Collaborative In-Browser Digital Audio Workstation',
    description:
      'A WebAssembly-powered multi-track audio workstation featuring non-destructive audio editing, parametric EQ, and real-time multiplayer session syncing.',
    fullStory:
      'Veloce brings desktop-class digital audio processing directly to the browser. By leveraging the Web Audio AudioWorklet API and C++ compiled to WebAssembly, it achieves sub-10ms audio buffer latency.',
    category: 'frontend',
    featured: false,
    thumbnail:
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: ['React', 'TypeScript', 'WebAssembly (Wasm)', 'Web Audio API', 'WebSockets', 'Canvas 2D'],
    demoUrl: 'https://github.com',
    githubUrl: 'https://github.com',
    metrics: [
      { label: 'Audio Latency', value: '< 9ms' },
      { label: 'Max Tracks', value: '32 Simultaneous' },
      { label: 'Frame Rate', value: 'Solid 60 FPS' },
    ],
    keyFeatures: [
      'Custom Wasm DSP plugins for compression, reverb, and 8-band parametric EQ',
      'Real-time collaborative cursors and track arrangement lock sync',
      'High-performance canvas waveform renderer with peak cache buffers',
      'Non-destructive editing with infinite undo/redo history trees',
    ],
    architecturalHighlights: [
      'SharedArrayBuffer ring buffers for lock-free audio thread communication',
      'Custom binary audio protocol over WebSockets for rapid stem streaming',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Architecture & UI',
    description: 'Building accessible, fast, and scalable client-side interfaces.',
    iconName: 'Layout',
    skills: [
      { name: 'TypeScript', level: 95, experienceYears: '6 yrs', featured: true, tags: ['Language', 'Core'] },
      { name: 'React & React 19', level: 95, experienceYears: '7 yrs', featured: true, tags: ['Framework', 'Core'] },
      { name: 'Next.js & SSR', level: 90, experienceYears: '5 yrs', featured: true, tags: ['Framework'] },
      { name: 'Tailwind CSS', level: 95, experienceYears: '5 yrs', featured: true, tags: ['Styling'] },
      { name: 'Web Accessibility (a11y / WCAG AA)', level: 92, experienceYears: '5 yrs', featured: true, tags: ['Quality'] },
      { name: 'State Management (Zustand, Redux)', level: 90, experienceYears: '6 yrs', tags: ['Architecture'] },
      { name: 'Motion / Framer Motion', level: 88, experienceYears: '4 yrs', tags: ['Animation'] },
      { name: 'Web Performance & Core Web Vitals', level: 94, experienceYears: '6 yrs', tags: ['Optimization'] },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Distributed Systems',
    description: 'Designing resilient microservices, robust APIs, and streaming pipelines.',
    iconName: 'Server',
    skills: [
      { name: 'Node.js / Express / Fastify', level: 92, experienceYears: '7 yrs', featured: true, tags: ['Runtime', 'Core'] },
      { name: 'REST & GraphQL APIs', level: 94, experienceYears: '7 yrs', featured: true, tags: ['API Design'] },
      { name: 'Go (Golang)', level: 82, experienceYears: '3 yrs', featured: false, tags: ['Language'] },
      { name: 'Python & FastAPI', level: 85, experienceYears: '4 yrs', tags: ['Language', 'AI'] },
      { name: 'Microservices & Event Sourcing', level: 88, experienceYears: '5 yrs', tags: ['Architecture'] },
      { name: 'WebSockets & Realtime Streaming', level: 90, experienceYears: '5 yrs', tags: ['Networking'] },
      { name: 'Authentication (OAuth 2.0, JWT, OIDC)', level: 92, experienceYears: '6 yrs', tags: ['Security'] },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    description: 'Data modeling, query optimization, indexing, and caching layers.',
    iconName: 'Database',
    skills: [
      { name: 'PostgreSQL & SQL Tuning', level: 92, experienceYears: '6 yrs', featured: true, tags: ['Relational'] },
      { name: 'Redis (Caching & Pub/Sub)', level: 90, experienceYears: '5 yrs', featured: true, tags: ['In-Memory'] },
      { name: 'MongoDB / Document Stores', level: 85, experienceYears: '5 yrs', tags: ['NoSQL'] },
      { name: 'Vector DBs (Pinecone, pgvector)', level: 84, experienceYears: '2 yrs', tags: ['AI / Search'] },
      { name: 'Prisma / Drizzle ORM', level: 92, experienceYears: '4 yrs', tags: ['Data Layer'] },
    ],
  },
  {
    id: 'devops',
    title: 'Cloud, DevOps & Tooling',
    description: 'Deploying, monitoring, and scaling applications reliably in production.',
    iconName: 'Cloud',
    skills: [
      { name: 'Docker & Containerization', level: 90, experienceYears: '6 yrs', featured: true, tags: ['DevOps'] },
      { name: 'AWS (ECS, Lambda, S3, RDS)', level: 88, experienceYears: '5 yrs', featured: true, tags: ['Cloud'] },
      { name: 'Google Cloud Platform (GCP)', level: 86, experienceYears: '4 yrs', tags: ['Cloud'] },
      { name: 'Kubernetes (K8s)', level: 80, experienceYears: '3 yrs', tags: ['Orchestration'] },
      { name: 'CI/CD (GitHub Actions, GitLab)', level: 92, experienceYears: '6 yrs', tags: ['Automation'] },
      { name: 'Testing (Vitest, Jest, Playwright)', level: 92, experienceYears: '6 yrs', tags: ['Quality'] },
      { name: 'Linux & Bash Scripting', level: 88, experienceYears: '7 yrs', tags: ['Systems'] },
    ],
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead Full-Stack Engineer',
    company: 'Synthetix Cloud Labs',
    location: 'San Francisco, CA (Hybrid)',
    period: '2023 - Present',
    current: true,
    summary:
      'Lead a high-velocity squad of 8 engineers building enterprise workflow automation and cloud telemetry dashboards.',
    responsibilities: [
      'Architected real-time WebSocket state synchronizer, reducing end-to-end data latency by 68% for 40,000 daily active users.',
      'Spearheaded migration of core web client to TypeScript & React 19, improving build speeds by 40% and cutting bundle size by 35%.',
      'Established company-wide engineering guidelines for automated testing, code reviews, and accessibility compliance (WCAG 2.1 AA).',
      'Mentored 5 junior and mid-level engineers, fostering promotion to senior technical roles.',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Senior Software Engineer',
    company: 'Nexus Scale Technologies',
    location: 'Austin, TX (Remote)',
    period: '2021 - 2023',
    current: false,
    summary:
      'Engineered scalable microservices and internal design system components for high-growth SaaS platform.',
    responsibilities: [
      'Designed and delivered a centralized headless UI design system utilized across 6 customer-facing web applications.',
      'Refactored SQL queries and optimized PostgreSQL indexing strategies, saving over $3,500/month in cloud infrastructure costs.',
      'Implemented OAuth 2.0 and Single Sign-On (SSO) SAML integrations for Fortune 500 enterprise clients.',
      'Built automated CI/CD pipeline with GitHub Actions and Docker, reducing deployment cycle times from 45 minutes to 7 minutes.',
    ],
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Go', 'GraphQL', 'Kubernetes'],
  },
  {
    id: 'exp-3',
    role: 'Full-Stack Software Engineer',
    company: 'Aether Digital Studio',
    location: 'Seattle, WA',
    period: '2019 - 2021',
    current: false,
    summary:
      'Delivered custom web applications, e-commerce platforms, and interactive client portals for diverse global brands.',
    responsibilities: [
      'Built 15+ modern web applications with React, Node.js, and modern REST/GraphQL backends.',
      'Integrated Stripe and PayPal payment gateways with webhook retry verification and automated invoice generation.',
      'Maintained 99.9% uptime SLA across client production clusters and implemented automated Sentry error monitoring.',
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Tailwind CSS'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'B.S. in Computer Science',
    institution: 'University of California, Berkeley',
    period: '2015 - 2019',
    details: 'Focus on Distributed Systems, Algorithms, Computer Networking, and Human-Computer Interaction.',
    honors: 'Dean’s Honor List • Magna Cum Laude',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    credentialId: 'AWS-SAA-8492018',
  },
  {
    id: 'cert-2',
    name: 'Professional Cloud Architect',
    issuer: 'Google Cloud',
    date: '2024',
    credentialId: 'GCP-PCA-1928374',
  },
  {
    id: 'cert-3',
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Cloud Native Computing Foundation (CNCF)',
    date: '2022',
    credentialId: 'CKAD-993847',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote:
      'Alex is one of the rare engineers who combines deep distributed systems expertise with an obsession for UI craftsmanship. His work on our workflow engine transformed our development velocity.',
    author: 'Elena Rostova',
    title: 'VP of Engineering',
    company: 'Synthetix Cloud Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'test-2',
    quote:
      'Alex delivered our design system with impeccable attention to accessibility and performance. His architectural insights saved our team countless hours of rework.',
    author: 'Marcus Vance',
    title: 'Product Director',
    company: 'Nexus Scale',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
  },
];
