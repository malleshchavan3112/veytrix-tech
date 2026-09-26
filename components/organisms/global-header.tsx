'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/site';
import { BrandMark } from '@/components/ui/brand-mark';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { MobileNavDrawer } from './mobile-nav-drawer';

export function GlobalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top subtle reading progress indicator */}
      <div
        className="fixed top-0 left-0 h-[2px] z-50 bg-gradient-to-r from-veytrix-blue via-veytrix-cyan to-veytrix-teal transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      <header
        className={`sticky top-0 z-40 w-full h-16 transition-all duration-300 ${
          isScrolled
            ? 'bg-canvas-base/85 backdrop-blur-md border-b border-border-hairline shadow-sm'
            : 'bg-transparent border-b border-border-hairline/60'
        }`}
      >
        <Container size="ultra" className="h-full flex items-center justify-between">
          {/* Studio Brand Mark */}
          <div className="flex items-center gap-5 sm:gap-6">
            <BrandMark size="md" priority className="flex-shrink-0" />

            {/* Operational Telemetry Badge (Desktop only) */}
            <div className="hidden xl:inline-flex items-center gap-2 px-2.5 py-1 rounded bg-canvas-subtle/80 border border-border-hairline font-mono text-[11px] text-content-tertiary">
              <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan animate-dot-breathe" />
              <span className="text-content-secondary font-medium tracking-tight">VTX-CORE // 01</span>
              <span className="text-content-muted">·</span>
              <span className="text-veytrix-teal text-[10px]">ACTIVE</span>
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
                className="text-sm font-medium text-content-secondary hover:text-veytrix-electric transition-colors py-2 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-veytrix-blue to-veytrix-cyan transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              variant="primary"
              size="default"
              href="/#contact"
              className="hidden sm:inline-flex shadow-btn-primary hover:shadow-btn-hover group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
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
