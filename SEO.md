# Search Engine Optimization (SEO) Strategy — Veytrix Tech

> **Document Type:** SEO & Metadata Technical Specifications  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 0 — Documentation  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [SITEMAP.md](file:///e:/VEYTRIX%20TECH/SITEMAP.md), [PERFORMANCE.md](file:///e:/VEYTRIX%20TECH/PERFORMANCE.md), [PRD.md](file:///e:/VEYTRIX%20TECH/PRD.md)

---

## 1. SEO Strategy & Objective

The SEO architecture ensures organic search visibility for high-intent queries across digital product development, bespoke web engineering, mobile app development (Flutter/iOS/Android), and UX design. Every route is pre-rendered for search engine crawlers.

---

## 2. Target Keyword Clusters

| Cluster | Primary Search Queries | Target Landing Page |
|---|---|---|
| **Studio & Positioning** | Digital product studio, product engineering studio, boutique software studio | Homepage (`/`) |
| **Mobile Development** | Flutter app development studio, cross-platform mobile engineering | `/` (`#services`) & `/work/aahar-nearby` |
| **Web Applications** | Next.js application development, full-stack React studio, Supabase engineering | `/` (`#services`) & `/work/dateinvite` |
| **UI/UX Design** | Product design studio, design systems agency, modern UI/UX design | `/` (`#services`) |
| **Custom Software & AI** | Custom software engineering, practical AI solutions for business | `/` (`#services`) |

---

## 3. Metadata Standards & OpenGraph Architecture

### Title & Description Formula
- **Homepage Title**: `Veytrix Tech — Design + Technology + Product Thinking`
- **Homepage Meta Description**: *"Veytrix Tech is a modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking."*
- **Case Study Titles**:
  - `Aahar Nearby Case Study — Mobile Food Discovery Platform | Veytrix Tech`
  - `DateInvite Case Study — Interactive Web Invitation Platform | Veytrix Tech`

### OpenGraph & Twitter Card Standards
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Veytrix Tech" />
<meta property="og:title" content="Veytrix Tech — Design + Technology + Product Thinking" />
<meta property="og:description" content="A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking." />
<meta property="og:image" content="https://veytrix.tech/og/default-cover.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
```

---

## 4. Structured Data (JSON-LD) Schemas

### 4.1 Organization & Professional Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Veytrix Tech",
  "url": "https://veytrix.tech",
  "logo": "https://veytrix.tech/branding/veytrix-logo.png",
  "description": "A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking.",
  "knowsAbout": [
    "Web Application Development",
    "Mobile App Development",
    "UI/UX Design",
    "Custom Software Engineering",
    "Artificial Intelligence Solutions",
    "Design Systems"
  ],
  "priceRange": "$$$$"
}
```

---

## 5. Technical SEO Directives

- **Clean Canonical URLs**: Every page specifies `<link rel="canonical" href="https://veytrix.tech/..." />` to eliminate duplicate content penalties.
- **Dynamic XML Sitemap**: Generated automatically at `/sitemap.xml` mapping all active hybrid routes.
- **Robots Directives (`robots.txt`)**: Full crawling permitted across public marketing routes; API routes disallow indexation.

---

## 6. Approved Decisions vs. Open Definitions

### Project-Owner Approved Items
- Brand positioning statements locked into metadata.
- Hybrid sitemap routes integrated into XML sitemap specifications.
- Official production domain confirmed: `https://veytrix.tech/`.

### Remaining Open Definitions
- `[TO BE DEFINED]` Social media profile URLs (`sameAs` in JSON-LD).
