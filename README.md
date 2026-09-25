# Veytrix Tech — Master Documentation Index

> **Official Source of Truth** for the Veytrix Tech Digital Product & Technology Studio website project.  
> **Status:** Phase 5 (Full-Stack Implementation Complete & Verified) | **Local QA:** 100% PASS | **Deployment Gate:** Ready for GitHub & Vercel Preview

---

## 1. Studio Positioning & Identity (Approved)

**Veytrix Tech** is a modern digital product and technology studio. We engineer and design purpose-built digital experiences combining three foundational disciplines:

$$\mathbf{Design} \;+\; \mathbf{Technology} \;+\; \mathbf{Product\;Thinking}$$

### Approved Brand Statements
- **Primary Hero Positioning**:
  > **"Design + Technology + Product Thinking"**
- **Supporting Studio Statement**:
  > *"A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking."*

### Approved Visual Foundation: Light Editorial Canvas
- **Canvas Base**: Off-white / light neutral (`#FBFBFD`).
- **Typography**: Dark charcoal (`#0F172A`) set in **Geist** (Display), **Inter** (Body), and **JetBrains Mono** (Tech metadata).
- **Framing**: Fine hairline borders (`#E2E8F0` / `rgba(15, 23, 42, 0.08)`) with generous whitespace.
- **Interactive Accent**: **#3B82F6 Precision Blue** applied selectively to key actions.
- **Selective Contrast**: High-contrast dark sections (`#0F172A`) deployed selectively for case-study code and architecture storytelling.
- **Prohibited Clichés**: Generic white SaaS templates, excessive gradients, glassmorphism, neon visuals, and stock photos.

### Core Service Offerings
1. **Website Development** (Bespoke corporate, portfolio, SEO-first)
2. **Web Application Development** (SPAs, responsive dashboards, enterprise portals)
3. **Mobile App Development** (Cross-platform Flutter/iOS/Android engineering)
4. **UI/UX Design** (Wireframing, user journeys, design systems, interactive prototypes)
5. **Graphic Design** (Brand identity, vector iconography, digital collateral)
6. **AI-Powered Solutions** (Intelligent automation, NLP integration, workflow acceleration)
7. **Custom Software** (Backend services, API middleware, business logic systems)
8. **Product Development** (0-to-1 MVP incubation, scoping, technical execution)

---

## 2. Project Delivery Workflow & Gate Status

All work proceeds strictly through an 8-phase sequential delivery pipeline. Skipping phases or starting code/design prematurely is strictly prohibited:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MASTER WORKFLOW PIPELINE                        │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    [Phase 0: DOCUMENTATION] ◄──────┴─────── (COMPLETED & APPROVED)
               │
               ▼
    [Phase 1: UX ARCHITECTURE] ───────────── (COMPLETED & APPROVED)
               │
               ▼
    [Phase 2: UI/UX DESIGN] ──────────────── (COMPLETED & APPROVED via Stitch)
               │
               ▼
    [Phase 3: IMPLEMENTATION HANDOFF] ────── (COMPLETED & APPROVED)
               │
               ▼
    [Phase 5: IMPLEMENTATION] ────────────── (COMPLETED & VERIFIED)
               │
               ▼
    [Phase 6: GITHUB & LOCAL QA] ─────────── (VERIFIED — 100% PRE-RENDER PASS)
               │
               ▼
    [Phase 7: VERCEL PREVIEW QA] ─────────── (READY FOR REMOTE DEPLOYMENT)
               │
               ▼
    [Phase 8: PRODUCTION DEPLOYMENT] ─────── (STRICTLY LOCKED UNTIL AUTHORIZED)
```

---

## 3. Quickstart & Local Development

```bash
# 1. Install dependencies
npm install

# 2. Type-checking
npm run type-check

# 3. Production build validation
npm run build

