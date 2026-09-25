'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/site';
import { BrandMark } from '@/components/ui/brand-mark';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { MobileNavDrawer } from './mobile-nav-drawer';

export function GlobalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full h-16 bg-canvas-base/90 backdrop-blur-md border-b border-border-hairline transition-colors">
        <Container size="ultra" className="h-full flex items-center justify-between">
          {/* Studio Brand Mark */}
          <div className="flex items-center gap-6">
            <BrandMark />

            {/* Operational Telemetry Badge (Desktop only) */}
            <div className="hidden xl:inline-flex items-center gap-2 px-2.5 py-1 rounded bg-canvas-subtle border border-border-hairline font-mono text-[11px] text-content-tertiary">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>{SITE_CONFIG.systemStatus}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-content-secondary hover:text-content-primary transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="default"
              href="/#contact"
              className="hidden sm:inline-flex"
            >
              Start a Project
            </Button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-md border border-border-hairline text-content-primary hover:bg-canvas-subtle transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
              aria-expanded={mobileMenuOpen}
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Slide-Over Drawer */}
      <MobileNavDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
