import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          'w-full p-4 rounded-md border bg-white text-content-primary placeholder:text-content-muted text-sm transition-all duration-150 resize-y min-h-[120px]',
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

Textarea.displayName = 'Textarea';
