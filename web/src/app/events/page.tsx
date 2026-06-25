import { EventCard } from "@/components/cards/event-card";
import { MobileShell } from "@/components/layout/mobile-shell";
import { PageHeader } from "@/components/layout/page-header";
import { mockEvents } from "@/lib/mock-data";

export default function EventsPage() {
  return (
    <MobileShell>
      <PageHeader
        title="Events"
        subtitle="Society & admin — RSVP in-app"
      />
      <div className="flex flex-col gap-3 px-4">
        {mockEvents.map((e) => (
          <EventCard
            key={e.id}
            title={e.title}
            society={e.society}
            date={e.date}
            venue={e.venue}
            goingCount={e.goingCount}
            attendees={e.attendees}
          />
        ))}
      </div>
    </MobileShell>
  );
}
