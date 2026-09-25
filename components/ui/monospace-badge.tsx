import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface MonospaceBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'accent' | 'success' | 'dark';
}

export function MonospaceBadge({
  children,
  className,
  variant = 'neutral',
  ...props
}: MonospaceBadgeProps) {
  const variants = {
    neutral: 'bg-canvas-subtle text-content-secondary border-border-hairline',
    accent: 'bg-accent-subtle text-accent-blue border-blue-200/60',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    dark: 'bg-slate-800 text-slate-300 border-slate-700',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs font-medium border leading-none tracking-tight select-none',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
