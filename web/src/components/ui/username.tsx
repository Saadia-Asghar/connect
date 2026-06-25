import { cn } from "@/lib/utils";

export function Username({
  name,
  className,
  size = "md",
}: {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const handle = name.startsWith("@") ? name : `@${name}`;

  return (
    <span
      className={cn(
        "font-semibold text-text-primary",
        size === "sm" && "text-sm",
        size === "md" && "text-base",
        size === "lg" && "text-lg font-heading",
        className,
      )}
    >
      {handle}
    </span>
  );
}
