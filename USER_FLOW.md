# User Journeys & Conversion Architecture — Veytrix Tech Website

> **Document Type:** User Journey Specifications & Conversion Path Architecture  
> **Status:** Phase 1 Complete (UX Architecture)  
> **Phase:** Phase 1 — UX Architecture  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [SITEMAP.md](file:///e:/VEYTRIX%20TECH/SITEMAP.md), [INFORMATION_ARCHITECTURE.md](file:///e:/VEYTRIX%20TECH/INFORMATION_ARCHITECTURE.md), [UX_STRATEGY.md](file:///e:/VEYTRIX%20TECH/UX_STRATEGY.md), [SCREEN_INVENTORY.md](file:///e:/VEYTRIX%20TECH/SCREEN_INVENTORY.md)

---

## 1. Primary User Journeys (A through E)

The website is engineered around 5 discrete user journeys mapping entry points, cognitive intent, critical evaluation decision points, call-to-actions, and terminal exit actions.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        MASTER USER JOURNEY DIRECTORY                   │
├───────────┬───────────────────────────────┬────────────────────────────┤
│ JOURNEY   │ USER PROFILE & INTENT         │ CORE PATHWAY               │
├───────────┼───────────────────────────────┼────────────────────────────┤
│ Journey A │ First-Time Explorer / Founder │ Hero → Work → Services → Inq│
│ Journey B │ Technical Evaluator / CTO     │ Home → Case Study → Arch → Inq│
│ Journey C │ High-Intent Direct Prospect   │ Services → Scope → Inquiry │
│ Journey D │ Deep Mobile Explorer          │ /work/aahar-nearby → Home  │
│ Journey E │ Deep Web App Explorer         │ /work/dateinvite → Home    │
└───────────┴───────────────────────────────┴────────────────────────────┘
```

---

### Journey A: First-Time Visitor (Studio Discovery to Conversion)
- **Actor**: Venture founder, product director, or business owner exploring the studio for the first time.
- **Entry Point**: Root URL (`https://veytrix.tech/`) via direct link, referral, or general search.
- **User Intent**: Understand what Veytrix Tech does, gauge aesthetic craft and engineering credibility, and decide if the studio is worth contacting.
- **Step-by-Step Flow**:
  1. **Land on Hero**: Absorbs primary positioning (*"Design + Technology + Product Thinking"*) and supporting statement on the clean Light Editorial Canvas.
  2. **Scroll to Selected Work (`#work`)**: Sees high-fidelity preview cards for Aahar Nearby and DateInvite. Recognizes real, production-tested software rather than generic concept art.
  3. **Scroll to Services (`#services`)**: Evaluates the 8 core service domains. Expands a card (e.g. *Mobile App Development* or *Web Applications*) to review concrete deliverables.
  4. **Inspect Approach (`#approach`)**: Scans the 8-phase disciplined lifecycle (`Documentation → UX Architecture → UI/UX Design → Google Stitch via MCP → Review → Implementation → Functionality → QA → Deployment`), gaining confidence in delivery rigor.
  5. **Decision Point**: Has verified studio caliber; decides to inquire.
  6. **CTA**: Primary button *"Start a Project"* or smooth scroll to `#contact`.
  7. **Exit / Terminal Action**: Fills out the single structured inquiry form, receives instant confirmation card, and awaits studio response.

---

### Journey B: Technical Evaluator (CTO / Head of Engineering Vetting)
- **Actor**: CTO, VP of Engineering, or technical founder evaluating architectural competence and code discipline.
- **Entry Point**: Homepage (`/`) or direct link to a technical article.
- **User Intent**: Inspect technical depth, check framework discipline, verify that the studio avoids messy templates and fragile codebases.
- **Step-by-Step Flow**:
  1. **Land on Homepage**: Scans technical metadata badges and clean hairline framing.
  2. **Selects Case Study Card**: Clicks *"Read Case Study"* on Aahar Nearby or DateInvite.
  3. **Enters Dedicated Case Study (`/work/aahar-nearby` or `/work/dateinvite`)**:
     - Evaluates architectural diagrams.
     - Inspects technical stack choices (Flutter, Firebase, OneSignal vs Next.js App Router, Supabase RLS, Resend).
     - Reviews factual test results (over 990 verified automated tests or zero email leakage via RLS).
  4. **Decision Point**: Convinced of engineering rigor and transparent communication.
  5. **CTA**: Clicks *"Start a Project"* or *"Discuss Architecture"* banner at the end of the case study.
  6. **Exit / Terminal Action**: Arrives at `#contact` with the relevant capability pre-selected; submits structured inquiry with links to technical requirements.

---

### Journey C: High-Intent Scope Buyer (Targeted Service Inquiry)
- **Actor**: Founder or executive seeking a specific deliverable (e.g. 0-to-1 MVP or dedicated mobile app build).
- **Entry Point**: `/#services` or direct link from an outbound proposal.
- **User Intent**: Evaluate service scope, deliverables, and investment parameters.
- **Step-by-Step Flow**:
  1. **Land on Services Section**: Reviews the 8-domain grid.
  2. **Interacts with Service Card**: Expands deliverable breakdown and tech stack badges.
  3. **Decision Point**: Confirms Veytrix Tech covers the exact needed capability.
  4. **CTA**: Clicks *"Inquire About This Service"* on the card.
  5. **Form Interaction**: Smoothly auto-scrolls to `#contact`. The selected service is automatically checked in the multi-select field.
  6. **Exit / Terminal Action**: Fills out Company, Email, Project Summary, selects budget ("Not sure / Let's discuss" or `[TO BE DEFINED]`), and submits.

---

### Journey D: Deep Mobile Explorer (Aahar Nearby Case Study & Return)
- **Actor**: Mobile product lead or entrepreneur looking specifically at mobile application capabilities.
- **Entry Point**: Direct link to `/work/aahar-nearby` (via social share, portfolio link, or search).
- **User Intent**: Audit the mobile design system, multi-role state isolation, and offline/push mechanics of Aahar Nearby.
- **Step-by-Step Flow**:
  1. **Land on `/work/aahar-nearby`**: Views luxury dark emerald mobile mockup visuals and technical badges (Flutter, Dart, Firebase, OneSignal, Geolocator).
  2. **Reads Core Problem & Solution**: Understands the 3-role ecosystem (Diner, Owner, Admin) and the AI menu formatting simulator.
  3. **Inspects Factual Outcomes**: Notes verified real-device notification delivery and 990+ automated tests.
  4. **Decision Point**: Decides whether to explore the other case study or return to the main studio overview.
  5. **Navigation Options**:
     - *Path D.1 (Cross-Project)*: Clicks bottom link *"Next Project: DateInvite"* → navigates seamlessly to `/work/dateinvite`.
     - *Path D.2 (Return to Work)*: Clicks top breadcrumb `← Back to Selected Work` → returns to `/#work` on homepage.
     - *Path D.3 (Direct Conversion)*: Clicks *"Engineer a Mobile App"* → scrolls to `/#contact`.
  6. **Exit**: Either deepens engagement on another case study or submits an inquiry.

---

### Journey E: Deep Web App Explorer (DateInvite Case Study & Return)
- **Actor**: Web product founder or engineering manager vetting full-stack Next.js and Supabase architecture.
- **Entry Point**: Direct link to `/work/dateinvite`.
- **User Intent**: Audit the interactive micro-interaction mechanics, Supabase RLS privacy policies, and Resend transactional email dispatches.
- **Step-by-Step Flow**:
  1. **Land on `/work/dateinvite`**: Views interactive web preview and tech stack (Next.js, TypeScript, Tailwind, Framer Motion, Supabase, Resend).
  2. **Reads Problem & Solution**: Understands the two-sided invitation model and zero-account creation flow.
  3. **Inspects Privacy & Verification**: Audits the live security script results proving zero email leakage across client bundles.
  4. **Navigation Options**:
     - *Path E.1 (Cross-Project)*: Clicks bottom link *"Next Project: Aahar Nearby"* → navigates to `/work/aahar-nearby`.
     - *Path E.2 (Return to Work)*: Clicks top breadcrumb `← Back to Selected Work` → returns to `/#work`.
     - *Path E.3 (Direct Conversion)*: Clicks *"Build a Web Product"* → scrolls to `/#contact`.
  5. **Exit**: Submits inquiry or navigates to the broader studio showcase.

---

## 2. Conversion Architecture & CTA Hierarchy

To preserve the understated, premium feel of the Light Editorial Canvas, the interface strictly avoids CTA saturation (e.g. repeated flashing buttons or floating banners). Every call to action belongs to an explicit architectural tier:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CONVERSION CTA HIERARCHY                        │
├───────────┬──────────────────────┬─────────────────────────────────────┤
│ TIER      │ ACTION NAME          │ PLACEMENT & BEHAVIOR                │
├───────────┼──────────────────────┼─────────────────────────────────────┤
│ Tier 1    │ "Start a Project"    │ Primary Navbar & Hero solid button  │
│ (Primary) │ (High Intent)        │ Scrolls to #contact, focuses form   │
├───────────┼──────────────────────┼─────────────────────────────────────┤
│ Tier 2    │ "Explore Our Work"   │ Hero secondary ghost button         │
│ (Explore) │ "Read Case Study"    │ Smooth scrolls to #work / opens route│
├───────────┼──────────────────────┼─────────────────────────────────────┤
│ Tier 3    │ "Explore Scope"      │ Service card progressive disclosure │
│ (Detail)  │ "Build Similar"      │ Case study bottom banner            │
├───────────┼──────────────────────┼─────────────────────────────────────┤
│ Tier 4    │ "← Back to Work"     │ Sticky contextual back breadcrumb   │
│ (Return)  │ "Next Project →"     │ End-of-article pagination           │
└───────────┴──────────────────────┴─────────────────────────────────────┘
```

### Approved Single Structured Inquiry Form Specifications
The inquiry flow strictly enforces the approved single form without third-party scheduling widgets (no Calendly, no Cal.com):
1. **Full Name** (Input: text, required)
2. **Company / Organization** (Input: text, required)
3. **Work Email** (Input: email, required)
4. **Required Service(s)** (Input: multi-select pills, min 1 required)
5. **Project Summary** (Input: textarea, required, min 10 chars)
6. **Budget / Investment Range** (Select dropdown: defaults to *"Not sure / Let's discuss"* or `[TO BE DEFINED]`; zero fabricated tiers)
7. **Optional Additional Context** (Input: textarea for links to Figma, PRD, or background notes)

---

## 3. Phase 1 Approved Status

- All 5 user journeys (A, B, C, D, E) fully mapped with entry, intent, decision points, CTAs, and exits.
- 4-tier conversion hierarchy codified.
- Approved single structured form interaction architecture locked.
