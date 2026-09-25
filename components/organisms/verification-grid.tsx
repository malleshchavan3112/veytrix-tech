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
              'p-5 sm:p-6 rounded-lg border transition-all text-left flex flex-col justify-between',
              dark
                ? 'bg-dark-card border-dark-border text-white'
                : 'bg-white border-border-hairline text-content-primary'
            )}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  className={cn(
                    'font-mono text-2xl sm:text-3xl font-bold tracking-tight',
                    dark ? 'text-white' : 'text-content-primary'
                  )}
                >
                  {b.metric}
                </span>
                <span
                  className={cn(
                    'font-mono text-[10px] px-1.5 py-0.5 rounded border uppercase',
                    dark
                      ? 'bg-slate-800 text-emerald-400 border-slate-700'
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
