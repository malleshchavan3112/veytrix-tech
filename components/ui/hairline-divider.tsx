import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface HairlineDividerProps extends React.HTMLAttributes<HTMLHRElement> {
  dark?: boolean;
}

export function HairlineDivider({ className, dark, ...props }: HairlineDividerProps) {
  return (
    <hr
      className={cn(
        'w-full border-0 h-px',
        dark ? 'bg-dark-border' : 'bg-border-hairline',
        className
      )}
      {...props}
    />
  );
}
