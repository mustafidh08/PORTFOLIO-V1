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
  name: 'Muhammad Azzam Mustafidh',
  preferredName: 'Mustafidh',
  nicknames: ['Mustafidh', 'Mustapit', 'James', 'James Bond', 'Jamus'],
  title: 'Aspiring AI/ML Engineer & IoT Builder',
  tagline: 'Learning by building real systems that create a positive impact through technology.',
  shortBio:
    'First-year Informatics Engineering student at Universitas Brawijaya (FILKOM, Class of 2030) and IoT builder with hands-on Project Management experience across smart agriculture, embedded access systems, and modern web architectures.',
  location: 'Malang, East Java, Indonesia (WIB, UTC+07:00)',
  birthInfo: 'Samarinda, April 23, 2008',
  email: 'azzammustafidh@gmail.com',
  availableForHire: true,
  availabilityStatus: 'Open for Freelance & Collaboration',
  currentStatus: 'First-year Informatics Engineering student, FILKOM, Universitas Brawijaya (SMUB Academic Pathway, Class of 2030)',
  previousSchool: 'Sekolah Impian / QBS, Bogor (Class 6, Graduated 2026)',
  lifeMindset: 'Terbentur, terbentur, terbentuk ("Struck, struck, shaped")',
  yearsOfExperience: '2+',
  completedProjects: '4+',
  codeContributions: '350+',
  githubUsername: 'mustafidh08',
  linkedinUsername: 'muhammad-azzam-mustafidh',
  instagramUsername: 'mustapitt',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/mustafidh08',
    iconName: 'Github',
    username: '@mustafidh08',
    category: 'code',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-azzam-mustafidh/',
    iconName: 'Linkedin',
    username: 'muhammad-azzam-mustafidh',
    category: 'social',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/mustapitt/',
    iconName: 'Instagram',
    username: '@mustapitt',
    category: 'social',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:azzammustafidh@gmail.com',
    iconName: 'Mail',
    username: 'azzammustafidh@gmail.com',
    category: 'contact',
  },
];

