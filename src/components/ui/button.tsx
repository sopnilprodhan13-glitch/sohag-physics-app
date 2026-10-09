import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-brand-default text-white hover:bg-brand-dark shadow-soft",
      secondary: "bg-brand-light text-brand-dark hover:bg-[#d1ecd8]",
      outline: "border-2 border-surface-muted bg-transparent hover:border-brand-default hover:text-brand-dark",
      ghost: "hover:bg-surface-muted text-gray-700 hover:text-brand-dark",
      danger: "bg-red-50 text-red-600 hover:bg-red-100",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base", // 44px touch target minimum
      lg: "h-14 px-8 text-lg rounded-2xl",
      icon: "h-11 w-11",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
