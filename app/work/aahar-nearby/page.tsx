import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ShieldCheck, MapPin, Smartphone, Check, Sparkles, Layers } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { MonospaceBadge } from '@/components/ui/monospace-badge';
import { HairlineDivider } from '@/components/ui/hairline-divider';
import { CASE_STUDIES } from '@/content/case-studies';
import { SITE_CONFIG } from '@/lib/constants/site';

const aahar = CASE_STUDIES['aahar-nearby'];

export const metadata: Metadata = {
  title: 'Aahar Nearby Case Study — Mobile Food Discovery Platform',
  description:
    'Deep engineering case study: Building a hyperlocal food discovery and dynamic daily menu mobile platform using Flutter Clean Architecture and Firebase Firestore.',
  alternates: {
    canonical: '/work/aahar-nearby',
  },
  openGraph: {
    title: 'Aahar Nearby Case Study | Veytrix Tech',
    description:
      'Solving the daily lunch dilemma for office workforces with dynamic menu publishing and real-time Haversine distance sync.',
    url: `${SITE_CONFIG.domain}/work/aahar-nearby`,
  },
};

export default function AaharNearbyCaseStudyPage() {
  return (
    <article className="w-full flex flex-col">
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
      {/* 2. HERO SPREAD & METADATA MATRIX                                          */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-border-hairline overflow-hidden">
        {/* Ambient atmospheric glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-veytrix-cyan/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container size="ultra">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 max-w-6xl">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block">
                  MOBILE APPLICATION &amp; ECOSYSTEM // 01
                </span>
                <span className="font-mono text-[11px] text-content-tertiary bg-canvas-subtle px-2.5 py-1 rounded border border-border-hairline inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>LIVE URL: NOT VERIFIED (NATIVE MOBILE REPO)</span>
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-primary leading-[1.1]">
                Aahar Nearby — Hyperlocal Food Discovery &amp; Menu Intelligence
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-content-secondary leading-relaxed">
                {aahar.editorialSummary}
              </p>
            </div>

            {/* Official Logo Display */}
            <div className="flex-shrink-0 p-5 rounded-2xl bg-white border border-border-hairline shadow-sm flex items-center justify-center max-w-[200px]">
              <Image
                src="/projects/aahar-nearby/logo.png"
                alt="Aahar Nearby Official Logo"
                width={160}
                height={160}
                className="w-32 h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Structured Metadata Matrix Rail (4 Columns) */}
          <div className="mt-12 pt-8 border-t border-border-hairline grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <span className="font-mono text-xs uppercase text-content-tertiary block mb-1">
                PLATFORM
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-content-primary">
                Flutter 3.x (iOS &amp; Android)
              </span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-content-tertiary block mb-1">
                ARCHITECTURE
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-content-primary">
                Clean Architecture + BLoC
              </span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-content-tertiary block mb-1">
                REACTIVE BACKEND
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-content-primary">
                Google Cloud Firestore
              </span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-content-tertiary block mb-1">
                SPATIAL ENGINE
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-content-primary">
                Geolocator API (Haversine)
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. EDITORIAL PROBLEM SPACE                                                */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 border-b border-border-hairline bg-canvas-subtle/30">
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
      {/* 4. HIGH-FIDELITY MOBILE PRODUCT VIEWPORT (Visual Showcase)                */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 border-b border-border-hairline bg-canvas-subtle/20">
        <Container size="std">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              PRODUCTION APPLICATION SCREENS // REAL FLUTTER BUILD
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
              Real Mobile Experience &amp; Dual-Sided Portals
            </h2>
            <p className="mt-3 text-base text-content-secondary">
              Actual screens from the active Flutter 3.x codebase: high-contrast diner discovery feed alongside the multi-role owner operations console.
            </p>
          </div>

          {/* Dual Mobile Device Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center max-w-5xl mx-auto">
            {/* Screen 1: Real Diner Discovery Feed */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[340px] rounded-[36px] bg-dark-base p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-white/10 group transition-all duration-300 hover:shadow-veytrix-glow">
                {/* Mobile Speaker / Camera Notch */}
                <div className="w-24 h-4 bg-slate-900 mx-auto rounded-full mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>
                
                {/* Real Screenshot Image */}
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

              <div className="mt-6 text-center max-w-xs">
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  01 // DINER DISCOVERY STREAM
                </span>
                <h3 className="font-display text-base font-bold text-content-primary mt-2">
                  Sub-Second Hyperlocal Feed
                </h3>
                <p className="text-xs text-content-secondary mt-1">
                  Haversine-sorted dynamic lunch menus with deterministic distance rings (&lt;500m) and vegetarian categorization.
                </p>
              </div>
            </div>

            {/* Screen 2: Real Menu Details / Order Flow */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[340px] rounded-[36px] bg-dark-base p-3 shadow-2xl border-4 border-slate-800 ring-1 ring-white/10 group transition-all duration-300 hover:shadow-veytrix-glow">
                {/* Mobile Speaker / Camera Notch */}
                <div className="w-24 h-4 bg-slate-900 mx-auto rounded-full mb-2 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800" />
                </div>
                
                {/* Real Screenshot Image */}
                <div className="relative rounded-[26px] overflow-hidden aspect-[9/19.5] bg-slate-950 border border-slate-800/80">
                  <Image
                    src="/projects/aahar-nearby/menu_details.png"
                    alt="Aahar Nearby Real Dynamic Menu Details"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 340px"
                  />
                </div>
              </div>

              <div className="mt-6 text-center max-w-xs">
                <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  02 // REAL-TIME MENU DETAILS
                </span>
                <h3 className="font-display text-base font-bold text-content-primary mt-2">
                  Dynamic Thali &amp; Item Breakdown
                </h3>
                <p className="text-xs text-content-secondary mt-1">
                  Live pricing, daily rotational menu items, dietary badges, and 1-tap Google Maps walking directions.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Management Screens Spread (Owner & Employee) */}
          <div className="mt-16 pt-12 border-t border-border-hairline">
            <div className="text-center mb-10">
              <span className="font-mono text-xs uppercase tracking-wider text-content-tertiary">
                BACK-OF-HOUSE OPERATIONS
              </span>
              <h3 className="font-display text-2xl font-bold text-content-primary mt-2">
                Multi-Role Owner Dashboard &amp; Verification
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Owner Dashboard */}
              <div className="p-5 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col group">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                  <Image
                    src="/projects/aahar-nearby/screen_owner_dashboard.png"
                    alt="Aahar Nearby Hotel Owner Console"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h4 className="font-display text-sm font-bold text-content-primary">
                    Hotel Owner Daily Publisher
                  </h4>
                  <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    15-SEC DISPATCH
                  </span>
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Rapid menu publishing console allowing restaurant operators to toggle daily specials and availability with single-tap persistence.
                </p>
              </div>

              {/* Employee / Admin Verification */}
              <div className="p-5 rounded-2xl bg-white border border-border-hairline shadow-sm flex flex-col group">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                  <Image
                    src="/projects/aahar-nearby/screen_employee_portal.png"
                    alt="Aahar Nearby Employee Portal"
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 450px"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h4 className="font-display text-sm font-bold text-content-primary">
                    Employee Portal &amp; Kitchen Relay
                  </h4>
                  <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    LIVE STATUS SYNC
                  </span>
                </div>
                <p className="text-xs text-content-secondary mt-1">
                  Staff role interface for real-time order acknowledgment, stock depletion tags, and lunch rush queue status updates.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. SELECTIVE DARK TECHNICAL SECTION (Code & Architecture)                 */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 bg-dark-base border-b border-dark-border text-white">
        <Container size="std">
          <div className="max-w-2xl mb-12">
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
      {/* 6. VERIFIED BENCHMARKS                                                    */}
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
      {/* 7. PROJECT PAGINATION & INTAKE CONVERSION                                 */}
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
