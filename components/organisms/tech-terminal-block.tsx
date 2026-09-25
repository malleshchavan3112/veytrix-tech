import React from 'react';
import { cn } from '@/lib/utils/cn';

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
  return (
    <div
      className={cn(
        'relative w-full rounded-xl bg-[#090D16] border border-slate-800 overflow-hidden shadow-2xl text-left select-none group',
        className
      )}
    >
      {/* Subtle top cyan line highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-veytrix-blue via-veytrix-cyan to-veytrix-teal opacity-80" />

      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-300 font-semibold tracking-wide">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan animate-pulse" />
          <span>TypeScript 5.x · Strict</span>
        </div>
      </div>

      {/* Code Area with Syntax Accents & Blinking Cursor */}
      <div className="p-5 sm:p-7 overflow-x-auto bg-[#070B14]">
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
      <div className="px-4 py-2 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span className="text-emerald-400">STATUS: INVARIANTS SATISFIED</span>
        <span>SECURITY LEVEL: ZERO-TRUST</span>
      </div>
    </div>
  );
}
