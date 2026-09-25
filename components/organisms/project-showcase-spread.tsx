import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MonospaceBadge } from '@/components/ui/monospace-badge';

export interface ProjectShowcaseSpreadProps {
  number: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  slug: string;
  tags: string[];
  benchmarkMetric: string;
  benchmarkLabel: string;
  deviceType: 'mobile' | 'browser';
  reverse?: boolean;
}

export function ProjectShowcaseSpread({
  number,
  title,
  tagline,
  category,
  description,
  slug,
  tags,
  benchmarkMetric,
  benchmarkLabel,
  deviceType,
  reverse = false,
}: ProjectShowcaseSpreadProps) {
  return (
    <div className="w-full py-12 sm:py-16 border-b border-border-hairline last:border-0">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Editorial Text Column (5 Cols) */}
        <div className={`lg:col-span-5 flex flex-col items-start ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="flex items-center gap-2 font-mono text-xs text-content-tertiary mb-3">
            <span>CASE STUDY // {number}</span>
            <span>·</span>
            <span className="uppercase text-accent-blue font-semibold">{category}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-content-primary">
            {title}
          </h3>
          <p className="mt-1 font-mono text-xs text-content-tertiary font-medium">
            {tagline}
          </p>

          <p className="mt-4 text-sm sm:text-base text-content-secondary leading-relaxed">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <MonospaceBadge key={tag} variant="neutral">
                {tag}
              </MonospaceBadge>
            ))}
          </div>

          {/* Verified Repository Benchmark Callout */}
          <div className="mt-6 p-4 rounded-md bg-canvas-subtle border border-border-hairline w-full">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-content-tertiary">
                REPOSITORY BENCHMARK
              </span>
              <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                VERIFIED
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-xl font-bold text-content-primary">
                {benchmarkMetric}
              </span>
              <span className="text-xs text-content-secondary">
                {benchmarkLabel}
              </span>
            </div>
          </div>

          {/* CTA Link */}
          <div className="mt-8 flex items-center gap-4">
            <Button
              variant="primary"
              size="default"
              href={`/work/${slug}`}
              className="group min-h-[48px]"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Product Visual Viewport Column (7 Cols) */}
        <div className={`lg:col-span-7 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          {deviceType === 'mobile' ? (
            /* Dual Mobile Viewport Simulation for Aahar Nearby */
            <div className="relative mx-auto max-w-[480px] p-6 sm:p-8 rounded-xl bg-canvas-subtle border border-border-hairline shadow-sm overflow-hidden select-none">
              <div className="flex items-center justify-between pb-4 border-b border-border-hairline mb-4 font-mono text-[11px] text-content-tertiary">
                <span className="text-emerald-700 font-semibold">● AAHAR NEARBY // MOBILE CLIENT</span>
                <span>FLUTTER 3.x · CLEAN ARCH</span>
              </div>

              {/* Simulated Mobile Mockup Card */}
              <div className="w-full rounded-xl bg-[#061E14] text-white p-5 sm:p-6 shadow-xl border border-emerald-950/60">
                {/* Simulated App Header */}
                <div className="flex items-center justify-between pb-4 border-b border-emerald-900/40 text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 block">CURRENT LOCATION</span>
                    <span className="font-medium text-slate-100">Cyber Gateway, HITEC City</span>
                  </div>
                  <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] border border-emerald-500/30">
                    &lt; 300m RADIUS
                  </span>
                </div>

                {/* Today's Special Banner */}
                <div className="mt-4 p-3 rounded-lg bg-emerald-900/30 border border-emerald-800/40">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-emerald-300 font-semibold uppercase">
                      TODAY&apos;S LIVE SPECIALS
                    </span>
                    <span className="text-[10px] text-slate-400">12:15 PM Dispatch</span>
                  </div>
                  <h4 className="mt-1 font-display text-base font-bold text-white">
                    Crisp Ghee Roast Podi Dosa & Filter Coffee
                  </h4>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-mono font-bold">$9.50 · In Stock</span>
                    <span className="text-slate-300 text-[11px]">Sri Raghavendra Grand (240m away)</span>
                  </div>
                </div>

                {/* Second Item */}
                <div className="mt-3 p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-200">Wood-Fired Neapolitan Margherita</span>
                    <span className="block text-[11px] text-slate-400">Artisan Pizzeria (420m away)</span>
                  </div>
                  <span className="font-mono font-bold text-emerald-400">$14.00</span>
                </div>
              </div>

              {/* Sub-label */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-content-tertiary">
                <span>HAIVERSINE GPS SYNC</span>
                <span>FIRESTORE REAL-TIME REACTION</span>
              </div>
            </div>
          ) : (
            /* Desktop Browser Viewport Simulation for DateInvite */
            <div className="relative mx-auto w-full rounded-xl bg-canvas-subtle border border-border-hairline shadow-sm overflow-hidden select-none">
              {/* Browser Chrome Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-border-hairline">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="ml-3 font-mono text-[11px] text-slate-500 bg-canvas-subtle px-3 py-1 rounded border border-border-hairline">
                    dateinvite.app/v/jazz-dinner-soma
                  </span>
                </div>
                <span className="font-mono text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  RECIPIENT VIEW // LIVE
                </span>
              </div>

              {/* Browser Content Area */}
              <div className="p-6 sm:p-8 bg-white flex flex-col items-center justify-center text-center min-h-[300px]">
                <span className="font-mono text-xs uppercase tracking-wider text-blue-600 mb-2 font-medium">
                  AN INVITATION FOR ALEX
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-content-primary max-w-md">
                  &ldquo;Dinner &amp; Rooftop Jazz at Blue Heron this Thursday?&rdquo;
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-content-secondary max-w-sm">
                  Daniel curated three intimate rooftop spots. Pick your favorite atmosphere.
                </p>

                {/* Interactive Button Preview */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 relative">
                  <div className="h-11 px-6 rounded-md bg-content-primary text-white font-medium text-sm flex items-center gap-2 shadow-sm">
                    <span>YES, ABSOLUTELY 🪩</span>
                  </div>

                  <div className="h-11 px-5 rounded-md bg-canvas-subtle text-content-secondary border border-border-default text-sm flex items-center font-medium opacity-80 cursor-not-allowed">
                    <span>CAN&apos;T MAKE IT</span>
                  </div>
                </div>

                {/* Physics Note Annotation */}
                <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 font-mono text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>DODGE PHYSICS: FRAMER MOTION SPRING VECTOR [60px THRESHOLD]</span>
                </div>
              </div>

              {/* Bottom Telemetry */}
              <div className="px-4 py-2.5 bg-canvas-subtle border-t border-border-hairline flex items-center justify-between text-[11px] font-mono text-content-tertiary">
                <span>ZERO-AUTH SLUG GENERATION</span>
                <span>SUPABASE RLS SECURED</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
