import { cn } from "@/lib/utils";
import { Username } from "@/components/ui/username";

export function ChatBubble({
  username,
  message,
  sent = false,
  system = false,
}: {
  username?: string;
  message: string;
  sent?: boolean;
  system?: boolean;
}) {
  if (system) {
    return (
      <p className="mx-auto max-w-[90%] rounded-full bg-primary-soft px-3 py-1.5 text-center text-xs text-text-secondary">
        {message}
      </p>
    );
  }

  return (
    <div
      className={cn(
        "flex max-w-[85%] flex-col gap-0.5",
        sent ? "ml-auto items-end" : "items-start",
      )}
    >
      {!sent && username ? (
        <Username name={username} size="sm" className="px-1" />
      ) : null}
      <div
        className={cn(
          "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
          sent
            ? "rounded-br-md bg-primary text-white"
            : "rounded-bl-md bg-surface shadow-card text-text-primary",
        )}
      >
        {message}
      </div>
    </div>
  );
}
