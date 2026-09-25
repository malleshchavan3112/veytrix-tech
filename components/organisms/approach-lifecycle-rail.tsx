import React from 'react';
import { APPROACH_STAGES } from '@/content/approach';

export function ApproachLifecycleRail() {
  return (
    <div className="relative w-full">
      {/* Horizontal / Vertical Stepper Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
        {APPROACH_STAGES.map((stage, idx) => (
          <div
            key={stage.number}
            className="relative flex flex-col pt-6 border-t-2 border-content-primary/80 lg:border-t-2"
          >
            {/* Step Number & Eyebrow */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-accent-blue tracking-wider">
                STAGE // {stage.number}
              </span>
              <span className="font-mono text-[11px] text-content-tertiary">
                0{idx + 1}/04
              </span>
            </div>

            {/* Title & Tagline */}
            <h3 className="font-display text-xl font-bold text-content-primary tracking-tight">
              {stage.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-content-tertiary">
              {stage.tagline}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm text-content-secondary leading-relaxed">
              {stage.description}
            </p>

            {/* Primary Artifacts */}
            <div className="mt-6 pt-4 border-t border-border-hairline flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-content-tertiary">
                VERIFIABLE ARTIFACTS
              </span>
              <ul className="flex flex-col gap-1.5">
                {stage.artifacts.map((art) => (
                  <li key={art} className="text-xs text-content-primary flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-content-primary" />
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
