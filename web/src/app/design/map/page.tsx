import { DesignShell } from "@/components/layout/design-shell";
import { FilterChip } from "@/components/ui/chip";
import { Badge } from "@/components/ui/badge";
import { Username } from "@/components/ui/username";
import { mockMapLocations } from "@/lib/mock-data";
import { MapPin } from "lucide-react";

export default function DesignMapPage() {
  return (
    <DesignShell title="GIK Map" subtitle="Campus moments — Beta">
      <div className="relative mx-4 mt-4 h-64 overflow-hidden rounded-card bg-gradient-to-b from-primary-soft to-primary/20">
        <div className="absolute inset-x-0 bottom-0 h-20 bg-primary/25 [clip-path:polygon(0_100%,0_50%,40%_65%,70%_45%,100%_55%,100%_100%)]" />
        {[
          { top: "30%", left: "45%" },
          { top: "55%", left: "25%" },
          { top: "40%", left: "70%" },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-accent shadow-lg ring-4 ring-accent/30"
            style={{ top: pos.top, left: pos.left }}
          >
            <MapPin className="h-4 w-4 text-text-primary" />
          </div>
        ))}
        <p className="absolute bottom-3 left-3 text-xs font-medium text-primary">
          Illustrated campus map (Alpha placeholder)
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto px-4 py-3">
        <FilterChip selected>Today</FilterChip>
        <FilterChip>This week</FilterChip>
        <FilterChip>Music</FilterChip>
      </div>

      <div className="flex flex-col gap-2 px-4">
        {mockMapLocations.map((loc) => (
          <button
            key={loc.name}
            type="button"
            className="flex items-center justify-between rounded-card bg-surface p-4 shadow-card text-left active:scale-[0.98]"
          >
            <div>
              <p className="font-heading font-semibold">{loc.name}</p>
              <p className="text-sm text-text-secondary">{loc.moments} moments</p>
            </div>
            <Badge>{loc.moments}</Badge>
          </button>
        ))}
      </div>

      <div className="mx-4 mt-4 rounded-card bg-surface p-4 shadow-card">
        <Username name="campus_wanderer" />
        <p className="mt-2 text-sm">Sunset from Hill Viewpoint 🌅</p>
        <p className="mt-1 text-xs text-text-secondary">Hill Viewpoint · 2h ago</p>
      </div>
    </DesignShell>
  );
}
