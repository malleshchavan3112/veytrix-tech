export const SITE_CONFIG = {
  name: 'Veytrix Tech',
  legalName: 'Veytrix Tech Studio',
  domain: 'https://veytrix.tech',
  tagline: 'Design + Technology + Product Thinking',
  description:
    'A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking.',
  email: 'intake@veytrix.tech',
  responseCopy: "We'll review your inquiry and get back to you shortly.",
  systemStatus: 'SYS // OPERATIONAL',
  triadMetadata: {
    core: 'VTX-CORE // 01',
    status: 'SYSTEM // OPERATIONAL',
    buildMode: 'BUILD MODE // ACTIVE',
    signal: 'SIGNAL // STABLE',
  },
  navLinks: [
    { label: 'Work', href: '/#work' },
    { label: 'Services', href: '/#services' },
    { label: 'Approach', href: '/#approach' },
    { label: 'Contact', href: '/#contact' },
  ],
  footerLinks: [
    { label: 'Selected Work', href: '/#work' },
    { label: 'Services Matrix', href: '/#services' },
    { label: 'Aahar Nearby Case Study', href: '/work/aahar-nearby' },
    { label: 'DateInvite Case Study', href: '/work/dateinvite' },
    { label: 'Privacy Architecture', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  verifiedBenchmarks: [
    {
      metric: '990+',
      label: 'Automated Tests Passed',
      context: 'Widget, unit & route guard regression suites',
      source: 'Aahar Nearby Flutter Repository',
    },
    {
      metric: 'Zero',
      label: 'Cross-User PII Exposure',
      context: 'Audited Supabase Row-Level Security policies',
      source: 'DateInvite Security Audit',
    },
    {
      metric: '100%',
      label: 'Automated Flow Simulation Pass',
      context: 'Creator-to-recipient reciprocal simulation',
      source: 'DateInvite E2E Simulation Suite',
    },
    {
      metric: 'Sub-Sec',
      label: 'Discovery Querying',
      context: 'Optimized Firestore compound spatial queries',
      source: 'Aahar Nearby Cloud Architecture',
    },
    {
      metric: 'Zero-Auth',
      label: 'Reciprocal Architecture',
      context: 'Cryptographic link hashing without registration churn',
      source: 'DateInvite Core Engine',
    },
    {
      metric: 'Multi-Role',
      label: 'Route Guard Isolation',
      context: 'Isolated Diner, Owner, and Admin routing state',
      source: 'Aahar Nearby Client Architecture',
    },
  ],
} as const;
