import { EventCard } from "@/components/cards/event-card";
import { MeetupCard } from "@/components/cards/meetup-card";
import { PersonCard } from "@/components/cards/person-card";
import { PostCard } from "@/components/cards/post-card";
import { DesignShell } from "@/components/layout/design-shell";
import { Badge } from "@/components/ui/badge";
import { FilterChip } from "@/components/ui/chip";
import { mockMeetups, mockEvents, mockPeople, mockPosts } from "@/lib/mock-data";

export default function DesignHomePage() {
  return (
    <DesignShell title="Home feed" subtitle="Fi cards + Meetup For You row">
      <div className="mb-4 px-4 pt-4">
        <div className="rounded-card border border-primary/10 bg-primary-soft p-4">
          <Badge variant="accent" className="mb-2">DSA Announcement</Badge>
          <p className="font-heading font-semibold">Society week starts Monday</p>
          <p className="mt-1 text-sm text-text-secondary">Check Events for the full schedule.</p>
        </div>
      </div>

      <section className="mb-4 px-4">
        <h2 className="mb-2 font-heading text-lg font-semibold">For you</h2>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <FilterChip selected>All</FilterChip>
          <FilterChip>Music</FilterChip>
          <FilterChip>Sports</FilterChip>
        </div>
      </section>

      <div className="flex flex-col gap-3 px-4">
        <MeetupCard
          title={mockMeetups[0].title}
          host={mockMeetups[0].host}
          category={mockMeetups[0].category}
          time={mockMeetups[0].time}
          venue={mockMeetups[0].venue}
          spotsLeft={mockMeetups[0].spotsLeft}
          maxCapacity={mockMeetups[0].maxCapacity}
          status={mockMeetups[0].status}
        />
        <EventCard
          title={mockEvents[0].title}
          society={mockEvents[0].society}
          date={mockEvents[0].date}
          venue={mockEvents[0].venue}
          goingCount={mockEvents[0].goingCount}
          attendees={mockEvents[0].attendees}
        />
        <PersonCard {...mockPeople[0]} />
        <PostCard {...mockPosts[0]} />
      </div>
    </DesignShell>
  );
}
