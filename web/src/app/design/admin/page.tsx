import { DesignShell } from "@/components/layout/design-shell";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { Badge, PendingBadge } from "@/components/ui/badge";
import { Username } from "@/components/ui/username";

const pendingComments = [
  { user: "new_batch", text: "Can't wait for society week!", post: "Society week post" },
  { user: "quiet_study", text: "Is this open to masters?", post: "Photography exhibition" },
];

export default function DesignAdminPage() {
  return (
    <DesignShell title="Admin" subtitle="Announcements + comment moderation">
      <div className="flex flex-col gap-6 p-4">
        <section className="space-y-3 rounded-card bg-surface p-4 shadow-card">
          <h2 className="font-heading font-semibold">Pin announcement</h2>
          <Textarea placeholder="DSA announcement to all students..." />
          <Button size="lg" className="w-full">Publish & notify campus</Button>
        </section>

        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold">Comment queue</h2>
            <Badge variant="pending">{pendingComments.length} pending</Badge>
          </div>
          {pendingComments.map((c) => (
            <div key={c.user} className="rounded-card bg-surface p-4 shadow-card space-y-3">
              <div className="flex items-center justify-between">
                <Username name={c.user} size="sm" />
                <PendingBadge />
              </div>
              <p className="text-sm">{c.text}</p>
              <p className="text-xs text-text-secondary">On: {c.post}</p>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1">Approve</Button>
                <Button size="sm" variant="outline" className="flex-1">Reject</Button>
              </div>
            </div>
          ))}
        </section>
      </div>
    </DesignShell>
  );
}
