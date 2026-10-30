import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';

    const variants = {
      primary:
        'bg-theme-primary text-white hover:bg-theme-primary-hover shadow-sm focus-visible:ring-theme-primary',
      secondary:
        'bg-theme-secondary text-white hover:bg-theme-secondary-hover shadow-sm focus-visible:ring-theme-secondary',
      outline:
        'border border-theme-border bg-transparent text-theme-foreground hover:bg-theme-muted hover:border-theme-muted-foreground/30 focus-visible:ring-theme-primary',
      ghost:
        'bg-transparent text-theme-foreground hover:bg-theme-muted focus-visible:ring-theme-primary',
      link:
        'bg-transparent text-theme-primary underline-offset-4 hover:underline p-0 h-auto focus-visible:ring-theme-primary',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5 rounded-button gap-1.5',
      md: 'text-sm px-4 py-2 rounded-button gap-2',
      lg: 'text-base px-6 py-3 rounded-button gap-2.5 font-semibold',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
