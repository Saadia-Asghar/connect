import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import { AvatarStack } from "@/components/ui/avatar";
import { Badge, DatePill } from "@/components/ui/badge";
import { Card, CardBody } from "@/components/ui/card";
import { Username } from "@/components/ui/username";

export interface EventCardProps {
  title: string;
  society: string;
  date: string;
  venue: string;
  coverGradient?: string;
  goingCount?: number;
  attendees?: { username: string; avatarUrl?: string | null }[];
  href?: string;
  variant?: "default" | "admin";
}

export function EventCard({
  title,
  society,
  date,
  venue,
  coverGradient = "from-primary to-primary-light",
  goingCount = 0,
  attendees = [],
  href = "#",
  variant = "default",
}: EventCardProps) {
  return (
    <Link href={href} className="block active:scale-[0.98] transition-transform">
      <Card>
        <div className={`h-36 bg-gradient-to-br ${coverGradient} relative`}>
          <div className="absolute left-3 top-3">
            <DatePill>{date}</DatePill>
          </div>
          {variant === "admin" ? (
            <div className="absolute right-3 top-3">
              <Badge variant="accent">Official</Badge>
            </div>
          ) : null}
        </div>
        <CardBody className="space-y-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-primary">
              {society}
            </p>
            <h3 className="font-heading mt-1 text-lg font-semibold leading-snug">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-text-secondary">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="truncate">{venue}</span>
          </div>
          {goingCount > 0 ? (
            <div className="flex items-center justify-between pt-1">
              <AvatarStack users={attendees} />
              <span className="flex items-center gap-1 text-xs text-text-secondary">
                <Users className="h-3.5 w-3.5" />
                {goingCount} going
              </span>
            </div>
          ) : null}
        </CardBody>
      </Card>
    </Link>
  );
}
