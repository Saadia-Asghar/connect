import { MobileShell } from "@/components/layout/mobile-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Avatar } from "@/components/ui/avatar";
import { HobbyChip } from "@/components/ui/chip";
import { Username } from "@/components/ui/username";
import Link from "next/link";
import { mockUser } from "@/lib/mock-data";

export default function ProfilePage() {
  return (
    <MobileShell>
      <PageHeader title="Profile" subtitle="Your public face on campus" />
      <div className="px-4">
        <div className="flex flex-col items-center rounded-card bg-surface p-6 shadow-card text-center">
          <Avatar alt={mockUser.username} fallback={mockUser.username} size="lg" />
          <Username name={mockUser.username} size="lg" className="mt-3" />
          <p className="mt-2 text-sm text-text-secondary">{mockUser.bio}</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {mockUser.hobbies.map((h) => (
              <HobbyChip key={h} selected className="pointer-events-none">
                {h}
              </HobbyChip>
            ))}
          </div>
        </div>
        <Link href="/design" className="mt-6 block text-center text-sm text-primary">
          Open design hub for all screens →
        </Link>
      </div>
    </MobileShell>
  );
}
