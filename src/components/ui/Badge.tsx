import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'outline' | 'success';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  size = 'md',
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-theme-muted text-theme-foreground border border-theme-border',
    primary: 'bg-theme-primary/10 text-theme-primary border border-theme-primary/20',
    secondary: 'bg-theme-secondary/10 text-theme-secondary border border-theme-secondary/20',
    accent: 'bg-theme-accent/15 text-theme-accent border border-theme-accent/30',
    outline: 'border border-theme-border text-theme-foreground bg-transparent',
    success: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 rounded-full font-medium',
    md: 'text-xs px-2.5 py-1 rounded-full font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 leading-none transition-colors select-none tracking-wide',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
