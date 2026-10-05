'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';

export interface TechTerminalBlockProps {
  title?: string;
  codeSnippet?: string;
  className?: string;
}

export function TechTerminalBlock({
  title = 'PRODUCTION ENGINE CONTRACT // TYPE-SAFE INVARIANTS',
  codeSnippet,
  className,
}: TechTerminalBlockProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={cn(
        'relative w-full rounded-2xl bg-[#090D16] border border-slate-800 overflow-hidden shadow-2xl text-left select-none group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isRevealed
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-6 scale-[0.98]',
        className
      )}
    >
      {/* Subtle top cyan line highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-veytrix-blue via-veytrix-cyan to-veytrix-teal opacity-90" />

      {/* Terminal Titlebar with staged fade */}
      <div
        className={cn(
          'flex items-center justify-between px-5 py-3.5 bg-slate-950/90 border-b border-slate-800/80 transition-all duration-500 delay-100',
          isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        )}
      >
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-300 font-semibold tracking-wide">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span className="w-2 h-2 rounded-full bg-veytrix-cyan animate-dot-breathe" />
          <span>TypeScript 5.x · Strict</span>
        </div>
      </div>

      {/* Code Area with Syntax Accents & Staged Entrance */}
      <div
        className={cn(
          'p-5 sm:p-7 overflow-x-auto bg-[#070B14] transition-all duration-700 delay-200',
          isRevealed ? 'opacity-100' : 'opacity-0'
        )}
      >
        <pre className="font-mono text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
          <code>
            {codeSnippet ? (
              codeSnippet
            ) : (
              <>
                <span className="text-slate-500">// Core architectural invariant contract enforced across client &amp; edge</span>{'\n'}
                <span className="text-veytrix-cyan">export interface</span> <span className="text-yellow-400 font-semibold">ProductionEngineContract</span> {'{\n'}
                {'  '}<span className="text-veytrix-cyan">readonly</span> domainId: <span className="text-emerald-400">string</span>;{'\n'}
                {'  '}<span className="text-veytrix-cyan">readonly</span> isolationTier: <span className="text-amber-300">&apos;Zero-Auth&apos;</span> | <span className="text-amber-300">&apos;Role-Guarded&apos;</span> | <span className="text-amber-300">&apos;Enterprise-RLS&apos;</span>;{'\n'}
                {'  '}<span className="text-veytrix-cyan">readonly</span> telemetry: {'{\n'}
                {'    '}<span className="text-veytrix-cyan">readonly</span> automatedSuitePassRate: <span className="text-emerald-400">1.0</span>; <span className="text-slate-500">// 100% Deterministic E2E</span>{'\n'}
                {'    '}<span className="text-veytrix-cyan">readonly</span> piiExposureDetected: <span className="text-emerald-400">0</span>;       <span className="text-slate-500">// Zero cross-user data leakage</span>{'\n'}
                {'    '}<span className="text-veytrix-cyan">readonly</span> spatialQueryBoundMs: <span className="text-emerald-400">number</span>;  <span className="text-slate-500">// Sub-second radius calculation</span>{'\n'}
                {'  }'};{'\n'}
                {'  '}<span className="text-blue-400">validatePayload</span>&lt;<span className="text-yellow-400">T</span>&gt;(input: <span className="text-emerald-400">unknown</span>, schema: <span className="text-yellow-400">ZodSchema</span>&lt;<span className="text-yellow-400">T</span>&gt;): <span className="text-yellow-400">Result</span>&lt;<span className="text-yellow-400">T</span>, <span className="text-red-400">ValidationError</span>&gt;;{'\n'}
                {'}'}
                <span className="inline-block w-2 h-4 bg-veytrix-cyan ml-1 animate-blink align-middle" />
              </>
            )}
          </code>
        </pre>
      </div>

      {/* Bottom Terminal Footer Status Bar */}
      <div
        className={cn(
          'px-5 py-2.5 bg-slate-950/95 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 transition-all duration-500 delay-300',
          isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        )}
      >
        <span className="text-emerald-400 font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>STATUS: INVARIANTS SATISFIED</span>
        </span>
        <span className="text-slate-500">SECURITY LEVEL: ZERO-TRUST</span>
      </div>
    </div>
  );
}
