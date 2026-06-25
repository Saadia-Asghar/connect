import { BottomNav } from "@/components/layout/bottom-nav";
import { cn } from "@/lib/utils";

export function MobileShell({
  children,
  className,
  hideNav = false,
  bottomPadding = true,
}: {
  children: React.ReactNode;
  className?: string;
  hideNav?: boolean;
  bottomPadding?: boolean;
}) {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-lg bg-background">
      <main
        className={cn(
          bottomPadding && !hideNav && "pb-24",
          className,
        )}
      >
        {children}
      </main>
      {!hideNav ? <BottomNav /> : null}
    </div>
  );
}
