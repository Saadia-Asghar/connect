import { PostCard } from "@/components/cards/post-card";
import { DesignShell } from "@/components/layout/design-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PendingBadge } from "@/components/ui/badge";
import { mockPosts } from "@/lib/mock-data";

export default function DesignCommunityPage() {
  return (
    <DesignShell title="Community" subtitle="Admin-approved comments (Beta)">
      <div className="flex flex-col gap-4 p-4">
        <div className="rounded-card bg-pending/10 p-3 text-sm text-text-secondary">
          Comments go to <PendingBadge className="ml-1 inline-flex" /> until an admin
          approves them.
        </div>

        {mockPosts.map((post, i) => (
          <PostCard key={i} {...post} />
        ))}

        <div className="rounded-card bg-surface p-4 shadow-card space-y-3">
          <p className="text-sm font-medium">Add a comment</p>
          <Input placeholder="Say something kind..." />
          <Button size="lg" className="w-full">Submit for review</Button>
          <p className="text-xs text-text-secondary text-center">
            Your comment will appear after admin approval.
          </p>
        </div>
      </div>
    </DesignShell>
  );
}
