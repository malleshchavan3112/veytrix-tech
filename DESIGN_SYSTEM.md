# Design System Tokens & Foundations — Veytrix Tech

> **Document Type:** Comprehensive Design System Specifications & Tokens  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 2 — UI/UX Design  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [VISUAL_DIRECTION.md](file:///e:/VEYTRIX%20TECH/VISUAL_DIRECTION.md), [COMPONENT_SYSTEM.md](file:///e:/VEYTRIX%20TECH/COMPONENT_SYSTEM.md), [RESPONSIVE_GUIDELINES.md](file:///e:/VEYTRIX%20TECH/RESPONSIVE_GUIDELINES.md), [MOTION_GUIDELINES.md](file:///e:/VEYTRIX%20TECH/MOTION_GUIDELINES.md)

---

## 1. System Philosophy: Light Editorial Discipline & Restraint

The Veytrix Tech visual design system is grounded in a **Light Editorial Canvas**. We strictly reject generic IT vendor templates, bloated SaaS aesthetics (bubble gradients, heavy drop shadows, neon accents, floating 3D clay figures), and chaotic card grids.

Instead, the system embodies:
- **Architectural Clarity**: Swiss typographic discipline, asymmetric balance, generous breathing room.
- **Selective Contrast**: High-contrast dark charcoal typography (`#0F172A`) against an intentional off-white canvas (`#FBFBFD`).
- **Restrained Structural Framing**: 1px crisp hairline borders (`#E2E8F0` / `rgba(15, 23, 42, 0.08)`).
- **Purposeful Interactive Accent**: `#3B82F6` Precision Blue deployed selectively for actions, focus rings, and active tags—never as a flood wash.
- **Deep Storytelling Pockets**: Selective dark contrast blocks (`#0F172A`) reserved specifically for technical architecture schematics, terminal code excerpts, and mobile UI previews.

---

## 2. The 20 Foundational Visual Design System Pillars

```
┌────────────────────────────────────────────────────────────────────────┐
│             VEYTRIX TECH 20-POINT DESIGN SYSTEM SPECIFICATIONS         │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 01. Color Tokens   │ 08. Border System  │ 15. Iconography              │
│ 02. Typo Tokens    │ 09. Radius Phil.   │ 16. Image Treatment          │
│ 03. Font Weights   │ 10. Button Styles  │ 17. Tech / Code Metadata     │
│ 04. Type Scale     │ 11. Form Styles    │ 18. Focus States             │
│ 05. Spacing Scale  │ 12. Nav Styles     │ 19. Hover States             │
│ 06. Containers     │ 13. Card Styles    │ 20. Motion Principles        │
│ 07. Grid System    │ 14. Case Studies   │                              │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

### Pillar 01: Color Tokens

#### Primary Canvas (Light Editorial Foundation)
| Token Name | Hex / CSS Value | Contrast on Base | Semantic Purpose |
|---|---|---|---|
| `--color-canvas-base` | `#FBFBFD` | — | Global page backdrop (calm, warm off-white) |
| `--color-canvas-subtle` | `#F1F3F7` | 1.1:1 | Inset containers, grouped section backdrops, subtle cards |
| `--color-canvas-elevated`| `#FFFFFF` | 1.05:1 | Elevated card surfaces, floating navigation, modal panels |
| `--color-canvas-overlay` | `rgba(15, 23, 42, 0.4)` | — | Backdrop scrim for modal overlays and mobile navigation |

#### Typographic Content (Dark Charcoal)
| Token Name | Hex Code | Contrast on `#FBFBFD` | WCAG Tier | Semantic Role |
|---|---|---|---|---|
| `--color-text-primary` | `#0F172A` | 16.2:1 | Level AAA | Display headlines, section titles, primary emphasis |
| `--color-text-secondary`| `#475569` | 7.1:1 | Level AAA | Editorial body paragraphs, card summaries, labels |
| `--color-text-tertiary` | `#64748B` | 4.6:1 | Level AA | Secondary captions, timestamps, section step indicators |
| `--color-text-muted` | `#94A3B8` | 3.1:1 | UI elements | Placeholder hints, disabled states, unselected tabs |

#### Selective Interactive Accent: Precision Blue
| Token Name | Hex / CSS Value | Role & Constraint |
|---|---|---|
| `--color-accent-primary` | `#3B82F6` | Primary action buttons, active tab indicators, focus rings |
| `--color-accent-hover` | `#2563EB` | Hover state for interactive blue actions |
| `--color-accent-subtle` | `rgba(59, 130, 246, 0.08)` | Selected badge background, active pill fill |
| `--color-accent-glow` | `rgba(59, 130, 246, 0.20)` | Focused input outer halo ring |

#### Selective Dark Contrast Containers (Technical Storytelling)
| Token Name | Hex Code | Purpose & Context |
|---|---|---|
| `--color-contrast-dark-base` | `#0F172A` | Deep charcoal base for code blocks & system schematics |
| `--color-contrast-dark-surface`| `#1E293B` | Inset terminal containers & elevated cards inside dark blocks |
| `--color-contrast-dark-border` | `#334155` | Hairline grid lines & divider borders inside dark blocks |
| `--color-contrast-dark-text` | `#F8FAFC` | High-contrast code text & primary titles in dark blocks |
| `--color-contrast-dark-muted` | `#94A3B8` | Secondary comments & technical parameters in dark blocks |

#### System Validation & Feedback
| Token Name | Hex Code | Role |
|---|---|---|
| `--color-feedback-error` | `#EF4444` | Form validation failure border & error text |
| `--color-feedback-error-bg` | `rgba(239, 68, 68, 0.08)`| Error banner background fill |
| `--color-feedback-success` | `#10B981` | Verification pill, submission success icon |
| `--color-feedback-success-bg`| `rgba(16, 185, 129, 0.08)`| Success confirmation container fill |

---

### Pillar 02: Typography Tokens

```css
--font-display: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', Menlo, Monaco, Consolas, monospace;
```

---

### Pillar 03: Font Weights

| Token Name | CSS Value | Numeric | Applied Typography Role |
|---|---|---|---|
| `--font-weight-regular` | `400` | 400 | Editorial body copy, standard prose, descriptions |
| `--font-weight-medium` | `500` | 500 | Interactive buttons, navigation links, form labels, tech tags |
| `--font-weight-semibold`| `600` | 600 | Section subtitles, card headers, table headers |
| `--font-weight-bold` | `700` | 700 | Display hero headlines, primary section titles (`H1`, `H2`) |

---

### Pillar 04: Type Scale & Rhythm Hierarchy

| Token Name | Font Family | Size (px / rem) | Line Height | Tracking | Weight | Semantic HTML Element |
|---|---|---|---|---|---|---|
| `--type-display` | Geist | `56px` / `3.5rem` | `1.1` | `-0.035em` | 700 Bold | Hero Title (`<h1>`) |
| `--type-h1` | Geist | `40px` / `2.5rem` | `1.2` | `-0.025em` | 700 Bold | Section Titles (`<h2>`) |
| `--type-h2` | Geist | `28px` / `1.75rem` | `1.3` | `-0.02em` | 600 SemiBold | Sub-section / Card Titles (`<h3>`) |
| `--type-h3` | Geist | `20px` / `1.25rem` | `1.4` | `-0.015em` | 600 SemiBold | Feature & Capability Titles (`<h4>`) |
| `--type-body-lg` | Inter | `18px` / `1.125rem` | `1.6` | `-0.005em` | 400 Regular | Lead paragraphs, hero subtext |
| `--type-body` | Inter | `16px` / `1.0rem` | `1.6` | `0em` | 400 Regular | Standard body paragraphs, form inputs |
| `--type-body-sm` | Inter | `14px` / `0.875rem` | `1.5` | `0.005em` | 400 Regular | Captions, secondary helper copy |
| `--type-mono-sm` | JetBrains Mono | `13px` / `0.8125rem` | `1.45` | `0.02em` | 500 Medium | Stack badges, code snippets, phase markers |
| `--type-mono-xs` | JetBrains Mono | `11px` / `0.6875rem` | `1.4` | `0.04em` | 500 Medium | Micro tags, status indicators, metadata pills |

---

### Pillar 05: Spacing Scale

Based on an 8pt mathematical rhythm with 4pt half-steps:

| Token Name | Value (px / rem) | Common Architectural Usage |
|---|---|---|
| `--space-1` | `4px` / `0.25rem` | Micro icon-text gap, badge inline padding |
| `--space-2` | `8px` / `0.5rem` | Form label-to-input gap, tag cluster gaps |
| `--space-3` | `12px` / `0.75rem` | Input internal padding, compact card header margin |
| `--space-4` | `16px` / `1.0rem` | Standard button padding, card padding (mobile) |
| `--space-6` | `24px` / `1.5rem` | Card internal padding (desktop), grid gutters (tablet) |
| `--space-8` | `32px` / `2.0rem` | Section header to content margin, desktop grid gutters |
| `--space-12`| `48px` / `3.0rem` | Sub-section spacing, component separation |
| `--space-16`| `64px` / `4.0rem` | Major section vertical padding (mobile/tablet) |
| `--space-24`| `96px` / `6.0rem` | Standard section vertical padding (desktop) |
| `--space-32`| `128px` / `8.0rem` | Hero & Contact major section breathing room |

---

### Pillar 06: Container Widths

| Token Name | Max Width | Applied Viewport & Layout Role |
|---|---|---|
| `--container-ultra` | `1360px` | Maximum outer bounding box on $\ge 1440\text{px}$ displays |
| `--container-std` | `1200px` | Standard desktop content container ($1280\text{px} – 1439\text{px}$) |
| `--container-prose` | `800px` | Reading width for case-study narratives and legal policies |
| `--container-form` | `720px` | Centered form bounding box for Single Inquiry Engine |
| `--container-padding` | `clamp(16px, 4vw, 32px)` | Fluid lateral gutter padding protecting content from edges |

---

### Pillar 07: Grid System

- **Desktop ($\ge 1280\text{px}$)**: 12-column grid, `32px` gutter (`--space-8`), `1360px` max container.
  - Selected Work: Asymmetric split (6-col narrative + 6-col visual preview).
  - Services: Structured 4-column capability matrix (3-col span each).
  - Approach: 6-phase linear lifecycle progression.
- **Tablet ($768\text{px} – 1279\text{px}$)**: 6-column grid, `24px` gutter (`--space-6`), fluid gutters.
  - Services: 2-column or 3-column reflow.
  - Selected Work: Stacked narrative over visual preview.
- **Mobile ($320\text{px} – 767\text{px}$)**: 4-column grid (effectively 1-column stack), `16px` gutter (`--space-4`).
  - Full-width touch cards, vertically stacked metrics.

---

### Pillar 08: Border System

- **Hairline Standard**: `1px solid var(--color-border-hairline)` (`#E2E8F0` / `rgba(15, 23, 42, 0.08)`).
- **Interactive Active**: `1px solid var(--color-accent-primary)` (`#3B82F6`).
- **Input Neutral**: `1px solid var(--color-border-default)` (`#CBD5E1`).
- **Dark Contrast Hairline**: `1px solid var(--color-contrast-dark-border)` (`#334155`).
- **Error Border**: `1px solid var(--color-feedback-error)` (`#EF4444`).
- **Rule**: No heavy or double borders. Precision 1px hairline dividers establish architectural grids.

---

### Pillar 09: Radius Philosophy

We strictly enforce disciplined, restrained corner radii:
- **`--radius-sm` (`4px`)**: Monospace code badges, technical stack tags, status indicators.
- **`--radius-md` (`6px`)**: Form inputs, standard buttons, dropdown triggers.
- **`--radius-lg` (`10px`)**: Cards, image frames, dark contrast code containers.
- **`--radius-pill` (`9999px`)**: Micro status badges (e.g., live production indicator dot).
- *Strict Rule*: Zero bubbly, cartoonish 24px+ border-radii on primary cards.

---

### Pillar 10: Button Styles

#### 1. Primary Action (`<Button variant="primary" />`)
- **Visuals**: Dark charcoal background (`#0F172A`), white text (`#FFFFFF`), `6px` radius, `44px` minimum height, `14px` Inter medium font (`--type-body-sm`), `12px 24px` padding.
- **Hover**: Subtle brightness increase (`#1E293B`), `-1px` vertical translateY, `180ms` smooth ease.
- **Active / Pressed**: `0px` translateY, background `#0F172A`.
- **Focus**: `2px solid #3B82F6` outline with `2px` offset.

#### 2. Selective Accent Action (`<Button variant="accent" />`)
- **Visuals**: `#3B82F6` Precision Blue background, white text (`#FFFFFF`), `6px` radius, `44px` height. Reserved strictly for primary hero conversion ("Start a Project") and form submission.
- **Hover**: `#2563EB` background.

#### 3. Ghost / Secondary Action (`<Button variant="ghost" />`)
- **Visuals**: Transparent background, `1px solid #E2E8F0` border, dark charcoal text (`#0F172A`), `6px` radius.
- **Hover**: Background `rgba(15, 23, 42, 0.04)`, border `#CBD5E1`.

#### 4. Editorial Text Link (`<Button variant="text" />`)
- **Visuals**: Inline dark charcoal text with subtle arrow glyph (`→`), underline on hover, zero padding.

---

### Pillar 11: Form Styles (Single Structured Inquiry Engine)

- **Input Surface**: Clean `#FFFFFF` fill on `#FBFBFD` canvas.
- **Borders**: `1px solid #CBD5E1`, transition to `1px solid #3B82F6` on focus.
- **Focus State**: `outline: 2px solid rgba(59, 130, 246, 0.25)`, `outline-offset: 1px`.
- **Labels**: Top-aligned, `14px` Inter medium (`#0F172A`), `6px` bottom margin.
- **Placeholders**: `14px` Inter regular (`#94A3B8`).
- **Validation Errors**: `1px solid #EF4444` border, accompanied by an inline `12px` Inter regular message with alert icon and `aria-live="polite"`.
- **Service Selector Pills**: Multi-select toggle pills with `#F1F3F7` base, transitioning to `#0F172A` text and `#3B82F6` hairline border when active.

---

### Pillar 12: Navigation Styles

- **Desktop Global Navbar**: Sticky top bar, height `68px`, base `#FBFBFD` with subtle `8px` backdrop blur (`backdrop-filter: blur(8px)`), bounded by bottom `1px solid #E2E8F0` hairline divider.
  - Left: Geometric "V" Monogram + "VEYTRIX TECH" wordmark (Geist Bold).
  - Center: Horizontal anchor links (`#work`, `#services`, `#approach`, `#contact`), `14px` Inter medium (`#475569`), hover `#0F172A`.
  - Right: High-contrast primary action CTA ("Start a Project").
- **Mobile Navigation**:
  - Compact sticky bar, height `60px`.
  - Right: Minimalist 2-line hamburger icon.
  - Drawer: Full-height slide-over drawer from right (`#FBFBFD`), `24px` padded links, focus trap, explicit close button (`✕`), Escape key listener.

---

### Pillar 13: Card Usage & Structural Rhythm (Anti-Repetition Rule)

- **Restraint First**: Cards are an exception, not the universal default container. Avoid "section after section of identical bordered cards."
- **Alternative Structures**:
  - Services: Typographic matrix with horizontal dividing hairlines rather than 8 boxy cards.
  - Approach: Fluid continuous milestone rail rather than discrete step cards.
  - Selected Work: Asymmetric editorial spreads pairing large device mockups with flush-left typographic prose.
- **Card Styling (When Used)**:
  - Surface: Pristine `#FFFFFF` on `#FBFBFD` base canvas.
  - Framing: 1px hairline border (`#E2E8F0`), 10px corner radius (`--radius-lg`).
  - Hover: Subtle `-2px` translateY, hairline border shifts smoothly to `#CBD5E1`. Zero gaudy drop shadows or neon glows.

---

### Pillar 14: Case-Study Visual Patterns (Product-Forward Storytelling)

Dedicated 10-tier case-study visual pattern:
1. **Contextual Top Bar**: Sticky sub-header (`← Back to Selected Work`), height `48px`, `#FBFBFD`.
2. **Hero & Metadata Cluster**: High-impact Geist title, project category pill, tech stack pills (JetBrains Mono), verified role tags.
3. **Problem Space Callout**: High-contrast pull-quote callout (`2px solid #0F172A` left border), accompanied by real-world friction narratives in clean editorial prose.
4. **Product Concept & Entity Flow**: Structural architectural diagram showing interconnected user mental models.
5. **Solution Model & Interactive Engine**: Large visual walkthroughs of the flagship product workflows.
6. **UX Decisions & Interface States**: Side-by-side comparison of wireframe logic vs high-fidelity interface states.
7. **System Architecture**: **Selective Dark Contrast Container** (`#0F172A` base, `#1E293B` borders, `#F8FAFC` code typography) displaying verified architectural pipelines.
8. **Visual Design Showcase**: Real production screens framed in 1px hairline device containers with high prominence.
9. **Factual Verification Outcomes**: Clean data matrix labeled strictly as **Repository Validation** or **Engineering Benchmarks** (zero business or market adoption claims).
10. **Pagination & Conversion**: Dual banner ("Next Project: DateInvite →" and "Start a Project" linking to `/#contact`).

---

### Pillar 15: Iconography

- **Style**: Minimalist, geometric, 1.5px consistent stroke width outline icons.
- **Source**: Lucide-inspired geometric outline icons.
- **Coloration**: Monochromatic dark charcoal (`#0F172A`) or secondary slate (`#475569`).
- **Rules**: Zero colorful 3D rendered icons, zero cartoon illustrations, zero generic AI sparkles.

---

### Pillar 16: Image & UI Preview Treatment

- **Framing**: All UI previews and screenshots must be framed within a crisp `1px solid #E2E8F0` hairline border with `10px` corner radius.
- **Aspect Ratios**: Mobile UI screens framed in `9:19.5` phone aspect ratios; desktop web platform previews framed in `16:10` clean browser containers.
- **Browser Framing**: Clean top header bar with 3 subtle window dots (`#CBD5E1`) and simulated URL bar.
- **Perspective**: Strict 2D front-facing or slight isometric flat elevation; zero distorted or floating 3D perspective tilts.

---

### Pillar 17: Code & Technical Metadata Treatment

- **Font**: JetBrains Mono (`--font-mono`), `13px`, medium weight.
- **Container**: Deployed within selective dark contrast blocks (`#0F172A`).
- **Header**: Terminal bar with file path (e.g., `lib/features/menu/services/ai_formatter.dart`), status pill, and one-click copy trigger.
- **Contrast**: Syntax-highlighted slate and soft teal/blue tokens ensuring $\ge 7:1$ contrast against `#0F172A`.

---

### Pillar 18: Focus States

- **Keyboard Focus Rule**: All interactive controls (buttons, links, form inputs, disclosure accordions) must display an unambiguous focus indicator when navigated via keyboard.
- **Indicator**: `outline: 2px solid #3B82F6`, `outline-offset: 2px`.
- **Mouse Suppression**: `:focus:not(:focus-visible)` suppresses the outline during mouse clicks to preserve clean visual aesthetics while guaranteeing WCAG 2.4.7 compliance.

---

### Pillar 19: Hover States

- **Primary Buttons**: Background brightness shift from `#0F172A` to `#1E293B`, `-1px` translateY, `180ms` ease.
- **Accent Buttons**: Background shift from `#3B82F6` to `#2563EB`.
- **Ghost Buttons**: Background shifts to `rgba(15, 23, 42, 0.04)`, border shifts to `#CBD5E1`.
- **Cards**: `-2px` translateY, hairline border shifts to `#CBD5E1`.
- **Text Links**: Subtle slide-right (`+2px`) of the trailing arrow glyph (`→`).

---

### Pillar 20: Motion Principles

- **Speed & Curves**:
  - Micro-actions (Hover, clicks): `180ms` via `cubic-bezier(0.2, 0, 0, 1)`.
  - Structural transitions (Modals, drawers): `300ms` via `cubic-bezier(0.16, 1, 0.3, 1)`.
  - Page entry reveals: `400ms` with `60ms` staggered card reveals.
- **Restraint**: Zero continuous floating animations, zero bouncing loops, zero heavy parallax.
- **Accessibility**: Strict suppression of all non-essential motion under `@media (prefers-reduced-motion: reduce)`.

---

## 3. Approved Decisions vs. Open Definitions

### Project-Owner Approved Items
- All 20 foundational design system pillars codified.
- Light editorial canvas (`#FBFBFD`) and dark charcoal typography (`#0F172A`) locked.
- Selective Precision Blue (`#3B82F6`) and selective dark contrast storytelling containers locked.
- Geist, Inter, and JetBrains Mono typographic hierarchy validated.

### Remaining Open Definitions
- None. System is complete and ready for visual screen synthesis.
