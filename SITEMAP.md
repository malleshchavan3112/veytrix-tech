# Sitemap & Navigation Architecture — Veytrix Tech Website

> **Document Type:** Route Hierarchy, URL Specifications & Navigation Architecture  
> **Status:** Phase 1 Complete (UX Architecture)  
> **Phase:** Phase 1 — UX Architecture  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [INFORMATION_ARCHITECTURE.md](file:///e:/VEYTRIX%20TECH/INFORMATION_ARCHITECTURE.md), [USER_FLOW.md](file:///e:/VEYTRIX%20TECH/USER_FLOW.md), [SEO.md](file:///e:/VEYTRIX%20TECH/SEO.md)

---

## 1. Approved Architecture: Hybrid Routing Model

The website enforces a **Hybrid Routing Architecture**: an expansive, interactive single-page experience on `/` with anchor navigation, paired with dedicated indexable sub-routes for deep case studies and legal compliance:

```
/ (Root Homepage — Light Editorial Canvas)
  ├── #hero (Positioning & Triad)
  ├── #work (Featured Systems: Aahar Nearby & DateInvite)
  ├── #services (8 Capability Domains & Deliverables)
  ├── #approach (The 8-Phase Studio Lifecycle)
  └── #contact (Single Structured Inquiry Intake Form)
/work/
  ├── /work/aahar-nearby (Dedicated In-Depth Case Study)
  └── /work/dateinvite (Dedicated In-Depth Case Study)
/privacy (Privacy Policy & Data Compliance)
/terms (Terms of Service)
/sitemap.xml (Automated XML Search Engine Index)
/robots.txt (Crawler Directive File)
```

---

## 2. Navigation Architecture & Behavioral Specifications

### 2.1 Navigation Surfaces & Menus

```
┌────────────────────────────────────────────────────────────────────────┐
│                        NAVIGATION SURFACES                             │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ SURFACE            │ TARGET VIEWPORTS   │ INTERACTION PATTERN          │
├────────────────────┼────────────────────┼──────────────────────────────┤
│ Desktop Navbar     │ $\ge 1024\text{px}$│ Persistent top bar, anchors  │
│ Mobile Drawer      │ $< 1024\text{px}$  │ Full-height slide-over drawer│
│ Case Study Breadcrumb│ All Viewports    │ Sticky contextual back link  │
│ Footer Nav Grid    │ All Viewports      │ Multi-column sitemap matrix  │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

### 2.2 Behavior per Navigation Trigger

| Trigger | When Clicked on Homepage (`/`) | When Clicked on Case Study (`/work/*`) or Legal |
|---|---|---|
| **Logo / Wordmark** | Smooth scrolls to top (`#hero`), resets URL hash | Navigates to `/` (lands at top of homepage) |
| **"Work"** | Smooth scrolls to `#work`, sets URL hash | Navigates to `/#work` (scrolls to Featured Work) |
| **"Services"** | Smooth scrolls to `#services`, sets URL hash | Navigates to `/#services` (scrolls to Services) |
| **"Approach"** | Smooth scrolls to `#approach`, sets URL hash | Navigates to `/#approach` (scrolls to Methodology) |
| **"Contact"** | Smooth scrolls to `#contact`, sets URL hash | Navigates to `/#contact` (scrolls to Inquiry Form) |
| **Primary CTA ("Start a Project")** | Smooth scrolls to `#contact`, focuses name input | Navigates to `/#contact`, focuses name input |

### 2.3 Mobile Navigation Drawer (`< 1024px`)
- **Trigger**: Accessible hamburger button in sticky header (`min-width: 44px`, `aria-expanded="false"`, `aria-controls="mobile-drawer"`).
- **Drawer Behavior**: Slides in from right, locks background body scroll, traps keyboard focus.
- **Content**:
  1. Header with brand monogram and close button (`Escape` key supported).
  2. Large vertical touch links: `Work`, `Services`, `Approach`, `Contact` ($48\text{px}$ touch targets).
  3. Prominent full-width button: *"Start a Project"* (tapping closes drawer and scrolls to `#contact`).
  4. Direct contact metadata (studio email).

### 2.4 Case Study Contextual Navigation (`/work/:slug`)
- **Top Context Bar**:
  - Sticky breadcrumb link: `← Back to Selected Work` (navigates to `/#work`).
  - Active case study title indicator in JetBrains Mono.
- **Bottom Pagination (Project-to-Project)**:
  - On `/work/aahar-nearby`: Next Project teaser card linking to `/work/dateinvite`.
  - On `/work/dateinvite`: Next Project teaser card linking to `/work/aahar-nearby`.
- **Conversion Gateway**:
  - Dedicated contextual banner: *"Interested in building a similar mobile app / web platform?"* → Button: *"Start a Project"* (links to `/#contact` with pre-selected service category).

### 2.5 Footer Navigation
- Column 1: Studio Monogram, positioning statement (*"Design + Technology + Product Thinking"*), copyright.
- Column 2: Selected Work (`Aahar Nearby`, `DateInvite`).
- Column 3: Capabilities (Direct anchor jump to `#services`).
- Column 4: Studio (`Approach`, `Engineering Standards`, `Contact`).
- Column 5: Compliance & Legal (`Privacy Policy`, `Terms of Service`).

---

## 3. Complete Route Registry & SEO Contract

| Route | Route Type | Pre-render Mode | Canonical URL | Indexing |
|---|---|---|---|---|
| `/` | Primary Landing | Static (SSG) / Edge | `https://veytrix.tech/` | `index, follow` |
| `/work/aahar-nearby` | Case Study | Static (SSG) / Edge | `https://veytrix.tech/work/aahar-nearby` | `index, follow` |
| `/work/dateinvite` | Case Study | Static (SSG) / Edge | `https://veytrix.tech/work/dateinvite` | `index, follow` |
| `/privacy` | Legal / Compliance | Static (SSG) / Edge | `https://veytrix.tech/privacy` | `noindex, follow` |
| `/terms` | Legal / Compliance | Static (SSG) / Edge | `https://veytrix.tech/terms` | `noindex, follow` |
| `/sitemap.xml` | Index File | Dynamic API | `https://veytrix.tech/sitemap.xml` | — |
| `/robots.txt` | Directive File | Static | `https://veytrix.tech/robots.txt` | — |

---

## 4. Phase 1 Approved Status

- Hybrid route hierarchy confirmed.
- Navigation trigger state machine defined across homepage and dedicated routes.
- Mobile drawer and contextual case-study back-navigation specified.
