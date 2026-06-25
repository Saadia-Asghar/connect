import { cn } from "@/lib/utils";

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  className,
}: {
  src?: string | null;
  alt: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
  };

  const initials = fallback.slice(0, 2).toUpperCase();

  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full bg-primary-soft text-primary font-semibold flex items-center justify-center",
        sizes[size],
        className,
      )}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        initials
      )}
    </div>
  );
}

export function AvatarStack({
  users,
  max = 5,
}: {
  users: { username: string; avatarUrl?: string | null }[];
  max?: number;
}) {
  const visible = users.slice(0, max);
  const extra = users.length - max;

  return (
    <div className="flex -space-x-2">
      {visible.map((user) => (
        <Avatar
          key={user.username}
          alt={user.username}
          fallback={user.username}
          src={user.avatarUrl}
          size="sm"
          className="ring-2 ring-surface"
        />
      ))}
      {extra > 0 ? (
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-xs font-medium text-primary ring-2 ring-surface">
          +{extra}
        </div>
      ) : null}
    </div>
  );
}
