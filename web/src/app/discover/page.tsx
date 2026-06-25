import { PersonCard } from "@/components/cards/person-card";
import { MobileShell } from "@/components/layout/mobile-shell";
import { PageHeader } from "@/components/layout/page-header";
import { mockPeople } from "@/lib/mock-data";

export default function DiscoverPage() {
  return (
    <MobileShell>
      <PageHeader title="Discover" subtitle="People like you — @username only" />
      <div className="flex flex-col gap-3 px-4">
        {mockPeople.map((p) => (
          <PersonCard key={p.username} {...p} />
        ))}
      </div>
    </MobileShell>
  );
}
