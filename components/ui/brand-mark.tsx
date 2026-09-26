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
  // Scaled down by ~16.2% from original 148x37 for compact, refined editorial presence
  const dimensions = {
    sm: showWordmark ? { width: 100, height: 25 } : { width: 26, height: 20 },
    md: showWordmark ? { width: 124, height: 31 } : { width: 34, height: 26 },
    lg: showWordmark ? { width: 152, height: 38 } : { width: 40, height: 30 },
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
        <span className={cn('relative inline-flex items-center max-w-[112px] sm:max-w-[124px]', inverted && 'p-1.5 rounded bg-white/95 shadow-sm')}>
          <Image
            src="/brand/veytrix-logo.png"
            alt="Veytrix Tech"
            width={dimensions.width}
            height={dimensions.height}
            priority={priority}
            className="h-auto w-auto max-h-[31px] object-contain transition-transform group-hover:scale-[1.02]"
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
