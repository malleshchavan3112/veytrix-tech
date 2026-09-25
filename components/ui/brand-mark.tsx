import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

export interface BrandMarkProps {
  className?: string;
  showWordmark?: boolean;
  size?: 'sm' | 'md' | 'lg';
  priority?: boolean;
  inverted?: boolean;
}

export function BrandMark({
  className,
  showWordmark = true,
  size = 'md',
  priority = false,
  inverted = false,
}: BrandMarkProps) {
  // Height definitions for exact aspect ratio preservation
  // Logo aspect ratio: 1024 x 256 (4:1)
  // Icon aspect ratio: 208 x 158 (~1.31:1)
  const dimensions = {
    sm: showWordmark ? { width: 120, height: 30 } : { width: 32, height: 24 },
    md: showWordmark ? { width: 148, height: 37 } : { width: 40, height: 30 },
    lg: showWordmark ? { width: 180, height: 45 } : { width: 48, height: 36 },
  }[size];

  return (
    <Link
      href="/"
      className={cn(
        'inline-flex items-center text-content-primary focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-4 rounded group select-none transition-transform hover:opacity-95',
        className
      )}
      aria-label="Veytrix Tech — Return to homepage"
    >
      {showWordmark ? (
        <span className={cn('relative inline-block', inverted && 'p-1.5 rounded bg-white/95 shadow-sm')}>
          <Image
            src="/brand/veytrix-logo.png"
            alt="Veytrix Tech"
            width={dimensions.width}
            height={dimensions.height}
            priority={priority}
            className="h-auto w-auto object-contain transition-transform group-hover:scale-[1.02]"
          />
        </span>
      ) : (
        <Image
          src="/brand/veytrix-icon.png"
          alt="Veytrix Icon"
          width={dimensions.width}
          height={dimensions.height}
          priority={priority}
          className="h-auto w-auto object-contain transition-transform group-hover:scale-105"
        />
      )}
    </Link>
  );
}
