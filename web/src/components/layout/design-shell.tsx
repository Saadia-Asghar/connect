import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export function DesignShell({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-lg bg-background">
      <header className="sticky top-0 z-50 border-b border-text-secondary/10 bg-surface/95 backdrop-blur-md">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link
            href="/design"
            className="flex h-9 w-9 items-center justify-center rounded-button bg-primary-soft text-primary"
            aria-label="Back to design hub"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-primary">
              Design preview
            </p>
            <h1 className="font-heading truncate text-base font-bold">{title}</h1>
            {subtitle ? (
              <p className="truncate text-xs text-text-secondary">{subtitle}</p>
            ) : null}
          </div>
        </div>
      </header>
      <main className={cn("pb-8", className)}>{children}</main>
    </div>
  );
}
