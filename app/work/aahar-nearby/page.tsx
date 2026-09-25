import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ShieldCheck, MapPin, Smartphone, Check } from 'lucide-react';
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
      <section className="w-full pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-border-hairline">
        <Container size="ultra">
          <div className="max-w-4xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block mb-4">
              MOBILE APPLICATION &amp; ECOSYSTEM // 01
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-primary leading-[1.1]">
              Aahar Nearby — Hyperlocal Food Discovery &amp; Menu Intelligence
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-content-secondary leading-relaxed">
              {aahar.editorialSummary}
            </p>
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
      <section className="w-full py-20 sm:py-28 border-b border-border-hairline">
        <Container size="std">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
              PRODUCT EXPERIENCE // 10 CORE SCREENS
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
              Dark Emerald Luxury Food Discovery
            </h2>
            <p className="mt-3 text-base text-content-secondary">
              A high-contrast visual environment engineered for bright outdoor sunlight legibility and rapid 30-second ordering.
            </p>
          </div>

          {/* Dual Simulated iPhone Frames */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center max-w-4xl mx-auto select-none">
            {/* Viewport 1: Diner Discovery */}
            <div className="rounded-2xl bg-[#061E14] text-white p-6 sm:p-8 shadow-2xl border border-emerald-950/80 flex flex-col justify-between min-h-[460px]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Cyber Towers, Madhapur</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    &lt; 500m
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-1">
                    TODAY&apos;S LUNCH SPECIALS
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    Special South Indian Thali with Mysore Pak
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Includes 3 vegetable gravies, sambar, rasam, freshly pressed hot puris &amp; curd.
                  </p>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-300 block">Sri Venkateswara Mess</span>
                    <span className="font-mono text-sm font-bold text-emerald-400">$6.50 · Dine-in Ready</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">180m away</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-900/40 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>HAIVERSINE DISTANCE SYNC</span>
                <span>30-SEC DISCOVERY</span>
              </div>
            </div>

            {/* Viewport 2: Owner 15-Sec AI Formatter */}
            <div className="rounded-2xl bg-[#0B291D] text-white p-6 sm:p-8 shadow-2xl border border-emerald-900/80 flex flex-col justify-between min-h-[460px]">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40 text-xs font-mono">
                  <span className="text-emerald-400">HOTEL OWNER DASHBOARD</span>
                  <span className="text-slate-400">OUTLET #842</span>
                </div>

                <div className="mt-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 block mb-1">
                    AI MENU FORMATTER
                  </span>
                  <h3 className="font-display text-xl font-bold text-white">
                    Raw Chalkboard Text to Live Menu
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    Owner pastes raw text; parser extracts dish titles, prices, and veg/non-veg tags instantly.
                  </p>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-[#061E14] border border-emerald-900/60 font-mono text-xs text-slate-300 space-y-1">
                  <div className="text-emerald-400">&gt; Parsing: &quot;Podi Idli 60, Masala Dosa 90&quot;</div>
                  <div>✔ Podi Idli ($2.00) [Strict Veg]</div>
                  <div>✔ Masala Dosa ($3.00) [Strict Veg]</div>
                  <div className="text-[10px] text-emerald-500 pt-1">STATUS: READY TO PUBLISH IN 15 SEC</div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-emerald-900/40 flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>1-TAP RE-PUBLISH</span>
                <span>MULTI-ROLE SECURED</span>
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
