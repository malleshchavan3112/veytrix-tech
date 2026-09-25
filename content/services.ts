export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    index: '01',
    title: 'Website Development',
    tagline: 'High-speed, SEO-architected digital flagships',
    description:
      'Engineering bespoke marketing, corporate, and portfolio web experiences built for extreme speed, search visibility, and maximum conversion.',
    deliverables: [
      'Responsive Web Architecture',
      'Semantic Metadata Systems',
      'Automated CI/CD Pipelines',
      'Accessibility Audit (WCAG AA)',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Edge CDN'],
  },
  {
    id: 'web-applications',
    index: '02',
    title: 'Web Application Development',
    tagline: 'High-touch interactive platforms & client software',
    description:
      'Building responsive, rich, interactive web applications, client portals, single-page applications, and operational software with zero latency overhead.',
    deliverables: [
      'Role-Based Portals (RBAC)',
      'Real-Time State Synchronization',
      'Interactive State Machines',
      'Row-Level Security Architecture',
    ],
    technologies: ['React', 'Next.js App Router', 'Supabase', 'PostgreSQL', 'Framer Motion'],
  },
  {
    id: 'mobile-app-development',
    index: '03',
    title: 'Mobile App Development',
    tagline: 'Fluid native & cross-platform mobile ecosystems',
    description:
      'Architecting and developing high-fidelity native and cross-platform mobile applications for iOS and Android with 60fps/120fps fluid UI performance.',
    deliverables: [
      'iOS & Android Release Builds',
      'Offline-First Data Sync',
      'Hyperlocal Geolocation Services',
      'Targeted Push Notification Rails',
    ],
    technologies: ['Flutter & Dart', 'Clean Architecture', 'Firestore', 'OneSignal', 'Geolocator'],
  },
  {
    id: 'ui-ux-design',
    index: '04',
    title: 'UI/UX Design & Design Systems',
    tagline: 'Empathetic ergonomics & tokenized design languages',
    description:
      'End-to-end user experience and user interface design from foundational discovery to production-ready tokenized design systems.',
    deliverables: [
      'Comprehensive Design Systems (DESIGN.md)',
      'Information & Wireflow Architecture',
      'Figma & Stitch High-Fidelity Specs',
      'Contrast & Typography Calibrations',
    ],
    technologies: ['Figma', 'Google Stitch MCP', 'Design Tokens', 'Geist & Inter Typography'],
  },
  {
    id: 'graphic-design',
    index: '05',
    title: 'Graphic Design & Visual Identity',
    tagline: 'Distinctive brand iconography & digital collateral',
    description:
      'Crafting distinctive digital visual languages, brand typography, vector collateral, and high-impact visual assets that signal studio intelligence.',
    deliverables: [
      'Minimalist Vector Brand Marks',
      'Optimized SVG Iconography Suites',
      'OpenGraph Social Preview Assets',
      'Technical Architecture Schematics',
    ],
    technologies: ['Vector Geometry', 'SVGO Pipeline', 'Responsive Graphic Canvases'],
  },
  {
    id: 'ai-powered-solutions',
    index: '06',
    title: 'AI-Powered Solutions',
    tagline: 'Pragmatic LLM integration & operational automation',
    description:
      'Integrating pragmatic artificial intelligence into modern software workflows to solve tangible operational bottlenecks without superficial gimmickry.',
    deliverables: [
      'Semantic Search & RAG Pipelines',
      'Automated Data & Menu Extraction',
      'Intelligent Content Formatting',
      'Edge Inference Integrations',
    ],
    technologies: ['LLM APIs', 'Vector Embeddings', 'Python Microservices', 'Edge Workflows'],
  },
  {
    id: 'custom-software',
    index: '07',
    title: 'Custom Software & Distributed Systems',
    tagline: 'Scalable backend engines & proprietary database pipelines',
    description:
      'Engineering bespoke backend services, business logic automation, proprietary database architectures, and API middleware tailored to complex workflows.',
    deliverables: [
      'Type-Safe REST & GraphQL APIs',
      'Webhook Ingestion & Dispatchers',
      'PostgreSQL & PostGIS Schemas',
      'Resilient Background Workers',
    ],
    technologies: ['Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'Serverless'],
  },
  {
    id: 'product-development',
    index: '08',
    title: 'Product Development (0-to-1 Incubation)',
    tagline: 'Disciplined lifecycle from concept to production scale',
    description:
      'Guiding founders and enterprises through the entire product lifecycle from raw problem validation to launched, scalable digital products.',
    deliverables: [
      'Technical Product Specifications (PRD)',
      'Rapid MVP Architecture & Prototyping',
      'Staged Feature Rollout Roadmaps',
      'Pre-Launch Production QA Certification',
    ],
    technologies: ['Disciplined 8-Phase Lifecycle', 'Clean Architecture', 'TDD & Playwright'],
  },
];
