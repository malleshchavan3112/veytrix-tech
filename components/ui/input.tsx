import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full h-12 px-4 rounded-md border bg-white text-content-primary placeholder:text-content-muted text-sm transition-all duration-150',
          'focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue',
          error
            ? 'border-status-error text-status-error focus:ring-status-error/20 focus:border-status-error'
            : 'border-border-default hover:border-slate-400',
          className
        )}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
