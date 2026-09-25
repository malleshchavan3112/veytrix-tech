'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils/cn';

export interface StudioTriadArtifactProps {
  className?: string;
}

export function StudioTriadArtifact({ className }: StudioTriadArtifactProps) {
  const [activeNode, setActiveNode] = useState<'design' | 'tech' | 'product' | 'nexus' | null>(null);

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
        'relative w-full max-w-[580px] rounded-xl border border-border-hairline bg-canvas-elevated/90 p-6 sm:p-8 backdrop-blur-md select-none shadow-card-hover transition-all duration-300 hover:border-border-default group',
        className
      )}
    >
      {/* Ambient background soft glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-veytrix-blue/10 via-veytrix-cyan/15 to-veytrix-teal/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity -z-10" />

      {/* Top Telemetry Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-border-hairline text-xs font-mono text-content-tertiary">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-veytrix-cyan opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-veytrix-cyan" />
          </span>
          <span className="text-content-primary font-semibold tracking-tight">VTX-CORE // 01</span>
          <span className="text-content-muted">·</span>
          <span className="text-[10px] text-veytrix-blue font-medium hidden xs:inline">SYSTEM // OPERATIONAL</span>
        </div>
        <div className="flex items-center gap-2 text-[11px]">
          <span className="hidden sm:inline text-content-tertiary">BUILD MODE // ACTIVE</span>
          <span className="text-veytrix-teal bg-teal-50 px-2 py-0.5 rounded border border-teal-200/60 font-medium">
            SIGNAL // STABLE
          </span>
        </div>
      </div>

      {/* SVG Geometric Triad Nexus Schematic */}
      <div className="relative py-6 sm:py-8 flex items-center justify-center">
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

          {/* Coordinate Grid & Geometric Orbit Lines */}
          <line x1="20" y1="180" x2="400" y2="180" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <line x1="210" y1="20" x2="210" y2="340" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="210" cy="180" r="110" stroke="#E2E8F0" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="210" cy="180" r="145" stroke="rgba(6, 182, 212, 0.2)" strokeWidth="0.8" />

          {/* Primary Triangular Convergence Polygon */}
          <polygon
            points="210,50 350,290 70,290"
            fill="url(#veytrixTriadGrad)"
            fillOpacity="0.04"
            stroke="url(#veytrixTriadGrad)"
            strokeWidth="1.8"
            className="transition-all duration-300"
          />

          {/* Dynamic Light Paths from Vertices to Center Nexus (210, 210) */}
          <line
            x1="210"
            y1="50"
            x2="210"
            y2="210"
            stroke={activeNode === 'design' ? '#2563EB' : 'url(#glowRay)'}
            strokeWidth={activeNode === 'design' ? '2.5' : '1.5'}
            strokeDasharray="4 4"
            className="animate-line-flow transition-all"
          />
          <line
            x1="350"
            y1="290"
            x2="210"
            y2="210"
            stroke={activeNode === 'tech' ? '#06B6D4' : 'url(#glowRay)'}
            strokeWidth={activeNode === 'tech' ? '2.5' : '1.5'}
            strokeDasharray="4 4"
            className="animate-line-flow transition-all"
          />
          <line
            x1="70"
            y1="290"
            x2="210"
            y2="210"
            stroke={activeNode === 'product' ? '#14B8A6' : 'url(#glowRay)'}
            strokeWidth={activeNode === 'product' ? '2.5' : '1.5'}
            strokeDasharray="4 4"
            className="animate-line-flow transition-all"
          />

          {/* Center Nexus Hub (Interactive) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
            onMouseEnter={() => setActiveNode('nexus')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="210"
              cy="210"
              r="26"
              fill="#FFFFFF"
              stroke="#071A52"
              strokeWidth="2"
              filter="url(#softGlow)"
            />
            {/* Breathing pulse ring */}
            <circle
              cx="210"
              cy="210"
              r="20"
              fill="rgba(6, 182, 212, 0.08)"
              stroke="#06B6D4"
              strokeWidth="1.2"
              className="animate-pulse-subtle"
            />
            <circle cx="210" cy="210" r="7" fill="#2563EB" />
            <text
              x="210"
              y="248"
              textAnchor="middle"
              fill="#071A52"
              fontSize="9"
              fontFamily="monospace"
              fontWeight="700"
              letterSpacing="0.08em"
            >
              NEXUS
            </text>
          </g>

          {/* Node 1: DESIGN (Top) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
            onMouseEnter={() => setActiveNode('design')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="210"
              cy="50"
              r="20"
              fill={activeNode === 'design' ? '#2563EB' : '#FFFFFF'}
              stroke="#2563EB"
              strokeWidth="2"
              className="transition-colors duration-200"
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
              fill="#0F172A"
              fontSize="11.5"
              fontFamily="sans-serif"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              DESIGN
            </text>
            <text x="210" y="34" textAnchor="middle" fill="#64748B" fontSize="8.5" fontFamily="monospace">
              CRAFT · TOKENS · AESTHETICS
            </text>
          </g>

          {/* Node 2: TECHNOLOGY (Bottom Right) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
            onMouseEnter={() => setActiveNode('tech')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="350"
              cy="290"
              r="20"
              fill={activeNode === 'tech' ? '#06B6D4' : '#FFFFFF'}
              stroke="#06B6D4"
              strokeWidth="2"
              className="transition-colors duration-200"
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
              fill="#0F172A"
              fontSize="11.5"
              fontFamily="sans-serif"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              TECHNOLOGY
            </text>
            <text x="350" y="336" textAnchor="middle" fill="#64748B" fontSize="8.5" fontFamily="monospace">
              TYPE-SAFE · RESILIENT · FAST
            </text>
          </g>

          {/* Node 3: PRODUCT THINKING (Bottom Left) */}
          <g
            className="cursor-pointer transition-transform duration-200 hover:scale-110"
            onMouseEnter={() => setActiveNode('product')}
            onMouseLeave={() => setActiveNode(null)}
          >
            <circle
              cx="70"
              cy="290"
              r="20"
              fill={activeNode === 'product' ? '#14B8A6' : '#FFFFFF'}
              stroke="#14B8A6"
              strokeWidth="2"
              className="transition-colors duration-200"
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
              fill="#0F172A"
              fontSize="11.5"
              fontFamily="sans-serif"
              fontWeight="700"
              letterSpacing="0.04em"
            >
              PRODUCT THINKING
            </text>
            <text x="70" y="336" textAnchor="middle" fill="#64748B" fontSize="8.5" fontFamily="monospace">
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
              <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan animate-pulse" />
              <span>HOVER NODES TO INSPECT DISCIPLINE</span>
            </div>
            <span className="text-content-secondary font-medium">DISCIPLINED DIGITAL ENGINEERING</span>
          </div>
        )}
      </div>
    </div>
  );
}
