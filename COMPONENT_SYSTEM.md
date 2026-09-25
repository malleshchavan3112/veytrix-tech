# Component System Architecture & Visual Language — Veytrix Tech

> **Document Type:** UI Component Specifications, Visual Language & API Contracts  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 2 — UI/UX Design  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [DESIGN_SYSTEM.md](file:///e:/VEYTRIX%20TECH/DESIGN_SYSTEM.md), [VISUAL_DIRECTION.md](file:///e:/VEYTRIX%20TECH/VISUAL_DIRECTION.md), [SCREEN_INVENTORY.md](file:///e:/VEYTRIX%20TECH/SCREEN_INVENTORY.md), [ACCESSIBILITY.md](file:///e:/VEYTRIX%20TECH/ACCESSIBILITY.md)

---

## 1. Component Hierarchy & Atomic Structure

The component architecture is strictly modular and decoupled from application state:

```
[ ATOMS ] ──────────► [ MOLECULES ] ──────────► [ ORGANISMS ] ──────────► [ VIEWS ]
• Button              • ServiceCard             • GlobalNavbar             • Homepage (/)
• Input / Textarea    • ProjectCard             • MobileDrawer             • Case Studies
• Badge / Tag         • TimelinePhaseCard       • ServicesGrid             • Legal Pages
• HairlineDivider     • FormFieldGroup          • SingleInquiryFormEngine
• MonospaceTag        • StatCounterBlock        • GlobalFooter
```

---

## 2. Atom Visual Specifications & State Contracts

### 2.1 Button (`<Button />`)
- **Visual Design**:
  - `primary`: Background `#0F172A`, text `#FFFFFF`, radius `6px`, height `44px`, font `14px Inter Medium`. On hover: background `#1E293B`, `-1px translateY`.
  - `accent`: Background `#3B82F6`, text `#FFFFFF`, radius `6px`, height `44px`. On hover: background `#2563EB`. Reserved for primary hero CTA and form submit.
  - `ghost`: Transparent background, `1px solid #E2E8F0` border, text `#0F172A`, radius `6px`, height `44px`. On hover: background `rgba(15, 23, 42, 0.04)`, border `#CBD5E1`.
  - `text`: Inline dark charcoal text with trailing arrow (`→`), zero padding. On hover: arrow slides right `+2px`.
- **States Matrix**:
  - `Default`: Base styles above.
  - `Hover`: Smooth 180ms ease transition.
  - `Focus-Visible`: `outline: 2px solid #3B82F6; outline-offset: 2px;`.
  - `Active`: `translateY(0px)`, background brightness 0.95x.
  - `Disabled`: Opacity 0.45, `cursor: not-allowed;`, pointer events suppressed.
  - `Loading`: Inline 16px SVG spinner with accessible `aria-busy="true"`.

### 2.2 Form Input (`<Input />` & `<Textarea />`)
- **Structure**: Semantic `<label>`, input element, and helper/error container with `aria-live="polite"`.
- **Styling**: `#FFFFFF` background on `#FBFBFD` canvas, `1px solid #CBD5E1` border, `6px` radius, `12px 16px` padding.
- **States**:
  - `Default`: Border `#CBD5E1`, text `#0F172A`, placeholder `#94A3B8`.
  - `Focus`: Border `#3B82F6`, box-shadow `0 0 0 3px rgba(59, 130, 246, 0.15)`.
  - `Error`: Border `#EF4444`, error text `#EF4444` (12px Inter regular), `aria-invalid="true"`.
  - `Disabled`: Background `#F1F3F7`, border `#E2E8F0`, text `#94A3B8`.

### 2.3 Badges & Metadata Tags (`<Badge />`)
- **`tech`**: JetBrains Mono 12px, background `#F1F3F7`, border `1px solid #E2E8F0`, text `#475569`, radius `4px`, padding `3px 8px`.
- **`category`**: Inter 11px uppercase (`letter-spacing: 0.05em`), background `rgba(15, 23, 42, 0.05)`, text `#0F172A`, radius `4px`.
- **`status`**: Pill shape with 6px live indicator dot (`#10B981` green for verified production).
- **`phase`**: JetBrains Mono 11px, prefix number `01`, `02`, etc.

### 2.4 Hairline Structural Divider (`<HairlineDivider />`)
- **Styling**: `1px solid #E2E8F0` (`rgba(15, 23, 42, 0.08)`).
- **Dark Contrast Variant**: `1px solid #334155`.

---

## 3. Molecule Visual Specifications (Editorial Restraint)

### 3.1 Studio Triad Artifact (`<StudioTriadArtifact />`)
- **Role**: Hero signature visual element communicating the intersection of Design, Technology, and Product Thinking.
- **Composition**: An architectural, geometric layout featuring:
  - Intersecting 1px hairline vertices forming the precision Triad nexus.
  - Three interactive/annotated nodes:
    - `01 / DESIGN`: Geometric wireframe vectors, typography tokens (`Geist / Inter`), micro-motion paths.
    - `02 / TECHNOLOGY`: Type-safe contracts (`TypeScript / Rust`), sub-second LCP benchmark targets, resilient infrastructure.
  - Framing: Neutral Veytrix system metadata (`VTX-CORE // 01`, `SYSTEM // OPERATIONAL`, `BUILD MODE // ACTIVE`, `SIGNAL // STABLE`), live status indicator (`#10B981` pulsing dot), and crisp hairline framing. Zero arbitrary geographic telemetry or fake coordinates.

### 3.2 Service Matrix Row (`<ServiceMatrixRow />`)
- **Structure**: Replaces repetitive boxy cards with an elegant editorial typographic matrix:
  - 2-digit index (`01`–`08`) in JetBrains Mono.
  - Bold Service Title in Geist SemiBold (22px).
  - Concise Scope Summary in Inter (15px, text `#475569`).
  - Key Deliverable Tags (JetBrains Mono 12px pills).
  - Action trigger: "Explore Scope →" linking to `#contact` with pre-selection.
- **Visuals**: Full-width row bounded by top and bottom 1px hairline dividers (`#E2E8F0`), subtle background shift on hover (`rgba(15, 23, 42, 0.02)`), `-1px` vertical translateY.

### 3.3 Project Showcase Spread (`<ProjectShowcaseSpread />`)
- **Structure**: Asymmetric editorial layout pairing high-resolution device preview on one side (60% width) with rich product storytelling narrative on the other (40% width).
- **Visuals**: Large device/browser container with 1px hairline chrome and 10px radius; zero repetitive boxy cards.

### 3.4 Approach Lifecycle Rail (`<ApproachLifecycleRail />`)
- **Structure**: Continuous horizontal milestone continuum connecting phases 01 to 06 with progress ticks and phase deliverables, rather than isolated boxy cards.
- **Layout**: Horizontal connected rail on desktop; vertical stepped milestone track on mobile.

---

## 4. Organism Visual Specifications

### 4.1 Global Navbar (`<GlobalNavbar />`)
- **Desktop**: Height `68px`, sticky at top (`z-index: 50`), backdrop-filter `blur(8px)` on `#FBFBFD` with bottom `1px solid #E2E8F0` border.
  - Brand Mark: Intersecting "V" monogram + "VEYTRIX TECH" in Geist Bold.
  - Nav Links: Anchor links (`#work`, `#services`, `#approach`, `#contact`) with hover underline effect.
  - CTA Button: Dark charcoal "Start a Project" button.
- **Mobile Drawer**: Slide-over panel from right, width `100vw` or `340px`, backdrop blur overlay, accessible close trigger.

### 4.2 Single Inquiry Form Engine (`<SingleInquiryFormEngine />`)
- Centered container (`max-width: 720px`), `#FFFFFF` surface, `1px solid #E2E8F0` border, `10px` radius, `40px` internal padding.
- 7 fields arranged in clean logical flow:
  1. Full Name (Text input)
  2. Company / Organization (Text input)
  3. Work Email (Email input)
  4. Required Services (Multi-select toggle pill cluster: 8 services)
  5. Project Summary (Textarea, 4 rows)
  6. Budget / Investment Range (Select / radio pills: default *"Not sure / Let's discuss"*)
  7. Optional Additional Context (Textarea, 2 rows)
- Submit Action: Full-width or right-aligned Accent Button ("Submit Inquiry →").

### 4.3 Global Footer (`<GlobalFooter />`)
- Structured editorial layout on `#FBFBFD` with top `1px solid #E2E8F0` hairline border.
- 4-column layout:
  - Col 1: Veytrix Tech monogram, wordmark, and triad statement.
  - Col 2: Navigation anchors (`#work`, `#services`, `#approach`, `#contact`).
  - Col 3: Case studies (`/work/aahar-nearby`, `/work/dateinvite`).
  - Col 4: Legal & Standards (`/privacy`, `/terms`, WCAG AA notice, copyright).

---

## 5. Approved Status

- Component Visual Language and API Contracts locked for Phase 2 UI/UX Design.