export const BIOGRAPHY_SECTIONS = {
  headline: 'Learning by engineering real systems that drive social impact and technological equity.',
  paragraphs: [
    'I am a first-year Informatics Engineering student at FILKOM, Universitas Brawijaya (Class of 2030, admitted via the SMUB Academic Transcript pathway), and an active freelance web developer, IoT builder, photographer, and videographer. Six years before graduating high school at Sekolah Impian in Bogor, I entered with weak academics and zero technical knowledge, often weighed down by doubt and fear of failure. Sekolah Impian pushed me far out of my comfort zone and entrusted me with leadership when I still doubted myself — cementing my lifelong mindset: "terbentur, terbentur, terbentuk" (struck, struck, shaped).',
    'My passion spans the entire AI spectrum — from multi-agent architectures and language model training to the underlying cloud/data infrastructure and humanoid robotics that physically interact with humans. I am particularly vocal about mitigating AI Colonialism, ensuring Indonesian regional languages and cultural data are not digitally erased by Western-centric training corpuses, as well as advancing Food Security connected to United Nations SDG 2 (Zero Hunger) through automated agriculture.',
    'As Project Manager and developer across initiatives like AgriSmart (acquired for corporate internship research by PT. AlKhwarizmi Kreatif Produktif) and the Islamic Smart Door, I translate complex hardware protocols and modern web frameworks into reliable, deployable solutions. I aim to be an agent of change — kind, thoughtful, resilient, and an all-rounder who builds with purpose.',
  ],
  highlights: [
    {
      title: 'Architectural Scalability & Performance',
      description:
        "I design with flexibility in mind — AgriSmart's pH/EC logic was built to adapt to any hydroponic crop, not just one, by adjusting target parameters rather than hardcoding them.",
      icon: 'Zap',
    },
    {
      title: 'System Reliability & Resilience',
      description:
        "I build in fail-safes before failures happen — AgriSmart's pump and sensor logic includes fail-safe handling to prevent damage to the crop system if a reading goes out of range.",
      icon: 'ShieldCheck',
    },
    {
      title: 'Maintainability & Code Quality',
      description:
        'I document before I build — from writing a full PRD for the SLB Tunas Harapan website (Next.js, Sanity.io, Vercel) to structuring BarFin’s codebase as its sole developer.',
      icon: 'HeartHandshake',
    },
    {
      title: 'Security & Compliance',
      description:
        'I treat security as part of the plan, not an afterthought — I ran an OWASP Top 10:2025 evaluation on the SLB Tunas Harapan site and prioritized remediation steps before considering it done.',
      icon: 'Users',
    },
  ],
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'islamic-smart-door',
    title: 'Islamic Smart Door (ISD)',
    tagline: 'ESP32 Smart Access Control with Multi-Modal Auth & Islamic Utilities',
    description:
      'An ESP32-based smart access control system combining NFC (PN532), Telegram remote control, Web PIN dashboard, and offline voice commands (DF2301QG). Features automatic prayer time scheduling via Kemenag API, NTP synchronization, ibadah reminders on a 20×4 LCD, and Google Assistant voice automation via SinricPro. Built with total hardware production cost under Rp 500.000.',
    fullStory:
      'It all began when Mustafidh was in high school at Sekolah Impian. As the leader of an IoT group, he and his team were challenged to build something for their school’s very first exhibition — a landmark milestone for the institution. The team built a "Smart Door" unlockable by voice, phone, and card. Not long before the exhibition day, the project nearly failed to make it: a teacher felt it lacked a strong enough Islamic element to represent Sekolah Impian’s identity and initially threatened to bar it from the exhibition entirely.\n\nUnder intense time pressure, Mustafidh and his team innovated rapidly — layering deep Islamic features onto the working system they had already built, rather than starting from scratch. The result: instead of being pulled, the revised Islamic Smart Door became one of the most highlighted projects at the event. This experience became the foundation for the mature version developed from January–June 2026, featuring prayer scheduling, ibadah reminders, dzikir guidance, and voice assistant integration while scoring a perfect 100/100 across all four Google Lighthouse categories.',
    category: 'iot',
    featured: true,
    thumbnail:
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: [
      'ESP32',
      'NFC / PN532',
      'Telegram Bot API',
      'DF2301QG Voice',
      'Kemenag API',
      'SinricPro',
      'Google Assistant',
      'Next.js',
    ],
    demoUrl: 'https://isd-overview.vercel.app/en',
    githubUrl: 'https://github.com/mustafidh08/ISD-Overview-website',
    metrics: [
      { label: 'Lighthouse Performance', value: '100/100' },
      { label: 'Largest Contentful Paint', value: '0.4s' },
      { label: 'Best Practices Score', value: '100/100' },
      { label: 'Production Cost', value: '< Rp 500.000' },
    ],
    keyFeatures: [
      '4-Way Access Modalities: NFC card (PN532), Telegram bot remote unlock, Web PIN dashboard, and offline voice command (DF2301QG)',
      'Islamic Utility Integration: Real-time prayer scheduling via Kemenag API + NTP synchronization with audio/LCD reminders',
      '20x4 LCD Display: Visual feedback for prayer countdowns, ibadah reminders, and system authentication status',
      'Telegram Bot Ecosystem: Direct door trigger, security alerts, and daily dzikir guidance',
      'SinricPro Cloud: Seamless linkage to Google Assistant smart home ecosystem',
      'High-Efficiency Hardware: Built with total production cost under Rp 500.000',
    ],
    architecturalHighlights: [
      'Non-blocking event loop on ESP32 handling asynchronous sensor interrupts from NFC and Voice modules without latency',
      'Kemenag API schedule caching in flash memory to ensure continuous prayer alert availability during network drops',
      'Perfect 100/100 Lighthouse audit achieved by removing mixed-content requests and eliminating third-party tracking scripts',
    ],
  },
  {
    id: 'agrismart',
    title: 'AgriSmart (Tim Al-Jazari)',
    tagline: 'IoT & AI-Powered Automated Hydroponic Monitoring with Dynamic Crop Profiles',
    description:
      'An automated IoT and AI-based hydroponic management system addressing food security and SDG 2 (Zero Hunger). Features continuous pH and EC monitoring, automated peristaltic dosing pumps, fail-safe trip protections, and real-time Telegram alerts. Universally configurable for any hydroponic plant by adjusting target pH and EC parameters.',
    fullStory:
      'Built initially by Tim Al-Jazari under Mustafidh’s leadership as Project Manager, AgriSmart tackled one of the most critical 21st-century challenges: sustainable food security (SDG 2: Zero Hunger). The team engineered an integrated closed-loop system combining precision hardware, dynamic chemical parameter adjustments, and real-time telemetry.\n\nFollowing completion, the system’s commercialization feasibility caught the attention of PT. AlKhwarizmi Kreatif Produktif, which acquired the project and screened candidates for a dedicated development internship. Mustafidh was selected to lead the continued engineering phase, refining the firmware across multiple iterations, evaluating commercialization pathways, and deploying a publicly accessible monitoring platform that achieves a perfect 100/100 in Lighthouse Performance and Accessibility.',
    category: 'iot',
    featured: true,
    thumbnail:
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: [
      'ESP32',
      'IoT Sensors (pH/EC)',
      'AI / Machine Learning',
      'MQTT',
      'Peristaltic Pumps',
      'Telegram API',
      'Next.js',
      'Vercel',
    ],
    demoUrl: 'https://agri-smart-kappa.vercel.app/',
    githubUrl: 'https://github.com/mustafidh08/agri-smart',
    metrics: [
      { label: 'Lighthouse Performance', value: '100/100' },
      { label: 'Largest Contentful Paint', value: '0.8s' },
      { label: 'Accessibility Score', value: '100/100' },
      { label: 'Fail-Safe Logic', value: '100% Automated' },
    ],
    keyFeatures: [
      'Universal Crop Adaptation: Dynamic pH/EC target matrices allowing operation with any hydroponic plant by adjusting parameters',
      'Autonomous Dosing: Automated peristaltic nutrient and pH regulation pumps triggered by real-time sensor threshold calculus',
      'System Fail-Safe Guard: Prevents over-dosing and halts actuators if sensor readouts detect out-of-boundary anomalies',
      'Real-Time Telemetry: Low-latency MQTT reporting to cloud dashboard and instant Telegram alert notifications',
      'Corporate Acquisition: Acquired by PT. AlKhwarizmi Kreatif Produktif for corporate research and internship development',
    ],
    architecturalHighlights: [
      'Edge-computed calibration routines smoothing sensor noise from analog pH/EC probes',
      'Decoupled MQTT broker telemetry with offline retry queues',
      'Awarded Recognition for Technological Innovation by PT AlKhwarizmi Kreatif Produktif (ID: 001/SERT/KHW/II/2026)',
    ],
  },
  {
    id: 'barfin',
    title: 'BarFin (formerly KeuanganSyariah.id)',
    tagline: 'Zero-Install Browser-Based Financial Assistant referencing OJK DES Halal Standards',
    description:
      'BarFin is a personal finance assistant that helps users pursue financial freedom without violating Sharia principles. Designed to be lightweight, running directly in the browser with no installation required. Investment recommendations reference OJK’s official Sharia Securities List (Daftar Efek Syariah / DES) to ensure the halal compliance of instruments.',
    fullStory:
      'Developed by Mustafidh as both Project Manager and sole developer, BarFin bridges modern web development ergonomics with ethical Sharia financial principles. The tool operates completely in-browser with zero install friction, allowing users to track assets, plan cash flow, and filter investments against OJK’s official Daftar Efek Syariah (DES) to ensure full halal compliance.\n\nThrough obsessive client-side optimization, BarFin achieves a 99/100 Lighthouse Performance score, 0.7s LCP, and zero Cumulative Layout Shift, providing an instantaneous, trustworthy experience on both mobile devices and desktops.',
    category: 'fullstack',
    featured: true,
    thumbnail:
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OJK DES Data', 'Vercel'],
    demoUrl: 'https://bar-fin-overview.vercel.app/',
    githubUrl: 'https://github.com/mustafidh08/BarFin-Overview',
    metrics: [
      { label: 'Lighthouse Performance', value: '99/100' },
      { label: 'Largest Contentful Paint', value: '0.7s' },
      { label: 'Cumulative Layout Shift', value: '0' },
      { label: 'Best Practices', value: '100/100' },
    ],
    keyFeatures: [
      'Zero-Installation Architecture: Runs smoothly in modern browsers without app store friction',
      'Halal Investment Verification: Direct alignment with OJK’s official Daftar Efek Syariah (DES)',
      'Personal Net Worth Tracker: Visualizes assets, liabilities, and debt-free timelines',
      'High-Speed UI: Built with responsive Tailwind CSS, achieving 99 Performance and 0 Cumulative Layout Shift',
    ],
    architecturalHighlights: [
      'Client-side data persistence ensuring user financial privacy never leaves their personal device',
      'Strict TypeScript interfaces structuring financial calculations and halal ratio validations',
    ],
  },
  {
    id: 'slb-tunas-harapan',
    title: 'SLB Tunas Harapan School Website',
    tagline: 'Accessible Institutional Portal with Headless CMS & OWASP Top 10:2025 Audit',
    description:
      'Launched the SLB Tunas Harapan school website on Vercel, including full DNS configuration via Jagoan Hosting for a verified .sch.id domain (via PANDI). Features a complete PRD, Next.js, Sanity.io, and a prioritized OWASP Top 10:2025 security remediation evaluation.',
    fullStory:
      'SLB Tunas Harapan required an official, accessible digital home to represent its special education community. Mustafidh oversaw the full production pipeline from initial Product Requirement Document (PRD) to official domain registration.\n\nThe project involved configuring complex DNS routing for a regulated .sch.id domain with PANDI and Jagoan Hosting, integrating Sanity.io as a headless CMS for seamless administrative updates, and executing a rigorous OWASP Top 10:2025 security assessment with prioritized remediation. The resulting website achieved a perfect 100/100 in Lighthouse Performance, Best Practices, and SEO.',
    category: 'fullstack',
    featured: true,
    thumbnail:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop&q=80',
    ],
    technologies: [
      'Next.js',
      'Sanity.io',
      'TypeScript',
      'Tailwind CSS',
      'Vercel',
      'PANDI DNS (.sch.id)',
      'OWASP Top 10:2025',
    ],
    demoUrl: 'https://slbtunasharapan.sch.id/',
    githubUrl: 'https://github.com/mustafidh08/Web-SLB-Tunas-Harapan-Samarinda',
    metrics: [
      { label: 'Lighthouse Performance', value: '100/100' },
      { label: 'Largest Contentful Paint', value: '0.8s' },
      { label: 'Cumulative Layout Shift', value: '0' },
      { label: 'Best Practices', value: '100/100' },
    ],
    keyFeatures: [
      'Official .sch.id Accreditation: Full DNS routing and verification via PANDI and Jagoan Hosting',
      'Headless Content Management: Integrated Sanity.io studio allowing school administrators to publish announcements',
      'OWASP Top 10:2025 Hardened: Evaluated for security vulnerabilities and strict remediation',
      'Inclusive Accessibility: High contrast ratios, accessible typography, and keyboard navigation for special education audiences',
    ],
    architecturalHighlights: [
      'Structured PRD (Product Requirement Document) and SOW establishing clear development velocity',
      'Automated CI/CD deployments through Vercel with preview environments and 0.4s FCP',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ai-systems',
    title: 'AI, Machine Learning & Systems',
    description: 'Multi-agent frameworks, language models, data structures, and AI infrastructure.',
    iconName: 'Server',
    skills: [
      {
        name: 'Python',
        level: 88,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['Language', 'AI/ML', 'Scripting'],
      },
      {
        name: 'Multi-Agent Architectures',
        level: 85,
        experienceYears: '1 yr',
        featured: true,
        tags: ['Google Cloud', 'Multi-Agent', 'AI'],
      },
      {
        name: 'Machine Learning Basics',
        level: 82,
        experienceYears: '1 yr',
        featured: true,
        tags: ['Dicoding', 'AI', 'Foundations'],
      },
      {
        name: 'Prompt & LLM Engineering',
        level: 86,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['LLMs', 'Evaluation'],
      },
      {
        name: 'Data Structures & Algorithms',
        level: 80,
        experienceYears: '1 yr',
        featured: false,
        tags: ['CS Core', 'Informatics'],
      },
    ],
  },
  {
    id: 'iot-hardware',
    title: 'IoT, Hardware & Embedded Systems',
    description: 'Microcontrollers, sensor integration, telemetry protocols, and automated actuators.',
    iconName: 'Cloud',
    skills: [
      {
        name: 'ESP32 & C/C++ Firmware',
        level: 92,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['Hardware', 'Embedded', 'Core'],
      },
      {
        name: 'NFC / PN532 & RFID',
        level: 90,
        experienceYears: '1 yr',
        featured: true,
        tags: ['Protocols', 'Auth', 'Access'],
      },
      {
        name: 'Voice Modules (DF2301QG)',
        level: 88,
        experienceYears: '1 yr',
        featured: false,
        tags: ['Hardware', 'Offline Voice'],
      },
      {
        name: 'Analog Sensors (pH / EC Probes)',
        level: 85,
        experienceYears: '1 yr',
        featured: true,
        tags: ['Sensors', 'Hydroponics'],
      },
      {
        name: 'MQTT & Telegram Bot APIs',
        level: 90,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['Telemetry', 'Protocols', 'Alerts'],
      },
      {
        name: 'SinricPro & Google Assistant',
        level: 88,
        experienceYears: '1 yr',
        featured: false,
        tags: ['IoT Cloud', 'Smart Home'],
      },
    ],
  },
  {
    id: 'frontend-web',
    title: 'Frontend Architecture & Web',
    description: 'Modern component frameworks, design systems, and 100/100 Lighthouse performance.',
    iconName: 'Layout',
    skills: [
      {
        name: 'Next.js & React',
        level: 90,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['Framework', 'SSR', 'Core'],
      },
      {
        name: 'TypeScript',
        level: 88,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['Language', 'Type-Safety'],
      },
      {
        name: 'Tailwind CSS',
        level: 94,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['UI', 'Styling', 'Responsive'],
      },
      {
        name: 'Sanity.io (Headless CMS)',
        level: 85,
        experienceYears: '1 yr',
        featured: false,
        tags: ['CMS', 'Content Architecture'],
      },
      {
        name: 'Web Performance & Core Web Vitals',
        level: 96,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['100/100 Audits', 'Zero CLS', 'Lighthouse'],
      },
      {
        name: 'WCAG 2.1 AA Accessibility',
        level: 90,
        experienceYears: '1 yr',
        featured: false,
        tags: ['a11y', 'Inclusive Design'],
      },
    ],
  },
  {
    id: 'cloud-devops',
    title: 'DevOps, Security & Media Production',
    description: 'Deployment pipelines, OWASP security, DNS configuration, and creative media.',
    iconName: 'Database',
    skills: [
      {
        name: 'Vercel & PANDI DNS (.sch.id)',
        level: 92,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['Deployment', 'DNS', 'Domain Routing'],
      },
      {
        name: 'OWASP Top 10:2025 Evaluation',
        level: 85,
        experienceYears: '1 yr',
        featured: true,
        tags: ['Security', 'Remediation', 'Audit'],
      },
      {
        name: 'Git & GitHub Workflows',
        level: 88,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['Version Control', 'CI/CD'],
      },
      {
        name: 'UI/UX Design (Figma)',
        level: 85,
        experienceYears: '2 yrs',
        featured: false,
        tags: ['Design', 'Wireframing'],
      },
      {
        name: 'Photography & Videography',
        level: 92,
        experienceYears: '3 yrs',
        featured: true,
        tags: ['Media', 'Visual Storytelling'],
      },
      {
        name: 'Project Management & PRD Writing',
        level: 92,
        experienceYears: '2 yrs',
        featured: true,
        tags: ['Leadership', 'Planning', 'Governance'],
      },
    ],
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'agrismart-internship',
    role: 'Project Manager — AgriSmart Internship',
    company: 'PT. AlKhwarizmi Kreatif Produktif',
    location: 'Bogor, Indonesia (On-site)',
    period: 'April 2026 – May 2026',
    current: false,
    summary:
      'Led the corporate development phase of AgriSmart, an automated IoT and AI-based hydroponic system tackling food security, following the acquisition of Tim Al-Jazari’s prototype.',
    responsibilities: [
      'Selected as Project Manager after company acquisition of Tim Al-Jazari’s prototype, leading cross-functional engineering execution.',
      'Coordinated firmware iterations for automated pH/EC sensor calibration, peristaltic pump control, and fail-safe safety trip logic.',
      'Engineered telemetry and real-time alerting via MQTT protocols and Telegram Bot APIs.',
      'Created commercialization feasibility decks and led product deployment to public web availability.',
    ],
    technologies: [
      'IoT',
      'AI / Machine Learning',
      'ESP32',
      'MQTT',
      'Smart Hydroponics',
      'Telegram API',
      'Next.js',
    ],
  },
  {
    id: 'isd-project-manager',
    role: 'Project Manager — Islamic Smart Door (ISD)',
    company: 'Sekolah Impian / QBS',
    location: 'Bogor, Indonesia (On-site)',
    period: 'January 2026 – June 2026',
    current: false,
    summary:
      'Spearheaded the design, rapid hardware pivot, and end-to-end development of an ESP32 multi-modal smart access control system with integrated Islamic utilities.',
    responsibilities: [
      'Led development from concept through hardware prototyping to public showcase at the school’s inaugural exhibition.',
      'Integrated 4 concurrent access modules: NFC (PN532), Telegram remote bot, Web PIN dashboard, and offline voice commands (DF2301QG).',
      'Reversed initial exhibition disqualification by rapidly architecting custom Islamic features (prayer scheduling, Kemenag API, dzikir guidance, and SinricPro Google Assistant integration) under extreme time constraints.',
      'Achieved total hardware bill-of-materials cost under Rp 500.000 while maintaining 100/100 Lighthouse web scores.',
    ],
    technologies: [
      'ESP32',
      'NFC / PN532',
      'Telegram Bot API',
      'DF2301QG Voice',
      'Kemenag API',
      'SinricPro',
      'Google Assistant',
    ],
  },
  {
    id: 'osqbs-treasurer',
    role: 'Treasurer (Bendahara)',
    company: 'OSQBS — Sekolah Impian Student Organization',
    location: 'Bogor, Indonesia (On-site)',
    period: '2024 – 2026',
    current: false,
    summary:
      'Managed budgeting, fiscal governance, and funds allocation for all student organization activities across the boarding school community.',
    responsibilities: [
      'Directed budgeting and fiscal allocations for school-wide student initiatives and major events.',
      'Prepared comprehensive financial accountability and audit reports covering over 100+ students in the boarding school.',
      'Strengthened financial transparency, cash flow tracking, and organizational resource allocation.',
    ],
    technologies: ['Financial Reporting', 'Budget Governance', 'Fund Allocation', 'Organizational Leadership'],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'brawijaya-university',
    degree: 'B.S. in Informatics Engineering (Teknik Informatika)',
    institution: 'FILKOM, Universitas Brawijaya',
    period: '2026 – Present',
    details:
      'Class of 2030. Admitted via the prestigious SMUB Academic Transcript pathway. Focus areas include Artificial Intelligence, Machine Learning, Multi-Agent Systems, and Distributed Computing.',
    honors: 'SMUB Academic Transcript Pathway',
  },
  {
    id: 'sekolah-impian',
    degree: 'High School Diploma (Class 6)',
    institution: 'Sekolah Impian / QBS, Bogor',
    period: 'Graduated 2026',
    details:
      '6-year intensive boarding school education developing character, leadership, IoT engineering, and technology problem-solving.',
    honors: 'Valedictorian Graduation Speaker',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'cert-agrismart-innovation',
    name: 'Award of Recognition — Technological Innovation (AgriSmart Smart Farming System)',
    issuer: 'PT AlKhwarizmi Kreatif Produktif',
    date: 'Feb 2026',
    credentialId: '001/SERT/KHW/II/2026',
  },
  {
    id: 'cert-multi-agent',
    name: 'Deploy Multi-Agent Architectures',
    issuer: 'Google Cloud',
    date: '2026',
    credentialId: '8d06cff3-829f-4861-8f7c-65dea454e7f6',
  },
  {
    id: 'cert-dicoding-ai',
    name: 'Learning the Basics of AI (Memulai Pemrograman dengan Python & AI)',
    issuer: 'Dicoding Indonesia',
    date: '2026',
    credentialId: 'L4PQW6Q87PO1',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'Mustafidh demonstrated remarkable leadership and technical agility. When acquired for corporate research, he adapted AgriSmart’s firmware to universal crop standards and delivered flawless web monitoring.',
    author: 'Research & Innovation Team',
    title: 'Technology Division',
    company: 'PT. AlKhwarizmi Kreatif Produktif',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'testimonial-2',
    quote:
      'Under intense time pressure before our school’s first exhibition, Mustafidh innovated rapidly with his team to layer Islamic scheduling and voice guidance onto the Smart Door, turning potential rejection into the event’s proudest highlight.',
    author: 'Faculty Advisor',
    title: 'IoT & Technology Division',
    company: 'Sekolah Impian / QBS Bogor',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
  },
];
