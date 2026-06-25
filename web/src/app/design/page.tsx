import Link from "next/link";
import { Palette } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Badge } from "@/components/ui/badge";
import { designSections } from "@/lib/mock-data";

export default function DesignHubPage() {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-lg bg-background">
      <header className="border-b border-text-secondary/10 bg-surface px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <Logo />
          <Badge variant="accent">v0 — Frontend preview</Badge>
        </div>
        <h1 className="font-heading text-2xl font-bold">Design hub</h1>
        <p className="mt-1 text-sm text-text-secondary">
          Every screen organized by feature. Open any section to preview the UI
          before backend is wired.
        </p>
        <p className="mt-3 rounded-button bg-primary-soft px-3 py-2 text-xs text-primary">
          Running on{" "}
          <strong>http://localhost:3010</strong> — port 3000 is free for your
          other project.
        </p>
      </header>

      <div className="flex flex-col gap-2 p-4">
        {designSections.map((section) => (
          <Link
            key={section.id}
            href={section.href}
            className="flex items-start gap-3 rounded-card bg-surface p-4 shadow-card transition-transform active:scale-[0.98]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Palette className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-heading font-semibold">{section.title}</h2>
                <Badge variant="outline">{section.phase}</Badge>
              </div>
              <p className="mt-0.5 text-sm text-text-secondary">
                {section.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="border-t border-text-secondary/10 p-4">
        <Link
          href="/"
          className="block text-center text-sm font-medium text-primary"
        >
          → Open live app shell (bottom nav)
        </Link>
      </div>
    </div>
  );
}
