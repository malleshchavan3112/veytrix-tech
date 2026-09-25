# Product Requirements Document (PRD) — Veytrix Tech Website

> **Document Type:** System & Feature Product Requirements Document  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 0 — Documentation  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [PRODUCT_OVERVIEW.md](file:///e:/VEYTRIX%20TECH/PRODUCT_OVERVIEW.md), [SERVICES.md](file:///e:/VEYTRIX%20TECH/SERVICES.md), [PROJECTS.md](file:///e:/VEYTRIX%20TECH/PROJECTS.md)

---

## 1. Product Summary & Purpose

The **Veytrix Tech Website** is the official digital flagship of Veytrix Tech. It serves two interconnected primary functions:
1. **Curated Showcase Portfolio**: Demonstrating high-caliber engineering, UX design, and product thinking through deeply documented real-world case studies (Aahar Nearby and DateInvite).
2. **Qualified Lead-Generation Engine**: Establishing immediate credibility with prospective clients (founders, CTOs, product leaders) and channeling high-intent project inquiries into the studio's intake pipeline via a single structured form.

---

## 2. Product Goals & Non-Goals

### Primary Goals
- **Communicate Brand Positioning**: Prominently feature the primary statement: *"Design + Technology + Product Thinking"* and supporting statement: *"A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking."*
- **Showcase Craft on Light Editorial Canvas**: Present a clean, restrained, high-aesthetic light editorial canvas (`#FBFBFD` base, dark charcoal typography, hairline borders, generous whitespace, selective Precision Blue, and selective dark contrast storytelling blocks).
- **Provide Transparent Case Studies**: Present verifiable architectural and design challenges, implementation details, and actual product solutions from historical projects without manufactured metrics.
- **Drive High-Intent Lead Conversion**: Provide an intuitive, low-friction single structured project inquiry form.
- **Engineer for High Performance**: Architect the system to satisfy ambitious engineering performance targets.

### Non-Goals (Out of Scope for Initial Launch)
- ❌ **External Meeting Schedulers**: No direct Cal.com or Calendly embeds at this stage (inquiry form only).
- ❌ **Client Portal / User Accounts**: No login or authenticated dashboard for clients on the public marketing site.
- ❌ **Automated Instant Checkout / E-commerce**: No self-checkout payment gateways for custom services.
- ❌ **Content Farm / Generic Blog**: No low-quality SEO articles; all editorial content must be high-signal technical write-ups.
- ❌ **Generic Support Chatbots**: No intrusive, annoying third-party pop-up bots.

---

## 3. User Personas

| Persona | Role | Primary Objective | Key Evaluation Criteria |
|---|---|---|---|
| **Venture Founder** | Early-stage Startup Founder | Looking to build a 0-to-1 MVP or revamp existing app | Speed, design sophistication, full-stack capability, product guidance |
| **Corporate Product Leader** | VP of Product / Head of Engineering | Sourcing specialized studio for complex module or app | Architectural rigor, clean code, reliability, security, clean handoffs |
| **SME Business Owner** | Owner / Managing Director | Seeking digital transformation, custom tool, or web presence | Clarity of process, clear communication, trustworthy partnership |

---

## 4. Functional Requirements

### 4.1 Global Navigation & Header
- **FR-01**: Persistent, minimal navigation bar with brand mark, key anchor links (`Services`, `Work`, `Approach`, `Contact`), and a prominent "Start a Project" CTA.
- **FR-02**: Seamless mobile navigation drawer/sheet with clean typography and fluid transitions.

### 4.2 Hero Section
- **FR-03**: Approved Primary Positioning: *"Design + Technology + Product Thinking"*.
- **FR-04**: Approved Supporting Statement: *"A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking."*
- **FR-05**: Direct dual CTAs: Primary ("Start a Project") and Secondary ("Explore Our Work").
- **FR-06**: Clean, restrained editorial visual layout with mathematical whitespace and hairline grids.

### 4.3 Services & Capabilities Showcase
- **FR-07**: Clear presentation of the 8 core studio capabilities (Web Dev, Web Apps, Mobile Apps, UI/UX, Graphic Design, AI Solutions, Custom Software, Product Development).
- **FR-08**: Interactive expander or detail view highlighting deliverables, tech stacks, and methodology for each service.

### 4.4 Featured Case Studies & Work Archive
- **FR-09**: Prominent presentation of flagship case studies on hybrid routes:
  - **Aahar Nearby** (`/work/aahar-nearby`): Hyperlocal food discovery mobile platform (Flutter, Firebase, OneSignal, Geolocator).
  - **DateInvite** (`/work/dateinvite`): Interactive invitation web platform (Next.js, Supabase, Tailwind, Framer Motion, Resend).
- **FR-10**: Detailed case study view presenting: Product Overview, The Problem, System Architecture, Design System, Technical Execution, and Key Features.

### 4.5 Studio Philosophy & Approach ("The Veytrix Way")
- **FR-11**: Visual explanation of the end-to-end product delivery lifecycle (Documentation → UX Architecture → UI/UX Design → Google Stitch via MCP → Design Review → Implementation → Functionality → QA → Deployment).
- **FR-12**: Principles highlighting craftsmanship, performance targets, security, and human-centric design.

### 4.6 Contact & Project Inquiry Engine (Approved Single Form)
- **FR-13**: Single structured inquiry form capturing:
  1. **Name** (Full Name)
  2. **Company** (Organization / Project Name)
  3. **Email** (Work Email Address)
  4. **Required Service(s)** (Multi-select from 8 core capabilities)
  5. **Project Summary** (High-level goals, timeline, and requirements)
  6. **Budget / Investment Range** (Default options: "Not sure / Let's discuss" or `[TO BE DEFINED]` once pricing is formalized; no fabricated tiers)
  7. **Optional Additional Context** (Links to existing designs, specs, or background)
- **FR-14**: Client-side validation, error handling, success confirmation card, and spam protection (honeypot / rate limiting).

### 4.7 Footer & Compliance
- **FR-15**: Studio legal notice, copyright statement, direct links to sitemap pages, privacy policy (`/privacy`), terms (`/terms`), and contact details.

---

## 5. Non-Functional Engineering Targets

*(Note: In adherence to project-owner directives, all performance metrics below are defined as **ENGINEERING TARGETS** to be validated during Phase 7 (QA), NOT achieved results.)*

- **NFR-01 Performance Targets**: Target Google Lighthouse performance score $\ge 95$ across Desktop and $\ge 90$ on Mobile; Target First Contentful Paint (FCP) $\le 1.0\text{s}$; Target Largest Contentful Paint (LCP) $\le 1.5\text{s}$; Target Cumulative Layout Shift (CLS) $\le 0.05$.
- **NFR-02 Accessibility Target**: Target compliance with WCAG 2.1 Level AA standards, full keyboard navigability, semantic HTML5, explicit ARIA attributes, and certified contrast ratios on light editorial canvas.
- **NFR-03 Responsiveness**: Fluid adaptivity across all breakpoints (Mobile: 320px–639px, Tablet: 640px–1023px, Desktop: 1024px–1439px, Large Desktop: $\ge 1440\text{px}$).
- **NFR-04 Cross-Browser Support**: Flawless visual rendering and functionality across modern Chromium browsers (Chrome, Edge, Brave), Safari (macOS & iOS), and Firefox.
- **NFR-05 Security**: Zero client-side leakage of sensitive endpoints, CSRF protection on forms, secure HTTP headers, sanitization of form submissions.

---

## 6. Approved Items vs. Remaining Open Definitions

### Project-Owner Approved Items
- Hero positioning statements approved.
- Light editorial canvas approved.
- Single structured inquiry form approved.
- Hybrid routing model approved.
- Performance numbers declared as engineering targets.

### Remaining Open Definitions
- `[TO BE DEFINED]` Specific formal investment budget range tiers (default: "Not sure / Let's discuss").
- `[TO BE DEFINED]` Official legal registration entity and physical studio location.
- `[TO BE DEFINED]` Destination studio inbox for lead notification emails.
