'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils/cn';

export interface StudioTriadArtifactProps {
  className?: string;
}

export function StudioTriadArtifact({ className }: StudioTriadArtifactProps) {
  const [activeNode, setActiveNode] = useState<'design' | 'tech' | 'product' | 'nexus' | null>(null);
  const [scrollParallax, setScrollParallax] = useState(0);

  // Subtle scroll-linked parallax response (max 4-6px, strictly clamped)
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          // Clamped strictly to a maximum of 6px
          const offset = Math.min(6, Math.max(0, currentY * 0.015));
          setScrollParallax(offset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nodeInfo = {
    design: {
      title: '01 // HIGH-CRAFT DESIGN',
      subtitle: 'Design Systems · Optical Rhythm · Fluid Typography',
      metric: 'WCAG 2.1 AA / 14.8:1 CONTRAST',
    },
    tech: {
      title: '02 // RESILIENT TECHNOLOGY',
      subtitle: 'Static Optimization · Strict Type Safety · Sub-Second Latency',
      metric: '990+ AUTOMATED TESTS PASS',
    },
    product: {
      title: '03 // PRODUCT THINKING',
      subtitle: 'Problem Space Clarity · Zero Bloat · Measured Conversion',
      metric: 'ZERO-AUTH RECIPROCAL TOPOLOGY',
    },
    nexus: {
      title: 'CORE NEXUS // VEYTRIX CONVERGENCE',
      subtitle: 'The Unified Synergy of Design, Engineering & Product Strategy',
      metric: 'VTX-CORE // 01 OPERATIONAL',
    },
  };

  const currentInfo = activeNode ? nodeInfo[activeNode] : null;

  return (
    <div
      className={cn(
        'relative w-full max-w-[580px] rounded-xl border border-border-hairline bg-canvas-elevated/90 p-4 sm:p-6 md:p-8 backdrop-blur-md select-none shadow-card-hover transition-all duration-300 hover:border-border-default group nexus-enter-container',
        className
      )}
    >
      {/* Ambient background soft glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-veytrix-blue/10 via-veytrix-cyan/15 to-veytrix-teal/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity -z-10" />

      {/* Top Telemetry Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-border-hairline text-xs font-mono text-content-tertiary nexus-enter-telemetry">
        <div className="flex items-center gap-2">
          {/* Subtle status dot with calm opacity pulse */}
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="inline-flex rounded-full h-2 w-2 bg-veytrix-cyan animate-dot-breathe" />
          </span>
          <span className="text-content-primary font-semibold tracking-tight">VTX-CORE // 01</span>
          <span className="text-content-muted hidden sm:inline">·</span>
          <span className="text-[10px] text-veytrix-blue font-medium hidden sm:inline">SYSTEM // OPERATIONAL</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="hidden sm:inline text-content-tertiary">BUILD MODE // ACTIVE</span>
          {/* Subtle breathing badge container with completely static text */}
          <span className="text-veytrix-teal bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 font-medium animate-badge-breathe">
            SIGNAL // STABLE
          </span>
        </div>
      </div>

      {/* SVG Geometric Triad Nexus Schematic with subtle scroll parallax */}
      <div
        className="relative py-4 sm:py-6 md:py-8 flex items-center justify-center transition-transform duration-100 ease-out"
        style={{ transform: scrollParallax ? `translateY(${scrollParallax}px)` : undefined }}
      >
        <svg
          viewBox="0 0 420 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[420px] h-auto drop-shadow-sm"
          aria-label="Veytrix Studio Triad Nexus: The Convergence of Design, Technology, and Product Thinking"
        >
          <defs>
            {/* Veytrix Signature Gradient */}
            <linearGradient id="veytrixTriadGrad" x1="70" y1="50" x2="350" y2="290" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="50%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#14B8A6" />
            </linearGradient>

            <linearGradient id="glowRay" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
            </linearGradient>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Coordinate Grid & Stationary Center Axes */}
          <line x1="20" y1="180" x2="400" y2="180" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <line x1="210" y1="20" x2="210" y2="340" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />

          {/* Outer Radar Rings (Controlled slow continuous orbital rotation) */}
          <g className="nexus-enter-rings">
            {/* Inner Radar Ring (24s clockwise) */}
            <g className="animate-nexus-ring-slow" style={{ transformOrigin: '210px 180px' }}>
              <circle cx="210" cy="180" r="110" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.65" />
              {/* Subtle orbital calibration ticks */}
              <circle cx="210" cy="70" r="1.5" fill="#06B6D4" opacity="0.5" />
              <circle cx="210" cy="290" r="1.5" fill="#06B6D4" opacity="0.5" />
              <circle cx="100" cy="180" r="1.5" fill="#06B6D4" opacity="0.5" />
              <circle cx="320" cy="180" r="1.5" fill="#06B6D4" opacity="0.5" />
            </g>

            {/* Outer Radar Ring (32s counter-clockwise) */}
            <g className="animate-nexus-ring-reverse" style={{ transformOrigin: '210px 180px' }}>
              <circle cx="210" cy="180" r="145" stroke="rgba(6, 182, 212, 0.28)" strokeWidth="0.8" strokeDasharray="6 10" opacity="0.55" />
              <circle cx="210" cy="180" r="145" stroke="#E2E8F0" strokeWidth="0.4" opacity="0.4" />
            </g>
          </g>

          {/* Primary Triangular Convergence Polygon & Circuit Lines */}
          <g className="nexus-enter-lines">
            <polygon
              points="210,50 350,290 70,290"
              fill="url(#veytrixTriadGrad)"
              fillOpacity="0.04"
              stroke="url(#veytrixTriadGrad)"
              strokeWidth="1.8"
              className="transition-all duration-300"
            />

            {/* Static subtle background path rails */}
            <line x1="210" y1="50" x2="210" y2="210" stroke="#E2E8F0" strokeWidth="1" opacity="0.6" />
            <line x1="210" y1="210" x2="350" y2="290" stroke="#E2E8F0" strokeWidth="1" opacity="0.6" />
            <line x1="350" y1="290" x2="70" y2="290" stroke="#E2E8F0" strokeWidth="1" opacity="0.6" />
            <line x1="70" y1="290" x2="210" y2="210" stroke="#E2E8F0" strokeWidth="1" opacity="0.6" />

            {/* Signal Flow Overlay Traces: DESIGN ↓ NEXUS ↓ TECHNOLOGY ↓ PRODUCT THINKING */}
            {/* Segment 1: DESIGN -> NEXUS */}
            <line
              x1="210"
              y1="50"
              x2="210"
              y2="210"
              stroke={activeNode === 'design' ? '#2563EB' : 'url(#glowRay)'}
              strokeWidth={activeNode === 'design' ? '2.4' : '1.5'}
              strokeDasharray="6 20"
              opacity={activeNode === 'design' ? '1' : '0.65'}
              className="animate-signal-flow transition-all duration-200"
            />

            {/* Segment 2: NEXUS -> TECHNOLOGY */}
            <line
              x1="210"
              y1="210"
              x2="350"
              y2="290"
              stroke={activeNode === 'tech' ? '#06B6D4' : 'url(#glowRay)'}
              strokeWidth={activeNode === 'tech' ? '2.4' : '1.5'}
              strokeDasharray="6 20"
              opacity={activeNode === 'tech' ? '1' : '0.65'}
              className="animate-signal-flow transition-all duration-200"
            />

            {/* Segment 3: TECHNOLOGY -> PRODUCT THINKING */}
            <line
              x1="350"
              y1="290"
              x2="70"
              y2="290"
              stroke={activeNode === 'product' || activeNode === 'tech' ? '#06B6D4' : 'url(#glowRay)'}
              strokeWidth={activeNode === 'product' || activeNode === 'tech' ? '2.2' : '1.5'}
              strokeDasharray="6 20"
              opacity={activeNode === 'product' || activeNode === 'tech' ? '1' : '0.55'}
              className="animate-signal-flow transition-all duration-200"
            />

            {/* Segment 4: PRODUCT THINKING -> NEXUS */}
            <line
              x1="70"
              y1="290"
              x2="210"
              y2="210"
              stroke={activeNode === 'product' ? '#14B8A6' : 'url(#glowRay)'}
              strokeWidth={activeNode === 'product' ? '2.4' : '1.5'}
              strokeDasharray="6 20"
              opacity={activeNode === 'product' ? '1' : '0.65'}
              className="animate-signal-flow transition-all duration-200"
            />
          </g>

          {/* Center Nexus Hub (Active digital system breathing pulse) */}
          <g
            className="cursor-pointer group/nexus nexus-enter-center"
            role="button"
            tabIndex={0}
            aria-label="Core Nexus: The Convergence of Design, Technology, and Product Thinking"
            onMouseEnter={() => setActiveNode('nexus')}
            onMouseLeave={() => setActiveNode(null)}
            onFocus={() => setActiveNode('nexus')}
            onBlur={() => setActiveNode(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveNode(activeNode === 'nexus' ? null : 'nexus');
              }
            }}
            style={{ transformOrigin: '210px 210px' }}
          >
            {/* Outer breathing aura halo */}
            <circle
              cx="210"
              cy="210"
              r="26"
              fill="rgba(6, 182, 212, 0.06)"
              stroke="rgba(6, 182, 212, 0.25)"
              strokeWidth="1"
              className="animate-nexus-halo"
            />
            {/* Breathing core hub circle */}
            <circle
              cx="210"
              cy="210"
              r="22"
              fill="#FFFFFF"
              stroke={activeNode === 'nexus' ? '#2563EB' : '#071A52'}
              strokeWidth={activeNode === 'nexus' ? '2.5' : '1.8'}
              filter="url(#softGlow)"
              className="animate-nexus-breath transition-colors duration-200"
            />
            {/* Inner micro orbital ring */}
            <circle
              cx="210"
              cy="210"
              r="15"
              fill="rgba(37, 99, 235, 0.05)"
              stroke="#06B6D4"
              strokeWidth="1"
              strokeDasharray="2 3"
              className="animate-nexus-ring-slow"
            />
            {/* Solid central kernel */}
            <circle
              cx="210"
              cy="210"
              r="6.5"
              fill="#2563EB"
              className="transition-transform duration-200 group-hover/nexus:scale-125"
            />
            {/* Static typography label */}
            <text
              x="210"
              y="246"
              textAnchor="middle"
              fill={activeNode === 'nexus' ? '#2563EB' : '#071A52'}
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="0.08em"
              className="transition-colors duration-200"
            >
              NEXUS
            </text>
          </g>

          {/* Node 1: DESIGN (Top) — Staggered pulse 1 */}
          <g
            className={cn(
              'cursor-pointer transition-all duration-200 group/node1 nexus-enter-nodes',
              activeNode === 'design' ? 'scale-105' : 'animate-node-pulse-1'
            )}
            role="button"
            tabIndex={0}
            aria-label="Discipline 01: High-Craft Design"
            onMouseEnter={() => setActiveNode('design')}
            onMouseLeave={() => setActiveNode(null)}
            onFocus={() => setActiveNode('design')}
            onBlur={() => setActiveNode(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveNode(activeNode === 'design' ? null : 'design');
              }
            }}
            style={{
              transformOrigin: '210px 50px',
              opacity: activeNode && activeNode !== 'design' ? 0.8 : 1,
            }}
          >
            <circle
              cx="210"
              cy="50"
              r="20"
              fill={activeNode === 'design' ? '#2563EB' : '#FFFFFF'}
              stroke="#2563EB"
              strokeWidth={activeNode === 'design' ? '2.5' : '2'}
              className="transition-all duration-200 shadow-sm"
              filter={activeNode === 'design' ? 'url(#softGlow)' : undefined}
            />
            <text
              x="210"
              y="55"
              textAnchor="middle"
              fill={activeNode === 'design' ? '#FFFFFF' : '#2563EB'}
              fontSize="11"
              fontFamily="monospace"
              fontWeight="700"
            >
              01
            </text>
            <text
              x="210"
              y="22"
              textAnchor="middle"
              fill={activeNode === 'design' ? '#1D4ED8' : '#0F172A'}
              fontSize="11.5"
              fontFamily="sans-serif"
              fontWeight={activeNode === 'design' ? '800' : '700'}
              letterSpacing="0.04em"
              className="transition-colors duration-200"
            >
              DESIGN
            </text>
            <text
              x="210"
              y="34"
              textAnchor="middle"
              fill={activeNode === 'design' ? '#334155' : '#64748B'}
              fontSize="8.5"
              fontFamily="monospace"
              className="transition-colors duration-200"
            >
              CRAFT · TOKENS · AESTHETICS
            </text>
          </g>

          {/* Node 2: TECHNOLOGY (Bottom Right) — Staggered pulse 2 */}
          <g
            className={cn(
              'cursor-pointer transition-all duration-200 group/node2 nexus-enter-nodes',
              activeNode === 'tech' ? 'scale-105' : 'animate-node-pulse-2'
            )}
            role="button"
            tabIndex={0}
            aria-label="Discipline 02: Resilient Technology"
            onMouseEnter={() => setActiveNode('tech')}
            onMouseLeave={() => setActiveNode(null)}
            onFocus={() => setActiveNode('tech')}
            onBlur={() => setActiveNode(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveNode(activeNode === 'tech' ? null : 'tech');
              }
            }}
            style={{
              transformOrigin: '350px 290px',
              opacity: activeNode && activeNode !== 'tech' ? 0.8 : 1,
            }}
          >
            <circle
              cx="350"
              cy="290"
              r="20"
              fill={activeNode === 'tech' ? '#06B6D4' : '#FFFFFF'}
              stroke="#06B6D4"
              strokeWidth={activeNode === 'tech' ? '2.5' : '2'}
              className="transition-all duration-200"
              filter={activeNode === 'tech' ? 'url(#softGlow)' : undefined}
            />
            <text
              x="350"
              y="295"
              textAnchor="middle"
              fill={activeNode === 'tech' ? '#FFFFFF' : '#06B6D4'}
              fontSize="11"
              fontFamily="monospace"
              fontWeight="700"
            >
              02
            </text>
            <text
              x="350"
              y="324"
              textAnchor="middle"
              fill={activeNode === 'tech' ? '#0891B2' : '#0F172A'}
              fontSize="11.5"
              fontFamily="sans-serif"
              fontWeight={activeNode === 'tech' ? '800' : '700'}
              letterSpacing="0.04em"
              className="transition-colors duration-200"
            >
              TECHNOLOGY
            </text>
            <text
              x="350"
              y="336"
              textAnchor="middle"
              fill={activeNode === 'tech' ? '#334155' : '#64748B'}
              fontSize="8.5"
              fontFamily="monospace"
              className="transition-colors duration-200"
            >
              TYPE-SAFE · RESILIENT · FAST
            </text>
          </g>

          {/* Node 3: PRODUCT THINKING (Bottom Left) — Staggered pulse 3 */}
          <g
            className={cn(
              'cursor-pointer transition-all duration-200 group/node3 nexus-enter-nodes',
              activeNode === 'product' ? 'scale-105' : 'animate-node-pulse-3'
            )}
            role="button"
            tabIndex={0}
            aria-label="Discipline 03: Product Thinking"
            onMouseEnter={() => setActiveNode('product')}
            onMouseLeave={() => setActiveNode(null)}
            onFocus={() => setActiveNode('product')}
            onBlur={() => setActiveNode(null)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveNode(activeNode === 'product' ? null : 'product');
              }
            }}
            style={{
              transformOrigin: '70px 290px',
              opacity: activeNode && activeNode !== 'product' ? 0.8 : 1,
            }}
          >
            <circle
              cx="70"
              cy="290"
              r="20"
              fill={activeNode === 'product' ? '#14B8A6' : '#FFFFFF'}
              stroke="#14B8A6"
              strokeWidth={activeNode === 'product' ? '2.5' : '2'}
              className="transition-all duration-200"
              filter={activeNode === 'product' ? 'url(#softGlow)' : undefined}
            />
            <text
              x="70"
              y="295"
              textAnchor="middle"
              fill={activeNode === 'product' ? '#FFFFFF' : '#14B8A6'}
              fontSize="11"
              fontFamily="monospace"
              fontWeight="700"
            >
              03
            </text>
            <text
              x="70"
              y="324"
              textAnchor="middle"
              fill={activeNode === 'product' ? '#0D9488' : '#0F172A'}
              fontSize="11.5"
              fontFamily="sans-serif"
              fontWeight={activeNode === 'product' ? '800' : '700'}
              letterSpacing="0.04em"
              className="transition-colors duration-200"
            >
              PRODUCT THINKING
            </text>
            <text
              x="70"
              y="336"
              textAnchor="middle"
              fill={activeNode === 'product' ? '#334155' : '#64748B'}
              fontSize="8.5"
              fontFamily="monospace"
              className="transition-colors duration-200"
            >
              PROBLEM SPACE · UTILITY · SCALE
            </text>
          </g>
        </svg>
      </div>

      {/* Dynamic Interactive Node Inspection Strip */}
      <div className="min-h-[44px] pt-3 pb-1 border-t border-border-hairline flex flex-col justify-center transition-all duration-200">
        {currentInfo ? (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
            <span className="font-mono font-semibold text-veytrix-blue tracking-tight">
              {currentInfo.title}
            </span>
            <span className="font-mono text-[11px] text-content-tertiary">
              {currentInfo.metric}
            </span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-content-tertiary">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan animate-dot-breathe" />
              <span>HOVER NODES TO INSPECT DISCIPLINE</span>
            </div>
            <span className="text-content-secondary font-medium">DISCIPLINED DIGITAL ENGINEERING</span>
          </div>
        )}
      </div>
    </div>
  );
}
