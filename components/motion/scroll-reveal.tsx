'use client';

import React from 'react';
import { useScrollReveal } from '@/lib/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils/cn';

export interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: 0 | 1 | 2 | 3 | 4;
  threshold?: number;
  rootMargin?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'span';
}

const STAGGER_DELAYS = {
  0: 'delay-0',
  1: 'delay-75 sm:delay-[80ms]',
  2: 'delay-150 sm:delay-[160ms]',
  3: 'delay-200 sm:delay-[240ms]',
  4: 'delay-300 sm:delay-[320ms]',
} as const;

export function ScrollReveal({
  children,
  className,
  stagger = 0,
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  as: Component = 'div',
}: ScrollRevealProps) {
  const { ref, isRevealed } = useScrollReveal({ threshold, rootMargin });

  return (
    <Component
      ref={ref as any}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isRevealed
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-[0.985] pointer-events-none',
        STAGGER_DELAYS[stagger],
        className
      )}
    >
      {children}
    </Component>
  );
}
