# Architectural & Strategic Decision Records (ADR) — Veytrix Tech

> **Document Type:** Architecture & Strategy Decision Log  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 0 — Documentation  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [PROJECT_STATUS.md](file:///e:/VEYTRIX%20TECH/PROJECT_STATUS.md), [IMPLEMENTATION_PLAN.md](file:///e:/VEYTRIX%20TECH/IMPLEMENTATION_PLAN.md), [TECH_STACK.md](file:///e:/VEYTRIX%20TECH/TECH_STACK.md)

---

## Decision Index

- [ADR-001: Strict Sequential Workflow Lifecycle](#adr-001-strict-sequential-workflow-lifecycle)
- [ADR-002: Fact-Grounded Portfolio & Anti-Fabrication Rule](#adr-002-fact-grounded-portfolio--anti-fabrication-rule)
- [ADR-003: Hero Positioning Hierarchy](#adr-003-hero-positioning-hierarchy)
- [ADR-004: Visual Foundation: Light Editorial Canvas](#adr-004-visual-foundation-light-editorial-canvas)
- [ADR-005: Hybrid Routing Architecture for SEO & Immersion](#adr-005-hybrid-routing-architecture-for-seo--immersion)
- [ADR-006: Interactive Accent: Selective Precision Blue](#adr-006-interactive-accent-selective-precision-blue)
- [ADR-007: Typography System: Geist + Inter + JetBrains Mono](#adr-007-typography-system-geist--inter--jetbrains-mono)
- [ADR-008: Brand Mark: Geometric V Monogram + Wordmark](#adr-008-brand-mark-geometric-v-monogram--wordmark)
- [ADR-009: Technology Architecture: Next.js App Router + TypeScript](#adr-009-technology-architecture-nextjs-app-router--typescript)
- [ADR-010: Lead Intake: Single Structured Inquiry Form](#adr-010-lead-intake-single-structured-inquiry-form)
- [ADR-011: Performance Metrics Declared as Engineering Targets](#adr-011-performance-metrics-declared-as-engineering-targets)
- [ADR-012: Phase 2 Design System & Visual Architecture Specifications](#adr-012-phase-2-design-system--visual-architecture-specifications)
- [ADR-013: Phase 2 Visual Refinement: Card Reduction & Editorial Storytelling](#adr-013-phase-2-visual-refinement-card-reduction--editorial-storytelling)
- [ADR-014: Phase 3 Pre-Development Handoff Corrections & Telemetry Sanitization](#adr-014-phase-3-pre-development-handoff-corrections--telemetry-sanitization)
- [ADR-015: Phase 5 Full-Stack Implementation & Next.js App Router Architecture](#adr-015-phase-5-full-stack-implementation--nextjs-app-router-architecture)

---

### ADR-001: Strict Sequential Workflow Lifecycle
- **Status**: Accepted / Project-Owner Approved
- **Decision**: Enforce an 8-phase sequential delivery lifecycle:
  `Documentation → UX Architecture → UI/UX Design → Google Stitch via MCP → Design Review → Implementation → Functionality → QA → Deployment`.
  No phase may begin until its predecessor's exit criteria are validated.

---

### ADR-002: Fact-Grounded Portfolio & Anti-Fabrication Rule
- **Status**: Accepted / Project-Owner Approved
- **Decision**: Strictly prohibit the creation of fictional clients, testimonials, revenues, or outcomes. Case studies must be grounded in actual, verified product repositories (specifically Aahar Nearby at `e:\aahar_nearby` and DateInvite at `e:\DateInvite`).

---

### ADR-003: Hero Positioning Hierarchy
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Lock the hero section headline and supporting statement hierarchy:
  - **Primary Headline**: *"Design + Technology + Product Thinking"*
  - **Supporting Statement**: *"A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking."*
- **Reasoning**: Directly articulates the studio's exact triad positioning without generic marketing fluff.

---

### ADR-004: Visual Foundation: Light Editorial Canvas
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Reject Pure Dark Obsidian as the primary site-wide theme. Standardize on a **Light Editorial Canvas**:
  - Off-white / light neutral canvas (`#FBFBFD` base).
  - High-contrast dark charcoal typography (`#0F172A`).
  - Fine hairline borders (`#E2E8F0` / `rgba(15, 23, 42, 0.08)`).
  - Generous mathematical whitespace.
  - Selective use of `#3B82F6` Precision Blue for interactions.
  - Selective dark contrast sections (`#0F172A`) for case-study code and architecture storytelling.
  - Rejection of generic white SaaS styling, excessive gradients, glassmorphism, and neon visuals.
- **Reasoning**: Delivers a distinguished, Swiss-inspired architectural editorial aesthetic that conveys mature craft and superior legibility.

---

### ADR-005: Hybrid Routing Architecture for SEO & Immersion
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Adopt the Hybrid Architecture:
  - Root `/` provides an expansive single-page experience with anchor navigation (`#services`, `#work`, `#approach`, `#contact`).
  - Standalone dedicated routes for case studies (`/work/aahar-nearby`, `/work/dateinvite`) and compliance (`/privacy`, `/terms`).
- **Reasoning**: Blends immediate browsing flow on the homepage with high-authority deep indexing, canonical tagging, and social link sharing for case studies.

---

### ADR-006: Interactive Accent: Selective Precision Blue
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Designate **#3B82F6 Precision Blue** as the primary interactive accent. Enforce the strict rule that it must be used **selectively** for interactive actions, focus rings, and active tags. The site must never become monochromatic blue.
- **Reasoning**: Provides clear, universal affordance for actions while maintaining the calm authority of the light editorial canvas.

---

### ADR-007: Typography System: Geist + Inter + JetBrains Mono
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Adopt the 3-tier font system:
  - **Headings & Display**: `Geist` (clean geometric tracking, architectural precision)
  - **Body & Interface**: `Inter` (uncompromising optical legibility)
  - **Technical Metadata**: `JetBrains Mono` (monospace rigor for tech tags and code)
- **Reasoning**: Creates a sophisticated typographic rhythm that reflects engineering-first discipline.

---

### ADR-008: Brand Mark: Geometric V Monogram + Wordmark
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Approve the brand mark direction: A minimalist **Geometric "V" Monogram** (intersecting vertices symbolizing the Triad) paired with the **"VEYTRIX TECH"** wordmark.
- **Constraint**: Do not generate the final vector logo assets during Phase 0; direction is approved for design in Phase 2.

---

### ADR-009: Technology Architecture: Next.js App Router + TypeScript
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Standardize on **Next.js App Router + TypeScript**. Enforce the rule: *Do not hard-lock the documentation to an obsolete framework version. Use the appropriate active, supported Next.js version during Phase 5 (Implementation).*
- **Reasoning**: Delivers zero-JavaScript Server Components for editorial marketing copy, built-in serverless route handlers for lead capture, and long-term framework maintainability.

---

### ADR-010: Lead Intake: Single Structured Inquiry Form
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Deploy a single structured inquiry form capturing:
  1. Full Name
  2. Company / Organization
  3. Work Email
  4. Required Service(s) (8 core capabilities)
  5. Project Summary
  6. Budget / Investment Range ("Not sure / Let's discuss" or `[TO BE DEFINED]`)
  7. Optional Additional Context
  Do not add Cal.com or Calendly at this stage. Do not invent budget ranges.
- **Reasoning**: Captures high-signal project parameters while avoiding calendar spam and minimizing form drop-off.

---

### ADR-011: Performance Metrics Declared as Engineering Targets
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: All performance numbers (LCP, CLS, FCP, Lighthouse scores, bundle sizes) are officially classified as **ENGINEERING TARGETS**, not achieved results. No performance claims may be made until measured and certified during Phase 7 (QA).
- **Reasoning**: Preserves total factual integrity and prevents premature or unverifiable performance claims.

---

### ADR-012: Phase 2 Design System & Visual Architecture Specifications
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Codify the complete 20-pillar design system on the Light Editorial Canvas (`#FBFBFD` base, `#0F172A` typography, `1px` `#E2E8F0` hairline borders, selective `#3B82F6` Precision Blue interactive accents, and selective `#0F172A` dark contrast storytelling containers). Enforce disciplined border radii (4px/6px/10px) with strict rejection of generic SaaS bubble cards, neon glows, and 3D illustrations. Lock screen-by-screen visual specifications for the 8 homepage sections and the 10-tier case-study architecture for Aahar Nearby and DateInvite.
- **Reasoning**: Anchors visual execution in Swiss minimalist editorial craft, providing high architectural discipline and enterprise credibility.

---

### ADR-013: Phase 2 Visual Refinement: Card Reduction & Editorial Storytelling
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**: Enforce the **Anti-Documentation Rule**: eliminate repetitive card-after-card layouts in favor of dynamic editorial composition (typographic spreads, full-width product screenshots, asymmetric splits, and structured matrices). Deploy the **Veytrix Studio Triad Nexus** as the memorable hero signature visual communicating the intersection of Design, Technology, and Product Thinking. Transition services from 8 boxy cards to a sleek typographic matrix row layout. Differentiate DateInvite (interaction-focused flow) from Aahar Nearby (product-focused mobile ecosystem). Label all technical metrics strictly as "Engineering Verification" or "Repository Validation" to avoid unverified business claims.
- **Reasoning**: Elevates the website from feeling like dry API technical documentation into an authoritative, high-craft digital product studio experience.

---

### ADR-014: Phase 3 Pre-Development Handoff Corrections & Telemetry Sanitization
- **Status**: Accepted / Project-Owner Approved (2026-09-25)
- **Decision**:
  1. Remove all non-verified geographic telemetry (coordinates `[37.7749° N, -122.4194° W]`) from the `StudioTriadArtifact` and all documentation. Replace with neutral Veytrix system metadata (`VTX-CORE // 01`, `SYSTEM // OPERATIONAL`, `BUILD MODE // ACTIVE`, `SIGNAL // STABLE`).
  2. Confirm and lock the official production domain as `https://veytrix.tech/` across canonical URLs, XML sitemap, OpenGraph metadata, structured JSON-LD data, and security policies.
  3. Formalize the budget selector as flexible with default option *"Not sure / Let's discuss"*, rejecting hardcoded arbitrary price tiers.
  4. Replace unconfirmed operational response guarantees with neutral copy: *"We'll review your inquiry and get back to you shortly."*
  5. Reconcile all repository benchmarks: exactly 6 verified technical benchmarks, correct terminology to `Zero Cross-User PII Exposure Detected`, and remove unverified user conversion claims (`94.2% Funnel Completion`).
- **Reasoning**: Enforces absolute factual veracity, eliminates arbitrary geographic placeholders, and aligns implementation specifications directly with verified repository artifacts prior to Phase 5 code authorization.

---

### ADR-015: Phase 5 Full-Stack Implementation & Next.js App Router Architecture
- **Status**: Accepted / Executed (2026-09-25)
- **Decision**:
  1. Built the complete production-grade application on Next.js 15.5.26, React 19, TypeScript 5.8, and Tailwind CSS 3.4.
  2. Implemented Server Components by default for all content routes (`/`, `/work/aahar-nearby`, `/work/dateinvite`, `/privacy`, `/terms`), isolating client-side state solely to interactive elements (`SingleInquiryForm`, `MobileNavDrawer`, interactive micro-states).
  3. Strict 1:1 translation of the approved 20-pillar Design System: Light Editorial Canvas (`#FBFBFD`), dark charcoal typography (`#0F172A`), 1px hairline borders (`#E2E8F0`), selective `#3B82F6` Precision Blue, and dark contrast sections (`#0F172A`).
  4. Lead intake engine (`/api/contact`) implemented with multi-layer defense: hidden honeypot spam detection, sliding-window IP rate limiting (5 req/hr), Zod validation, and development-safe fallback logging.
  5. Built-in SEO & structured data: dynamic OpenGraph image (`app/opengraph-image.tsx`), dynamic monogram favicon (`app/icon.tsx`), dynamic `sitemap.xml`, `robots.txt`, and rich JSON-LD `ProfessionalService` schema targeting canonical `https://veytrix.tech/`.
  6. Strict metric integrity: only the 6 verified repository benchmarks displayed; unverified benchmarks labeled as engineering targets; zero fabricated business metrics or client logos.
- **Reasoning**: Fulfills the project owner authorization to bridge high-craft design and resilient engineering without architectural drift or generic templates.