# 4. Run local development server
npm run dev
# Server accessible at: http://localhost:3000 (or http://localhost:3001)
```

### Environment Configuration
Copy `.env.example` to `.env.local` to configure local variables:
```bash
cp .env.example .env.local
```
*Note: In development, when `RESEND_API_KEY` is not present, all validated inquiry submissions safely fall back to internal logging.*

---

## 4. Master Documentation Directory (32 Files)

### 3.1 Brand, Business & Strategic Architecture
1. [BRAND_STRATEGY.md](file:///e:/VEYTRIX%20TECH/BRAND_STRATEGY.md) — Studio identity, approved hero positioning, Light Editorial Canvas, and visual anti-patterns.
2. [COMPANY_OVERVIEW.md](file:///e:/VEYTRIX%20TECH/COMPANY_OVERVIEW.md) — Studio mission, operating model, engagement frameworks, and capacity.
3. [PRD.md](file:///e:/VEYTRIX%20TECH/PRD.md) — Product requirements document, approved single structured form, personas, and non-goals.
4. [PRODUCT_OVERVIEW.md](file:///e:/VEYTRIX%20TECH/PRODUCT_OVERVIEW.md) — Product vision, site section anatomy, and interactive engagement model.
5. [SERVICES.md](file:///e:/VEYTRIX%20TECH/SERVICES.md) — Detailed catalog of all 8 studio services, deliverables, and tech stacks.
6. [TARGET_AUDIENCE.md](file:///e:/VEYTRIX%20TECH/TARGET_AUDIENCE.md) — Buyer segmentation (Venture Founders, Tech Leaders, SME Owners) and conversion triggers.
7. [VALUE_PROPOSITION.md](file:///e:/VEYTRIX%20TECH/VALUE_PROPOSITION.md) — The Design + Tech + Product Thinking value formula and competitive differentiation.

### 3.2 UX & Information Architecture
8. [USER_FLOW.md](file:///e:/VEYTRIX%20TECH/USER_FLOW.md) — 4 primary user journeys (Discovery, Case Study, Single Form Intake, Tech Audit) with flowcharts.
9. [SITEMAP.md](file:///e:/VEYTRIX%20TECH/SITEMAP.md) — Approved Hybrid route hierarchy (`/`, `#services`, `#work`, `#approach`, `#contact`, `/work/aahar-nearby`, `/work/dateinvite`, `/privacy`, `/terms`).
10. [UX_STRATEGY.md](file:///e:/VEYTRIX%20TECH/UX_STRATEGY.md) — Cognitive ergonomics, progressive disclosure, and prohibited dark patterns.
11. [INFORMATION_ARCHITECTURE.md](file:///e:/VEYTRIX%20TECH/INFORMATION_ARCHITECTURE.md) — Content models and TypeScript schemas for services, case studies, and the approved 7-field inquiry payload.

### 3.3 Design System, UI & Accessibility
12. [DESIGN_SYSTEM.md](file:///e:/VEYTRIX%20TECH/DESIGN_SYSTEM.md) — Light Editorial Canvas tokens (`#FBFBFD`), dark charcoal typography, selective `#3B82F6` accent, and 8pt grid.
13. [VISUAL_DIRECTION.md](file:///e:/VEYTRIX%20TECH/VISUAL_DIRECTION.md) — Art direction manifesto emphasizing Swiss editorial restraint, hairline grids, and Geometric "V" mark direction.
14. [SCREEN_INVENTORY.md](file:///e:/VEYTRIX%20TECH/SCREEN_INVENTORY.md) — Catalog of all 11 screens, sections, and overlay states on Light Editorial Canvas.
15. [COMPONENT_SYSTEM.md](file:///e:/VEYTRIX%20TECH/COMPONENT_SYSTEM.md) — Atomic component hierarchy, props contracts, and single inquiry form engine.
16. [RESPONSIVE_GUIDELINES.md](file:///e:/VEYTRIX%20TECH/RESPONSIVE_GUIDELINES.md) — 5-tier responsive breakpoint matrix and minimum $44\text{px}$ touch targets.
17. [MOTION_GUIDELINES.md](file:///e:/VEYTRIX%20TECH/MOTION_GUIDELINES.md) — Functional motion curves, durations, and `@media (prefers-reduced-motion)` overrides.
18. [ACCESSIBILITY.md](file:///e:/VEYTRIX%20TECH/ACCESSIBILITY.md) — WCAG 2.1 Level AA compliance guidelines across POUR principles on Light Editorial Canvas.

### 3.4 Shipped Portfolio & Case Studies
19. [PROJECTS.md](file:///e:/VEYTRIX%20TECH/PROJECTS.md) — Master portfolio index and strict anti-fabrication policy.
20. [CASE_STUDY_AAHAR_NEARBY.md](file:///e:/VEYTRIX%20TECH/CASE_STUDY_AAHAR_NEARBY.md) — Verified production case study of the Flutter hyperlocal food discovery mobile app.
21. [CASE_STUDY_DATEINVITE.md](file:///e:/VEYTRIX%20TECH/CASE_STUDY_DATEINVITE.md) — Verified production case study of the Next.js/Supabase interactive invitation platform.

### 3.5 Technical Engineering & Security
22. [TECH_STACK.md](file:///e:/VEYTRIX%20TECH/TECH_STACK.md) — Approved production stack: Next.js App Router (supported version), TypeScript 5, Tailwind CSS, Resend, Supabase.
23. [ARCHITECTURE.md](file:///e:/VEYTRIX%20TECH/ARCHITECTURE.md) — System architecture, RSC vs Client Island boundaries, and lead submission pipeline.
24. [SEO.md](file:///e:/VEYTRIX%20TECH/SEO.md) — Target keyword clusters, OpenGraph templates, and JSON-LD structured data.
25. [PERFORMANCE.md](file:///e:/VEYTRIX%20TECH/PERFORMANCE.md) — Core Web Vitals and payload engineering targets notice (to be audited during Phase 7 QA).
26. [SECURITY.md](file:///e:/VEYTRIX%20TECH/SECURITY.md) — Threat modeling, honeypot bot defense, IP rate limiting, and HTTP security headers.

### 3.6 Implementation, Governance & Audit
27. [IMPLEMENTATION_PLAN.md](file:///e:/VEYTRIX%20TECH/IMPLEMENTATION_PLAN.md) — 8-phase lifecycle gate criteria and operational rules.
28. [QA_CHECKLIST.md](file:///e:/VEYTRIX%20TECH/QA_CHECKLIST.md) — 8-dimensional verification checklist with binary PASS/FAIL criteria.
29. [PROJECT_STATUS.md](file:///e:/VEYTRIX%20TECH/PROJECT_STATUS.md) — Master progress dashboard and formal Documentation Review section.
30. [CHANGELOG.md](file:///e:/VEYTRIX%20TECH/CHANGELOG.md) — Comprehensive log of documentation decisions and updates (v0.2.0).
31. [DECISIONS.md](file:///e:/VEYTRIX%20TECH/DECISIONS.md) — Architectural Decision Records (ADR-001 through ADR-011).

### 3.7 Agent Operations & Project Rules
- [.antigravity/AGENTS.md](file:///e:/VEYTRIX%20TECH/.antigravity/AGENTS.md) — Agent operating rules, workflow enforcement, and anti-hallucination policies.
