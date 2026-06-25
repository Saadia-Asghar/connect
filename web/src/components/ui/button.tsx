import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-light",
        secondary:
          "bg-primary-soft text-primary hover:bg-primary/10 border border-primary/10",
        accent: "bg-accent text-text-primary hover:brightness-95",
        ghost: "bg-transparent text-primary hover:bg-primary-soft",
        outline:
          "border border-text-secondary/20 bg-surface text-text-primary hover:bg-background",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-button",
        md: "h-11 px-5 text-sm rounded-button",
        lg: "h-12 px-6 text-base rounded-button w-full",
        icon: "h-10 w-10 rounded-button",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
}

export function Button({
  className,
  variant,
  size,
  loading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
      {children}
    </button>
  );
}
