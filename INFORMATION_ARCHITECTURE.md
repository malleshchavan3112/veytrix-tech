# Information Architecture — Veytrix Tech Website

> **Document Type:** UX Information Architecture & Reusable Content Schemas  
> **Status:** Phase 1 Complete (UX Architecture)  
> **Phase:** Phase 1 — UX Architecture  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [SITEMAP.md](file:///e:/VEYTRIX%20TECH/SITEMAP.md), [UX_STRATEGY.md](file:///e:/VEYTRIX%20TECH/UX_STRATEGY.md), [USER_FLOW.md](file:///e:/VEYTRIX%20TECH/USER_FLOW.md), [SCREEN_INVENTORY.md](file:///e:/VEYTRIX%20TECH/SCREEN_INVENTORY.md)

---

## 1. Homepage Section Hierarchy & Purpose

The homepage structure on the **Light Editorial Canvas** follows a strategic proof-first narrative. Rather than listing services abstractly, the architecture establishes immediate brand identity, provides immediate proof through verified shipped products, reveals core capabilities, details engineering methodology, presents technical standards, and culminates in a low-friction inquiry form:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HOMEPAGE SECTION HIERARCHY                      │
├────┬─────────────────────────────┬─────────────────────────────────────┤
│ #  │ SECTION NAME & ANCHOR       │ STRATEGIC PURPOSE                   │
├────┼─────────────────────────────┼─────────────────────────────────────┤
│ 01 │ Global Header (Sticky Shell)│ Persistent brand presence & CTA     │
│ 02 │ Hero (#hero)                │ Immediate triad positioning & intent│
│ 03 │ Selected Work (#work)       │ Proof of caliber (Flagship systems) │
│ 04 │ Services & Domains (#services) 8 execution capabilities & scope   │
│ 05 │ Approach & Lifecycle (#approach) 8-phase disciplined execution    │
│ 06 │ Engineering Standards & Tech│ Clean architecture & zero templates │
│ 07 │ Project Inquiry (#contact)  │ Approved single structured form     │
│ 08 │ Global Footer               │ Compliance, sitemap, legal          │
└────┴─────────────────────────────┴─────────────────────────────────────┘
```

### Detailed Section Breakdown

#### Section 01: Global Header & Navigation Shell
- **Purpose**: Provides orientation, brand identification, and a persistent conversion gateway without obstructing reading flow.
- **Content Hierarchy**:
  1. Geometric "V" brand monogram + "VEYTRIX TECH" wordmark (links to `/`).
  2. Primary anchor navigation (`Work`, `Services`, `Approach`, `Contact`).
  3. High-contrast primary action button ("Start a Project" scrolling to `#contact`).
- **Interaction**: Fixed top position, subtle off-white background (`#FBFBFD`) with fine hairline divider (`#E2E8F0`) and backdrop blur on scroll.

#### Section 02: Hero Section (`#hero`)
- **Purpose**: Captures immediate attention (5-second test), establishes the studio positioning, and communicates that Veytrix Tech is a hybrid of design craft, resilient engineering, and practical product strategy.
- **Content Hierarchy**:
  1. Eyebrow badge: *"Modern Digital Product & Technology Studio"*.
  2. Primary headline in Geist display typography: **"Design + Technology + Product Thinking"**.
  3. Supporting statement in Inter: *"A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking."*
  4. Dual action triggers: Primary ("Start a Project" -> `#contact`) and Secondary ("Explore Our Work" -> `#work`).
  5. Minimal architectural framing visual with mathematical whitespace.

#### Section 03: Selected Work (`#work`)
- **Purpose**: Delivers empirical credibility before asking for client engagement. Validates claims using two verifiable, production-grade applications.
- **Content Hierarchy**:
  1. Section eyebrow: *"Featured Systems"*.
  2. Section title: *"Built for Real-World Demands"*.
  3. Featured Case Study Card 1: **Aahar Nearby** (Hyperlocal daily food menu discovery mobile platform; Flutter/Firebase; tags: Mobile, Real-Time, Location).
  4. Featured Case Study Card 2: **DateInvite** (Interactive web invitation & micro-dating platform; Next.js/Supabase/Resend; tags: Web App, Micro-Motion, Serverless).
  5. Direct route transition links: *"Read Case Study"* (navigates to `/work/aahar-nearby` or `/work/dateinvite`).

#### Section 04: Services & Capabilities Matrix (`#services`)
- **Purpose**: Translates the studio's craft into 8 concrete, contractible client service domains.
- **Content Hierarchy**:
  1. Section eyebrow: *"Capabilities"*.
  2. Section title: *"Comprehensive Product Execution"*.
  3. 8 Service Cards: Website Development, Web Application Development, Mobile App Development, UI/UX Design, Graphic Design, AI-Powered Solutions, Custom Software, Product Development.
  4. Per-card details: Title, summary, key deliverables list, and technology badges (JetBrains Mono).
  5. Interactive "Explore Scope" progressive disclosure expander.

#### Section 05: Studio Approach & Lifecycle (`#approach`)
- **Purpose**: Demystifies the delivery process and builds trust with risk-averse technical leaders and founders by demonstrating a structured, phased methodology.
- **Content Hierarchy**:
  1. Section eyebrow: *"Methodology"*.
  2. Section title: *"The Veytrix Product Lifecycle"*.
  3. 8-phase interactive milestone track: `Documentation → UX Architecture → UI/UX Design → Google Stitch via MCP → Design Review → Implementation → Functionality → QA → Deployment`.
  4. Highlights for each phase: Entrance criteria, core activities, and verifiable gate artifacts.

#### Section 06: Engineering Standards & Studio Ethos
- **Purpose**: Proves technical superiority and code craft to CTOs, technical co-founders, and engineering directors.
- **Content Hierarchy**:
  1. Architectural tenets: Clean Architecture, Strict Type Safety (TypeScript), Zero Template Policy, WCAG 2.1 AA Accessibility by default.
  2. Target performance standards (Core Web Vitals budgets, sub-second LCP target, lightweight payloads).
  3. Rejection of agency anti-patterns (no bloated legacy libraries, no black boxes).

#### Section 07: Project Inquiry Engine (`#contact`)
- **Purpose**: Captures qualified inbound prospective client leads through a single structured intake mechanism.
- **Content Hierarchy**:
  1. Section eyebrow: *"Start a Project"*.
  2. Section title: *"Let's Engineer Your Digital Product"*.
  3. Single Structured Inquiry Form (7 approved fields: Name, Company, Email, Services, Summary, Budget, Optional Context).
  4. Privacy and SLA reassurance: *"We respond within 24–48 hours. Zero spam guaranteed."*
  5. Direct studio contact metadata (email, location `[TO BE DEFINED]`).

#### Section 08: Global Footer
- **Purpose**: Persistent access to legal compliance, sitemap navigation, and intellectual property disclosures.
- **Content Hierarchy**:
  1. Studio monogram, copyright, and baseline statement.
  2. Sitemap columns (Work, Capabilities, Studio, Legal).
  3. Compliance route links: Privacy Policy (`/privacy`), Terms of Service (`/terms`).

---

## 2. Reusable Case-Study Information Architecture

Both `/work/aahar-nearby` and `/work/dateinvite` strictly share an identical 10-tier editorial narrative architecture to maintain consistency across the portfolio:

```
┌────────────────────────────────────────────────────────────────────────┐
│                  REUSABLE CASE STUDY NARRATIVE (10 TIERS)              │
├────┬─────────────────────────────┬─────────────────────────────────────┤
│ 01 │ Hero & Meta Header          │ Title, client context, platform     │
│ 02 │ Executive Summary & Problem │ Operational friction & user pain    │
│ 03 │ Product Concept             │ The core mental model & mechanism   │
│ 04 │ The Engineered Solution     │ Architectural approach & role model │
│ 05 │ UX & Interaction Decisions  │ Friction elimination & micro-motion │
│ 06 │ System Architecture & Stack │ Data flow, APIs, security, backend  │
│ 07 │ Interface & Visual System   │ Selective dark contrast blocks      │
│ 08 │ Shipped Key Workflows       │ Step-by-step user capabilities      │
│ 09 │ Factual Engineering Results │ Only verified test & code metrics   │
│ 10 │ Project Navigation & CTA    │ Next project link + "Build Similar" │
└────┴─────────────────────────────┴─────────────────────────────────────┘
```

### Applied Case Study Mapping

| Architectural Tier | Aahar Nearby (`/work/aahar-nearby`) | DateInvite (`/work/dateinvite`) |
|---|---|---|
| **01. Hero & Meta** | Title: Aahar Nearby<br>Sub: Hyperlocal Daily Menu Discovery Platform<br>Platforms: Mobile (iOS & Android)<br>Stack Badges: Flutter, Dart, Firebase, OneSignal | Title: DateInvite<br>Sub: Interactive Micro-Dating Invitation Platform<br>Platforms: Web (Desktop & Mobile)<br>Stack Badges: Next.js, Supabase, Tailwind, Framer Motion, Resend |
| **02. Problem Space** | Working professionals wasting 20 mins asking *"Aaj kya khana hai?"*; local hotels changing daily thalis with zero friction-free publishing mechanisms. | Asking someone out via text is dull, awkward, and logistically ambiguous; traditional invitation tools require tedious account creation. |
| **03. Product Concept** | "Decide in 30 seconds" discovery engine paired with 15-second hotel menu publishing and AI menu parsing. | Two-sided invitation platform: zero-account 30-second link creation + playful animated recipient questionnaire. |
| **04. Solution Model** | 3-Role mobile ecosystem: Diner (discovery), Hotel Owner (dashboard & AI menu publisher), Admin (outlet moderation). | 2-Actor web model: Creator (generates custom slug) and Recipient (interactive proposal + preference selector). |
| **05. UX Decisions** | Faceted filtering (Veg/Non-Veg, distance radius, budget); role switching with isolated local state; 1-tap directions via native maps. | Playful "No" dodging physics; confetti celebratory burst on "Yes"; 6-step actionable questionnaire; zero login barriers. |
| **06. System Architecture** | Flutter Clean Architecture; Cloud Firestore real-time snapshot listeners; Geolocator Haversine distance; OneSignal push. | Next.js App Router; Supabase PostgreSQL with strict Row Level Security (RLS); Resend transactional email API dispatch. |
| **07. Visual System** | Dark Emerald Luxury theme (`#061E14` base, `#10B981` fresh accents) displayed inside selective dark contrast containers. | Minimalist playful interface displayed within selective dark contrast containers for code and terminal audits. |
| **08. Key Workflows** | 1. 30-sec Diner Discovery<br>2. 15-sec Owner Menu Publishing (AI parser)<br>3. Admin outlet verification console. | 1. 30-sec Creator link generation<br>2. Recipient proposal & preference submission<br>3. Instant structured notification email. |
| **09. Factual Outcomes** | Over 990 verified automated tests executed (unit, widget, regression); live real-device notification verification passed. | 100% verified zero email leakage via RLS audit; automated E2E simulation passed; sub-30-second creation validated. |
| **10. Navigation & CTA** | Next Project: DateInvite (`/work/dateinvite`)<br>CTA: "Engineer a Mobile App" -> `#contact` | Next Project: Aahar Nearby (`/work/aahar-nearby`)<br>CTA: "Build a Web Platform" -> `#contact` |

---

## 3. Data Schemas & Contracts

### 3.1 Service Entity Schema
```typescript
interface ServiceEntity {
  id: string;                    // e.g. "mobile-app-dev"
  title: string;                 // e.g. "Mobile App Development"
  tagline: string;               // e.g. "High-fidelity native and cross-platform mobile apps"
  category: 'interface' | 'software' | 'product';
  deliverables: string[];        // Array of concrete outputs (e.g. "iOS & Android Builds")
  technologies: string[];        // Array of technologies (e.g. ["Flutter", "Dart", "Firebase"])
  outcomes: string[];            // Business and technical advantages
}
```

### 3.2 Case Study Entity Schema
```typescript
interface CaseStudyEntity {
  id: string;                    // e.g. "aahar-nearby", "dateinvite"
  title: string;                 // e.g. "Aahar Nearby", "DateInvite"
  subtitle: string;              // e.g. "Hyperlocal Daily Food Discovery Mobile Platform"
  category: string;              // e.g. "Mobile Engineering / Full-Stack"
  platforms: string[];           // e.g. ["Mobile (Android / iOS)"]
  techStack: {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
  };
  summary: string;
  problem: {
    context: string;
    painPoints: string[];
  };
  concept: string;
  solution: {
    actorModel: string[];
    architectureNotes: string;
    designSystemHighlights: string;
  };
  uxDecisions: string[];
  features: {
    title: string;
    description: string;
  }[];
  verifiableStatus: string;      // Factual status only
  nextProjectSlug: string;
}
```

### 3.3 Project Inquiry (Lead) Schema (Approved Single Form)
```typescript
interface ProjectInquiryPayload {
  fullName: string;              // Required: Full Name (max 100 chars)
  companyName: string;           // Required: Organization / project name (max 100 chars)
  workEmail: string;             // Required: Valid work email (max 120 chars)
  selectedServices: string[];    // Required: Multi-select from 8 core capabilities
  projectSummary: string;        // Required: Scope, timeline, and goals description (min 10, max 2000 chars)
  budgetRange: string;           // Default: "Not sure / Let's discuss" or [TO BE DEFINED]
  additionalContext?: string;    // Optional: Links to specs, Figma, or background notes (max 1000 chars)
  submittedAt: string;           // System ISO 8601 Timestamp
}
```

---

## 4. Phase 1 Approved Status

- Section hierarchy reordered logically: Hero → Selected Work → Services → Approach → Tech Standards → Contact → Footer.
- Reusable 10-tier case study information architecture formalized for Aahar Nearby and DateInvite.
- Single structured form schema locked across 7 fields.
