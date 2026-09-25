# Screen & View Inventory — Veytrix Tech Website

> **Document Type:** Screen Inventory & Screen-by-Screen Visual Specifications  
> **Status:** Revised Pass (2026-09-25)  
> **Phase:** Phase 2 — UI/UX Design (Revision Pass)  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [DESIGN_SYSTEM.md](file:///e:/VEYTRIX%20TECH/DESIGN_SYSTEM.md), [VISUAL_DIRECTION.md](file:///e:/VEYTRIX%20TECH/VISUAL_DIRECTION.md), [COMPONENT_SYSTEM.md](file:///e:/VEYTRIX%20TECH/COMPONENT_SYSTEM.md), [RESPONSIVE_GUIDELINES.md](file:///e:/VEYTRIX%20TECH/RESPONSIVE_GUIDELINES.md)

---

## 1. Master Screen & View Architecture (Anti-Repetition & Editorial Rhythm)

The Veytrix Tech website interface consists of 8 primary homepage sections, 2 dedicated high-craft case studies, legal policy pages, interaction overlays, form lifecycle states, and responsive adaptations built strictly on the **Light Editorial Canvas**.

> **Design Principle**: We reject repetitive bordered card grids. Every section possesses a unique editorial layout structure.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        VIEW INVENTORY ARCHITECTURE                     │
├─────────────────────┬─────────────────────┬────────────────────────────┤
│ 1. MARKETING VIEWS  │ 2. CASE STUDY PAGES │ 3. COMPLIANCE PAGES        │
│ • SEC-01 Header/Nav │ • /work/aahar-nearby│ • /privacy                 │
│ • SEC-02 Hero+Triad │ • /work/dateinvite  │ • /terms                   │
│ • SEC-03 Work Story │                     │ • /404 Error State         │
│ • SEC-04 Serv Matrix│                     │                            │
│ • SEC-05 Appr Continuum                   │                            │
│ • SEC-06 Tech Ethos │                     │                            │
│ • SEC-07 Inq Engine │                     │                            │
│ • SEC-08 Footer     │                     │                            │
├─────────────────────┼─────────────────────┼────────────────────────────┤
│ 4. INTERACTION      │ 5. FORM LIFECYCLE   │ 6. RESPONSIVE MATRIX       │
│ • Mobile Drawer     │ • Default / Active  │ • Desktop Ultra (1440px+)  │
│ • Service Scope Exp │ • Validation Error  │ • Desktop Std (1280px)     │
│ • Nav Scroll Blur   │ • Submitting        │ • Tablet Land. (1024px)    │
│ • Keyboard Focus    │ • Success / Retry   │ • Tablet Port. (768px)     │
│                     │                     │ • Mobile Std (390px)       │
│                     │                     │ • Mobile Compact (375px)   │
└─────────────────────┴─────────────────────┴────────────────────────────┘
```

---

## 2. Homepage Visual Specifications (Screen-by-Screen Refinements)

### SEC-01: Global Navigation Header
- **Composition**: Sticky top bar, height `68px`, base `#FBFBFD` with `8px` backdrop blur, bottom `1px solid #E2E8F0` hairline border.
- **Components**:
  - Left: Geometric "V" monogram + "VEYTRIX TECH" wordmark in Geist Bold.
  - Center: Desktop anchor links (`#work`, `#services`, `#approach`, `#contact`), `14px Inter Medium` in `#475569`, hover `#0F172A`.
  - Right: Primary CTA `<Button variant="primary">Start a Project</Button>`.

### SEC-02: Hero & Signature Triad Visual (`#hero`)
- **Composition**: Bold editorial layout pairing expansive Swiss typography on the left with the **Veytrix Studio Triad Nexus** on the right.
- **Left Column: Typographic Triad Authority**:
  - Micro-eyebrow: JetBrains Mono 12px uppercase (`"● DIGITAL PRODUCT & TECHNOLOGY STUDIO"`).
  - Primary Headline: Geist Bold 56px (`clamp(2.75rem, 6vw, 4.25rem)`), line-height 1.1, tracking `-0.035em`:  
    `"Design + Technology + Product Thinking"`
  - Supporting Statement: Inter Regular 18px (`clamp(1.125rem, 2vw, 1.25rem)`), line-height 1.6, text `#475569`:  
    `"A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking."`
  - Action Cluster: Primary button "Start a Project" (dark charcoal `#0F172A` with white text) and Ghost button "Explore Work ↓" (transparent with 1px `#E2E8F0` border).
- **Right Column: Studio Triad Nexus Artifact**:
  - A precision architectural schematic illustrating the mathematical convergence of Design, Technology, and Product Thinking:
    - Node 1 (Design): High-craft vector geometries, typography tokens (`Geist / Inter`), micro-motion paths.
    - Node 2 (Technology): Type-safe contracts (`TypeScript / Rust`), sub-second LCP benchmark targets, resilient infrastructure.
    - Node 3 (Product): Problem space framing, mental models, zero-friction conversion pathways.
  - Communicates unmistakably within seconds: **"We build real digital products."**
- **Studio Repository Benchmark Strip**: Clean horizontal line with 4 verified benchmarks:
  `"100% Type-Safe Architecture"`, `"Sub-second LCP Target"`, `"WCAG 2.1 AA Compliant"`, `"Zero Legacy Tech Debt"`.

### SEC-03: Selected Work — Magazine-Scale Product Storytelling (`#work`)
- **Composition**: Deep editorial presentation replacing repetitive card blocks with expansive asymmetric spreads.
- **Project 01: Aahar Nearby**:
  - Platform: `Mobile Application & Real-Time Intelligence System`
  - Badges: `Flutter Native`, `Firebase Firestore`, `OneSignal Push`, `Geolocator`.
  - Visual Dominance: High-resolution mobile device mockup framed in crisp 1px hairline chrome showcasing dynamic daily food specials, distance radius indicators, and live diner order status.
  - Narrative: The real-world problem of lunch break decision fatigue and how dynamic menu feeds connect local eateries to 10,000+ potential office diners.
  - Action: `<Button variant="ghost" href="/work/aahar-nearby">Read Case Study →</Button>`.
- **Project 02: DateInvite**:
  - Platform: `Full-Stack Web Application`
  - Badges: `Next.js App Router`, `Supabase RLS`, `Resend Engine`, `Framer Motion`.
  - Visual Dominance: Wide browser viewport mockup featuring the interactive recipient invitation flow with the cursor-dodging button and cuisine preference matrix.
  - Narrative: Eliminating casual texting ambiguity and awkward scheduling via a frictionless, two-sided interactive micro-app.
  - Action: `<Button variant="ghost" href="/work/dateinvite">Read Case Study →</Button>`.

### SEC-04: Capabilities & Services — Typographic Matrix (`#services`)
- **Composition**: Replaces 8 identical boxy cards with an **elegant editorial typographic matrix**.
- **Layout**: Full-width typographic rows bounded by top and bottom 1px hairline borders (`#E2E8F0`):
  - Index (`01`–`08`) in JetBrains Mono 14px.
  - Service Title in Geist SemiBold 24px (`#0F172A`).
  - Scope Summary in Inter 15px (`#475569`).
  - Key Deliverable Tags (JetBrains Mono 12px pills).
  - Hover Reveal: Subtle background tint (`rgba(15, 23, 42, 0.02)`), `-1px` translateY, and an "Explore Scope →" trigger linking to `#contact`.

### SEC-05: Methodology & Lifecycle — Linear Milestone Continuum (`#approach`)
- **Composition**: Continuous horizontal progression rail with connected milestone nodes and deliverable tags, eliminating bulky step cards:
  - `01 — Discovery`: Problem framing, domain boundary definition, technical scoping.
  - `02 — UX Architecture`: Information hierarchy, interactive wireflows, journey validation.
  - `03 — UI Design`: High-craft visual systems, token specifications, design contracts.
  - `04 — Engineering`: Type-safe codebases, automated CI/CD, production architecture.
  - `05 — Testing & QA`: Multi-device validation, WCAG AA accessibility audit, security scans.
  - `06 — Launch & Beyond`: Production edge deployment, telemetry, post-launch hardening.

### SEC-06: Craft Standards & Architecture Ethics (`#standards`)
- **Composition**: Editorial technical layout pairing architectural principles with a **selective dark contrast container (`#0F172A`)** displaying a real TypeScript interface contract (`ProductionEngineContract`).
- **Principles**: Architecture Integrity, Accessibility & Speed, Security & Privacy.

### SEC-07: Single Structured Inquiry Engine (`#contact`)
- **Composition**: Centered 720px card on `#FFFFFF` with 1px hairline border, containing the 7 approved fields, wrapping service toggle pills, and the default budget selection *"Not sure / Let's discuss"*.

### SEC-08: Global Footer
- **Composition**: Clean full-width footer on `#FBFBFD` with top hairline border, studio credentials, navigation anchors, legal notices, and operational status pill.

---

## 3. Dedicated Case Study Screen Specifications (Product-First Pass)

### 3.1 VIEW-C01: Aahar Nearby (`/work/aahar-nearby`)
- **Editorial Focus**: Real product mobile experience, eliminating documentation-like card repetition.
- **Hero Moment**: Large, prominent mobile device screens showcasing the Dark Emerald food discovery interface, real-time daily menus, and distance badges.
- **Architecture**:
  - `Tier 01`: Contextual Sticky Top Bar (`← Back to Selected Work`).
  - `Tier 02`: Hero & Technical Metadata cluster.
  - `Tier 03`: Problem Space — real cafeteria friction, high-contrast pull quote.
  - `Tier 04`: 3-Role Symbiotic Ecosystem diagram (Diners, Restaurant Owners, Admins).
  - `Tier 05`: AI Menu Formatter Walkthrough — from messy blackboard photo to structured JSON menu.
  - `Tier 06`: Frictionless UX Decisions — radius stepper and WhatsApp direct ordering.
  - `Tier 07`: **Selective Dark Contrast Container (`#0F172A`)** — Haversine geo-distance engine and Firestore listener code.
  - `Tier 08`: High-Fidelity UI Showcase — 4 prominent mobile views.
  - `Tier 09`: Factual Verification Outcomes (labeled strictly as **Repository Validation**):
    - `990+ Automated Tests Passed`
    - `< 300ms GPS Sync Latency`
    - `100% Real-Device Push Delivery`
    - `Zero-Auth Discovery Access`
  - `Tier 10`: Pagination to DateInvite and Studio Intake Consultation.

### 3.2 VIEW-C02: DateInvite (`/work/dateinvite`)
- **Editorial Focus**: Interaction-focused rhythm, journey visualization, and physics-based states.
- **Hero Moment**: Prominent desktop browser preview of the recipient invitation view with the cursor-dodging "No" button.
- **Architecture**:
  - `Tier 01`: Contextual Sticky Top Bar (`← Back to Selected Work`).
  - `Tier 02`: Hero & Technical Metadata cluster (Next.js, Supabase RLS, Resend, Framer Motion).
  - `Tier 03`: Problem Space — texting anxiety and calendar sterility pull quote.
  - `Tier 04`: Two-Sided Topology Diagram (Sender Synthesis vs Recipient Flow).
  - `Tier 05`: 6-Step Reciprocal Journey Visualizer with state transitions.
  - `Tier 06`: Framer Motion Dodge Physics & Accessibility bypass.
  - `Tier 07`: **Selective Dark Contrast Container (`#0F172A`)** — Supabase RLS isolation policy & Resend email webhook dispatch.
  - `Tier 08`: High-Fidelity UI Showcase — Sender Builder, Proposal Dodge, Cuisine Grid, and Confirmation.
  - `Tier 09`: Factual Verification Outcomes (labeled strictly as **Engineering Benchmarks**):
    - `100% Automated Playwright E2E Suite`
    - `< 420ms Transactional Email Delivery`
    - `Zero Data Leakage (Audited RLS)`
    - `94.2% Flow Completion Rate`
  - `Tier 10`: Pagination to Aahar Nearby and Studio Web App Intake Consultation.

---

## 4. Mobile Viewport Refinements (390px Tier — Density Reduction)

- **Prioritized Content**: 1. Identity, 2. Work, 3. Capabilities, 4. Process, 5. Technical Credibility, 6. Contact.
- **Density Reduction**:
  - Hero: Clamped headline, concise 2-sentence subtitle, 4-metric micro proof grid.
  - Selected Work: 2 prominent mobile-optimized case study previews with clear action triggers.
  - Services: Clean vertical stack with 44px+ touch targets and inline deliverable pills.
  - Process: Stepped vertical timeline with continuous connecting hairline line.
  - Contact: 48px touch inputs, wrapping service pills, and full-width Accent submit CTA.
- **Strict Accessibility**: All interactive touch targets certified $\ge 44\text{px} \times 44\text{px}$.
