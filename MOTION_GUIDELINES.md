# Motion & Micro-Interaction Guidelines — Veytrix Tech Website

> **Document Type:** Motion Choreography & Transition Principles  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 2 — UI/UX Design  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [UX_STRATEGY.md](file:///e:/VEYTRIX%20TECH/UX_STRATEGY.md), [DESIGN_SYSTEM.md](file:///e:/VEYTRIX%20TECH/DESIGN_SYSTEM.md), [ACCESSIBILITY.md](file:///e:/VEYTRIX%20TECH/ACCESSIBILITY.md)

---

## 1. Motion Philosophy: Function Over Theatrics

Motion at Veytrix Tech is a functional architectural material, not decorative entertainment. Every animation must serve one of three functional purposes:
1. **Provide Tactile Feedback**: Confirming user actions immediately upon hover, tap, or submit.
2. **Clarify Spatial Hierarchy**: Explaining where an element came from and where it is going (e.g., mobile drawer transition, accordion scope reveal).
3. **Guide Visual Attention**: Directing focus to crucial information without disorienting the user.

---

## 2. Timing Scales & Easing Curves

```
                                  EASING CURVES
  • Deceleration (Enter):  cubic-bezier(0.16, 1, 0.3, 1)    [Swift entry, smooth settle]
  • Acceleration (Exit):   cubic-bezier(0.7, 0, 0.84, 0)    [Clean, swift departure]
  • Micro-Tactile (Hover): cubic-bezier(0.2, 0, 0, 1)       [Instant snappy response]
```

### Motion Durations

| Scale Token | Duration | Use Case |
|---|---|---|
| `duration-instant` | `100ms` | Color shifts, border lighting, icon state swaps |
| `duration-fast` | `180ms – 220ms` | Button hover transforms, tooltip appearances |
| `duration-normal` | `300ms – 350ms` | Modal enter/exit, drawer slide-overs, accordion disclosure |
| `duration-deliberate`| `400ms – 500ms` | Hero section entry stagger, deep case study view transitions |

---

## 3. Choreography Patterns

### 3.1 Scroll-Triggered Section Entrances
- **Pattern**: As sections enter the viewport threshold ($15\%$), child cards reveal sequentially with a **$60\text{ms}$ stagger**.
- **Transformation**: Subtle $12\text{px}$ vertical translate (`translateY(12px) → translateY(0px)`) coupled with an opacity transition (`0 → 1`).
- **Constraint**: Animations trigger once and never re-animate upon reverse scrolling.

### 3.2 Interactive Card States
- **Hover**: Subtle $-2\text{px}$ elevation on the Y-axis accompanied by a hairline border illumination transition (`duration-fast`).
- **Focus**: Instant $2\text{px}$ outer focus ring, zero positional displacement.

### 3.3 Accordion & Drawer Transitions
- **Service Drawer**: Smooth height animation with `cubic-bezier(0.16, 1, 0.3, 1)` over `280ms`.
- **Mobile Navigation Drawer**: Smooth slide-over translation (`translateX(100%) → translateX(0%)`) over `300ms` with background backdrop fade.

---

## 4. Accessibility & Reduced Motion (`prefers-reduced-motion`)

To guarantee safety and comfort for users with vestibular disorders or motion sensitivities:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- When reduced motion is preferred, all transforms (`translateY`, `scale`) are disabled, and UI transitions immediately via opacity or instantaneous state swaps.

---

## 5. Approved Status

- Motion Principles and Choreography Rules locked for Phase 2 UI/UX Design.
