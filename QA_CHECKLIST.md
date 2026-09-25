# Quality Assurance & Verification Checklist — Veytrix Tech

> **Document Type:** Production QA Matrix & Verification Standards  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 0 — Documentation  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [IMPLEMENTATION_PLAN.md](file:///e:/VEYTRIX%20TECH/IMPLEMENTATION_PLAN.md), [PERFORMANCE.md](file:///e:/VEYTRIX%20TECH/PERFORMANCE.md), [ACCESSIBILITY.md](file:///e:/VEYTRIX%20TECH/ACCESSIBILITY.md)

---

## 1. QA Strategy & Verification Framework

Before any code is deployed to production, the website must pass an exhaustive 8-dimensional verification audit during **Phase 7 (QA)**. Each item is strictly binary: **PASS** or **FAIL**.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        8-DIMENSIONAL QA AUDIT                          │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ 1. Documentation   │ 2. Responsiveness  │ 3. Visual & Aesthetic Craft  │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ 4. Accessibility   │ 5. Performance     │ 6. Functional & API Routes   │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ 7. Security        │ 8. SEO & Metadata  │                              │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

---

## 2. Comprehensive Verification Checklist

### Tier 1: Documentation & Specification Audit (Phase 0 — Complete)
- [x] **DOC-01**: All 31 foundation documentation files completed and cross-referenced.
- [x] **DOC-02**: Zero invented clients, testimonials, revenues, or fabricated case-study metrics.
- [x] **DOC-03**: Case studies for Aahar Nearby and DateInvite accurately reflect active codebase artifacts.
- [x] **DOC-04**: Project-owner decisions on theme, typography, routing, accent, and form flow locked.
- [x] **DOC-05**: Master index in `README.md` correctly maps all project documentation.

### Tier 2: Responsive & Cross-Device Audit (To Be Verified in Phase 7)
- [ ] **RSP-01**: Tested and validated on Small Mobile ($375\text{px}$ viewport width).
- [ ] **RSP-02**: Tested and validated on Standard Mobile ($428\text{px}$ viewport width).
- [ ] **RSP-03**: Tested and validated on Tablet ($768\text{px}$ and $820\text{px}$ viewport width).
- [ ] **RSP-04**: Tested and validated on Standard Desktop ($1024\text{px}$ and $1280\text{px}$).
- [ ] **RSP-05**: Tested and validated on Ultra-wide Displays ($1536\text{px}+$ viewport width).
- [ ] **RSP-06**: Zero horizontal scrolling or unexpected viewport clipping on any screen.
- [ ] **RSP-07**: All touch targets satisfy the minimum $44 \times 44\text{px}$ hit area.

### Tier 3: Visual & Aesthetic Craft Audit (To Be Verified in Phase 7)
- [ ] **VIS-01**: Visual foundation strictly matches the **Light Editorial Canvas** (`#FBFBFD` base, dark charcoal `#0F172A` type, hairline borders `#E2E8F0`).
- [ ] **VIS-02**: Typography strictly renders in Geist (Display), Inter (Body), and JetBrains Mono (Tech).
- [ ] **VIS-03**: `#3B82F6` Precision Blue is used selectively for interactive actions; site is not monochromatic blue.
- [ ] **VIS-04**: Selective dark contrast sections render cleanly with high contrast for code and schematics.
- [ ] **VIS-05**: Zero generic SaaS template clichés (no pastel blobs, no bubble cards, no 3D clay characters).

### Tier 4: Accessibility & WCAG 2.1 AA Audit (To Be Verified in Phase 7)
- [ ] **ACC-01**: Google Lighthouse Accessibility audit achieves a target **100/100**.
- [ ] **ACC-02**: Axe-core automated scan returns zero critical, serious, or moderate violations.
- [ ] **ACC-03**: 100% full keyboard navigability (Tab, Shift+Tab, Enter, Escape).
- [ ] **ACC-04**: Visible focus indicators (`:focus-visible`) active on all interactive elements.
- [ ] **ACC-05**: Focus trapped within mobile navigation drawer when opened; released upon close.
- [ ] **ACC-06**: Text contrast ratios meet or exceed WCAG AA ($16.2:1$ for headlines, $7.1:1$ for body).
- [ ] **ACC-07**: `@media (prefers-reduced-motion)` disables all translate/scale motion.

### Tier 5: Performance Targets Audit (To Be Measured & Verified in Phase 7)
- [ ] **PRF-01**: Google Lighthouse Performance score targets $\ge 95$ on desktop, $\ge 90$ on mobile.
- [ ] **PRF-02**: Largest Contentful Paint (LCP) target $\le 1.2\text{s}$ (strict ceiling $\le 1.8\text{s}$).
- [ ] **PRF-03**: Cumulative Layout Shift (CLS) target $\le 0.05$ (target $0.00$).
- [ ] **PRF-04**: First Contentful Paint (FCP) target $\le 0.8\text{s}$.
- [ ] **PRF-05**: Initial client JavaScript bundle target $\le 80\text{kB}$ gzipped.
- [ ] **PRF-06**: All project mockups and images formatted in WebP/AVIF with explicit dimensions.

### Tier 6: Functional & Lead Capture Audit (To Be Verified in Phase 7)
- [ ] **FNC-01**: Single structured form renders all 7 approved fields.
- [ ] **FNC-02**: Valid submission triggers `/api/contact` and dispatches structured email via Resend.
- [ ] **FNC-03**: Honeypot field (`website_url_confirm`) silently suppresses bot submissions.
- [ ] **FNC-04**: Rate limiting prevents more than 5 submissions per IP per hour.
- [ ] **FNC-05**: Network error state gracefully preserves form entries and allows retry.
- [ ] **FNC-06**: Instant success card confirms inquiry receipt to the user.

### Tier 7: Security & Hardening Audit (To Be Verified in Phase 7)
- [ ] **SEC-01**: Zero API keys or server credentials exposed in client-side bundles or git history.
- [ ] **SEC-02**: Strict CSP, HSTS, X-Frame-Options: DENY, and nosniff headers present in responses.
- [ ] **SEC-03**: Inbound form payloads sanitized via Zod schema before processing.

### Tier 8: SEO Audit (To Be Verified in Phase 7)
- [ ] **SEO-01**: Unique, descriptive `<title>` tags and `<meta name="description">` on every route.
- [ ] **SEO-02**: OpenGraph cards verified using social debuggers for `/`, `/work/aahar-nearby`, and `/work/dateinvite`.
- [ ] **SEO-03**: Valid `sitemap.xml` and `robots.txt` accessible at domain root.
- [ ] **SEO-04**: Valid JSON-LD structured data (ProfessionalService / Organization) without syntax errors.

---

## 3. Approved Decisions vs. Open Definitions

### Project-Owner Approved Items
- QA checklist updated to reflect Light Editorial Canvas verification.
- Performance figures formally marked as targets to be audited in Phase 7.

### Remaining Open Definitions
- `[TO BE DEFINED]` Staging environment deployment URL for Phase 7 execution.
- `[TO BE DEFINED]` Designated QA sign-off authority.
