"use client";

import { useState } from "react";
import { DesignShell } from "@/components/layout/design-shell";
import { Button } from "@/components/ui/button";
import { HobbyChip } from "@/components/ui/chip";
import { ProgressDots } from "@/components/ui/progress-dots";
import { hobbyCategories } from "@/lib/mock-data";

const mcqOptions = [
  "Sports with friends",
  "Music jam",
  "Gaming",
  "Quiet study",
  "Social hangout",
];

export default function DesignOnboardingPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);

  const steps = ["Hobbies", "Friday night", "Group size"];
  const totalSteps = steps.length;

  return (
    <DesignShell title="Onboarding" subtitle="Alan style — one question per screen">
      <div className="flex flex-col gap-6 p-4">
        <ProgressDots total={totalSteps} current={step} className="justify-center" />

        {step === 0 && (
          <div className="space-y-4">
            <div>
              <h2 className="font-heading text-xl font-bold">What are you into?</h2>
              <p className="mt-1 text-sm text-text-secondary">
                Pick what you're into — we'll handle the rest.
              </p>
            </div>
            {Object.entries(hobbyCategories).map(([cat, hobbies]) => (
              <div key={cat}>
                <p className="mb-2 text-xs font-semibold uppercase text-text-secondary">
                  {cat}
                </p>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((h) => (
                    <HobbyChip
                      key={h}
                      selected={selected.includes(h)}
                      onClick={() =>
                        setSelected((s) =>
                          s.includes(h) ? s.filter((x) => x !== h) : [...s, h],
                        )
                      }
                    >
                      {h}
                    </HobbyChip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold">Friday 8 PM, you'd rather…</h2>
            {mcqOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setStep(2)}
                className="w-full rounded-card bg-surface p-4 text-left shadow-card active:scale-[0.98] transition-transform"
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <h2 className="font-heading text-xl font-bold">Ideal hangout size?</h2>
            {["2–3", "4–6", "7–10", "10+"].map((opt) => (
              <button
                key={opt}
                type="button"
                className="w-full rounded-card bg-surface p-4 text-left shadow-card"
              >
                {opt} people
              </button>
            ))}
          </div>
        )}

        <div className="flex gap-2">
          {step > 0 && (
            <Button variant="outline" size="lg" className="flex-1" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          <Button
            size="lg"
            className="flex-1"
            onClick={() => setStep(Math.min(step + 1, totalSteps - 1))}
            disabled={step === 0 && selected.length === 0}
          >
            {step === totalSteps - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </DesignShell>
  );
}
