import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "accent" | "success" | "pending" | "outline";

const variants: Record<BadgeVariant, string> = {
  default: "bg-primary-soft text-primary",
  accent: "bg-accent/20 text-text-primary",
  success: "bg-success/15 text-success",
  pending: "bg-pending/15 text-pending",
  outline: "bg-surface border border-text-secondary/20 text-text-secondary",
};

export function Badge({
  variant = "default",
  className,
  children,
}: {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PendingBadge({ className }: { className?: string }) {
  return (
    <Badge variant="pending" className={className}>
      Awaiting approval
    </Badge>
  );
}

export function DatePill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full bg-primary text-white px-2.5 py-1 text-xs font-semibold",
        className,
      )}
    >
      {children}
    </span>
  );
}
