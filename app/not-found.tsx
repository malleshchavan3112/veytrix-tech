import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="w-full py-28 sm:py-36 flex items-center justify-center">
      <Container size="prose" className="text-center">
        <span className="font-mono text-xs uppercase tracking-wider text-accent-blue px-2.5 py-1 rounded bg-canvas-subtle border border-border-hairline">
          404 // ROUTE NOT FOUND
        </span>

        <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight text-content-primary">
          Page Does Not Exist
        </h1>

        <p className="mt-4 text-base text-content-secondary max-w-md mx-auto leading-relaxed">
          The requested URL path could not be resolved within the studio route registry.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="primary" size="default" href="/">
            Return to Homepage
          </Button>
          <Button variant="secondary" size="default" href="/#work">
            Explore Work
          </Button>
        </div>
      </Container>
    </div>
  );
}
