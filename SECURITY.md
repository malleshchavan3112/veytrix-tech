# Security Architecture & Threat Model — Veytrix Tech Website

> **Document Type:** Security Policies & Threat Mitigation  
> **Status:** Project-Owner Approved (2026-09-25)  
> **Phase:** Phase 0 — Documentation  
> **Master Index:** [README.md](file:///e:/VEYTRIX%20TECH/README.md)  
> **Related Documents:** [ARCHITECTURE.md](file:///e:/VEYTRIX%20TECH/ARCHITECTURE.md), [TECH_STACK.md](file:///e:/VEYTRIX%20TECH/TECH_STACK.md), [QA_CHECKLIST.md](file:///e:/VEYTRIX%20TECH/QA_CHECKLIST.md)

---

## 1. Security Philosophy & Scope

Even though the public Veytrix Tech website is primarily a studio portfolio and lead intake platform, we treat security with enterprise rigor. A vulnerability on the studio website would compromise brand credibility; therefore, defensive security is engineered at every layer.

---

## 2. Threat Modeling & Mitigation Matrix

```
┌────────────────────────────────────────────────────────────────────────┐
│                        THREAT DEFENSE MATRIX                           │
├────────────────────┬──────────────────┬────────────────────────────────┤
│ THREAT             │ IMPACT           │ MITIGATION MECHANISM           │
├────────────────────┼──────────────────┼────────────────────────────────┤
│ Form Bot Spam      │ Inbox flooding,  │ Invisible honeypot traps,      │
│ & Abuse            │ resource waste   │ rate limiting, timing checks   │
├────────────────────┼──────────────────┼────────────────────────────────┤
│ Secret Exposure    │ Unauthorized     │ Zero secrets in client bundle; │
│ (API Keys)         │ API abuse        │ strict server-only env vars    │
├────────────────────┼──────────────────┼────────────────────────────────┤
│ XSS Injection      │ Script injection │ Strict CSP headers; React/JSX  │
│ via Form Fields    │ in email viewer  │ auto-escaping; Zod sanitization│
├────────────────────┼──────────────────┼────────────────────────────────┤
│ Clickjacking       │ UI redressing    │ X-Frame-Options: DENY          │
├────────────────────┼──────────────────┼────────────────────────────────┤
│ DDoS / DoS         │ Downtime         │ Edge CDN shield (Cloudflare)   │
└────────────────────┴──────────────────┴────────────────────────────────┘
```

---

## 3. Detailed Security Controls

### 3.1 Strict Secret Management
- **Zero Client-Side Secret Leakage**: No server-side private keys (such as `RESEND_API_KEY` or database connection strings) are ever prefixed with `NEXT_PUBLIC_`.
- **Environment Isolation**: Production credentials reside strictly within encrypted platform secrets managers (e.g. Vercel Secrets), never committed to git repositories or `.env` files.

### 3.2 Lead Capture & Anti-Spam Architecture (Approved Single Form)
- **Cryptographic Honeypot**: An invisible input field named `website_url_confirm` is rendered with `tabindex="-1"` and `aria-hidden="true"`. Legitimate human users never see or populate it. If populated, the server silently returns a `200 OK` while immediately discarding the payload without triggering email dispatches.
- **Rate Limiting**: The `/api/contact` endpoint is protected by IP-based rate limiting allowing a maximum of **5 submissions per IP address per hour**.
- **Input Sanitization with Zod**: Every inbound field is validated against strict schema length constraints:
  - `fullName`: string, max 100 characters, trimmed.
  - `companyName`: string, max 100 characters, trimmed.
  - `workEmail`: valid email regex, max 120 characters.
  - `selectedServices`: array of valid enum values, min 1 item.
  - `projectSummary`: string, min 10 characters, max 2000 characters.
  - `budgetRange`: string, max 50 characters.
  - `additionalContext`: optional string, max 1000 characters.

### 3.3 HTTP Security Headers
The production server automatically injects the following security headers:

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

---

## 4. Responsible Disclosure Policy

- Security researchers discovering any anomalies can report them to `security@veytrix.tech` `[TO BE DEFINED]`.
- All valid security reports are reviewed within 48 hours.

---

## 5. Approved Decisions vs. Open Definitions

### Project-Owner Approved Items
- Single structured form input sanitization schema locked.
- Honeypot and rate limiting parameters approved.

### Remaining Open Definitions
- `[TO BE DEFINED]` Dedicated security contact email address (`security@...`).
- `[TO BE DEFINED]` Rate-limiting storage backend (Upstash Redis vs In-Memory).
