import { DesignShell } from "@/components/layout/design-shell";
import { Avatar } from "@/components/ui/avatar";
import { HobbyChip } from "@/components/ui/chip";
import { Username } from "@/components/ui/username";
import { mockUser } from "@/lib/mock-data";

export default function DesignProfilePage() {
  return (
    <DesignShell title="Public profile" subtitle="Only username, avatar, bio, hobbies">
      <div className="p-4">
        <div className="flex flex-col items-center rounded-card bg-surface p-6 shadow-card text-center">
          <Avatar alt={mockUser.username} fallback={mockUser.username} size="lg" />
          <Username name={mockUser.username} size="lg" className="mt-3" />
          <p className="mt-2 max-w-xs text-sm text-text-secondary">{mockUser.bio}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {mockUser.hobbies.map((h) => (
              <HobbyChip key={h} selected className="pointer-events-none">
                {h}
              </HobbyChip>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-card border border-dashed border-text-secondary/30 p-4">
          <p className="text-xs font-semibold uppercase text-text-secondary">Hidden from others</p>
          <ul className="mt-2 space-y-1 text-sm text-text-secondary line-through opacity-60">
            <li>Real name</li>
            <li>Batch & year</li>
            <li>Email & phone</li>
            <li>Hostel block</li>
          </ul>
        </div>
      </div>
    </DesignShell>
  );
}
