import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Layers,
} from 'lucide-react';
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

  return (
    <div className="w-full py-16 sm:py-24 border-b border-border-hairline last:border-0 group/card">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        {/* =================================================================== */}
        {/* Product Visual Viewport Column (7 Cols) — Product First             */}
        {/* =================================================================== */}
        <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          {isAahar ? (
            /* =============================================================== */
            /* Aahar Nearby: Elevated Dual-Device Connected Ecosystem Showcase   */
            /* =============================================================== */
            <div className="relative mx-auto rounded-3xl bg-[#0B1015] p-6 sm:p-8 border border-slate-800 shadow-2xl overflow-hidden group">
              {/* Top Ambient Emerald Glow */}
              <div className="absolute -top-24 -left-24 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs font-mono text-slate-400 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-slate-200">
                    AAHAR NEARBY // PRODUCTION SUITE
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/60 font-medium">
                  FLUTTER 3.x · CLEAN ARCH
                </span>
              </div>

              {/* Authentic Multi-Screen Layered Composition */}
              <div className="relative flex items-center justify-center py-4 px-2 min-h-[380px] sm:min-h-[440px]">
                {/* Secondary Background Device (Owner Dashboard - Rotated & Offset) */}
                <div
                  className="absolute right-4 sm:right-12 top-4 w-[200px] sm:w-[240px] aspect-[9/19.5] rounded-[34px] sm:rounded-[38px] bg-slate-950 p-2 sm:p-2.5 shadow-xl border border-slate-700/80 rotate-3 opacity-80 sm:opacity-85 transition-all duration-500 ease-out group-hover:rotate-6 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 pointer-events-none z-10"
                >
                  <div className="relative w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-900 border border-slate-800">
                    <Image
                      src="/projects/aahar-nearby/screen_owner_dashboard.png"
                      alt="Aahar Nearby Authentic Owner Dashboard Screen"
                      fill
                      sizes="(max-width: 768px) 200px, 240px"
                      className="object-cover object-top"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-slate-300 flex items-center justify-between border border-slate-800">
                      <span>OWNER APP</span>
                      <span className="text-emerald-400 font-semibold">SYNCED</span>
                    </div>
                  </div>
                </div>

                {/* Connecting Visual Bridge / Sync Line */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 z-15 pointer-events-none hidden sm:flex items-center justify-center">
                  <div className="px-3 py-1 rounded-full bg-slate-950/90 border border-emerald-500/50 shadow-xl text-[10px] font-mono font-semibold text-emerald-400 flex items-center gap-1.5 transition-all duration-300 group-hover:border-emerald-400 group-hover:scale-105">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>GEOFENCE SYNC BRIDGE</span>
                  </div>
                </div>

                {/* Primary Foreground Device (Employee Discovery Feed) */}
                <div
                  className="relative z-20 w-[220px] sm:w-[260px] aspect-[9/19.5] rounded-[38px] sm:rounded-[42px] bg-slate-950 p-2.5 sm:p-3 shadow-2xl border-2 border-slate-700 ring-2 ring-emerald-500/30 transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:-translate-x-1 group-hover:shadow-emerald-950/40"
                >
                  {/* Speaker Notch */}
                  <div className="w-16 h-3 bg-slate-900 mx-auto rounded-full mb-1.5 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  </div>

                  <div className="relative w-full h-[calc(100%-16px)] rounded-[26px] sm:rounded-[30px] overflow-hidden bg-slate-900 border border-slate-800">
                    <Image
                      src="/projects/aahar-nearby/discovery_feed.png"
                      alt="Aahar Nearby Live Discovery Feed"
                      fill
                      sizes="(max-width: 768px) 220px, 260px"
                      priority
                      className="object-cover object-top"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-slate-950/90 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-slate-200 flex items-center justify-between border border-slate-800">
                      <span>EMPLOYEE DISCOVERY</span>
                      <span className="text-emerald-400 font-bold">280m · LIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Strip */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>DETERMINISTIC 500m WALKING RADIUS</span>
                </span>
                <span className="text-slate-500">SUB-SECOND LATENCY</span>
              </div>
            </div>
          ) : (
            /* =============================================================== */
            /* Real Interactive Browser Preview for DateInvite                 */
            /* =============================================================== */
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

        {/* =================================================================== */}
        {/* Editorial Text Column (5 Cols)                                      */}
        {/* =================================================================== */}
        <div
          className={`lg:col-span-5 flex flex-col items-start ${
            reverse ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div className="flex items-center gap-2 font-mono text-xs text-content-tertiary mb-3">
            <span className="font-bold text-veytrix-blue">SELECTED WORK // {number}</span>
            <span>·</span>
            <span className="uppercase text-content-secondary font-semibold">{category}</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-content-primary">
            {title}
          </h3>

          <p className="mt-1 font-mono text-xs text-veytrix-electric font-medium">
            {isAahar
              ? 'Hyperlocal Food Discovery & Dynamic Menu Intelligence'
              : tagline}
          </p>

          <p className="mt-4 text-sm sm:text-base text-content-secondary leading-relaxed">
            {isAahar
              ? 'A cross-platform product connecting nearby food discovery with dynamic merchant menu operations.'
              : description}
          </p>

          {/* Aahar Connected Product Line Strip (Owner -> Employee -> Discovery) */}
          {isAahar && (
            <div className="mt-5 w-full p-3 rounded-xl bg-slate-50 border border-slate-200/90">
              <div className="flex items-center justify-between font-mono text-[11px]">
                <span className="font-bold text-slate-800">OWNER</span>
                <span className="h-px flex-1 mx-3 bg-emerald-400/60 transition-all duration-300 group-hover/card:bg-emerald-500" />
                <span className="font-bold text-slate-800">EMPLOYEE</span>
                <span className="h-px flex-1 mx-3 bg-emerald-400/60 transition-all duration-300 group-hover/card:bg-emerald-500" />
                <span className="font-bold text-[#0D5C35]">DISCOVERY</span>
              </div>
            </div>
          )}

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

          {/* Action Button Cluster */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {isAahar ? (
              <>
                <Button
                  variant="primary"
                  size="default"
                  href={`/work/${slug}`}
                  className="shadow-btn-primary hover:shadow-btn-hover group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>

                <Button
                  variant="secondary"
                  size="default"
                  href={`/work/${slug}#product-journey`}
                  className="border-emerald-600/40 text-emerald-800 hover:bg-emerald-50/80 group/btn"
                >
                  <span>Explore Product Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-emerald-600 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </>
            ) : liveUrl ? (
              <>
                <Button
                  variant="primary"
                  size="default"
                  href={`/work/${slug}`}
                  className="shadow-btn-primary hover:shadow-btn-hover group/btn"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>

                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md border border-veytrix-cyan/40 bg-white text-veytrix-navy hover:bg-veytrix-surface hover:border-veytrix-cyan text-sm font-medium transition-all shadow-sm group/live min-h-[44px]"
                >
                  <span>View Live Product</span>
                  <ExternalLink className="w-3.5 h-3.5 text-veytrix-blue transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                </a>
              </>
            ) : (
              <Button
                variant="primary"
                size="default"
                href={`/work/${slug}`}
                className="shadow-btn-primary hover:shadow-btn-hover group/btn"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
