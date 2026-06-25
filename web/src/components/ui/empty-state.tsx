import { Button } from "@/components/ui/button";

export function EmptyState({
  title,
  description,
  actionLabel,
  onAction,
}: {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <div className="flex flex-col items-center rounded-card bg-primary-soft/50 px-6 py-10 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface text-2xl shadow-card">
        🏔️
      </div>
      <h3 className="font-heading text-lg font-semibold">{title}</h3>
      <p className="mt-2 max-w-xs text-sm text-text-secondary">{description}</p>
      {actionLabel ? (
        <Button className="mt-5" size="md" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
