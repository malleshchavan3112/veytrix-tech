# System Architecture — Veytrix Tech Website

> **Document Type:** Technical Architecture & System Design  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 0 — Documentation  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [TECH_STACK.md](file:///e:/VEYTRIX%20TECH/TECH_STACK.md), [SECURITY.md](file:///e:/VEYTRIX%20TECH/SECURITY.md), [PERFORMANCE.md](file:///e:/VEYTRIX%20TECH/PERFORMANCE.md)

---

## 1. Architectural Topology Overview

The Veytrix Tech website utilizes a modern, edge-rendered architecture combining React Server Components (RSC) for zero-JavaScript editorial marketing sections with isolated client islands for interactive components on a **Light Editorial Canvas**:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        EDGE CDN LAYER (Cloudflare / Vercel)            │
│                 Global Caching • SSL Termination • DDoS Shield         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                  NEXT.JS APP ROUTER RUNTIME (Supported Ver)            │
├───────────────────────────────────┬────────────────────────────────────┤
│ SERVER RUNTIME (RSC)              │ CLIENT RUNTIME (Islands)           │
│ • Light Editorial Static HTML     │ • Navigation Drawer & Mobile Menu  │
│ • Pre-rendered Case Study text    │ • Filtered Service Grid Tabs       │
│ • Zero client bundle overhead     │ • Single Structured Inquiry Form   │
│ • Dynamic OpenGraph metadata      │ • Micro-interactions & Accordions  │
├───────────────────────────────────┴────────────────────────────────────┤
│ SERVERLESS API ROUTE HANDLERS (/api/contact)                           │
│ • Request rate limiting & bot honeypot validation                      │
│ • Zod payload parsing across 7 approved form fields                    │
│ • Asynchronous email dispatch via Resend SDK                           │
│ • Optional database persistence via Supabase PostgreSQL                │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Server vs. Client Boundary Strategy

- **Server Components (Default)**:
  - Global Header shell (static layout).
  - Hero editorial typography and positioning statements.
  - Case study long-form articles, architecture notes, and problem/solution text.
  - Studio methodology timeline.
  - Global footer and legal routes (`/privacy`, `/terms`).
- **Client Components (`'use client'`)**:
  - `<MobileNavigationDrawer />`: Handles viewport scroll listeners and touch gestures.
  - `<SingleInquiryFormEngine />`: Manages input states, Zod validation schemas, and submission async lifecycle.
  - `<ServiceCardAccordion />`: Manages interactive expandable deliverable states.

---

## 3. Approved Lead Submission Data Flow

```
[ Visitor Submits Single Inquiry Form (#contact) ]
                     │
                     ▼
       [ Client-Side Schema Validation ]
   (Validates Name, Company, Email, Services, Summary;
    highlights any error inline via aria-describedby)
                     │
                     ▼ (Valid)
           [ POST /api/contact ]
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
 [ Bot Honeypot Check ]   [ Rate Limit Check ]
 (Silent 200 OK discard   (Max 5 requests per IP / hr)
  if honeypot filled)           │
          │                     │
          └──────────┬──────────┘
                     │
                     ▼
      [ Server Zod Schema Validation ]
                     │
                     ▼
      [ Resend Transactional Dispatch ]
   (Dispatches structured inquiry email
    to studio intake inbox)
                     │
                     ▼
      [ Return 200 OK JSON Response ]
                     │
                     ▼
   [ Client Swaps to Success Confirmation Card ]
```

---

## 4. Approved Decisions vs. Open Definitions

### Project-Owner Approved Items
- Next.js App Router (supported version) + TypeScript approved.
- Single structured inquiry form data pipeline approved.
- Honeypot and rate limiting anti-abuse architecture confirmed.

### Remaining Open Definitions
- `[TO BE DEFINED]` Destination studio inbox email for Resend lead alerts.
- `[TO BE DEFINED]` Database logging of leads in Supabase table vs email-only delivery.
