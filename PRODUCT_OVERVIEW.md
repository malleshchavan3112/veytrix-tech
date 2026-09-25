# Product Overview — Veytrix Tech Website

> **Document Type:** Product Architecture & Feature Landscape  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 0 — Documentation  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [PRD.md](file:///e:/VEYTRIX%20TECH/PRD.md), [SITEMAP.md](file:///e:/VEYTRIX%20TECH/SITEMAP.md), [SCREEN_INVENTORY.md](file:///e:/VEYTRIX%20TECH/SCREEN_INVENTORY.md)

---

## 1. Product Summary & High-Level Concept

The Veytrix Tech website is engineered to be an immersive, high-speed, interactive portfolio and lead-generation portal. The site reflects the studio's technical identity: clean, minimal, design-led, and technologically superior.

Built on an approved **Light Editorial Canvas** (`#FBFBFD` base, dark charcoal typography, fine hairline borders, and generous whitespace), the platform demonstrates high-performance engineering, typographic restraint with Geist and Inter, fluid micro-motion, and deeply documented case studies that walk visitors through actual problem spaces and engineering decisions.

---

## 2. Core Section Anatomy & Flow

The website is structured into six core informational and interaction modules:

```
┌────────────────────────────────────────────────────────┐
│ 1. HEADER & GLOBAL NAVIGATION                          │
│    Brand Mark • Services • Work • Approach • CTA       │
├────────────────────────────────────────────────────────┤
│ 2. HERO / VALUE PROPOSITION                            │
│    "Design + Technology + Product Thinking"            │
│    Supporting Studio Statement • Editorial Visual      │
├────────────────────────────────────────────────────────┤
│ 3. SERVICES & CAPABILITIES MATRIX                      │
│    8 Core Domains • Interactive Scope Details          │
├────────────────────────────────────────────────────────┤
│ 4. SELECTED WORK & CASE STUDIES                        │
│    Flagship Systems: Aahar Nearby & DateInvite         │
├────────────────────────────────────────────────────────┤
│ 5. METHODOLOGY & CRAFT ("THE STUDIO WAY")              │
│    Phased Rigor • Engineering Standards • Architecture │
├────────────────────────────────────────────────────────┤
│ 6. PROJECT INTAKE & LEAD GENERATION                    │
│    Approved Single Structured Inquiry Form             │
├────────────────────────────────────────────────────────┤
│ 7. FOOTER & COMPLIANCE                                 │
│    Legal • Nav Links • Brand Baseline • /privacy/terms │
└────────────────────────────────────────────────────────┘
```

---

## 3. Detailed Module Breakdown

### 3.1 Global Header & Navigation
- **Purpose**: Provides persistent, lightweight navigation without obstructing user attention.
- **Key Elements**: Geometric "V" brand mark with wordmark, clean anchor links (`Services`, `Work`, `Approach`, `Contact`), and a high-contrast primary CTA button ("Start a Project").
- **Visuals**: Clean off-white surface with subtle bottom hairline border (`#E2E8F0`) and backdrop blur on scroll.

### 3.2 Hero Section
- **Purpose**: Instantly communicates the studio's triad positioning.
- **Key Elements**:
  - Primary headline: **"Design + Technology + Product Thinking"**
  - Supporting statement: *"A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking."*
  - Dual CTAs: Primary ("Start a Project") and Secondary ("Explore Our Work").
  - Clean editorial layout with generous whitespace and hairline framing.

### 3.3 Services & Capabilities Grid
- **Purpose**: Outlines the 8 domains of execution in concrete, deliverable-focused terms.
- **Content**:
  1. Website Development (Corporate, Portfolio, Marketing, SEO-first)
  2. Web Application Development (SPAs, Dashboards, Complex Portals)
  3. Mobile App Development (iOS & Android, Cross-Platform Flutter/Dart)
  4. UI/UX Design (Wireframing, Design Systems, UX Flows, Prototyping)
  5. Graphic Design (Branding, Digital Marks, Visual Assets)
  6. AI-Powered Solutions (NLP, Model Integration, Workflow Automation)
  7. Custom Software (Business Automation, Backend APIs, Integrations)
  8. Product Development (0-to-1 Ideation, MVP Execution, Roadmap)

### 3.4 Selected Case Studies
- **Purpose**: Substantiates studio capability through deep, structured case study presentations.
- **Flagship Highlights on Hybrid Routes**:
  - **Aahar Nearby** (`/work/aahar-nearby`): Hyperlocal daily menu discovery mobile app engineered for office workers and restaurant owners (Flutter, Firebase, OneSignal).
  - **DateInvite** (`/work/dateinvite`): Interactive web invitation experience with custom links, playful micro-interactions, Supabase persistence, and automated notification dispatches (Next.js, Supabase, Resend, Framer Motion).
- **Styling Note**: Deep focus contrast sections (dark slate backgrounds) may be selectively utilized within case study walkthroughs to showcase terminal logs, system schematics, and mobile UI screenshots.

### 3.5 Studio Methodology ("The Veytrix Way")
- **Purpose**: Transparency into the studio's disciplined product lifecycle.
- **Key Narrative**: Walks potential clients through our step-by-step phased execution:
  `Documentation → UX Architecture → UI/UX Design → Google Stitch via MCP → Design Review → Implementation → Functionality → QA → Deployment`.

### 3.6 Project Inquiry / Contact Engine
- **Purpose**: Converts qualified prospects into active project inquiries via a single structured form.
- **Key Elements**: Form capturing Name, Company, Email, Required Services, Project Summary, Budget/Investment Range ("Not sure / Let's discuss" or `[TO BE DEFINED]`), and Optional Additional Context. Includes real-time validation and instant confirmation state.

---

## 4. Approved Architecture vs. Remaining Definitions

### Project-Owner Approved Items
- Light editorial canvas visual foundation.
- Hero positioning statements locked.
- Single structured inquiry form (no external calendar widgets).
- 8 core service domains represented.
- 2 validated flagship case studies on dedicated hybrid routes.
- Official production domain confirmed: `https://veytrix.tech/`.

### Remaining Open Definitions
- `[TO BE DEFINED]` Formal budget range tiers for inquiry form selector (default: *"Not sure / Let's discuss"*).
- `[TO BE DEFINED]` Destination studio inbox for lead notification emails.
