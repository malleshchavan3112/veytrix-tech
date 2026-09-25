import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
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
  liveUrl?: string;
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
  liveUrl,
  reverse = false,
}: ProjectShowcaseSpreadProps) {
  const isAahar = slug === 'aahar-nearby';
  const isDateInvite = slug === 'dateinvite';

  return (
    <div className="w-full py-16 sm:py-24 border-b border-border-hairline last:border-0">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* Product Visual Viewport Column (7 Cols) — Product First */}
        <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          {isAahar ? (
            /* Real Mobile Product Showcase for Aahar Nearby */
            <div className="relative mx-auto rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 p-6 sm:p-8 border border-slate-800 shadow-2xl overflow-hidden group">
              {/* Top Atmospheric Glow */}
              <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-slate-200">AAHAR NEARBY // PRODUCTION</span>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60">
                  FLUTTER 3.x · CLEAN ARCH
                </span>
              </div>

              {/* Real Project Screens Composition */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center">
                {/* Main Discovery Feed Screen */}
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-700/80 bg-slate-900 transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/projects/aahar-nearby/discovery_feed.png"
                    alt="Aahar Nearby Live Discovery Feed"
                    width={320}
                    height={640}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-slate-300 flex items-center justify-between border border-slate-800">
                    <span>DISCOVERY FEED</span>
                    <span className="text-emerald-400">LIVE</span>
                  </div>
                </div>

                {/* Second Screen: Today's Menu & Details */}
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-700/80 bg-slate-900 transition-transform duration-300 group-hover:scale-[1.02] delay-75">
                  <Image
                    src="/projects/aahar-nearby/menu_details.png"
                    alt="Aahar Nearby Live Menu Details"
                    width={320}
                    height={640}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-md px-2 py-1 rounded text-[10px] font-mono text-slate-300 flex items-center justify-between border border-slate-800">
                    <span>HOTEL MENU // SPECIALS</span>
                    <span className="text-emerald-400">SYNCED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Strip */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="text-emerald-400">SUB-SECOND SPATIAL DISCOVERY</span>
                <span>ZERO PII EXPOSURE</span>
              </div>
            </div>
          ) : (
            /* Real Interactive Browser Preview for DateInvite */
            <div className="relative mx-auto w-full rounded-2xl bg-canvas-elevated border border-border-hairline shadow-2xl overflow-hidden group">
              {/* Browser Chrome Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-canvas-subtle border-b border-border-hairline">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-[11px] text-content-secondary bg-white px-3 py-0.5 rounded border border-border-hairline">
                    https://www.dateinvite.me
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    LIVE PRODUCTION // VERIFIED
                  </span>
                </div>
              </div>

              {/* Real Project Screen Content */}
              <div className="relative bg-slate-50 p-2 sm:p-4 overflow-hidden">
                <div className="relative rounded-lg overflow-hidden border border-border-hairline shadow-md transition-transform duration-300 group-hover:scale-[1.01]">
                  <Image
                    src="/projects/dateinvite/interactive_card.png"
                    alt="DateInvite Interactive Proposal Card Preview"
                    width={960}
                    height={540}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Bottom Telemetry Strip */}
              <div className="px-5 py-3 bg-canvas-subtle/80 border-t border-border-hairline flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-content-tertiary">
                <span className="text-veytrix-blue font-medium">TWO-SIDED RECIPROCAL ARCHITECTURE</span>
                <span>DODGE PHYSICS SANDBOX</span>
              </div>
            </div>
          )}
        </div>

        {/* Editorial Text Column (5 Cols) */}
        <div className={`lg:col-span-5 flex flex-col items-start ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="flex items-center gap-2 font-mono text-xs text-content-tertiary mb-3">
            <span className="font-bold text-veytrix-blue">CASE STUDY // {number}</span>
            <span>·</span>
            <span className="uppercase text-content-secondary font-semibold">{category}</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
            {title}
          </h3>
          <p className="mt-1 font-mono text-xs text-veytrix-electric font-medium">
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
          <div className="mt-6 p-4 rounded-lg bg-veytrix-surface/60 border border-veytrix-cyan/20 w-full">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-wider text-veytrix-navy font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-veytrix-teal" />
                <span>REPOSITORY BENCHMARK</span>
              </span>
              <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium">
                VERIFIED
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-mono text-xl font-bold text-veytrix-navy">
                {benchmarkMetric}
              </span>
              <span className="text-xs text-content-secondary">
                {benchmarkLabel}
              </span>
            </div>
          </div>

          {/* Action Button Cluster with Verified Live Link */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {liveUrl ? (
              <>
                <Button
                  variant="primary"
                  size="default"
                  href={`/work/${slug}`}
                  className="shadow-btn-primary hover:shadow-btn-hover group"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Button>

                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-veytrix-cyan/40 bg-white text-veytrix-navy hover:bg-veytrix-surface hover:border-veytrix-cyan text-sm font-medium transition-all shadow-sm group min-h-[44px]"
                >
                  <span>View Live Product</span>
                  <ExternalLink className="w-3.5 h-3.5 text-veytrix-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </>
            ) : (
              <Button
                variant="primary"
                size="default"
                href={`/work/${slug}`}
                className="shadow-btn-primary hover:shadow-btn-hover group"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
