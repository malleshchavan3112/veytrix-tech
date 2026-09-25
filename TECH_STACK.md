# Technology Stack Specification — Veytrix Tech Website

> **Document Type:** System Architecture & Technology Stack  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 0 — Documentation  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [ARCHITECTURE.md](file:///e:/VEYTRIX%20TECH/ARCHITECTURE.md), [PERFORMANCE.md](file:///e:/VEYTRIX%20TECH/PERFORMANCE.md), [SECURITY.md](file:///e:/VEYTRIX%20TECH/SECURITY.md)

---

## 1. Stack Evaluation & Architectural Principles

The technology stack for the Veytrix Tech website is selected based on three criteria:
1. **Speed & Latency Targets**: Engineering targets designed for sub-second FCP and fast rendering.
2. **Type Safety & Maintainability**: Strict TypeScript interfaces preventing runtime errors across forms and components.
3. **SEO & Static Prerendering**: Pre-rendered HTML for search engine indexing and social link previews on hybrid routes.

---

## 2. Approved Production Stack

```
┌────────────────────────────────────────────────────────┐
│               APPROVED SYSTEM ARCHITECTURE             │
├───────────────────┬────────────────────────────────────┤
│ CORE FRAMEWORK    │ Next.js App Router (Supported Ver) │
│ LANGUAGE          │ TypeScript 5.x (Strict Mode)       │
│ STYLING & TOKENS  │ Tailwind CSS / Modern CSS Variables│
│ TYPOGRAPHY        │ Geist + Inter + JetBrains Mono     │
│ MOTION & PHYSICS  │ Framer Motion / CSS Keyframes      │
│ LEAD INTAKE API   │ Next.js Server Route Handlers      │
│ EMAIL DISPATCH    │ Resend SDK                         │
│ STORAGE (LEADS)   │ Supabase PostgreSQL (Optional CRM) │
│ DEPLOYMENT & CDN  │ Vercel Edge Network / Cloudflare   │
│ QUALITY TOOLING   │ ESLint, Prettier, Lighthouse CI    │
└───────────────────┴────────────────────────────────────┘
```

---

## 3. Tier-by-Tier Stack Breakdown

### 3.1 Client Framework & Runtime
- **Next.js App Router**: Enables Server Components (RSC) to serve zero-bundle-size static content for marketing copy, case studies, and editorial sections, reserving client-side JavaScript strictly for interactive molecules (inquiry form, interactive drawer, filtered tabs).
- **Version Lock Policy**: *Approved decision: Do not hard-lock documentation to an obsolete framework version. The project will initialize with the appropriate active, stable, supported Next.js release during Phase 5 (Implementation).*
- **TypeScript 5 (Strict)**: All entities (services, case studies, form payloads) are strictly typed. Zero use of `any`.

### 3.2 Styling & Typography Pipeline
- **Tailwind CSS + CSS Variables**: Direct implementation of the Light Editorial Canvas tokens (`#FBFBFD` base, dark charcoal text, fine hairline borders, selective `#3B82F6` accent).
- **Typography Integration**: Built using `next/font` for self-hosted zero-render-blocking font assets:
  - Display: `Geist`
  - Body: `Inter`
  - Metadata: `JetBrains Mono`

### 3.3 Single Structured Inquiry Pipeline
- **Next.js Server Actions / Route Handlers**: Handles form submissions securely on the server with Zod schema validation and honeypot bot filtering.
- **Resend SDK**: Transactional email dispatch of qualified leads to studio inboxes.

---

## 4. Engineering Targets vs. Achieved Claims Notice

> [!NOTE]
> All performance figures (bundle sizes, Lighthouse scores, Core Web Vitals) referenced in the project documentation are **ENGINEERING TARGETS**, not measured production results. Actual metrics will be empirically benchmarked and certified during Phase 7 (QA).

---

## 5. Approved Decisions vs. Open Definitions

### Project-Owner Approved Items
- Next.js App Router + TypeScript approved.
- Framework version policy: Use appropriate supported version at implementation time.
- Typography stack: Geist + Inter + JetBrains Mono.
- Performance declared as engineering targets.

### Remaining Open Definitions
- `[TO BE DEFINED]` Production hosting provider selection (Vercel vs Cloudflare Pages).
- `[TO BE DEFINED]` Resend API credentials and studio inbox email.
