import { EventCard } from "@/components/cards/event-card";
import { MeetupCard } from "@/components/cards/meetup-card";
import { PersonCard } from "@/components/cards/person-card";
import { PostCard } from "@/components/cards/post-card";
import { ChatBubble } from "@/components/chat/chat-bubble";
import { CampusHills, Logo } from "@/components/brand/logo";
import { DesignShell } from "@/components/layout/design-shell";
import { StickyActionBar } from "@/components/layout/sticky-action-bar";
import { Badge, DatePill, PendingBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HobbyChip, FilterChip } from "@/components/ui/chip";
import { Input, Textarea } from "@/components/ui/input";
import { ProgressDots } from "@/components/ui/progress-dots";
import { Skeleton } from "@/components/ui/skeleton";
import { Username } from "@/components/ui/username";
import { colors } from "@/lib/design-tokens";

function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex items-center gap-3 rounded-card bg-surface p-3 shadow-card">
      <div
        className="h-10 w-10 shrink-0 rounded-lg border border-black/5"
        style={{ backgroundColor: hex }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-text-secondary">{hex}</p>
      </div>
    </div>
  );
}

export default function DesignComponentsPage() {
  return (
    <>
      <DesignShell title="Components" subtitle="Meetup + Alan + Fi tokens">
        <div className="flex flex-col gap-8 p-4">
          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Brand</h2>
            <CampusHills />
            <Logo />
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Colors</h2>
            <div className="grid gap-2">
              {Object.entries(colors).map(([name, hex]) => (
                <Swatch key={name} name={name} hex={hex} />
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Typography</h2>
            <div className="space-y-2 rounded-card bg-surface p-4 shadow-card">
              <p className="font-heading text-2xl font-bold">Plus Jakarta Sans</p>
              <p className="text-base">Inter body text</p>
              <Username name="nightowl_34" size="lg" />
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Buttons</h2>
            <div className="flex flex-col gap-2">
              <Button size="lg">Primary</Button>
              <Button variant="secondary" size="lg">Secondary</Button>
              <Button variant="accent" size="lg">Accent</Button>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Inputs & chips</h2>
            <Input placeholder="@username" />
            <Textarea placeholder="Caption..." />
            <ProgressDots total={5} current={2} />
            <div className="flex flex-wrap gap-2">
              <HobbyChip selected>Football</HobbyChip>
              <HobbyChip>Music</HobbyChip>
              <FilterChip selected>Today</FilterChip>
              <PendingBadge />
              <DatePill>Sun 6 PM</DatePill>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Cards</h2>
            <EventCard
              title="Robotics hack night"
              society="Robotics Society"
              date="Sat 29"
              venue="NAB Lab 3"
              goingCount={12}
              attendees={[{ username: "bot_34" }]}
            />
            <MeetupCard
              title="Cricket nets"
              host="pace_topi"
              category="Sports"
              time="Today, 5 PM"
              venue="Sports complex"
              spotsLeft={2}
              maxCapacity={10}
            />
            <PersonCard
              username="art_giki"
              reason="You both like art"
              sharedHobbies={["Art"]}
            />
            <PostCard username="user" caption="Sample post" likes={9} comments={1} />
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Chat bubbles</h2>
            <div className="space-y-3 rounded-card bg-background p-4">
              <ChatBubble system message="Keep chat here — no phone numbers" />
              <ChatBubble username="nightowl_34" message="Anyone free?" />
              <ChatBubble sent message="I'm in!" />
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="font-heading text-lg font-semibold">Skeleton</h2>
            <Skeleton className="h-36 w-full" />
          </section>
        </div>
      </DesignShell>
      <StickyActionBar>
        <Button size="lg">Sticky action example</Button>
      </StickyActionBar>
    </>
  );
}
