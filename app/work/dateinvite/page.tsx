import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Lock, Check } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { MonospaceBadge } from '@/components/ui/monospace-badge';
import { CASE_STUDIES } from '@/content/case-studies';
import { SITE_CONFIG } from '@/lib/constants/site';

const dateinvite = CASE_STUDIES['dateinvite'];

export const metadata: Metadata = {
  title: 'DateInvite Case Study — Interactive Micro-Invitation Web Platform',
  description:
    'Deep engineering case study: Building a high-touch interactive web invitation platform with zero-auth link generation, Framer Motion spring physics, and Supabase Row-Level Security.',
  alternates: {
    canonical: '/work/dateinvite',
  },
  openGraph: {
    title: 'DateInvite Case Study | Veytrix Tech',
    description:
      'Transforming casual date proposals into high-touch reciprocal micro-apps with zero authentication friction and privacy-first link encryption.',
    url: `${SITE_CONFIG.domain}/work/dateinvite`,
  },
};

export default function DateInviteCaseStudyPage() {
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
            <span>CASE STUDY: 02 // 02</span>
            <span>·</span>
            <span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              NEXT.JS 15 + RLS
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
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 inline-block mb-4">
              FULL-STACK WEB APPLICATION · HIGH-TOUCH INTERACTION // 02
            </span>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-primary leading-[1.1]">
              DateInvite — Playful Interactive Scheduling &amp; Invitation Engine
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-content-secondary leading-relaxed">
              {dateinvite.editorialSummary}
            </p>
          </div>

          {/* Structured Metadata Matrix Rail (4 Columns) */}
          <div className="mt-12 pt-8 border-t border-border-hairline grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <span className="font-mono text-xs uppercase text-content-tertiary block mb-1">
                RUNTIME
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-content-primary">
                Next.js App Router (RSC)
              </span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-content-tertiary block mb-1">
                DATABASE &amp; PRIVACY
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-content-primary">
                Supabase PostgreSQL + RLS
              </span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-content-tertiary block mb-1">
                PHYSICS &amp; MOTION
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-content-primary">
                Framer Motion Springs
              </span>
            </div>

            <div>
              <span className="font-mono text-xs uppercase text-content-tertiary block mb-1">
                EMAIL DISPATCH
              </span>
              <span className="font-display text-sm sm:text-base font-semibold text-content-primary">
                Resend API Webhooks
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
              {dateinvite.problemPullQuote}
            </blockquote>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {dateinvite.problemDetails.map((col) => (
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
      {/* 4. ASYMMETRIC TWO-SIDED ARCHITECTURAL TOPOLOGY                            */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 border-b border-border-hairline">
        <Container size="std">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
              SYSTEM ARCHITECTURE
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
              Two-Sided Asymmetric Interaction Topology
            </h2>
            <p className="mt-3 text-base text-content-secondary">
              Mapping the decoupled zero-auth handoff between sender link creation and recipient proposal completion.
            </p>
          </div>

          {/* Topology Workflow Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto select-none">
            {/* Left: Sender Synthesis Engine */}
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-border-hairline shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border-hairline mb-4 text-xs font-mono text-content-tertiary">
                  <span className="font-semibold text-content-primary">01 // SENDER ENGINE</span>
                  <span>ZERO-AUTH CREATION</span>
                </div>
                <h3 className="font-display text-xl font-bold text-content-primary">
                  30-Second Link Synthesis
                </h3>
                <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                  Creator inputs recipient name, date vibe, and private notification email. System hashes an unguessable cryptographic slug (`/invite/[slug]`) and provisions Supabase record.
                </p>
                <div className="mt-4 p-3 rounded-md bg-canvas-subtle font-mono text-xs text-content-secondary space-y-1">
                  <div>• Sub-300ms Generation Latency</div>
                  <div>• Creator Email Never Stored in HTML</div>
                  <div>• 1-Tap Native Web Share Hook</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-hairline font-mono text-xs text-blue-600">
                PROVISIONS CRYPTOGRAPHIC SLUG →
              </div>
            </div>

            {/* Right: Recipient Dynamic Client */}
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-border-hairline shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-border-hairline mb-4 text-xs font-mono text-content-tertiary">
                  <span className="font-semibold text-content-primary">02 // RECIPIENT CLIENT</span>
                  <span>HIGH-TOUCH INTERACTION</span>
                </div>
                <h3 className="font-display text-xl font-bold text-content-primary">
                  Reciprocal Experience &amp; Preference Capture
                </h3>
                <p className="mt-2 text-sm text-content-secondary leading-relaxed">
                  Recipient loads invitation without creating an account. The interface deploys playful Framer Motion evasion physics on &ldquo;No&rdquo; and expands into a 6-step questionnaire upon &ldquo;Yes&rdquo;.
                </p>
                <div className="mt-4 p-3 rounded-md bg-canvas-subtle font-mono text-xs text-content-secondary space-y-1">
                  <div>• Spring Physics Dodge Vector (60px)</div>
                  <div>• Touch Screen Containment Fallback</div>
                  <div>• Atomic Supabase RLS Write Isolation</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border-hairline font-mono text-xs text-emerald-600">
                DISPATCHES TRANSACTIONAL NOTIFICATION
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE 6-STEP RECIPROCAL ONBOARDING TIMELINE                              */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 border-b border-border-hairline bg-canvas-subtle/30">
        <Container size="ultra">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-wider text-content-tertiary">
              JOURNEY PROGRESSION
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
              The 6-Step Reciprocal Onboarding Sequence
            </h2>
            <p className="mt-3 text-base text-content-secondary">
              Turning a spontaneous &ldquo;yes&rdquo; into concrete date logistics in under 60 seconds without awkward conversational friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { step: '01', title: 'Invitation Opening', desc: 'Personalized greeting, customized atmosphere, and curated date proposition.' },
              { step: '02', title: 'The Physics "No" Dodge', desc: 'Framer Motion spring vector deflection upon cursor proximity with accessible skip bypass.' },
              { step: '03', title: 'Date Archetype Selection', desc: 'Recipient chooses preferred format: Sunset Cocktails, Candlelit Dinner, or Acoustic Set.' },
              { step: '04', title: 'Culinary & Vibe Curation', desc: 'Selection of atmosphere preferences (Cozy Wine Bar, Handmade Pasta, Rooftop Lounge).' },
              { step: '05', title: 'Temporal Sync & Windows', desc: 'Recipient flags preferred evening windows (Thursday vs Friday evening slots).' },
              { step: '06', title: 'Transactional Webhook Trigger', desc: 'Instant atomic database write triggering Resend email to creator with exact choices.' },
            ].map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-lg bg-white border border-border-hairline shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-blue-600 mb-2 block">
                    STEP // {s.step}
                  </span>
                  <h3 className="font-display text-lg font-bold text-content-primary">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-content-secondary leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. SELECTIVE DARK TECHNICAL SECTION (Supabase RLS & Code)                 */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 bg-dark-base border-b border-dark-border text-white">
        <Container size="std">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700">
              SECURITY AUDIT // ROW-LEVEL SECURITY &amp; ENCRYPTION
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Zero Cross-User PII Exposure Architecture
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Because DateInvite operates on an open invitation URL model, creator email addresses are protected by PostgreSQL Row-Level Security policies that prevent client-side query leakage.
            </p>
          </div>

          {/* Syntax Highlighted SQL Container */}
          <div className="w-full rounded-lg bg-dark-card border border-dark-border overflow-hidden shadow-2xl">
            <div className="px-4 py-3 bg-slate-900 border-b border-dark-border flex items-center justify-between text-xs font-mono text-slate-400">
              <span>{dateinvite.codeSnippet.title}</span>
              <span>PostgreSQL / RLS</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto bg-[#0a0f1d]">
              <pre className="font-mono text-xs sm:text-sm text-blue-300 leading-relaxed">
                <code>{dateinvite.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. VERIFIED BENCHMARKS                                                    */}
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
              Directly audited via automated security inspection scripts and end-to-end simulation suites.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {dateinvite.benchmarks
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
                      <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
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
      {/* 8. PROJECT PAGINATION & INTAKE CONVERSION                                 */}
      {/* ========================================================================= */}
      <section className="w-full py-16 sm:py-24 bg-canvas-subtle/50">
        <Container size="std">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Next Project Link */}
            <div className="p-8 rounded-xl bg-white border border-border-hairline shadow-sm flex flex-col items-start">
              <span className="font-mono text-xs uppercase tracking-wider text-content-tertiary mb-2">
                NEXT PROJECT // 01
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-content-primary">
                {dateinvite.nextProject.title}
              </h3>
              <p className="mt-1 text-xs text-content-secondary">
                {dateinvite.nextProject.category}
              </p>
              <div className="mt-6">
                <Button
                  variant="secondary"
                  size="default"
                  href={`/work/${dateinvite.nextProject.slug}`}
                  className="group"
                >
                  <span>Explore Aahar Nearby Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Inquire for Web Engineering */}
            <div className="p-8 rounded-xl bg-content-primary text-white shadow-sm flex flex-col items-start">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                ARCHITECTURE CONSULTATION
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Building a High-Touch Web Platform?
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
                  Initiate Web Architecture Inquiry →
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
