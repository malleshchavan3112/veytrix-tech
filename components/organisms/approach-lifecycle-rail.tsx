import React from 'react';
import { APPROACH_STAGES } from '@/content/approach';
import { ArrowRight } from 'lucide-react';

export function ApproachLifecycleRail() {
  return (
    <div className="relative w-full">
      {/* Top continuous technical datum rail for desktop */}
      <div className="hidden lg:block absolute top-[14px] left-10 right-10 h-[1px] bg-border-hairline" />
      <div className="hidden lg:block absolute top-[14px] left-10 right-10 h-[1px] bg-gradient-to-r from-veytrix-blue/40 via-veytrix-cyan/50 to-veytrix-teal/40" />

      {/* Horizontal Stepper Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {APPROACH_STAGES.map((stage, idx) => (
          <div
            key={stage.number}
            className="group relative flex flex-col justify-between p-6 rounded-lg border border-border-hairline bg-canvas-elevated hover:border-border-default hover:bg-veytrix-surface/25 transition-all duration-200 text-left select-none"
          >
            {/* Top Technical Milestone Beacon (Desktop) */}
            <div className="hidden lg:flex items-center justify-center w-7 h-7 rounded-full bg-canvas-base border border-border-hairline mb-6 relative z-10 group-hover:border-veytrix-cyan/60 transition-colors">
              <span className="w-2 h-2 rounded-full bg-veytrix-cyan group-hover:bg-veytrix-blue transition-colors" />
            </div>

            {/* Desktop Horizontal Step Connector Arrow */}
            {idx < 3 && (
              <div className="hidden lg:flex absolute top-[10px] -right-3.5 z-20 w-7 h-7 items-center justify-center rounded-full bg-canvas-base border border-border-hairline/80 text-content-muted shadow-sm">
                <ArrowRight className="w-3 h-3 text-content-tertiary" />
              </div>
            )}

            <div>
              {/* Header Numbering & Progress Indicator */}
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-mono text-2xl font-bold tracking-tight text-veytrix-navy/25 group-hover:text-veytrix-electric/40 transition-colors">
                  0{idx + 1}
                </span>
                <span className="font-mono text-[11px] text-content-tertiary">
                  STAGE // {stage.number}
                </span>
              </div>

              {/* Stage Title & Tagline */}
              <h3 className="font-display text-lg font-bold text-content-primary tracking-tight group-hover:text-veytrix-navy transition-colors">
                {stage.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] text-veytrix-blue font-medium leading-snug">
                {stage.tagline}
              </p>

              {/* Editorial Description */}
              <p className="mt-3 text-xs sm:text-sm text-content-secondary leading-relaxed">
                {stage.description}
              </p>
            </div>

            {/* Verifiable Artifacts Strip */}
            <div className="mt-6 pt-4 border-t border-border-hairline flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-content-tertiary font-semibold">
                VERIFIABLE DELIVERABLES
              </span>
              <ul className="flex flex-col gap-1.5">
                {stage.artifacts.map((art) => (
                  <li key={art} className="text-xs text-content-secondary flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan/80 group-hover:bg-veytrix-blue transition-colors flex-shrink-0 mt-1" />
                    <span className="leading-snug">{art}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
