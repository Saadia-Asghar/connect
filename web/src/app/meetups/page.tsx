import { MeetupCard } from "@/components/cards/meetup-card";
import { MobileShell } from "@/components/layout/mobile-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { mockMeetups } from "@/lib/mock-data";

export default function MeetupsPage() {
  return (
    <MobileShell>
      <PageHeader title="Meetups" subtitle="Small hangouts — chat stays in app" />
      <div className="flex flex-col gap-3 px-4">
        {mockMeetups.map((m) => (
          <MeetupCard
            key={m.id}
            title={m.title}
            host={m.host}
            category={m.category}
            time={m.time}
            venue={m.venue}
            spotsLeft={m.spotsLeft}
            maxCapacity={m.maxCapacity}
            status={m.status}
          />
        ))}
        <Button size="lg" className="mt-2">+ Create meetup</Button>
      </div>
    </MobileShell>
  );
}
