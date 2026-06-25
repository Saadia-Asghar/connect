import { MeetupCard } from "@/components/cards/meetup-card";
import { DesignShell } from "@/components/layout/design-shell";
import { StickyActionBar } from "@/components/layout/sticky-action-bar";
import { Button } from "@/components/ui/button";
import { Username } from "@/components/ui/username";
import { mockMeetups } from "@/lib/mock-data";

export default function DesignMeetupsPage() {
  const open = mockMeetups[0];
  const full = mockMeetups[1];

  return (
    <>
      <DesignShell title="Meetups" subtitle="Capacity lock + join states">
        <div className="flex flex-col gap-3 p-4">
          <MeetupCard
            title={open.title}
            host={open.host}
            category={open.category}
            time={open.time}
            venue={open.venue}
            spotsLeft={open.spotsLeft}
            maxCapacity={open.maxCapacity}
            status={open.status}
          />
          <MeetupCard
            title={full.title}
            host={full.host}
            category={full.category}
            time={full.time}
            venue={full.venue}
            spotsLeft={full.spotsLeft}
            maxCapacity={full.maxCapacity}
            status={full.status}
          />
        </div>

        <div className="mx-4 mt-4 space-y-4 rounded-card bg-surface p-4 shadow-card">
          <h3 className="font-heading font-semibold">Create meetup flow</h3>
          <ol className="list-decimal space-y-2 pl-4 text-sm text-text-secondary">
            <li>What — title + category</li>
            <li>When — date & time</li>
            <li>Where — campus location</li>
            <li>Max people — auto-lock when full</li>
          </ol>
          <Button size="lg" className="w-full">+ Create meetup</Button>
        </div>

        <div className="mx-4 mt-4 rounded-card bg-primary-soft p-4">
          <p className="text-sm">
            Host: <Username name={open.host} className="inline" />
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            Members see @username only — no batch, no real name.
          </p>
        </div>
      </DesignShell>
      <StickyActionBar>
        <Button size="lg">Join meetup — 3 spots left</Button>
      </StickyActionBar>
    </>
  );
}
