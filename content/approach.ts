export interface ApproachStage {
  number: string;
  title: string;
  tagline: string;
  description: string;
  artifacts: string[];
  disciplines: string[];
}

export const APPROACH_STAGES: ApproachStage[] = [
  {
    number: '01',
    title: 'Discover & Synthesize',
    tagline: 'Deep problem framing & domain requirements',
    description:
      'We dismantle assumptions before writing code. We define technical boundaries, user mental models, domain constraints, and verifiable deliverables in rigorous documentation.',
    artifacts: ['Product Requirement Docs (PRD)', 'Domain Data Models', 'Feature Invariant Specifications'],
    disciplines: ['Product Thinking', 'System Architecture', 'Domain Modeling'],
  },
  {
    number: '02',
    title: 'Architect & Prototype',
    tagline: 'Ergonomic wireflows & tokenized design systems',
    description:
      'We map user navigation architecture, information density, and screen hierarchy. We build tokenized design systems (DESIGN.md) and validate layouts through Google Stitch visual synthesis.',
    artifacts: ['Information Architecture Maps', 'Atomic Design Tokens', 'High-Fidelity Stitch Screens'],
    disciplines: ['UX Architecture', 'Swiss Typography', 'Tokenized Design Systems'],
  },
  {
    number: '03',
    title: 'Engineer & Rigorously Test',
    tagline: 'Type-safe codebases & verifiable automated tests',
    description:
      'We implement production software using Next.js App Router, TypeScript, and Clean Architecture. Every core workflow is protected by unit tests, integration suites, and security boundary audits.',
    artifacts: ['Strict TypeScript Codebase', 'Automated Test Suites', 'Row-Level Security Policies'],
    disciplines: ['Full-Stack Engineering', 'TDD & Automated Verification', 'Defensive Security'],
  },
  {
    number: '04',
    title: 'Deploy & Observe',
    tagline: 'Edge delivery, zero-downtime CI/CD & performance telemetry',
    description:
      'We execute an 8-dimensional QA audit across accessibility (WCAG AA), Core Web Vitals, and responsive tiers before deploying to edge infrastructure with continuous monitoring.',
    artifacts: ['8-Dimensional QA Certification', 'Lighthouse Audit Reports', 'Global Edge CDN Deployment'],
    disciplines: ['DevOps & Edge CDN', 'Accessibility Audits', 'Performance Optimization'],
  },
];
