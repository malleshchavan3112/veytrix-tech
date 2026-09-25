import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { HairlineDivider } from '@/components/ui/hairline-divider';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: 'Terms of Service & Studio Engagement',
  description:
    'Veytrix Tech Studio terms of engagement, intellectual property allocation, and professional software engineering contracts.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <article className="w-full py-16 sm:py-24">
      <Container size="prose">
        {/* Navigation Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-content-tertiary hover:text-content-primary transition-colors mb-8 py-1"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-accent-blue px-2.5 py-1 rounded bg-canvas-subtle border border-border-hairline">
            TERMS OF SERVICE // ENGAGEMENT FRAMEWORK
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
            Terms of Service &amp; Studio Engagement
          </h1>
          <p className="mt-2 text-xs font-mono text-content-tertiary">
            Effective Date: September 2026 · Operating Entity: {SITE_CONFIG.legalName}
          </p>
        </div>

        <HairlineDivider className="mb-12" />

        {/* Content Prose */}
        <div className="space-y-10 text-sm sm:text-base text-content-secondary leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the web surfaces operated by {SITE_CONFIG.legalName} (&quot;Veytrix Tech&quot;, &quot;the Studio&quot;), or by submitting a project inquiry through our intake architecture, you acknowledge that you have read and agree to comply with these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              2. Professional Engineering &amp; Design Engagements
            </h2>
            <p>
              Informational materials, case studies, architectural diagrams, and service descriptions presented on this website are provided for illustrative and evaluative purposes. All bespoke software engineering, mobile development, and UI/UX design engagements are governed by separate, mutually executed Master Services Agreements (MSA) and Statements of Work (SOW).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              3. Intellectual Property Rights &amp; Deliverables
            </h2>
            <p>
              Unless otherwise stipulated in a tailored SOW:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-content-secondary">
              <li><strong>Client IP Ownership:</strong> Upon receipt of full and final contractual payment, all custom application source code, bespoke design tokens, and proprietary assets engineered specifically for the client transfer to full client ownership.</li>
              <li><strong>Studio Core Tooling:</strong> Veytrix Tech retains ownership of our pre-existing libraries, general architectural scaffolds, and internal developer tooling.</li>
              <li><strong>Website Materials:</strong> All brand marks, editorial copy, design system specifications (DESIGN.md), and custom schematics on this website remain the exclusive intellectual property of {SITE_CONFIG.legalName}.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              4. Accuracy of Information &amp; Technical Benchmarks
            </h2>
            <p>
              We pride ourselves on absolute factual integrity. All performance statistics and repository benchmarks presented on this website are derived directly from verified codebase test suites (such as automated Flutter test counts, Supabase RLS verification scripts, and simulation tests). We do not manufacture fictitious revenue claims or simulated client testimonials.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, Veytrix Tech Studio shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use this website or from preliminary architectural consultations prior to the execution of a formal commercial contract.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              6. Inquiries &amp; Legal Notices
            </h2>
            <p>
              For legal inquiries, contractual questions, or formal notices, contact our studio administration team at:
            </p>
            <div className="mt-3 p-4 rounded-md bg-canvas-subtle border border-border-hairline font-mono text-xs text-content-primary">
              <div>Veytrix Tech Studio — Legal &amp; Commercial Affairs</div>
              <div className="mt-1">Inquiry Intake: <a href="mailto:intake@veytrix.tech" className="text-accent-blue hover:underline">intake@veytrix.tech</a></div>
              <div>Domain: <a href="https://veytrix.tech" className="text-accent-blue hover:underline">https://veytrix.tech</a></div>
            </div>
            <p className="mt-4 text-xs text-content-tertiary">
              *Notice: This document provides our operational terms framework. Formal corporate registration details and specific statutory jurisdictions will be finalized upon corporate counsel review.
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
