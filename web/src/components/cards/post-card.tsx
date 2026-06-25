import { Heart, MessageCircle } from "lucide-react";
import { PendingBadge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";
import { Username } from "@/components/ui/username";

export function PostCard({
  username,
  caption,
  imageGradient = "from-primary-soft to-accent/30",
  likes = 0,
  comments = 0,
  commentPending = false,
  hasImage = true,
}: {
  username: string;
  caption: string;
  imageGradient?: string;
  likes?: number;
  comments?: number;
  commentPending?: boolean;
  hasImage?: boolean;
}) {
  return (
    <Card>
      {hasImage ? (
        <div className={`h-44 bg-gradient-to-br ${imageGradient}`} />
      ) : null}
      <CardBody className="space-y-3">
        <Username name={username} />
        <p className="text-sm leading-relaxed text-text-primary">{caption}</p>
        {commentPending ? <PendingBadge /> : null}
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-1">
            <Heart className="h-4 w-4" />
            {likes}
          </span>
          <span className="inline-flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            {comments}
          </span>
        </div>
      </CardBody>
    </Card>
  );
}
