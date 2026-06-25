export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-card">
          G
        </div>
        <div className="leading-tight">
          <p className="font-heading text-base font-bold text-text-primary">
            GIKI Connect
          </p>
          <p className="text-[11px] text-text-secondary">Campus only</p>
        </div>
      </div>
    </div>
  );
}

export function CampusHills() {
  return (
    <div className="relative h-40 w-full overflow-hidden rounded-card bg-gradient-to-b from-primary-soft to-background">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-primary/20 [clip-path:polygon(0_100%,0_45%,25%_60%,50%_35%,75%_55%,100%_40%,100%_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-primary/30 [clip-path:polygon(0_100%,0_55%,30%_70%,55%_50%,80%_65%,100%_48%,100%_100%)]" />
      <div className="absolute left-1/2 top-8 -translate-x-1/2">
        <Logo />
      </div>
    </div>
  );
}
