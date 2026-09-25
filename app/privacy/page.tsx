import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { HairlineDivider } from '@/components/ui/hairline-divider';
import { SITE_CONFIG } from '@/lib/constants/site';

export const metadata: Metadata = {
  title: 'Privacy Architecture & Data Protection',
  description:
    'Veytrix Tech Studio privacy policy and data architecture principles: Zero tracking, cryptographic link isolation, and client confidentiality.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
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
            LEGAL ARCHITECTURE // COMPLIANCE
          </span>
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
            Privacy Architecture &amp; Data Protection
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
              1. Architectural Philosophy: Zero-Persistence Default
            </h2>
            <p>
              At {SITE_CONFIG.legalName} (&quot;Veytrix Tech&quot;, &quot;we&quot;, &quot;our&quot;), we treat privacy as an engineering constraint rather than a legal afterthought. We operate with an architectural default toward minimal data collection. We do not use third-party marketing trackers, cross-site profiling pixels, or intrusive analytics cookies on our public web surfaces.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              2. Information Collected via Studio Inquiry Engine
            </h2>
            <p>
              When you initiate an architecture consultation through our structured inquiry form at <Link href="/#contact" className="text-accent-blue hover:underline">/#contact</Link>, we collect only the explicit details necessary to evaluate your project scope:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-content-secondary">
              <li>Full Name and Professional Title</li>
              <li>Work Email Address</li>
              <li>Company or Organization Name</li>
              <li>Selected Project Domain and Scope Tier</li>
              <li>Project Requirements and Overview</li>
            </ul>
            <p className="mt-3">
              This information is transmitted securely over TLS encryption to our serverless route handlers, validated using strict type-safe schemas, and routed directly to studio engineering inboxes. It is never sold, leased, or shared with third-party data aggregators.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              3. Client Confidentiality &amp; Non-Disclosure
            </h2>
            <p>
              All proprietary project scopes, architectures, and preliminary project discussions shared with Veytrix Tech are treated with strict confidentiality by default. We routinely execute standard bilateral Non-Disclosure Agreements (NDAs) prior to detailed code audits or technical discovery sessions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              4. Cookies &amp; Local Storage
            </h2>
            <p>
              Our website uses zero third-party advertising or profiling cookies. We do not track your digital activity across other domains. Any local storage utilization is strictly technical and ephemeral (such as preserving in-progress inquiry form inputs during transient network disconnections).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              5. Data Subject Rights (GDPR &amp; CCPA Compliance)
            </h2>
            <p>
              Regardless of your geographic location, you retain full sovereignty over your personal information:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-content-secondary">
              <li><strong>Right to Access:</strong> You may request a machine-readable copy of any correspondence or data we retain regarding your inquiries.</li>
              <li><strong>Right to Erasure:</strong> You may request the immediate deletion of your contact records from our studio communications database.</li>
              <li><strong>Right to Rectification:</strong> You may correct or update any operational contact details at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-content-primary mb-3">
              6. Data Controller Contact
            </h2>
            <p>
              To exercise any privacy rights, request data deletion, or report a security concern, contact our studio engineering team directly at:
            </p>
            <div className="mt-3 p-4 rounded-md bg-canvas-subtle border border-border-hairline font-mono text-xs text-content-primary">
              <div>Veytrix Tech Studio — Privacy Architecture</div>
              <div className="mt-1">Inquiry Intake: <a href="mailto:intake@veytrix.tech" className="text-accent-blue hover:underline">intake@veytrix.tech</a></div>
              <div>Security Telemetry: <a href="mailto:security@veytrix.tech" className="text-accent-blue hover:underline">security@veytrix.tech</a></div>
            </div>
            <p className="mt-4 text-xs text-content-tertiary">
              *Notice: This document outlines our active technical data architecture. Formal jurisdictional corporate registration information and statutory legal disclosures will be updated upon final corporate counsel sign-off.
            </p>
          </section>
        </div>
      </Container>
    </article>
  );
}
