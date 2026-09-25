# Performance Engineering Targets & Budgets — Veytrix Tech Website

> **Document Type:** Performance Budgets & Optimization Engineering  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 0 — Documentation  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [TECH_STACK.md](file:///e:/VEYTRIX%20TECH/TECH_STACK.md), [ARCHITECTURE.md](file:///e:/VEYTRIX%20TECH/ARCHITECTURE.md), [QA_CHECKLIST.md](file:///e:/VEYTRIX%20TECH/QA_CHECKLIST.md)

---

## 1. Performance Policy: Engineering Targets Notice

> [!IMPORTANT]
> **MANDATORY POLICY ON PERFORMANCE CLAIMS**  
> In accordance with project-owner decisions, **all performance numbers specified in this document are strictly defined as ENGINEERING TARGETS, NOT ACHIEVED RESULTS.**  
> Veytrix Tech does not claim sub-second LCP, verified bundle sizes, or 100/100 Lighthouse scores until they are empirically measured, tested, and certified during **Phase 7 (QA)** on production infrastructure.

---

## 2. Core Web Vitals Engineering Targets

| Metric | Industry Standard | Veytrix Engineering Target | Strict Target Ceiling |
|---|---|---|---|
| **Lighthouse Performance Score** | 80+ | **Target: $\ge 95$** | 90 |
| **First Contentful Paint (FCP)** | $\le 1.8\text{s}$ | **Target: $\le 0.8\text{s}$** | $1.2\text{s}$ |
| **Largest Contentful Paint (LCP)** | $\le 2.5\text{s}$ | **Target: $\le 1.2\text{s}$** | $1.8\text{s}$ |
| **Interaction to Next Paint (INP)** | $\le 200\text{ms}$ | **Target: $\le 50\text{ms}$** | $100\text{ms}$ |
| **Cumulative Layout Shift (CLS)** | $\le 0.10$ | **Target: $0.00$** | $0.05$ |
| **Time to First Byte (TTFB)** | $\le 800\text{ms}$ | **Target: $\le 150\text{ms}$** | $300\text{ms}$ |

---

## 3. Engineering Payload Budgets (Targets)

```
┌────────────────────────────────────────────────────────┐
│            ENGINEERING PAYLOAD BUDGET TARGETS          │
├───────────────────────────────┬────────────────────────┤
│ Initial Client JavaScript     │ Target $\le 80\text{ kB}$ (gzip)│
│ Critical CSS Bundle           │ Target $\le 15\text{ kB}$ (gzip)│
│ Font Assets (Total Combined)  │ Target $\le 45\text{ kB}$ (woff2)│
│ Above-the-fold Image Payload  │ Target $\le 90\text{ kB}$ (webp) │
│ Total Initial Page Weight     │ Target $\le 300\text{ kB}$     │
└───────────────────────────────┴────────────────────────┘
```

---

## 4. Architectural Optimization Techniques

### 4.1 Zero-Cost Typography
- Self-hosted Geist, Inter, and JetBrains Mono via `next/font`.
- Zero external font CDN calls; preloaded with `font-display: swap`.

### 4.2 High-Fidelity Asset Pipeline
- Project UI mockups and screenshots formatted in WebP and AVIF.
- Containers declare explicit CSS aspect ratios to prevent layout shifts.
- Below-the-fold assets use `loading="lazy"` and `decoding="async"`.

### 4.3 Server Component Minimization
- By maximizing React Server Components (RSC) on Next.js App Router, the majority of the editorial marketing pages and case studies are delivered as static HTML without client-side hydration overhead.

---

## 5. Approved Decisions vs. Open Definitions

### Project-Owner Approved Items
- All performance numbers formally classified as engineering targets.
- Zero premature claims prior to Phase 7 QA verification.

### Remaining Open Definitions
- `[TO BE DEFINED]` Selection of telemetry tool for real-user monitoring (RUM).
