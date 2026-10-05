'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export interface UsePointerParallaxOptions {
  maxDisplacement?: number; // max pixels (e.g. 6 to 10px)
  damping?: number; // interpolation factor (0.05 to 0.15)
  disabled?: boolean;
}

export function usePointerParallax<T extends HTMLElement = HTMLDivElement>({
  maxDisplacement = 8,
  damping = 0.08,
  disabled = false,
}: UsePointerParallaxOptions = {}) {
  const containerRef = useRef<T | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);

  const updatePosition = useCallback(() => {
    // Interpolate toward target
    const dx = targetRef.current.x - currentRef.current.x;
    const dy = targetRef.current.y - currentRef.current.y;

    currentRef.current.x += dx * damping;
    currentRef.current.y += dy * damping;

    // Only update state if change is perceptible
    if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
      setOffset({
        x: Math.round(currentRef.current.x * 100) / 100,
        y: Math.round(currentRef.current.y * 100) / 100,
      });
      animFrameRef.current = requestAnimationFrame(updatePosition);
    } else {
      setOffset({
        x: targetRef.current.x,
        y: targetRef.current.y,
      });
      animFrameRef.current = null;
    }
  }, [damping]);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    // Check pointer capabilities (desktop only, no touch devices)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) return;

    const element = containerRef.current;
    if (!element) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates (-1 to 1)
      const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
      const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

      targetRef.current = {
        x: normX * maxDisplacement,
        y: normY * maxDisplacement,
      };

      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(updatePosition);
      }
    };

    const handlePointerLeave = () => {
      targetRef.current = { x: 0, y: 0 };
      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(updatePosition);
      }
    };

    element.addEventListener('pointermove', handlePointerMove, { passive: true });
    element.addEventListener('pointerleave', handlePointerLeave, { passive: true });

    return () => {
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerleave', handlePointerLeave);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [disabled, maxDisplacement, updatePosition]);

  return { containerRef, offset };
}
