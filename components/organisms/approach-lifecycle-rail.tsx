import React from 'react';
import { APPROACH_STAGES } from '@/content/approach';

export function ApproachLifecycleRail() {
  return (
    <div className="relative w-full">
      {/* Top continuous gradient rail for desktop */}
      <div className="hidden lg:block absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-veytrix-blue via-veytrix-cyan to-veytrix-teal opacity-70" />

      {/* Horizontal / Vertical Stepper Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
        {APPROACH_STAGES.map((stage, idx) => (
          <div
            key={stage.number}
            className="group relative flex flex-col p-6 rounded-xl border border-border-hairline bg-canvas-elevated hover:bg-veytrix-surface/50 hover:border-veytrix-cyan/40 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
          >
            {/* Top Glowing Milestone Node */}
            <div className="hidden lg:flex absolute -top-[5px] left-6 w-2.5 h-2.5 rounded-full bg-white border-2 border-veytrix-cyan group-hover:scale-125 transition-transform" />

            {/* Step Number & Eyebrow */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-veytrix-blue tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan" />
                <span>STAGE // {stage.number}</span>
              </span>
              <span className="font-mono text-[11px] text-content-tertiary">
                0{idx + 1}/04
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="font-display text-xl font-bold text-content-primary tracking-tight group-hover:text-veytrix-navy transition-colors">
              {stage.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-veytrix-electric font-medium">
              {stage.tagline}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm text-content-secondary leading-relaxed">
              {stage.description}
            </p>

            {/* Primary Artifacts */}
            <div className="mt-6 pt-4 border-t border-border-hairline flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-veytrix-navy font-semibold">
                VERIFIABLE ARTIFACTS
              </span>
              <ul className="flex flex-col gap-1.5">
                {stage.artifacts.map((art) => (
                  <li key={art} className="text-xs text-content-secondary flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan group-hover:bg-veytrix-blue transition-colors flex-shrink-0" />
                    <span>{art}</span>
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
