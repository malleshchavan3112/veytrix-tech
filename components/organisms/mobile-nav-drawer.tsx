'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants/site';
import { Button } from '@/components/ui/button';
import { BrandMark } from '@/components/ui/brand-mark';

export interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavDrawer({ isOpen, onClose }: MobileNavDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Close on Escape & Lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Auto focus close button
    firstFocusableRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 lg:hidden flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-canvas-overlay backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Body */}
      <div
        ref={drawerRef}
        className="relative w-full max-w-xs sm:max-w-sm h-full bg-canvas-base border-l border-border-hairline shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
      >
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-border-hairline">
            <BrandMark size="sm" />
            <button
              ref={firstFocusableRef}
              type="button"
              onClick={onClose}
              className="w-11 h-11 flex items-center justify-center rounded-md border border-border-hairline text-content-secondary hover:text-content-primary hover:bg-canvas-subtle transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-8 flex flex-col gap-2">
            {SITE_CONFIG.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between py-3.5 px-4 rounded-md text-base font-medium text-content-primary hover:bg-canvas-subtle hover:text-accent-blue transition-colors min-h-[48px]"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-content-tertiary">→</span>
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-border-hairline">
              <span className="font-mono text-[11px] uppercase tracking-wider text-content-tertiary px-4 mb-2 block">
                CASE STUDIES
              </span>
              <Link
                href="/work/aahar-nearby"
                onClick={onClose}
                className="flex items-center justify-between py-3 px-4 rounded-md text-sm font-medium text-content-secondary hover:bg-canvas-subtle hover:text-content-primary transition-colors min-h-[44px]"
              >
                <span>Aahar Nearby</span>
                <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                  MOBILE
                </span>
              </Link>
              <Link
                href="/work/dateinvite"
                onClick={onClose}
                className="flex items-center justify-between py-3 px-4 rounded-md text-sm font-medium text-content-secondary hover:bg-canvas-subtle hover:text-content-primary transition-colors min-h-[44px]"
              >
                <span>DateInvite</span>
                <span className="font-mono text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                  WEB APP
                </span>
              </Link>
            </div>
          </nav>
        </div>

        {/* Bottom Drawer Action */}
        <div className="pt-6 border-t border-border-hairline flex flex-col gap-3">
          <Button
            variant="primary"
            size="lg"
            href="/#contact"
            className="w-full min-h-[48px]"
            onClick={onClose}
          >
            Start a Project
          </Button>

          <div className="flex items-center justify-between font-mono text-[10px] text-content-tertiary pt-2">
            <span>SYS // OPERATIONAL</span>
            <span>BUILD // ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
