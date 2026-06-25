import { HobbyChip } from "@/components/ui/chip";
import { Card, CardBody } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Username } from "@/components/ui/username";

export function PersonCard({
  username,
  reason,
  sharedHobbies,
  avatarUrl,
}: {
  username: string;
  reason: string;
  sharedHobbies: string[];
  avatarUrl?: string | null;
}) {
  return (
    <Card>
      <CardBody className="flex gap-3">
        <Avatar alt={username} fallback={username} src={avatarUrl} />
        <div className="min-w-0 flex-1 space-y-2">
          <div>
            <Username name={username} size="md" />
            <p className="mt-0.5 text-sm text-text-secondary">{reason}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {sharedHobbies.map((hobby) => (
              <HobbyChip key={hobby} selected className="pointer-events-none px-2.5 py-1 text-xs">
                {hobby}
              </HobbyChip>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
