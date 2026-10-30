import React, { forwardRef, useId } from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id: customId, disabled, rows = 4, ...props }, ref) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const errorId = `${id}-error`;
    const helperId = `${id}-helper`;

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-theme-foreground select-none"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <textarea
          id={id}
          ref={ref}
          rows={rows}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={cn(
            'w-full px-3.5 py-2 text-sm text-theme-foreground bg-theme-background border rounded-button transition-colors duration-200 outline-none resize-y',
            'placeholder:text-theme-muted-foreground/60 focus:ring-2 focus:ring-theme-primary/20 focus:border-theme-primary',
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-theme-border',
            disabled && 'bg-theme-muted opacity-60 cursor-not-allowed',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} className="text-xs text-red-500 font-medium" role="alert">
            {error}
          </p>
        )}
        {!error && helperText && (
          <p id={helperId} className="text-xs text-theme-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
