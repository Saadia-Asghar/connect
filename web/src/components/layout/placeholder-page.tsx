import Link from "next/link";
import { MobileShell } from "@/components/layout/mobile-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";

export default function PlaceholderPage({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <MobileShell>
      <PageHeader title={title} subtitle={subtitle} />
      <div className="space-y-4 px-4">
        <EmptyState
          title="Coming in Alpha"
          description="Fatima will wire this screen to Saadia's APIs."
        />
        <Link href="/" className="block">
          <Button variant="secondary" size="lg" className="w-full">
            Back to home
          </Button>
        </Link>
      </div>
    </MobileShell>
  );
}
