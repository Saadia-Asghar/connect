import { DesignShell } from "@/components/layout/design-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProgressDots } from "@/components/ui/progress-dots";
import { CampusHills } from "@/components/brand/logo";

export default function DesignAuthPage() {
  return (
    <DesignShell title="Auth" subtitle="GIKI email → OTP → @username">
      <div className="flex flex-col gap-6 p-4">
        <CampusHills />
        <div className="space-y-1 text-center">
          <h2 className="font-heading text-xl font-bold">Welcome to GIKI Connect</h2>
          <p className="text-sm text-text-secondary">
            Campus only. Sign in with your @giki.edu.pk email.
          </p>
        </div>
        <ProgressDots total={3} current={0} className="justify-center" />
        <div className="space-y-3 rounded-card bg-surface p-4 shadow-card">
          <label className="text-sm font-medium">GIKI email</label>
          <Input type="email" placeholder="you@giki.edu.pk" />
          <Button size="lg" className="w-full">
            Send verification code
          </Button>
        </div>
        <div className="space-y-3 rounded-card bg-surface p-4 shadow-card">
          <label className="text-sm font-medium">Choose your @username</label>
          <Input placeholder="nightowl_34" />
          <p className="text-xs text-text-secondary">
            This is the only name other students will see. Real name stays private.
          </p>
          <Button size="lg" className="w-full">
            Continue
          </Button>
        </div>
      </div>
    </DesignShell>
  );
}
