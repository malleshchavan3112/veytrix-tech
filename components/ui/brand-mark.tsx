import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export interface BrandMarkProps {
  className?: string;
  showWordmark?: boolean;
}

export function BrandMark({ className, showWordmark = true }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={cn(
        'inline-flex items-center gap-2.5 text-content-primary focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-4 rounded group select-none',
        className
      )}
      aria-label="Veytrix Tech — Return to homepage"
    >
      {/* Geometric Triad V-Monogram */}
      <span className="w-8 h-8 rounded-md bg-content-primary flex items-center justify-center text-white transition-transform group-hover:scale-105 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-white"
          aria-hidden="true"
        >
          {/* Intersecting Triad vertices forming V */}
          <path d="M4 4L12 20L20 4" />
          <path d="M12 4V12" strokeWidth="1.5" strokeOpacity="0.8" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </span>

      {showWordmark && (
        <span className="flex flex-col">
          <span className="font-display font-bold text-base tracking-tight leading-none text-content-primary">
            VEYTRIX TECH
          </span>
          <span className="font-mono text-[9px] uppercase tracking-widest text-content-tertiary mt-0.5 leading-none">
            STUDIO
          </span>
        </span>
      )}
    </Link>
  );
}
