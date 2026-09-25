import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface StudioTriadArtifactProps {
  className?: string;
}

export function StudioTriadArtifact({ className }: StudioTriadArtifactProps) {
  return (
    <div
      className={cn(
        'relative w-full max-w-[560px] rounded-lg border border-border-hairline bg-canvas-subtle/60 p-6 sm:p-8 backdrop-blur-sm select-none',
        className
      )}
    >
      {/* Top Telemetry Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-border-hairline text-xs font-mono text-content-tertiary">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-content-primary font-medium">VTX-CORE // 01</span>
        </div>
        <div className="flex items-center gap-3 text-[11px]">
          <span className="hidden sm:inline text-slate-400">BUILD MODE // ACTIVE</span>
          <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 font-medium">
            SYS // OPERATIONAL
          </span>
        </div>
      </div>

      {/* SVG Geometric Triad Nexus Schematic */}
      <div className="relative py-6 sm:py-8 flex items-center justify-center">
        <svg
          viewBox="0 0 420 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-[400px] h-auto drop-shadow-sm"
          aria-label="Veytrix Studio Triad Nexus: The Convergence of Design, Technology, and Product Thinking"
        >
          {/* Subtle Background Coordinate Grid Lines */}
          <line x1="20" y1="180" x2="400" y2="180" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <line x1="210" y1="20" x2="210" y2="340" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="210" cy="180" r="110" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="210" cy="180" r="140" stroke="#E2E8F0" strokeWidth="0.8" opacity="0.5" />

          {/* Primary Architectural Triangle Vertices */}
          {/* Top Vertex (Design): (210, 50) */}
          {/* Bottom-Right Vertex (Technology): (350, 290) */}
          {/* Bottom-Left Vertex (Product Thinking): (70, 290) */}
          <polygon
            points="210,50 350,290 70,290"
            fill="rgba(59, 130, 246, 0.02)"
            stroke="#0F172A"
            strokeWidth="1.8"
          />

          {/* Inner Geometric Connector Rays to Center Kernel (210, 210) */}
          <line x1="210" y1="50" x2="210" y2="210" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="350" y1="290" x2="210" y2="210" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2" />
          <line x1="70" y1="290" x2="210" y2="210" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="2 2" />

          {/* Center Nexus Hub */}
          <circle cx="210" cy="210" r="24" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
          <circle cx="210" cy="210" r="6" fill="#3B82F6" />
          <text x="210" y="246" textAnchor="middle" fill="#0F172A" fontSize="9" fontFamily="monospace" fontWeight="600" letterSpacing="0.08em">
            NEXUS
          </text>

          {/* Node 1: DESIGN (Top) */}
          <circle cx="210" cy="50" r="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
          <text x="210" y="54" textAnchor="middle" fill="#0F172A" fontSize="10" fontFamily="sans-serif" fontWeight="700">
            01
          </text>
          <text x="210" y="24" textAnchor="middle" fill="#0F172A" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.04em">
            DESIGN
          </text>
          <text x="210" y="36" textAnchor="middle" fill="#64748B" fontSize="8.5" fontFamily="monospace">
            CRAFT · TOKENS · AESTHETICS
          </text>

          {/* Node 2: TECHNOLOGY (Bottom Right) */}
          <circle cx="350" cy="290" r="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
          <text x="350" y="294" textAnchor="middle" fill="#0F172A" fontSize="10" fontFamily="sans-serif" fontWeight="700">
            02
          </text>
          <text x="350" y="322" textAnchor="middle" fill="#0F172A" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.04em">
            TECHNOLOGY
          </text>
          <text x="350" y="334" textAnchor="middle" fill="#64748B" fontSize="8.5" fontFamily="monospace">
            TYPE-SAFE · RESILIENT · FAST
          </text>

          {/* Node 3: PRODUCT THINKING (Bottom Left) */}
          <circle cx="70" cy="290" r="18" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1.8" />
          <text x="70" y="294" textAnchor="middle" fill="#0F172A" fontSize="10" fontFamily="sans-serif" fontWeight="700">
            03
          </text>
          <text x="70" y="322" textAnchor="middle" fill="#0F172A" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="0.04em">
            PRODUCT THINKING
          </text>
          <text x="70" y="334" textAnchor="middle" fill="#64748B" fontSize="8.5" fontFamily="monospace">
            PROBLEM SPACE · UTILITY · SCALE
          </text>
        </svg>
      </div>

      {/* Bottom Telemetry Verification Strip */}
      <div className="pt-4 border-t border-border-hairline flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-content-tertiary">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
          <span>SIGNAL // STABLE</span>
        </div>
        <span className="text-content-secondary font-medium">DISCIPLINED DIGITAL ENGINEERING</span>
      </div>
    </div>
  );
}
