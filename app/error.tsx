'use client';

import React, { useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Application Runtime Error]:', error);
  }, [error]);

  return (
    <div className="w-full py-28 sm:py-36 flex items-center justify-center">
      <Container size="prose" className="text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-status-error px-2.5 py-1 rounded bg-red-50 border border-red-200">
          500 // APPLICATION RUNTIME ERROR
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight text-content-primary">
          System Interruption
        </h1>

        <p className="mt-4 text-base text-content-secondary max-w-md mx-auto leading-relaxed">
          An unexpected client error occurred while executing the view layer.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="primary" size="default" onClick={() => reset()}>
            Attempt Reload
          </Button>
          <Button variant="secondary" size="default" href="/">
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
