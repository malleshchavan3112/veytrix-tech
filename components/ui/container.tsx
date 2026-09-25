import React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'ultra' | 'std' | 'prose' | 'form';
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  size = 'std',
  as: Component = 'div',
  ...props
}: ContainerProps) {
  const sizeClasses = {
    ultra: 'max-w-ultra',
    std: 'max-w-std',
    prose: 'max-w-prose',
    form: 'max-w-form',
  };

  return (
    <Component
      className={cn('w-full mx-auto px-4 sm:px-6 lg:px-8', sizeClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
