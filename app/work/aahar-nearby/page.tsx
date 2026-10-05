import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Sparkles,
  ShieldCheck,
  MapPin,
  Smartphone,
  Check,
  Layers,
  Store,
  Building2,
  User,
  Zap,
  Clock,
  Compass,
  FileCode2,
  Cpu,
  ChevronRight,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { InteractiveProductDemo } from '@/components/organisms/interactive-product-demo';
import { CASE_STUDIES } from '@/content/case-studies';
import { SITE_CONFIG } from '@/lib/constants/site';

const aahar = CASE_STUDIES['aahar-nearby'];

export const metadata: Metadata = {
  title: {
    absolute: 'Aahar Nearby Case Study — Hyperlocal Food Discovery App | Veytrix Tech',
  },
  description:
    'Deep engineering case study: Building Aahar Nearby, a real-time hyperlocal food discovery and dynamic daily menu mobile platform using Flutter Clean Architecture and Cloud Firestore.',
  alternates: {
    canonical: 'https://veytrix.tech/work/aahar-nearby',
  },
  openGraph: {
    title: 'Aahar Nearby Case Study — Hyperlocal Food Discovery App | Veytrix Tech',
    description:
      'Deep engineering case study: Building Aahar Nearby, a real-time hyperlocal food discovery and dynamic daily menu mobile platform using Flutter Clean Architecture and Cloud Firestore.',
    url: 'https://veytrix.tech/work/aahar-nearby',
    siteName: SITE_CONFIG.name,
    type: 'article',
    images: [
      {
        url: 'https://veytrix.tech/projects/aahar-nearby/discovery_feed.png',
        width: 1200,
        height: 630,
        alt: 'Aahar Nearby Mobile Platform Case Study',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aahar Nearby Case Study — Hyperlocal Food Discovery App | Veytrix Tech',
    description:
      'Deep engineering case study: Building Aahar Nearby, a real-time hyperlocal food discovery and dynamic daily menu mobile platform using Flutter Clean Architecture and Cloud Firestore.',
    images: ['https://veytrix.tech/projects/aahar-nearby/discovery_feed.png'],
  },
};

export default function AaharNearbyCaseStudyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Aahar Nearby',
    applicationCategory: 'Food & Drink, Mobile Application',
    operatingSystem: 'iOS, Android',
    description:
      'A cross-platform mobile application engineered to solve daily lunch discovery for office workers with dynamic rotational menu publishing and Haversine distance sorting.',
    creator: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
    },
    url: `${SITE_CONFIG.domain}/work/aahar-nearby`,
  };

  return (
    <article className="w-full flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========================================================================= */}
      {/* 1. STICKY SUB-BAR BREADCRUMB                                              */}
      {/* ========================================================================= */}
      <div className="sticky top-16 z-30 w-full h-12 bg-canvas-base/90 backdrop-blur-md border-b border-border-hairline flex items-center">
        <Container size="ultra" className="flex items-center justify-between text-xs font-mono">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-content-secondary hover:text-content-primary transition-colors py-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Selected Work</span>
          </Link>
          <div className="flex items-center gap-3 text-content-tertiary">
            <span>CASE STUDY: 01 // 02</span>
            <span>·</span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              FLUTTER 3.x
            </span>
          </div>
        </Container>
      </div>

      {/* ========================================================================= */}
      {/* 2. REDESIGNED EDITORIAL PRODUCT HERO                                      */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-border-hairline overflow-hidden">
        {/* Subtle ambient atmospheric lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="ultra">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
            {/* Left Column: Editorial Authority (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block">
                  CASE STUDY // 01 · CROSS-PLATFORM ECOSYSTEM
                </span>
                <span className="font-mono text-[11px] text-content-tertiary bg-canvas-subtle px-2.5 py-1 rounded border border-border-hairline inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>FLUTTER NATIVE REPO</span>
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-primary leading-[1.08]">
                Aahar Nearby
              </h1>

              <p className="mt-3 font-display text-xl sm:text-2xl text-emerald-800 font-semibold tracking-tight">
                Hyperlocal Food Discovery &amp; Dynamic Menu Intelligence
              </p>

              <p className="mt-6 text-base sm:text-lg text-content-secondary leading-relaxed max-w-xl">
                {aahar.editorialSummary}
              </p>

              {/* Action Trigger Cluster */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="#product-ecosystem"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm group min-h-[48px]"
                >
                  <span>Explore Product</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  href="#product-decisions"
                  className="group min-h-[48px]"
                >
                  <span>View Case Study Story</span>
                  <ArrowDown className="w-4 h-4 ml-2 text-content-tertiary group-hover:translate-y-0.5 transition-transform" />
                </Button>
              </div>

              {/* Structured Metadata Matrix Rail */}
              <div className="mt-12 pt-8 border-t border-border-hairline grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full">
                <div>
                  <span className="font-mono text-[11px] uppercase text-content-tertiary block mb-1">
                    PLATFORM
                  </span>
                  <span className="font-display text-sm font-semibold text-content-primary">
                    Flutter 3.x
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase text-content-tertiary block mb-1">
                    ARCHITECTURE
                  </span>
                  <span className="font-display text-sm font-semibold text-content-primary">
                    Clean Architecture
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase text-content-tertiary block mb-1">
                    REACTIVE DATA
                  </span>
                  <span className="font-display text-sm font-semibold text-content-primary">
                    Cloud Firestore
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[11px] uppercase text-content-tertiary block mb-1">
                    SPATIAL ENGINE
                  </span>
                  <span className="font-display text-sm font-semibold text-content-primary">
                    Haversine Radius
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Layered Real Product Composition (5 Cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-8 pb-4">
              {/* Back Device Layer (Offset secondary screen) */}
              <div className="absolute right-2 sm:right-6 top-2 w-[220px] sm:w-[260px] aspect-[9/19.5] rounded-[32px] bg-slate-950 p-2.5 shadow-2xl border-2 border-slate-800 rotate-6 opacity-75 sm:opacity-85 scale-95 transition-all duration-300 pointer-events-none">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900 border border-slate-800">
                  <Image
                    src="/projects/aahar-nearby/menu_details.png"
                    alt="Aahar Nearby Menu Screen Layer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 220px, 260px"
                  />
                </div>
              </div>

              {/* Foreground Device Layer (Primary Diner Discovery Feed) */}
              <div className="relative z-10 w-[240px] sm:w-[280px] aspect-[9/19.5] rounded-[36px] bg-slate-950 p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-white/10 group transition-transform duration-300 hover:scale-[1.01]">
                {/* Speaker Notch */}
                <div className="w-20 h-3.5 bg-slate-900 mx-auto rounded-full mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>

                {/* Primary Screen Content */}
                <div className="relative w-full h-[calc(100%-20px)] rounded-[24px] overflow-hidden bg-slate-900 border border-slate-800/80">
                  <Image
                    src="/projects/aahar-nearby/discovery_feed.png"
                    alt="Aahar Nearby Real Diner Discovery Feed"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 240px, 280px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. PRODUCT ECOSYSTEM: THREE MOBILE EXPERIENCES & FOCUSED DEMO             */}
      {/* ========================================================================= */}
      <section
        id="product-ecosystem"
        className="w-full py-16 sm:py-24 border-b border-border-hairline bg-white"
      >
        <Container size="ultra">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              PRODUCT ECOSYSTEM // THREE CONNECTED EXPERIENCES
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-content-primary">
              One Product. Three Connected Experiences.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-content-secondary leading-relaxed">
              Aahar Nearby connects corporate office diners, neighborhood mess operators, and regional compliance administrators into a single, synchronized event loop. Each role operates through a dedicated mobile interface tailored specifically to their daily operational cadence.
            </p>
          </div>

          {/* Three Mobile Screens Presentation + Focused Mobile Interactions */}
          <InteractiveProductDemo />
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. PRODUCT FLOW: ONE PRODUCT. THREE PERSPECTIVES.                         */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 border-b border-border-hairline bg-canvas-subtle/30">
        <Container size="std">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-content-tertiary">
              PRODUCT TOPOLOGY
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
              One Product. Three Perspectives.
            </h2>
            <p className="mt-3 text-base text-content-secondary">
              A single unified product architecture binding discovery, daily operations, and regional governance through reactive real-time data sync.
            </p>
          </div>

          {/* Connected 3-Stage Process Progression */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative select-none">
            {/* Stage 1: Discover */}
            <div className="relative p-6 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded inline-block mb-3">
                  01 // DISCOVER
                </span>
                <h3 className="font-display text-xl font-bold text-content-primary">
                  Employee &amp; Diner
                </h3>
                <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                  Real-time spatial stream categorizing morning breakfast &amp; afternoon lunch thalis with deterministic sub-500m Haversine distance bounding.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-hairline font-mono text-xs text-content-tertiary">
                Consumer Mobile UI
              </div>
            </div>

            {/* Stage 2: Manage */}
            <div className="relative p-6 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded inline-block mb-3">
                  02 // MANAGE
                </span>
                <h3 className="font-display text-xl font-bold text-content-primary">
                  Hotel &amp; Mess Owner
                </h3>
                <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                  Rapid menu publishing console allowing restaurant operators to toggle daily specials, stock depletion states, and kitchen dispatch status.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-hairline font-mono text-xs text-content-tertiary">
                Merchant Operations Console
              </div>
            </div>

            {/* Stage 3: Govern */}
            <div className="relative p-6 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded inline-block mb-3">
                  03 // GOVERN
                </span>
                <h3 className="font-display text-xl font-bold text-content-primary">
                  Platform Admin
                </h3>
                <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                  Regional moderation console for verifying food establishment authenticity, inspecting reported price mismatches, and supervising service health.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border-hairline font-mono text-xs text-content-tertiary">
                SuperAdmin Control Layer
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. SELECTED PRODUCT SCREENS (Authentic Flutter Build Showcase)             */}
      {/* ========================================================================= */}
      <section
        id="product-screens"
        className="w-full py-20 sm:py-28 border-b border-border-hairline bg-white"
      >
        <Container size="ultra">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              SELECTED PRODUCT SCREENS // REAL FLUTTER BUILD
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
              Real Mobile Experience &amp; Multi-Role Portals
            </h2>
            <p className="mt-3 text-base text-content-secondary">
              Actual application screens from the active Flutter 3.x codebase: high-contrast diner discovery feed alongside the multi-role owner operations console.
            </p>
          </div>

          {/* Editorial Composition: Primary Mobile Screen + Supporting Operations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            {/* Primary Discovery Screen (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[340px] rounded-[36px] bg-dark-base p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-white/10 group transition-all duration-300 hover:shadow-veytrix-glow">
                <div className="w-24 h-4 bg-slate-900 mx-auto rounded-full mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>

                <div className="relative rounded-[26px] overflow-hidden aspect-[9/19.5] bg-slate-950 border border-slate-800/80">
                  <Image
                    src="/projects/aahar-nearby/discovery_feed.png"
                    alt="Aahar Nearby Real Diner Discovery Feed"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                </div>
              </div>

              <div className="mt-5 text-center max-w-xs">
                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  01 — DISCOVERY STREAM
                </span>
                <h3 className="font-display text-base font-bold text-content-primary mt-2">
                  Sub-Second Hyperlocal Feed
                </h3>
                <p className="text-xs text-content-secondary mt-1">
                  Haversine-sorted dynamic lunch menus with deterministic distance rings (&lt;500m) and vegetarian categorization.
                </p>
              </div>
            </div>

            {/* Supporting Operations Trio (7 Cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Screen 02: Menu Details */}
              <div className="p-4 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col group">
                <div className="relative w-full aspect-[9/16] max-h-[260px] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                  <Image
                    src="/projects/aahar-nearby/menu_details.png"
                    alt="Aahar Nearby Real Menu Details"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-display text-sm font-bold text-content-primary">
                    02 — Menu Intelligence
                  </h4>
                  <span className="font-mono text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    THALI DETAILS
                  </span>
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Item breakdown, dietary badges, live prices, and 1-tap walking directions.
                </p>
              </div>

              {/* Screen 03: Owner Dashboard */}
              <div className="p-4 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col group">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                  <Image
                    src="/projects/aahar-nearby/screen_owner_dashboard.png"
                    alt="Aahar Nearby Hotel Owner Console"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-display text-sm font-bold text-content-primary">
                    03 — Business Operations
                  </h4>
                  <span className="font-mono text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    OPERATIONS
                  </span>
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Owner console allowing restaurant operators to toggle daily availability.
                </p>
              </div>

              {/* Screen 04: Kitchen Relay */}
              <div className="p-4 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col group">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                  <Image
                    src="/projects/aahar-nearby/screen_employee_portal.png"
                    alt="Aahar Nearby Kitchen Relay Portal"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-display text-sm font-bold text-content-primary">
                    04 — Diner Portal
                  </h4>
                  <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    FEED SYNC
                  </span>
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Workplace hub selection and distance filtering for office employees.
                </p>
              </div>

              {/* Screen 05: Admin Portal */}
              <div className="p-4 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col group">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                  <Image
                    src="/projects/aahar-nearby/screen_admin_portal.png"
                    alt="Aahar Nearby Platform Admin Portal"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <h4 className="font-display text-sm font-bold text-content-primary">
                    05 — Platform Control
                  </h4>
                  <span className="font-mono text-[10px] text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    REGIONAL AUDIT
                  </span>
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Regional superadmin console for outlet verification and content moderation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. UX & PRODUCT DECISIONS SECTION                                         */}
      {/* ========================================================================= */}
      <section
        id="product-decisions"
        className="w-full py-20 sm:py-28 border-b border-border-hairline bg-canvas-subtle/20"
      >
        <Container size="std">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              DESIGN RATIONALE // PRODUCT INTELLIGENCE
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
              Core UX &amp; Product Decisions
            </h2>
            <p className="mt-3 text-base text-content-secondary">
              Strategic decisions engineered to eliminate decision fatigue for hungry diners while protecting kitchen operators from cumbersome data entry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Decision 01 */}
            <div className="p-6 rounded-2xl bg-white border border-border-hairline shadow-sm">
              <span className="font-mono text-xs font-bold text-emerald-800 block mb-2">
                01 // HYPERLOCAL DISCOVERY
              </span>
              <h3 className="font-display text-xl font-bold text-content-primary">
                Immediate Walking-Distance Proximity
              </h3>
              <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                Rather than surfacing distant restaurants with 45-minute delivery estimates, Aahar Nearby bounds discovery within a deterministic 500m walking radius. Office workers only see meals they can physically walk to during a standard 45-minute lunch break.
              </p>
            </div>

            {/* Decision 02 */}
            <div className="p-6 rounded-2xl bg-white border border-border-hairline shadow-sm">
              <span className="font-mono text-xs font-bold text-emerald-800 block mb-2">
                02 // DYNAMIC MENU VISIBILITY
              </span>
              <h3 className="font-display text-xl font-bold text-content-primary">
                Specials First, Stale Profiles Last
              </h3>
              <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                Commercial apps bury today&apos;s specials inside nested restaurant profile trees. Aahar Nearby elevates today&apos;s rotational thali and live price directly on the discovery stream, eliminating 3–4 unnecessary navigation taps per session.
              </p>
            </div>

            {/* Decision 03 */}
            <div className="p-6 rounded-2xl bg-white border border-border-hairline shadow-sm">
              <span className="font-mono text-xs font-bold text-emerald-800 block mb-2">
                03 // MULTI-ROLE ECOSYSTEM
              </span>
              <h3 className="font-display text-xl font-bold text-content-primary">
                Isolated Role Architecture
              </h3>
              <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                Diners, restaurant operators, and platform moderators require completely distinct operational mental models. Aahar enforces strict route guarding and Clean Architecture separation so business features never bloat consumer mobile footprints.
              </p>
            </div>

            {/* Decision 04 */}
            <div className="p-6 rounded-2xl bg-white border border-border-hairline shadow-sm">
              <span className="font-mono text-xs font-bold text-emerald-800 block mb-2">
                04 // OPERATIONAL SIMPLICITY
              </span>
              <h3 className="font-display text-xl font-bold text-content-primary">
                Rapid Menu Ingestion
              </h3>
              <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                Mess owners cannot spend 20 minutes filling out complex e-commerce catalog forms during peak morning food prep. With quick text parsing and historical 1-tap re-publishing, owners push their daily menu quickly and effortlessly.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. EDITORIAL PROBLEM SPACE                                                */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 border-b border-border-hairline bg-white">
        <Container size="std">
          <div className="border-l-2 border-content-primary pl-6 sm:pl-8 py-2">
            <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-content-primary leading-snug">
              {aahar.problemPullQuote}
            </blockquote>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {aahar.problemDetails.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h3 className="font-display text-xl font-bold text-content-primary mb-4">
                  {col.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {col.points.map((pt) => (
                    <li key={pt} className="text-sm text-content-secondary leading-relaxed flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-content-primary mt-2 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. SELECTIVE DARK TECHNICAL SECTION (Code & Architecture)                 */}
      {/* ========================================================================= */}
      <section id="architecture" className="w-full py-20 sm:py-28 bg-dark-base border-b border-dark-border text-white">
        <Container size="std">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
              TECHNICAL ARCHITECTURE // FLUTTER BLoC &amp; GEO ENGINE
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Deterministic Spatial Radius &amp; Reactive Listeners
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              To achieve sub-second menu rendering without flooding mobile client data budgets, Aahar Nearby leverages compound Firestore indexing with client-side Haversine spatial sorting.
            </p>
          </div>

          {/* System Diagram Pipeline */}
          <div className="mb-8 p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-300">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-400" />
              <span>EMPLOYEE</span>
            </div>
            <span className="text-slate-600">→</span>
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-400" />
              <span>AAHAR CLIENT</span>
            </div>
            <span className="text-slate-600">→</span>
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 text-emerald-400" />
              <span>OWNER DISPATCH</span>
            </div>
            <span className="text-slate-600">→</span>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span>ADMIN AUDIT</span>
            </div>
            <span className="text-slate-600">→</span>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>FIRESTORE &amp; GEO</span>
            </div>
          </div>

          {/* Syntax Highlighted Code Container */}
          <div className="w-full rounded-lg bg-dark-card border border-dark-border overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-slate-900 border-b border-dark-border flex items-center justify-between text-xs font-mono text-slate-400">
              <span>{aahar.codeSnippet.title}</span>
              <span>Dart 3.x</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto bg-[#0a0f1d]">
              <pre className="font-mono text-xs sm:text-sm text-emerald-300 leading-relaxed">
                <code>{aahar.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. VERIFIED BENCHMARKS                                                    */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 border-b border-border-hairline">
        <Container size="std">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-content-tertiary">
              VERIFICATION AUDIT
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-content-primary">
              Repository Validation Metrics
            </h2>
            <p className="mt-2 text-sm text-content-secondary">
              Directly traceable to the active Flutter codebase and automated test runners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {aahar.benchmarks
              .filter((b) => b.verified)
              .map((b) => (
                <div
                  key={b.label}
                  className="p-6 rounded-lg bg-white border border-border-hairline shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-3xl font-bold text-content-primary">
                        {b.value}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        VERIFIED
                      </span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-content-primary">
                      {b.label}
                    </h3>
                  </div>
                  <p className="mt-3 text-xs text-content-secondary leading-relaxed">
                    {b.context}
                  </p>
                </div>
              ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. PROJECT PAGINATION & INTAKE CONVERSION                                */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-canvas-subtle/50">
        <Container size="std">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Next Project Link */}
            <div className="p-8 rounded-xl bg-white border border-border-hairline shadow-sm flex flex-col items-start">
              <span className="font-mono text-xs uppercase tracking-wider text-content-tertiary mb-2">
                NEXT PROJECT // 02
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-content-primary">
                {aahar.nextProject.title}
              </h3>
              <p className="mt-1 text-xs text-content-secondary">
                {aahar.nextProject.category}
              </p>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  size="default"
                  href={`/work/${aahar.nextProject.slug}`}
                  className="group"
                >
                  <span>Explore DateInvite Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Inquire for Mobile Engineering */}
            <div className="p-8 rounded-xl bg-content-primary text-white shadow-sm flex flex-col items-start">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                ARCHITECTURE CONSULTATION
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Building a Cross-Platform Mobile Product?
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Direct consultation with founding engineers. Non-disclosure protected by default.
              </p>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  size="default"
                  href="/#contact"
                  className="bg-white text-content-primary hover:bg-slate-100"
                >
                  Initiate Mobile Architecture Inquiry →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
