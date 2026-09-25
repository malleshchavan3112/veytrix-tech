# Responsive Visual Rules & Viewport Specifications — Veytrix Tech

> **Document Type:** Responsive Architecture & Viewport Visual Rules  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 2 — UI/UX Design  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [SCREEN_INVENTORY.md](file:///e:/VEYTRIX%20TECH/SCREEN_INVENTORY.md), [DESIGN_SYSTEM.md](file:///e:/VEYTRIX%20TECH/DESIGN_SYSTEM.md), [COMPONENT_SYSTEM.md](file:///e:/VEYTRIX%20TECH/COMPONENT_SYSTEM.md)

---

## 1. Responsive Philosophy: Fluid Swiss Hierarchy on Light Canvas

The responsive design system enforces a **fluid, mobile-first visual architecture**. The layout reflows seamlessly across viewports using CSS Grid, Flexbox, and mathematical clamps (`clamp()`). We guarantee minimum 44px touch targets on mobile devices while unlocking expansive, multi-column editorial framing on large desktop displays.

---

## 2. Viewport Specification Matrix

```
┌────────────────────────────────────────────────────────────────────────┐
│                        VIEWPORT SPECIFICATION MATRIX                   │
├──────────────┬──────────────────┬──────────────────────────────────────┤
│ TIER         │ WIDTH            │ STRUCTURAL GRID CONFIGURATION        │
├──────────────┼──────────────────┼──────────────────────────────────────┤
│ Desktop Ultra│ $\ge 1440\text{px}$│ Centered container (1360px), 4-col   │
│ Desktop Std  │ $1280\text{px}$  │ Standard container (1200px), 4-col   │
│ Tablet Land. │ $1024\text{px}$  │ Full width (gutter 32px), 3-col      │
│ Tablet Port. │ $768\text{px}$   │ Full width (gutter 24px), 2-col      │
│ Mobile Std   │ $390\text{px}$   │ 1-col stack, full-width touch actions│
│ Mobile Mini  │ $375\text{px}$   │ Compact clamp scale, 44px hit targets│
└──────────────┴──────────────────┴──────────────────────────────────────┘
```

---

## 3. Viewport Tier Visual Adaptations

### 3.1 Desktop Ultra ($\ge 1440\text{px}$)
- **Max Container**: `1360px` centered with auto margins.
- **Header**: Persistent horizontal navigation with anchor links and "Start a Project" CTA.
- **Hero**: Display headline `56px` (`3.5rem`) Geist Bold, line-height 1.1, generous right whitespace.
- **Selected Work**: 50/50 asymmetric split cards with interactive device preview frames.
- **Services**: Balanced 4-column grid (3 columns each).
- **Approach**: 6-phase horizontal milestone progression.
- **Contact Form**: Centered `720px` card container with 2-column input rows.

### 3.2 Desktop Standard ($1280\text{px} – 1439\text{px}$)
- **Max Container**: `1200px` centered.
- **Typography**: Display headline `48px` (`3.0rem`), H1 `36px` (`2.25rem`).
- **Services**: 4-column grid with slightly reduced card padding (`20px`).
- **Selected Work**: 50/50 split layout.
- **Case Studies**: 45/55 narrative-to-visual ratio.

### 3.3 Tablet Landscape ($1024\text{px} – 1279\text{px}$)
- **Layout**: Fluid container with `32px` lateral padding.
- **Header**: Compact navigation bar; link font size `13px`.
- **Services**: Reflows to a 3-column + 1-column layout or 2-column grid.
- **Approach**: Horizontal scroll rail with progress indicator.
- **Contact**: 2-column inputs adjust to full width for complex fields.

### 3.4 Tablet Portrait ($768\text{px} – 1023\text{px}$)
- **Navigation**: Mobile hamburger menu activates; horizontal links hide.
- **Hero**: Centered or left-aligned with dual CTAs stacked or side-by-side.
- **Services**: Clean 2-column grid (4 rows).
- **Selected Work**: Stacked layout (narrative on top, visual preview below).
- **Approach**: 2-column stepped sequence.
- **Contact Form**: 1-column input fields with 44px minimum hit heights.

### 3.5 Mobile Standard ($390\text{px} – 767\text{px}$)
- **Navigation**: Sticky 60px header with logo and hamburger trigger. Full-height slide-over drawer on tap.
- **Typography**: Headline clamped: `clamp(2.25rem, 8vw, 2.75rem)` Geist Bold.
- **Selected Work**: Single-column cards; mobile screenshots scale to 100% width with `10px` radius.
- **Services**: Single-column stack with expandable accordion drawers for deliverables.
- **Approach**: Vertical timeline with connecting hairline line.
- **Contact Form**: Single-column inputs, service pills wrap with 8px gap, full-width accent submit button.
- **Touch Targets**: All interactive triggers certified $\ge 44\text{px} \times 44\text{px}$.

### 3.6 Mobile Compact ($320\text{px} – 389\text{px}$)
- **Lateral Padding**: `16px` gutters. Zero horizontal scrolling.
- **Typography**: Headline clamps to `2.0rem` (`32px`), body text `15px`.
- **Form**: Inputs fill 100% container width with top-aligned labels.
- **Badges**: Flex-wrap with `4px` gap.

---

## 4. Touch Target & Accessibility Compliance

| Element | Mobile Touch Dimensions | Validation |
|---|---|---|
| Primary / Accent Button | Min `44px` height, full container width | WCAG 2.5.5 Compliant |
| Ghost / Secondary Button | Min `44px` height | WCAG 2.5.5 Compliant |
| Mobile Hamburger Button | `44px` $\times$ `44px` tap target box | WCAG 2.5.5 Compliant |
| Form Input / Textarea | Min `48px` height | WCAG 2.5.5 Compliant |
| Service Toggle Pill | Min `38px` height with `8px` hit padding | WCAG 2.5.5 Compliant |
| Mobile Nav Drawer Links | `48px` vertical row height | WCAG 2.5.5 Compliant |

---

## 5. Approved Status

- Responsive visual rules validated across all 6 viewport tiers for Phase 2 UI/UX Design.
