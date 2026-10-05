'use client';

import React, { useState, useEffect, useRef } from 'react';
import { APPROACH_STAGES } from '@/content/approach';
import { ArrowRight, CheckCircle2, ChevronRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export function ApproachLifecycleRail() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-driven active stage detection on desktop
  useEffect(() => {
    const handleScroll = () => {
      stageRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Activate stage when its top enters the upper 45% of viewport
        if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= window.innerHeight * 0.25) {
          setActiveStageIndex(idx);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStage = (idx: number) => {
    setActiveStageIndex(idx);
    const target = stageRefs.current[idx];
    if (target) {
      const topOffset = target.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const activeStage = APPROACH_STAGES[activeStageIndex];

  return (
    <div className="relative w-full">
      {/* =================================================================== */}
      {/* DESKTOP STICKY PROCESS STORYTELLING (lg:grid)                       */}
      {/* =================================================================== */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Sticky Anchored Process Navigator (5 Cols) */}
        <div className="lg:col-span-5 sticky top-28 self-start p-6 rounded-2xl bg-canvas-elevated/95 border border-border-hairline shadow-card-hover backdrop-blur-md">
          {/* Top Eyebrow Tag */}
          <div className="flex items-center justify-between pb-3 border-b border-border-hairline text-xs font-mono text-content-tertiary">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-veytrix-cyan animate-pulse" />
              <span className="font-semibold text-content-primary">
                OPERATING SYSTEM // WORKFLOW
              </span>
            </div>
            <span className="text-veytrix-blue font-semibold">
              STAGE 0{activeStageIndex + 1} OF 04
            </span>
          </div>

          {/* Stepper Navigation Pills */}
          <div className="mt-4 flex flex-col gap-1.5">
            {APPROACH_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const isPast = activeStageIndex > idx;
              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => scrollToStage(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono transition-all duration-200 text-left cursor-pointer ${
                    isActive
                      ? 'bg-veytrix-surface text-veytrix-navy font-bold border border-veytrix-cyan/40 shadow-xs'
                      : isPast
                      ? 'text-content-secondary hover:bg-slate-50 hover:text-content-primary'
                      : 'text-content-tertiary hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${
                        isActive
                          ? 'bg-veytrix-blue text-white'
                          : isPast
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {isPast ? '✓' : `0${idx + 1}`}
                    </span>
                    <span className="font-display font-medium text-sm">
                      {stage.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive
                        ? 'text-veytrix-blue translate-x-0.5'
                        : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Stage Anchor Visual Callout */}
          <div className="mt-6 pt-5 border-t border-border-hairline">
            <span className="font-mono text-[10px] uppercase font-bold text-veytrix-electric tracking-wider block mb-1">
              CURRENT FOCUS // STAGE 0{activeStageIndex + 1}
            </span>
            <h4 className="font-display text-lg font-bold text-content-primary">
              {activeStage.title}
            </h4>
            <p className="mt-1 text-xs text-content-secondary leading-relaxed">
              {activeStage.tagline}
            </p>

            {/* Discipline Badges */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {activeStage.disciplines.map((d) => (
                <span
                  key={d}
                  className="font-mono text-[10px] text-content-tertiary bg-slate-50 border border-slate-200 px-2 py-0.5 rounded"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Deep Scrollable Stage Cards (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {APPROACH_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <div
                key={stage.number}
                ref={(el) => {
                  stageRefs.current[idx] = el;
                }}
                className={`p-7 rounded-2xl border transition-all duration-300 text-left ${
                  isActive
                    ? 'bg-white border-veytrix-cyan/60 shadow-lg ring-1 ring-veytrix-blue/20 scale-[1.01]'
                    : 'bg-white/80 border-border-hairline opacity-75 hover:opacity-100'
                }`}
              >
                {/* Header Numbering & Progress Indicator */}
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-mono text-3xl font-bold tracking-tight text-veytrix-navy/30">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-xs text-veytrix-blue font-semibold bg-veytrix-surface px-2.5 py-0.5 rounded border border-veytrix-cyan/30">
                    STAGE // {stage.number}
                  </span>
                </div>

                {/* Stage Title & Tagline */}
                <h3 className="font-display text-2xl font-bold text-content-primary tracking-tight">
                  {stage.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-veytrix-electric font-medium">
                  {stage.tagline}
                </p>

                {/* Editorial Description */}
                <p className="mt-4 text-sm text-content-secondary leading-relaxed">
                  {stage.description}
                </p>

                {/* Verifiable Artifacts Strip */}
                <div className="mt-6 pt-5 border-t border-border-hairline">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-content-tertiary font-semibold block mb-2.5">
                    VERIFIABLE ARTIFACTS DELIVERED
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {stage.artifacts.map((art) => (
                      <div
                        key={art}
                        className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-content-primary font-medium flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan flex-shrink-0 mt-1.5" />
                        <span className="text-[11px] leading-snug">{art}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =================================================================== */}
      {/* MOBILE VERTICAL STORYTELLING (block lg:hidden)                      */}
      {/* =================================================================== */}
      <div className="block lg:hidden space-y-6">
        {APPROACH_STAGES.map((stage, idx) => (
          <div
            key={stage.number}
            className="p-6 rounded-2xl bg-white border border-border-hairline shadow-sm text-left"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xl font-bold text-veytrix-navy/40">
                0{idx + 1}
              </span>
              <span className="font-mono text-[10px] text-veytrix-blue bg-veytrix-surface px-2 py-0.5 rounded border border-veytrix-cyan/30">
                STAGE // {stage.number}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold text-content-primary">
              {stage.title}
            </h3>
            <p className="font-mono text-[11px] text-veytrix-electric font-medium mt-0.5">
              {stage.tagline}
            </p>
            <p className="mt-3 text-xs text-content-secondary leading-relaxed">
              {stage.description}
            </p>

            <div className="mt-4 pt-4 border-t border-border-hairline">
              <span className="font-mono text-[10px] uppercase font-semibold text-content-tertiary block mb-2">
                VERIFIABLE DELIVERABLES
              </span>
              <ul className="space-y-1.5">
                {stage.artifacts.map((art) => (
                  <li key={art} className="text-xs text-content-secondary flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan mt-1 flex-shrink-0" />
                    <span className="text-[11px]">{art}</span>
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
