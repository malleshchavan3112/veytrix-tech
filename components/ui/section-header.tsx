import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col mb-12 sm:mb-16',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            'inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider mb-3 px-2 py-0.5 rounded-sm border',
            dark
              ? 'text-slate-400 bg-slate-800/80 border-slate-700'
              : 'text-content-tertiary bg-canvas-subtle border-border-hairline'
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        id={id}
        className={cn(
          'font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.15]',
          dark ? 'text-white' : 'text-content-primary'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl',
            dark ? 'text-slate-400' : 'text-content-secondary'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
