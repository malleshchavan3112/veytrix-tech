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
  const defaultCode = `// Core architectural invariant contract enforced across client & edge
export interface ProductionEngineContract {
  readonly domainId: string;
  readonly isolationTier: 'Zero-Auth' | 'Role-Guarded' | 'Enterprise-RLS';
  readonly telemetry: {
    readonly automatedSuitePassRate: 1.0; // 100% Deterministic E2E
    readonly piiExposureDetected: 0;       // Zero cross-user data leakage
    readonly spatialQueryBoundMs: number;  // Sub-second radius calculation
  };
  validatePayload<T>(input: unknown, schema: ZodSchema<T>): Result<T, ValidationError>;
}`;

  return (
    <div
      className={cn(
        'w-full rounded-lg bg-dark-base border border-dark-border overflow-hidden shadow-xl text-left select-none',
        className
      )}
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-dark-border">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 font-mono text-xs text-slate-400 font-medium tracking-wide">
            {title}
          </span>
        </div>
        <div className="font-mono text-[11px] text-slate-500">
          TypeScript 5.x · Strict
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 sm:p-6 overflow-x-auto bg-[#0a0f1d]">
        <pre className="font-mono text-xs sm:text-sm text-dark-text leading-relaxed font-normal">
          <code>{codeSnippet || defaultCode}</code>
        </pre>
      </div>
    </div>
  );
}
