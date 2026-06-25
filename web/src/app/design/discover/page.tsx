import { PersonCard } from "@/components/cards/person-card";
import { DesignShell } from "@/components/layout/design-shell";
import { mockPeople } from "@/lib/mock-data";

export default function DesignDiscoverPage() {
  return (
    <DesignShell title="Discover" subtitle="Recommendations — hobbies only, no batch">
      <div className="space-y-4 p-4">
        <p className="text-sm text-text-secondary">
          Cards show <strong>@username</strong> and shared interests. Batch and year
          are never displayed publicly.
        </p>
        {mockPeople.map((p) => (
          <PersonCard key={p.username} {...p} />
        ))}
      </div>
    </DesignShell>
  );
}
