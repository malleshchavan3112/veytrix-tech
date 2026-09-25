import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants/site';
import { Container } from '@/components/ui/container';
import { BrandMark } from '@/components/ui/brand-mark';
import { HairlineDivider } from '@/components/ui/hairline-divider';

export function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-canvas-base border-t border-border-hairline pt-16 pb-12 mt-20 sm:mt-28">
      <Container size="ultra">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand Colophon (Columns 1-5) */}
          <div className="md:col-span-5 flex flex-col items-start">
            <BrandMark />
            <p className="mt-4 text-sm text-content-secondary leading-relaxed max-w-sm">
              A modern digital product and technology studio bridging high-craft design, resilient engineering, and product thinking.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-canvas-subtle border border-border-hairline font-mono text-xs text-content-tertiary">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>SYS // OPERATIONAL</span>
              </span>
              <span className="font-mono text-xs text-content-muted">
                BUILD MODE // ACTIVE
              </span>
            </div>
          </div>

          {/* Navigation Directory (Columns 6-8) */}
          <div className="md:col-span-3 flex flex-col">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-content-primary mb-4">
              STUDIO DIRECTORY
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/#work"
                  className="text-content-secondary hover:text-content-primary transition-colors py-1 inline-block"
                >
                  Selected Work
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-content-secondary hover:text-content-primary transition-colors py-1 inline-block"
                >
                  Services Matrix
                </Link>
              </li>
              <li>
                <Link
                  href="/#approach"
                  className="text-content-secondary hover:text-content-primary transition-colors py-1 inline-block"
                >
                  Disciplined Lifecycle
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-content-secondary hover:text-content-primary transition-colors py-1 inline-block"
                >
                  Architecture Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies (Columns 9-10) */}
          <div className="md:col-span-2 flex flex-col">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-content-primary mb-4">
              FLAGSHIP WORK
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/work/aahar-nearby"
                  className="text-content-secondary hover:text-veytrix-electric transition-colors py-1 inline-block"
                >
                  Aahar Nearby
                </Link>
              </li>
              <li>
                <Link
                  href="/work/dateinvite"
                  className="text-content-secondary hover:text-veytrix-electric transition-colors py-1 inline-block"
                >
                  DateInvite
                </Link>
              </li>
              <li>
                <a
                  href="https://www.dateinvite.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-veytrix-cyan hover:text-veytrix-blue transition-colors py-1 inline-flex items-center gap-1"
                >
                  <span>dateinvite.me</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Legal (Columns 11-12) */}
          <div className="md:col-span-2 flex flex-col">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-content-primary mb-4">
              ARCHITECTURE & COMPLIANCE
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-content-secondary hover:text-content-primary transition-colors py-1 inline-block"
                >
                  Privacy Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-content-secondary hover:text-content-primary transition-colors py-1 inline-block"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <HairlineDivider />

        {/* Bottom Metadata & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-tertiary">
          <div>
            © {currentYear} {SITE_CONFIG.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>DISCIPLINED DIGITAL ENGINEERING</span>
            <span>veytrix.tech</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
