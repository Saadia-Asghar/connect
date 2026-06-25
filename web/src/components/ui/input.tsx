import { cn } from "@/lib/utils";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full rounded-button border border-text-secondary/20 bg-surface px-4 text-base text-text-primary placeholder:text-text-secondary/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-24 w-full rounded-button border border-text-secondary/20 bg-surface px-4 py-3 text-base text-text-primary placeholder:text-text-secondary/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none",
        className,
      )}
      {...props}
    />
  );
}
