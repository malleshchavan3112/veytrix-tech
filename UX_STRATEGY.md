# UX Strategy, Wireframe Architecture & Accessibility — Veytrix Tech

> **Document Type:** UX Strategy, Structural Wireframe Specs & Accessibility Architecture  
> **Status:** Phase 1 Complete (UX Architecture)  
> **Phase:** Phase 1 — UX Architecture  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [INFORMATION_ARCHITECTURE.md](file:///e:/VEYTRIX%20TECH/INFORMATION_ARCHITECTURE.md), [SITEMAP.md](file:///e:/VEYTRIX%20TECH/SITEMAP.md), [SCREEN_INVENTORY.md](file:///e:/VEYTRIX%20TECH/SCREEN_INVENTORY.md), [ACCESSIBILITY.md](file:///e:/VEYTRIX%20TECH/ACCESSIBILITY.md)

---

## 1. UX Mission & Strategic Pillars

The UX architecture of the Veytrix Tech website is built around **communicating mastery through structural restraint**. On the approved **Light Editorial Canvas** (`#FBFBFD` base, dark charcoal typography `#0F172A`, fine hairline borders `#E2E8F0`, generous whitespace, and selective `#3B82F6` Precision Blue), the user experience balances rapid scanning for executive decision-makers with exhaustive architectural depth for technical evaluators.

---

## 2. Structural Wireframe Specifications

*(Note: These specifications govern layout structure, hierarchy, and interaction mechanics. They do not dictate pixel-perfect visual styling or final decorative UI design.)*

```
┌────────────────────────────────────────────────────────────────────────┐
│                        HOMEPAGE WIREFRAME SCHEMATIC                    │
├────────────────────────────────────────────────────────────────────────┤
│ [NAVBAR] Logo / Monogram         [Work] [Services] [Approach] [CTA]   │
├────────────────────────────────────────────────────────────────────────┤
│ [HERO]                                                                 │
│   Eyebrow: Studio Classification                                       │
│   Headline: "Design + Technology + Product Thinking" (Geist Bold)      │
│   Statement: Modern digital product & technology studio bridging craft │
│   [Primary: Start a Project]   [Secondary: Explore Our Work]          │
│   [Architectural Framing Grid Container]                               │
├────────────────────────────────────────────────────────────────────────┤
│ [SELECTED WORK (#work)]                                                │
│   Header: "Built for Real-World Demands"                               │
│   ┌──────────────────────────────┬──────────────────────────────────┐  │
│   │ Card 1: Aahar Nearby         │ Card 2: DateInvite               │  │
│   │ • Tags: Mobile / Real-Time   │ • Tags: Web App / Micro-Motion   │  │
│   │ • Mockup preview container   │ • Web UI preview container       │  │
│   │ • Link: Read Case Study →    │ • Link: Read Case Study →        │  │
│   └──────────────────────────────┴──────────────────────────────────┘  │
├────────────────────────────────────────────────────────────────────────┤
│ [SERVICES (#services)]                                                 │
│   Header: "Comprehensive Product Execution"                            │
│   ┌──────────────┬──────────────┬──────────────┬──────────────────┐    │
│   │ 1. Web Dev   │ 2. Web Apps  │ 3. Mobile    │ 4. UI/UX Design  │    │
│   ├──────────────┼──────────────┼──────────────┼──────────────────┤    │
│   │ 5. Graphic   │ 6. AI Solut. │ 7. Custom SW │ 8. Product Dev   │    │
│   └──────────────┴──────────────┴──────────────┴──────────────────┘    │
│   (Each card has expandable "Explore Scope" drawer)                    │
├────────────────────────────────────────────────────────────────────────┤
│ [APPROACH (#approach)]                                                 │
│   Header: "The Veytrix Product Lifecycle"                              │
│   [0 Docs]→[1 UX]→[2 UI]→[3 Stitch]→[4 Review]→[5 Dev]→[6 QA]→[7 Launch│
├────────────────────────────────────────────────────────────────────────┤
│ [STUDIO & TECH STANDARDS]                                              │
│   Clean Architecture • Zero Templates • Type Safety • WCAG AA • Next.js│
├────────────────────────────────────────────────────────────────────────┤
│ [CONTACT (#contact)]                                                   │
│   Header: "Let's Engineer Your Digital Product"                        │
│   ┌─────────────────────────────────────────────────────────────────┐  │
│   │ Single Structured Form (7 Fields)                               │  │
│   │ [Name] [Company] [Email] [Services Multi-Select]                │  │
│   │ [Project Summary] [Budget: Let's discuss] [Optional Context]    │  │
│   │ [Send Project Inquiry Button]                                   │  │
│   └─────────────────────────────────────────────────────────────────┘  │
├────────────────────────────────────────────────────────────────────────┤
│ [FOOTER] Brand Mark • Sitemap Columns • Legal • Copyright              │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Specification 2.1: Global Header & Navigation Shell
- **Section Purpose**: Persistent brand anchor, global orientation, and primary conversion trigger.
- **Content Hierarchy**:
  1. Monogram + "VEYTRIX TECH" wordmark (links to top).
  2. Anchor navigation list (`Work`, `Services`, `Approach`, `Contact`).
  3. Action CTA button (*"Start a Project"*).
- **Primary Action**: Click *"Start a Project"* (scrolls smoothly to `#contact`).
- **Secondary Action**: Click anchor links (scrolls to target section and updates URL hash).
- **Required Components**: `<BrandMark />`, `<NavigationLinks />`, `<Button variant="primary" />`, `<MobileMenuToggle />`.
- **Information Priority**: P1 Brand & CTA; P2 Section links.
- **Expected Interaction**: Applies bottom hairline border (`#E2E8F0`) and subtle backdrop blur after $50\text{px}$ scroll.
- **Responsive Behavior**: $\ge 1024\text{px}$: Horizontal bar. $< 1024\text{px}$: Links hide; hamburger button reveals mobile drawer.

---

### Specification 2.2: Hero Section (`#hero`)
- **Section Purpose**: Immediate value proposition communication within 5 seconds.
- **Content Hierarchy**:
  1. Eyebrow: *"Modern Digital Product & Technology Studio"*.
  2. Headline: **"Design + Technology + Product Thinking"** (Geist, tight tracking).
  3. Supporting statement: *"A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking."*
  4. Action button group: Primary (*"Start a Project"*) and Ghost (*"Explore Our Work"*).
  5. Ambient architectural wireframe framing.
- **Primary Action**: *"Start a Project"* (scrolls to `#contact`).
- **Secondary Action**: *"Explore Our Work"* (scrolls to `#work`).
- **Required Components**: `<EyebrowBadge />`, `<DisplayHeadline />`, `<LeadParagraph />`, `<ButtonGroup />`, `<ArchitecturalFrame />`.
- **Information Priority**: P1 Headline Triad; P2 Supporting Statement; P3 CTAs.
- **Responsive Behavior**: Desktop: Left-aligned content with generous right margin. Mobile: Stacked layout, full-width touch buttons ($44\text{px}$ height), headline scales down via CSS clamp.

---

### Specification 2.3: Selected Work (`#work`)
- **Section Purpose**: Deliver undeniable proof of engineering and design capability through two verified flagship applications.
- **Content Hierarchy**:
  1. Section Header: Eyebrow (*"Selected Work"*), Headline (*"Built for Real-World Demands"*).
  2. Card 1 (Aahar Nearby): Mobile mockup preview, domain tag, problem summary, stack pills (Flutter, Firebase, OneSignal), link (*"Read Case Study →"*).
  3. Card 2 (DateInvite): Web UI preview, domain tag, problem summary, stack pills (Next.js, Supabase, Framer Motion, Resend), link (*"Read Case Study →"*).
- **Primary Action**: Click card or link to open dedicated route (`/work/aahar-nearby` or `/work/dateinvite`).
- **Required Components**: `<SectionHeader />`, `<ProjectCard />`, `<TechBadgeGroup />`, `<RouteLink />`.
- **Information Priority**: P1 Project Titles & Mockups; P2 Core Problems Solved; P3 Tech Badges.
- **Responsive Behavior**: Desktop: 2-column balanced grid ($50/50$). Mobile/Tablet: 1-column vertical stack with full-width touch area.

---

### Specification 2.4: Services Matrix (`#services`)
- **Section Purpose**: Explicit breakdown of the 8 technical and design capabilities available for client engagement.
- **Content Hierarchy**:
  1. Section Header: Eyebrow (*"Capabilities"*), Headline (*"Comprehensive Product Execution"*).
  2. 8 Domain Cards: Website Dev, Web Apps, Mobile Apps, UI/UX Design, Graphic Design, AI Solutions, Custom Software, Product Development.
  3. Per Card: Title, 2-line summary, technology tags, and *"Explore Scope"* expander.
- **Primary Action**: Click *"Explore Scope"* to expand deliverable checklists.
- **Secondary Action**: Click *"Inquire About Service"* to scroll to `#contact` with pre-selected service.
- **Required Components**: `<SectionHeader />`, `<ServiceCardGrid />`, `<ServiceCardAccordion />`, `<TechPill />`.
- **Information Priority**: P1 Service Titles; P2 Deliverable Checklists; P3 Technologies.
- **Responsive Behavior**: Desktop ($>1280\text{px}$): 4 columns. Laptop ($1024–1279\text{px}$): 3 columns. Tablet ($768–1023\text{px}$): 2 columns. Mobile ($<768\text{px}$): 1 column accordion stack.

---

### Specification 2.5: Studio Methodology & Lifecycle (`#approach`)
- **Section Purpose**: Builds confidence in delivery reliability by showcasing the disciplined 8-phase sequential product lifecycle.
- **Content Hierarchy**:
  1. Section Header: Eyebrow (*"Methodology"*), Headline (*"The Veytrix Product Lifecycle"*).
  2. 8 Milestone Blocks: `Documentation → UX Architecture → UI/UX Design → Google Stitch via MCP → Design Review → Implementation → Functionality → QA → Deployment`.
  3. Per Phase: Phase number, title, entrance/exit criteria, and core deliverable artifact.
- **Primary Action**: Scan phases; click phase milestone to view criteria.
- **Required Components**: `<TimelineTracker />`, `<PhaseCard />`, `<GateBadge />`.
- **Responsive Behavior**: Desktop: Horizontal sequence track. Mobile: Vertical numbered timeline track.

---

### Specification 2.6: Single Structured Inquiry Engine (`#contact`)
- **Section Purpose**: High-conversion lead intake engine capturing qualified client project requirements.
- **Content Hierarchy**:
  1. Section Header: Eyebrow (*"Start a Project"*), Headline (*"Let's Engineer Your Digital Product"*).
  2. Single Structured Form with 7 fields:
     - Field 1: Full Name (Input: text)
     - Field 2: Company / Organization (Input: text)
     - Field 3: Work Email (Input: email)
     - Field 4: Required Service(s) (Multi-select pill group: 8 domains)
     - Field 5: Project Summary (Textarea: scope, goals)
     - Field 6: Budget / Investment Range (Select: defaults to *"Not sure / Let's discuss"* or `[TO BE DEFINED]`)
     - Field 7: Optional Additional Context (Input/Textarea: links to specs, Figma)
  3. Submit Trigger: High-contrast button (*"Send Project Inquiry"*).
  4. Trust signals: Reassurance text (*"24–48h response window. Zero marketing spam."*).
- **Primary Action**: Click *"Send Project Inquiry"*.
- **Interaction**: Inline validation on blur; client schema check; swaps to `<SubmissionSuccessCard />` upon 200 OK.
- **Required Components**: `<FormContainer />`, `<FormFieldGroup />`, `<MultiSelectPillGroup />`, `<DropdownSelect />`, `<SubmitButton />`, `<InlineError />`, `<SuccessCard />`.
- **Responsive Behavior**: Desktop: 2-column input layout inside centered card container. Mobile: 1-column vertical stack with $44\text{px}$ minimum touch inputs.

---

### Specification 2.7: Standalone Case Study Route Template (`/work/:slug`)
- **Section Purpose**: Deep-dive technical validation on dedicated indexable URLs.
- **Content Hierarchy**:
  1. Top sticky contextual bar: `← Back to Selected Work` + active title indicator.
  2. Hero: Case title, subtitle, platform tags, tech stack badges.
  3. Problem & Context narrative.
  4. Product concept & actor models.
  5. System architecture diagram & data flows.
  6. Visual showcase container (selective dark slate container `#0F172A` for terminal code and mobile UI previews).
  7. Key features & workflow walkthroughs.
  8. Verified factual outcomes (automated test passes, privacy audits).
  9. Project pagination: `Next Project: [Other Project] →`.
  10. Bottom conversion banner: *"Build a Similar System"* -> `#contact`.
- **Primary Action**: Click *"Start a Project"* in bottom banner (scrolls to `/#contact`).
- **Secondary Action**: Click `← Back to Selected Work` or `Next Project →`.
- **Required Components**: `<BreadcrumbBar />`, `<CaseStudyHero />`, `<DarkContrastContainer />`, `<ArchitectureDiagramBlock />`, `<PaginationBar />`.

---

## 3. Accessibility Architecture & Standards (WCAG 2.1 AA)

Accessibility is incorporated directly into the UX wireframe specifications, not treated as an afterthought:

### 3.1 Landmark Structure
Every page declares semantic HTML5 landmark roles:
- `<header role="banner">`: Contains brand mark, desktop navigation, and primary CTA.
- `<nav role="navigation" aria-label="Main Navigation">`: Top navigation links and mobile drawer.
- `<main role="main" id="main-content">`: Encloses all primary section content.
- `<section aria-labelledby="[section-id]-title">`: Explicitly bounds each homepage module.
- `<footer role="contentinfo">`: Contains sitemap, legal compliance, and copyright.

### 3.2 Focus Order & Keyboard Navigation
- **Skip Link**: Positioned as the first DOM element: `<a href="#main-content" class="skip-to-content">Skip to main content</a>`.
- **Sequential Tab Traversal**: Logically follows visual layout: Header links → CTAs → Card expanders → Form inputs → Submit → Footer.
- **Focus Trapping**: In the mobile drawer, Tab focus is strictly trapped within drawer elements until closed.
- **Focus Indicators**: Every interactive control receives a visible `outline: 2px solid #3B82F6; outline-offset: 2px` via `:focus-visible`.

### 3.3 Heading Hierarchy (No Level Skipping)
```
[h1] Veytrix Tech — Design + Technology + Product Thinking (Exactly one h1 on homepage)
  ├── [h2] Selected Work
  │     ├── [h3] Aahar Nearby
  │     └── [h3] DateInvite
  ├── [h2] Capabilities & Services
  │     ├── [h3] Website Development
  │     ├── [h3] Web Application Development
  │     └── [h3] ... (remaining services)
  ├── [h2] The Veytrix Product Lifecycle
  ├── [h2] Engineering Standards & Craft
  └── [h2] Start a Project
```

### 3.4 Accessible Form Labeling & Error Handling
- Every input has an explicitly linked `<label for="[field-id]">`. Placeholders are never used as labels.
- Error states link inputs to error messages via `aria-describedby="[field-id]-error"`.
- Error messages are contained in `<span id="[field-id]-error" role="alert">`.
- Dynamic submission success alerts utilize `aria-live="polite"`.

### 3.5 Reduced-Motion Architecture
- When `@media (prefers-reduced-motion: reduce)` is detected:
  - All vertical section translations (`translateY`) are disabled.
  - Page transitions occur via instant opacity swaps or zero-duration transitions.
  - Accordion expanders toggle instantly without slide animations.

---

## 4. Phase 1 Approved Status

- Wireframe structural specifications completed for all 8 homepage modules and standalone case study templates.
- Accessibility landmark, focus, and heading hierarchy models codified.
- Zero visual design, zero Stitch calls, zero code written.
