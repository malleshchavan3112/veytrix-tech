import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface SkipLinkProps {
  targetId?: string;
  label?: string;
  className?: string;
}

export function SkipLink({
  targetId = 'main-content',
  label = 'Skip to main content',
  className,
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        'sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-content-primary focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-accent-blue font-medium text-sm transition-all',
        className
      )}
    >
      {label}
    </a>
  );
}
