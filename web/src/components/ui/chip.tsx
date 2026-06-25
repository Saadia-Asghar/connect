import { cn } from "@/lib/utils";

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function HobbyChip({
  selected = false,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        selected
          ? "bg-primary text-white"
          : "bg-surface text-text-primary border border-text-secondary/15 hover:border-primary/30",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function FilterChip({
  selected = false,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      className={cn(
        "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
        selected
          ? "bg-primary text-white"
          : "bg-surface text-text-secondary border border-text-secondary/15",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
