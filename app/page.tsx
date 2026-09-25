import React from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { StudioTriadArtifact } from '@/components/organisms/studio-triad-artifact';
import { ProjectShowcaseSpread } from '@/components/organisms/project-showcase-spread';
import { ServiceMatrixRow } from '@/components/organisms/service-matrix-row';
import { ApproachLifecycleRail } from '@/components/organisms/approach-lifecycle-rail';
import { TechTerminalBlock } from '@/components/organisms/tech-terminal-block';
import { VerificationGrid } from '@/components/organisms/verification-grid';
import { SingleInquiryForm } from '@/components/forms/single-inquiry-form';
import { SERVICES } from '@/content/services';
import { CASE_STUDIES } from '@/content/case-studies';

export default function HomePage() {
  const aahar = CASE_STUDIES['aahar-nearby'];
  const dateinvite = CASE_STUDIES['dateinvite'];

  return (
    <div className="flex flex-col w-full">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & SIGNATURE TRIAD VISUAL (#hero)                          */}
      {/* ========================================================================= */}
      <section
        id="hero"
        aria-label="Studio Overview and Positioning"
        className="relative w-full pt-16 sm:pt-24 pb-20 sm:pb-28 border-b border-border-hairline bg-tech-grid bg-hero-glow overflow-hidden"
      >
        <Container size="ultra">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typographic Triad Authority (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Monospace Eyebrow Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-veytrix-surface/90 border border-veytrix-cyan/30 font-mono text-xs text-veytrix-navy shadow-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-veytrix-cyan animate-pulse" />
                <span className="font-semibold uppercase tracking-wider text-[11px]">
                  DIGITAL PRODUCT &amp; TECHNOLOGY STUDIO
                </span>
                <span className="text-veytrix-cyan/60 hidden sm:inline">·</span>
                <span className="text-[10px] text-veytrix-electric font-medium hidden sm:inline">
                  PRECISION CRAFT
                </span>
              </div>

              {/* Primary Display Headline */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-primary leading-[1.08] max-w-2xl">
                Design <span className="text-content-muted font-normal">+</span> Technology <span className="text-content-muted font-normal">+</span> <span className="text-gradient-veytrix">Product Thinking</span>
              </h1>

              {/* Supporting Editorial Statement */}
              <p className="mt-6 text-lg sm:text-xl text-content-secondary leading-relaxed max-w-xl">
                A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking.
              </p>

              {/* Action Button Cluster */}
              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="/#contact"
                  className="shadow-btn-primary hover:shadow-btn-hover group"
                >
                  <span>Initiate Inquiry</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="secondary" size="lg" href="/#work" className="group">
                  <span>Explore Selected Work</span>
                  <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-0.5 text-veytrix-blue" />
                </Button>
              </div>

              {/* Telemetry Indicator Strip */}
              <div className="mt-12 pt-6 border-t border-border-hairline w-full flex flex-wrap items-center gap-6 text-xs font-mono text-content-tertiary">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-content-secondary font-medium">TYPE-SAFE CONTRACTS</span>
                </div>
                <div>·</div>
                <div>SUB-SECOND LATENCY TARGETS</div>
                <div>·</div>
                <div>WCAG 2.1 AA COMPLIANT</div>
              </div>
            </div>

            {/* Right Column: Studio Triad Nexus Artifact (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <StudioTriadArtifact />
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. SELECTED WORK SECTION (#work)                                          */}
      {/* ========================================================================= */}
      <section
        id="work"
        aria-label="Selected Flagship Case Studies"
        className="w-full py-20 sm:py-28 border-b border-border-hairline bg-canvas-base"
      >
        <Container size="ultra">
          <SectionHeader
            eyebrow="01 // SELECTED WORK"
            title="Proof-Forward Flagship Case Studies"
            subtitle="Real, production-grade applications engineered with verifiable performance, robust type safety, and disciplined architecture."
          />

          <div className="flex flex-col">
            {/* Case Study 01: Aahar Nearby */}
            <ProjectShowcaseSpread
              number="01"
              title={aahar.title}
              tagline={aahar.tagline}
              category={aahar.category}
              description={aahar.editorialSummary}
              slug={aahar.slug}
              tags={['Flutter 3.x', 'Clean Architecture', 'Firestore Real-Time', 'OneSignal Push']}
              benchmarkMetric="990+"
              benchmarkLabel="Automated Tests Passed across Flutter Unit & Widget Suites"
              deviceType="mobile"
            />

            {/* Case Study 02: DateInvite */}
            <ProjectShowcaseSpread
              number="02"
              title={dateinvite.title}
              tagline={dateinvite.tagline}
              category={dateinvite.category}
              description={dateinvite.editorialSummary}
              slug={dateinvite.slug}
              tags={['Next.js App Router', 'TypeScript 5', 'Supabase RLS', 'Framer Motion']}
              benchmarkMetric="Zero"
              benchmarkLabel="Cross-User PII Exposure Verified via Automated RLS Audit"
              deviceType="browser"
              liveUrl="https://www.dateinvite.me/"
              reverse
            />
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES MATRIX SECTION (#services)                                    */}
      {/* ========================================================================= */}
      <section
        id="services"
        aria-label="Studio Capabilities and Services Matrix"
        className="w-full py-20 sm:py-28 border-b border-border-hairline"
      >
        <Container size="ultra">
          <SectionHeader
            eyebrow="02 // CAPABILITIES"
            title="End-to-End Digital Product Capabilities"
            subtitle="From foundational discovery and tokenized design systems to resilient distributed backends and native mobile applications."
          />

          <div className="flex flex-col divide-y divide-border-hairline">
            {SERVICES.map((service) => (
              <ServiceMatrixRow key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. APPROACH SECTION (#approach)                                           */}
      {/* ========================================================================= */}
      <section
        id="approach"
        aria-label="Disciplined Engineering Methodology"
        className="w-full py-20 sm:py-28 border-b border-border-hairline"
      >
        <Container size="ultra">
          <SectionHeader
            eyebrow="03 // METHODOLOGY"
            title="Disciplined 4-Stage Lifecycle"
            subtitle="How we eliminate ambiguity, enforce mathematical design rigor, and guarantee production resilience."
          />

          <ApproachLifecycleRail />
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGY & REPOSITORY VERIFICATION SECTION                           */}
      {/* ========================================================================= */}
      <section
        id="standards"
        aria-label="Engineering Standards and Repository Benchmarks"
        className="w-full py-20 sm:py-28 border-b border-border-hairline"
      >
        <Container size="ultra">
          <SectionHeader
            eyebrow="04 // REPOSITORY VALIDATION & ENGINEERING BENCHMARKS"
            title="Architectural Invariants & Verifiable Telemetry"
            subtitle="Zero fabricated client logos, zero vanity metrics. Our credibility is rooted in type-safe contracts, audited database isolation, and automated test suites."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Terminal Contract Container (12 cols) */}
            <div className="lg:col-span-12">
              <TechTerminalBlock />
            </div>
          </div>

          {/* 6 Verified Repository Benchmarks Grid */}
          <VerificationGrid />
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. INQUIRY ENGINE SECTION (#contact)                                      */}
      {/* ========================================================================= */}
      <section
        id="contact"
        aria-label="Architecture Consultation and Project Intake"
        className="w-full py-20 sm:py-28"
      >
        <Container size="std">
          <SectionHeader
            eyebrow="05 // INITIATE A PROJECT"
            title="Let's Build Something Exceptional"
            subtitle="Direct communication with founding engineers. Non-disclosure protected by default."
            align="center"
          />

          <SingleInquiryForm />
        </Container>
      </section>
    </div>
  );
}
