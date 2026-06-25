import { MapPin, Users } from "lucide-react";
import { EventCard } from "@/components/cards/event-card";
import { DesignShell } from "@/components/layout/design-shell";
import { StickyActionBar } from "@/components/layout/sticky-action-bar";
import { AvatarStack } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockEvents } from "@/lib/mock-data";

export default function DesignEventsPage() {
  const featured = mockEvents[0];

  return (
    <>
      <DesignShell title="Events" subtitle="Meetup-style list + detail">
        <div className="flex flex-col gap-3 p-4">
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

        <div className="mx-4 mt-6 border-t border-text-secondary/10 pt-6">
          <p className="mb-3 text-xs font-semibold uppercase text-text-secondary">
            Detail preview
          </p>
          <div className="overflow-hidden rounded-card bg-surface shadow-card">
            <div className="h-44 bg-gradient-to-br from-primary to-primary-light" />
            <div className="space-y-4 p-4">
              <div>
                <Badge variant="accent">{featured.society}</Badge>
                <h3 className="font-heading mt-2 text-xl font-bold">{featured.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
                <span>{featured.date}</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {featured.venue}
                </span>
              </div>
              <p className="text-sm leading-relaxed">{featured.description}</p>
              <div className="flex items-center justify-between">
                <AvatarStack users={featured.attendees} />
                <span className="flex items-center gap-1 text-sm text-text-secondary">
                  <Users className="h-4 w-4" />
                  {featured.goingCount} going
                </span>
              </div>
            </div>
          </div>
        </div>
      </DesignShell>
      <StickyActionBar>
        <Button size="lg">RSVP — I&apos;m going</Button>
      </StickyActionBar>
    </>
  );
}
