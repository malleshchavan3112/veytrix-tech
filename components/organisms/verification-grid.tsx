import React from 'react';
import { SITE_CONFIG } from '@/lib/constants/site';
import { cn } from '@/lib/utils/cn';

export interface VerificationGridProps {
  dark?: boolean;
  className?: string;
}

export function VerificationGrid({ dark = false, className }: VerificationGridProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {SITE_CONFIG.verifiedBenchmarks.map((b) => (
          <div
            key={b.label}
            className={cn(
              'group p-5 sm:p-6 rounded-xl border transition-all duration-300 text-left flex flex-col justify-between hover:-translate-y-1 hover:shadow-card-hover',
              dark
                ? 'bg-slate-900/90 border-slate-800 text-white hover:border-veytrix-cyan/40'
                : 'bg-canvas-elevated border-border-hairline text-content-primary hover:border-veytrix-cyan/30 hover:bg-veytrix-surface/30'
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span
                  className={cn(
                    'font-mono text-2xl sm:text-3xl font-bold tracking-tight transition-colors',
                    dark ? 'text-white group-hover:text-veytrix-cyan' : 'text-veytrix-navy group-hover:text-veytrix-electric'
                  )}
                >
                  {b.metric}
                </span>
                <span
                  className={cn(
                    'font-mono text-[10px] px-2 py-0.5 rounded border uppercase font-medium',
                    dark
                      ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  )}
                >
                  VERIFIED
                </span>
              </div>

              <h4
                className={cn(
                  'font-display text-sm sm:text-base font-semibold tracking-tight',
                  dark ? 'text-slate-200' : 'text-content-primary'
                )}
              >
                {b.label}
              </h4>
            </div>

            <p
              className={cn(
                'mt-3 text-xs leading-relaxed',
                dark ? 'text-slate-400' : 'text-content-secondary'
              )}
            >
              {b.context}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
