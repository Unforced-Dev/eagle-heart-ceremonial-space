
import { cn } from "@/lib/utils";
import { forwardRef, ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-eagle-blue-200 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-eagle-blue-800 text-white hover:bg-eagle-blue-700 shadow-sm",
      secondary: "bg-eagle-earth-600 text-white hover:bg-eagle-earth-500 shadow-sm",
      outline: "border border-eagle-blue-800 text-eagle-blue-800 bg-transparent hover:bg-eagle-blue-50",
      ghost: "bg-transparent text-eagle-blue-800 hover:bg-eagle-blue-50",
      link: "bg-transparent text-eagle-blue-800 hover:underline p-0 h-auto shadow-none",
    };
    
    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-12 px-8 text-base",
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
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

Button.displayName = "Button";

export default Button;
