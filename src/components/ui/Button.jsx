import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'default', 
  asChild = false, 
  children,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-heading font-semibold rounded-md transition-all duration-base ease-default gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-accent-mint text-text-invert border border-accent-mint hover:bg-accent-mint-dim hover:border-accent-mint-dim hover:-translate-y-[1px] hover:shadow-mintMd active:translate-y-0 active:shadow-mintSm",
    ghost: "bg-transparent text-text-primary border border-border-default hover:bg-bg-elevated hover:border-border-emphasis",
    'ghost-mint': "bg-transparent text-accent-mint border border-border-mint hover:bg-accent-mint-pale hover:shadow-mintSm",
    text: "bg-transparent text-text-primary hover:text-accent-mint px-0",
  };

  const sizes = {
    default: "px-[22px] py-[11px] text-[14px] tracking-[0.01em]",
    sm: "px-4 py-2 text-[13px]",
    none: "",
  };

  const Component = asChild ? 'span' : 'button';

  return (
    <Component
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      ref={ref}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = "Button";
