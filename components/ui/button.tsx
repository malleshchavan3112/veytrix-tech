import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'lg' | 'sm';
  href?: string;
  isExternal?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      href,
      isExternal,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-md focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

    const variants = {
      primary:
        'bg-content-primary text-white hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 shadow-sm',
      secondary:
        'bg-canvas-subtle text-content-primary border border-border-hairline hover:bg-slate-200/80 active:bg-slate-200',
      ghost:
        'bg-transparent text-content-secondary border border-border-hairline hover:text-content-primary hover:bg-canvas-subtle',
      link: 'bg-transparent text-accent-blue hover:text-accent-hover hover:underline p-0 h-auto',
    };

    const sizes = {
      default: 'h-11 px-5 text-sm min-h-[44px]',
      lg: 'h-12 px-7 text-base min-h-[48px]',
      sm: 'h-9 px-3.5 text-xs min-h-[36px]',
    };

    const combinedClasses = cn(
      baseStyles,
      variants[variant],
      variant !== 'link' && sizes[size],
      className
    );

    if (href) {
      if (isExternal || href.startsWith('http') || href.startsWith('mailto:')) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} disabled={disabled} className={combinedClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
