import { cn } from "@/lib/utils";

export function StickyActionBar({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-40 border-t border-text-secondary/10 bg-surface/95 p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] backdrop-blur-md shadow-elevated",
        className,
      )}
    >
      <div className="mx-auto max-w-lg">{children}</div>
    </div>
  );
}
