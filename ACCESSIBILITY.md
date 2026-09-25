# Accessibility Specifications & Compliance — Veytrix Tech

> **Document Type:** Accessibility Standards & WCAG 2.1 AA Compliance  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 2 — UI/UX Design  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [DESIGN_SYSTEM.md](file:///e:/VEYTRIX%20TECH/DESIGN_SYSTEM.md), [COMPONENT_SYSTEM.md](file:///e:/VEYTRIX%20TECH/COMPONENT_SYSTEM.md), [QA_CHECKLIST.md](file:///e:/VEYTRIX%20TECH/QA_CHECKLIST.md)

---

## 1. Accessibility Commitment & Standard

Veytrix Tech adheres strictly to the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standard across all views and interactive states on the **Light Editorial Canvas**. Accessibility is treated as an indispensable engineering discipline, not an afterthought.

---

## 2. Core Implementation Matrix (POUR Principles)

### 2.1 Perceivable (Contrast on Light Editorial Canvas)
- **High-Contrast Text on `#FBFBFD` Base**:
  - Primary dark charcoal text (`#0F172A` on `#FBFBFD`) achieves a **16.2:1** contrast ratio (exceeds AAA requirement).
  - Secondary slate text (`#475569` on `#FBFBFD`) achieves a **7.1:1** contrast ratio (exceeds AAA requirement).
  - Interactive link text uses accessible `#2563EB` achieving **4.6:1** contrast (AA compliant for body links).
- **High-Contrast in Selective Dark Sections**:
  - Light text (`#F8FAFC` on `#0F172A`) achieves a **16.2:1** contrast ratio (AAA compliant).
- **Alt Text on Project Artifacts**:
  - Case study screenshots include descriptive alt text (e.g., `"Screenshot of Aahar Nearby mobile app displaying the AI menu formatting preview and nearby hotel list"`).
  - Decorative icons and abstract hairline grids are marked with `aria-hidden="true"`.

### 2.2 Operable
- **Full Keyboard Navigability**:
  - Every interactive element (links, buttons, form inputs, expanders) is reachable and operable via the `Tab`, `Shift+Tab`, `Enter`, and `Space` keys.
  - Skip to Content Link (`<a href="#main-content" class="skip-link">Skip to main content</a>`) positioned as the first focusable DOM element.
  - Focus indicators use an explicit `:focus-visible` styling (`outline: 2px solid #3B82F6; outline-offset: 2px`).
- **Modal & Drawer Focus Trapping**:
  - When the mobile menu drawer opens, keyboard focus is trapped inside the drawer.
  - Pressing `Escape` dismisses the drawer and returns focus to the trigger button.
- **Touch Ergonomics**: All tappable targets satisfy the minimum **$44 \times 44\text{px}$** hit area on touch devices (validated on 390px mobile screen).

### 2.3 Understandable
- **Form Error Feedback (Single Structured Form)**:
  - Form validation errors are explicitly declared in the DOM using semantic `<span id="[field]-error" role="alert">` and linked to inputs via `aria-describedby="[field]-error"`.
  - Dynamic status notifications utilize an `aria-live="polite"` region.
- **Language Declaration**: HTML root declares `<html lang="en">` with proper directional attributes.

### 2.4 Robust
- **Semantic HTML5 Only**:
  - Native `<button>` tags for actions; native `<a>` tags for navigation.
  - Heading hierarchy strictly preserved: exactly one `<h1>` per view, nested sequentially into `<h2>` and `<h3>`.
  - Zero `div`-soup buttons or untyped click listeners.

---

## 3. Stitch Screen Accessibility Validation Summary

| Generated Screen | Contrast Compliance | Keyboard / Focus Affordance | Touch Target Compliance |
|---|---|---|---|
| **Homepage (Desktop)** | AAA (16.2:1 Primary, 7.1:1 Secondary) | Explicit 2px `#3B82F6` focus rings on all buttons & links | Desktop mouse/keyboard optimized |
| **Aahar Nearby Case Study** | AAA on Light / AAA on Selective Dark | Sticky sub-header with accessible back jump; skip link | $\ge 44\text{px}$ on interactive triggers |
| **DateInvite Case Study** | AAA on Light / AAA on Selective Dark | Framer Motion dodge button provides keyboard bypass | $\ge 44\text{px}$ touch targets |
| **Form States Specification** | Full error states with red `#EF4444` & `aria-live` | Active focus halo `rgba(59, 130, 246, 0.25)` | $\ge 48\text{px}$ touch inputs |
| **Privacy & Compliance** | AAA 800px reading line-length (65-75 CPL) | Tabbed navigation with ARIA tabs protocol | Fluid accessible typography |
| **Homepage (Mobile 390px)** | AAA on all mobile cards | Minimalist 44px hamburger with aria-expanded | Certified $\ge 44\text{px} \times 44\text{px}$ touch targets |

---

## 4. Automated & Manual Verification Standards (Phase 7 QA Target)

During Phase 7 (QA), the website must be verified against:
1. **Lighthouse Accessibility Target**: Target **100/100 score**.
2. **Axe-Core Automated Scan**: Zero Critical, Serious, or Moderate violations.
3. **Manual Screen Reader Verification**: Tested using NVDA on Windows and VoiceOver on iOS/macOS.
4. **Keyboard-Only Traversal**: 100% of workflows verifiable without mouse/pointer interaction.
