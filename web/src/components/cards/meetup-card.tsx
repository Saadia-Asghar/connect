import Link from "next/link";
import { Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";
import { Username } from "@/components/ui/username";

export type MeetupStatus = "open" | "full" | "completed";

export interface MeetupCardProps {
  title: string;
  host: string;
  category: string;
  time: string;
  venue: string;
  spotsLeft: number;
  maxCapacity: number;
  status?: MeetupStatus;
  href?: string;
}

const statusBadge: Record<MeetupStatus, { label: string; variant: "default" | "pending" | "outline" }> = {
  open: { label: "Open", variant: "default" },
  full: { label: "Full", variant: "pending" },
  completed: { label: "Done", variant: "outline" },
};

export function MeetupCard({
  title,
  host,
  category,
  time,
  venue,
  spotsLeft,
  maxCapacity,
  status = "open",
  href = "#",
}: MeetupCardProps) {
  const badge = statusBadge[status];

  return (
    <Link href={href} className="block active:scale-[0.98] transition-transform">
      <Card>
        <CardBody className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <Badge variant="accent">{category}</Badge>
              <h3 className="font-heading text-base font-semibold leading-snug">
                {title}
              </h3>
            </div>
            <Badge variant={badge.variant}>{badge.label}</Badge>
          </div>
          <p className="text-sm text-text-secondary">
            Hosted by <Username name={host} size="sm" className="inline" />
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-text-secondary">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {time}
            </span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {venue}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-text-secondary/10 pt-3">
            <span className="text-sm font-medium text-primary">
              {status === "full"
                ? "No spots left"
                : `${spotsLeft}/${maxCapacity} spots`}
            </span>
            <span className="text-xs text-text-secondary">Tap to view</span>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
