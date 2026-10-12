import { Metadata } from 'next';
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
import { ScrollReveal } from '@/components/motion/scroll-reveal';
import { SERVICES } from '@/content/services';
import { CASE_STUDIES } from '@/content/case-studies';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Veytrix Tech — UI/UX Design, Web & Mobile App Development',
  },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: `${SITE_CONFIG.domain}/`,
  },
  openGraph: {
    title: 'Veytrix Tech — UI/UX Design, Web & Mobile App Development',
    description: SITE_CONFIG.description,
    url: `${SITE_CONFIG.domain}/`,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.domain}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Veytrix Tech — UI/UX Design, Web & Mobile App Development',
      },
    ],
  },
};

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

              {/* Primary Display Headline with Editorial Word Reveal */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-content-primary leading-[1.12] max-w-2xl">
                <span className="word-mask">
                  <span className="word-reveal-1">Design</span>
                </span>{' '}
                <span className="text-content-muted font-normal inline-block opacity-0 animate-[editorialWordReveal_800ms_cubic-bezier(0.16,1,0.3,1)_180ms_forwards]">+</span>{' '}
                <span className="word-mask">
                  <span className="word-reveal-2">Technology</span>
                </span>{' '}
                <span className="text-content-muted font-normal inline-block opacity-0 animate-[editorialWordReveal_800ms_cubic-bezier(0.16,1,0.3,1)_300ms_forwards]">+</span>{' '}
                <span className="word-mask">
                  <span className="word-reveal-3 text-gradient-veytrix">Product Thinking</span>
                </span>
              </h1>

              {/* Supporting Editorial Statement */}
              <p className="mt-6 text-lg sm:text-xl text-content-secondary leading-relaxed max-w-xl opacity-0 animate-[editorialWordReveal_800ms_cubic-bezier(0.16,1,0.3,1)_420ms_forwards]">
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
        className="w-full py-20 sm:py-28 border-b border-border-hairline bg-white relative"
      >
        <Container size="ultra">
          <ScrollReveal stagger={0}>
            <SectionHeader
              eyebrow="01 // SELECTED WORK"
              title="Proof-Forward Flagship Case Studies"
              subtitle="Real, production-grade applications engineered with verifiable performance, robust type safety, and disciplined architecture."
            />
          </ScrollReveal>

          <div className="flex flex-col">
            {/* Case Study 01: Aahar Nearby */}
            <ScrollReveal stagger={1}>
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
            </ScrollReveal>

            {/* Case Study 02: DateInvite */}
            <ScrollReveal stagger={2}>
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
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. SERVICES MATRIX SECTION (#services)                                    */}
      {/* ========================================================================= */}
      <section
        id="services"
        aria-label="Studio Capabilities and Services Matrix"
        className="w-full py-20 sm:py-28 border-b border-border-hairline bg-canvas-subtle/35"
      >
        <Container size="ultra">
          <ScrollReveal stagger={0}>
            <SectionHeader
              eyebrow="02 // CAPABILITIES"
              title="End-to-End Digital Product Capabilities"
              subtitle="From foundational discovery and tokenized design systems to resilient distributed backends and native mobile applications."
            />
          </ScrollReveal>

          {/* Interactive Services Matrix Focus Group */}
          <div className="services-matrix flex flex-col divide-y divide-border-hairline">
            {SERVICES.map((service, idx) => (
              <ScrollReveal key={service.id} stagger={(idx % 4) as any}>
                <ServiceMatrixRow service={service} />
              </ScrollReveal>
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
        className="w-full py-20 sm:py-28 border-b border-border-hairline bg-canvas-base"
      >
        <Container size="ultra">
          <ScrollReveal stagger={0}>
            <SectionHeader
              eyebrow="03 // METHODOLOGY"
              title="Disciplined 4-Stage Lifecycle"
              subtitle="How we reduce ambiguity, apply design rigor, and build for production resilience."
            />
          </ScrollReveal>

          <ScrollReveal stagger={1}>
            <ApproachLifecycleRail />
          </ScrollReveal>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. TECHNOLOGY & REPOSITORY VERIFICATION SECTION                           */}
      {/* ========================================================================= */}
      <section
        id="standards"
        aria-label="Engineering Standards and Repository Benchmarks"
        className="w-full py-20 sm:py-28 border-b border-border-hairline bg-[#0B1015] text-white relative overflow-hidden"
      >
        {/* Ambient cyan glow behind technical block */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-veytrix-cyan/5 rounded-full blur-3xl pointer-events-none" />

        <Container size="ultra" className="relative z-10">
          <ScrollReveal stagger={0}>
            <SectionHeader
              eyebrow="04 // REPOSITORY VALIDATION & ENGINEERING BENCHMARKS"
              title="Architectural Invariants & Verifiable Telemetry"
              subtitle="Zero fabricated client logos, zero vanity metrics. Our credibility is rooted in type-safe contracts, audited database isolation, and automated test suites."
              dark
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Terminal Contract Container (12 cols) */}
            <div className="lg:col-span-12">
              <TechTerminalBlock />
            </div>
          </div>

          {/* 6 Verified Repository Benchmarks Grid */}
          <ScrollReveal stagger={2}>
            <VerificationGrid dark />
          </ScrollReveal>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. STUDIO PROFILE & FOUNDER DIRECT CONTACT (#about)                       */}
      {/* ========================================================================= */}
      <section
        id="about"
        aria-label="Studio Profile and Founder Contact"
        className="w-full py-20 sm:py-28 border-b border-border-hairline bg-white relative"
      >
        <Container size="ultra">
          <ScrollReveal stagger={0}>
            <SectionHeader
              eyebrow="05 // STUDIO PROFILE & GOVERNANCE"
              title="Independent Product & Technology Studio"
              subtitle="Direct founder collaboration, high-craft engineering, and transparent technical execution."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mt-12">
            {/* Left 7 cols: Identity, Purpose, Capabilities */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <div className="p-8 rounded-2xl bg-canvas-base border border-border-hairline">
                <span className="font-mono text-xs uppercase tracking-wider text-veytrix-blue font-semibold block mb-3">
                  CORE IDENTITY
                </span>
                <p className="text-base sm:text-lg text-content-primary leading-relaxed font-medium">
                  {SITE_CONFIG.description}
                </p>
                <p className="mt-4 text-sm text-content-secondary leading-relaxed">
                  Unlike conventional agency arrangements that outsource execution or separate design from software development, Veytrix Tech operates as an integrated product practice. We guide projects from foundational requirements and tokenized design systems to production-grade mobile and web codebases.
                </p>
              </div>

              {/* 3 Pillars of Practice */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-canvas-base border border-border-hairline">
                  <span className="font-mono text-[11px] font-bold text-content-tertiary block mb-1">
                    01 // CRAFT
                  </span>
                  <h4 className="font-display text-sm font-bold text-content-primary mb-1">
                    Design Systems
                  </h4>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    WCAG 2.1 AA tokenized components, fluid typography, and optical micro-interactions.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-canvas-base border border-border-hairline">
                  <span className="font-mono text-[11px] font-bold text-content-tertiary block mb-1">
                    02 // RIGOR
                  </span>
                  <h4 className="font-display text-sm font-bold text-content-primary mb-1">
                    Modern Stack
                  </h4>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    Flutter Clean Architecture, Next.js App Router, Supabase RLS, and strict type safety.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-canvas-base border border-border-hairline">
                  <span className="font-mono text-[11px] font-bold text-content-tertiary block mb-1">
                    03 // INTEGRITY
                  </span>
                  <h4 className="font-display text-sm font-bold text-content-primary mb-1">
                    Direct Ownership
                  </h4>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    Zero non-technical account middlemen. Direct collaboration with the studio founder.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Founder Contact & Project Milestone Card */}
            <div className="lg:col-span-5 flex flex-col space-y-6">
              {/* Founder Contact Card */}
              <div className="p-8 rounded-2xl bg-canvas-elevated border border-border-hairline shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-border-hairline">
                  <span className="font-mono text-xs uppercase tracking-wider text-veytrix-blue font-semibold">
                    FOUNDER DIRECT CHANNEL
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-[10px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    DIRECT INBOX
                  </span>
                </div>

                <h4 className="font-display text-xl font-bold text-content-primary mt-4 mb-2">
                  Founder Inquiries &amp; Advisory
                </h4>
                <p className="text-xs text-content-secondary leading-relaxed mb-6">
                  For venture partnerships, technical advisory, co-founder dialogue, or enterprise scoping, connect directly with the founder:
                </p>

                <div className="p-4 rounded-xl bg-canvas-subtle border border-border-hairline flex flex-col gap-2">
                  <span className="font-mono text-[11px] text-content-tertiary uppercase">
                    Official Founder Address
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.founderEmail}`}
                    className="font-mono text-sm sm:text-base font-bold text-veytrix-blue hover:text-veytrix-electric transition-colors flex items-center gap-2 group"
                    aria-label={`Email the founder directly at ${SITE_CONFIG.founderEmail}`}
                  >
                    <span>{SITE_CONFIG.founderEmail}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                <div className="mt-5 flex items-center justify-between pt-4 border-t border-border-hairline text-xs font-mono text-content-tertiary">
                  <span>DISPATCH // ENCRYPTED IN TRANSIT</span>
                  <span>DOMAIN // veytrix.tech</span>
                </div>
              </div>

              {/* Verified Project Milestone Card */}
              <div className="p-6 rounded-xl bg-canvas-subtle border border-border-hairline">
                <div className="flex items-center justify-between text-xs font-mono text-content-tertiary mb-2">
                  <span>PROJECT WORKFLOW RECORD</span>
                  <span className="text-content-secondary font-medium">VERIFIED MILESTONE</span>
                </div>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="font-mono text-xs text-content-secondary">Website &amp; Studio Initiative:</span>
                  <span className="font-mono text-sm font-semibold text-content-primary">{SITE_CONFIG.projectMilestoneDate}</span>
                </div>
                <p className="mt-2 text-[11px] text-content-tertiary leading-relaxed">
                  *Note: 25 September 2026 marks the documented commencement of the studio website project workflow. Formal corporate entity registration details remain under active governance.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. INQUIRY ENGINE SECTION (#contact)                                      */}
      {/* ========================================================================= */}
      <section
        id="contact"
        aria-label="Architecture Consultation and Project Intake"
        className="w-full py-20 sm:py-28 bg-canvas-base"
      >
        <Container size="std">
          <ScrollReveal stagger={0}>
            <SectionHeader
              eyebrow="06 // INITIATE A PROJECT"
              title="Let's Build Something Exceptional"
              subtitle="Direct communication with founding engineers. Non-disclosure protected by default."
              align="center"
            />
          </ScrollReveal>

          <ScrollReveal stagger={1}>
            <SingleInquiryForm />
          </ScrollReveal>

          {/* Direct Founder Contact Channel Banner */}
          <div className="mt-8 p-6 rounded-xl bg-canvas-subtle/80 border border-border-hairline text-center max-w-form mx-auto">
            <span className="font-mono text-xs uppercase tracking-wider text-content-tertiary block mb-1">
              DIRECT FOUNDER COMMUNICATION
            </span>
            <p className="text-sm text-content-secondary leading-relaxed">
              Prefer direct email over structured forms? Reach our founder directly at{' '}
              <a
                href={`mailto:${SITE_CONFIG.founderEmail}`}
                className="font-mono text-veytrix-blue hover:text-veytrix-electric font-semibold underline underline-offset-4 decoration-accent-blue/30 hover:decoration-accent-blue transition-colors"
                aria-label={`Send direct email to ${SITE_CONFIG.founderEmail}`}
              >
                {SITE_CONFIG.founderEmail}
              </a>
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
