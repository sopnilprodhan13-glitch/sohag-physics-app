import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1.5">
        <input
          type={type}
          className={cn(
            "flex h-12 w-full rounded-xl border bg-surface-default px-4 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
            error ? "border-red-500 focus-visible:ring-red-500" : "border-gray-200",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-sm text-red-500 font-medium ml-1">{error}</span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
