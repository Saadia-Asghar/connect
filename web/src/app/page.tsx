import Link from "next/link";
import { EventCard } from "@/components/cards/event-card";
import { MeetupCard } from "@/components/cards/meetup-card";
import { PersonCard } from "@/components/cards/person-card";
import { PostCard } from "@/components/cards/post-card";
import { Logo } from "@/components/brand/logo";
import { MobileShell } from "@/components/layout/mobile-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { FilterChip } from "@/components/ui/chip";
import { EmptyState } from "@/components/ui/empty-state";

export default function HomePage() {
  return (
    <MobileShell>
      <PageHeader
        title="GIKI Connect"
        subtitle="Pick what you're into — we'll handle the rest."
        action={<Logo />}
      />

      <div className="mb-4 px-4">
        <div className="rounded-card border border-primary/10 bg-primary-soft p-4">
          <Badge variant="accent" className="mb-2">
            DSA Announcement
          </Badge>
          <p className="font-heading font-semibold">Society week starts Monday</p>
          <p className="mt-1 text-sm text-text-secondary">
            Check Events for the full schedule across campus.
          </p>
        </div>
      </div>

      <section className="mb-6 px-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-heading text-lg font-semibold">For you</h2>
          <Link href="/design" className="text-sm font-medium text-primary">
            Design hub →
          </Link>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <FilterChip selected>All</FilterChip>
          <FilterChip>Music</FilterChip>
          <FilterChip>Sports</FilterChip>
          <FilterChip>Study</FilterChip>
        </div>
      </section>

      <div className="flex flex-col gap-3 px-4">
        <MeetupCard
          title="Sunday jam on hostel lawn"
          host="nightowl_34"
          category="Music"
          time="Sun, 6:00 PM"
          venue="Hostel A lawn"
          spotsLeft={3}
          maxCapacity={8}
        />
        <EventCard
          title="Photography society exhibition"
          society="Photography Society"
          date="Fri 28"
          venue="NAB Gallery"
          goingCount={24}
          attendees={[
            { username: "lens_giki" },
            { username: "snap_topi" },
            { username: "frame_34" },
          ]}
        />
        <PersonCard
          username="football_giki"
          reason="You both like football & gaming"
          sharedHobbies={["Football", "Gaming"]}
        />
        <PostCard
          username="campus_wanderer"
          caption="Best sunset from the hill viewpoint tonight."
          likes={18}
          comments={2}
        />
        <EmptyState
          title="Nothing planned yet?"
          description="Start a meetup and keep the chat inside the app."
          actionLabel="Create meetup"
        />
      </div>
    </MobileShell>
  );
}
