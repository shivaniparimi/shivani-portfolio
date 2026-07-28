"use client";

import { useState } from "react";
import { PenLine, LayoutTemplate, Palette, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { DiagramPlaceholder } from "./MediaPlaceholder";

const stageIcons = {
  sketch: PenLine,
  wireframe: LayoutTemplate,
  mockup: Palette,
  final: Sparkles,
} as const;

export type DesignStage = {
  id: string;
  label: string;
  description: string;
  icon: keyof typeof stageIcons;
  tileCount: number;
};

export default function StageGallery({ stages }: { stages: DesignStage[] }) {
  const [activeId, setActiveId] = useState(stages[0].id);
  const stage = stages.find((s) => s.id === activeId) ?? stages[0];

  return (
    <div>
      <div
        role="group"
        aria-label="Design stage"
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {stages.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActiveId(s.id)}
            aria-pressed={s.id === activeId}
            className={`rounded-full px-4 py-2 font-mono text-xs tracking-wide transition-colors ${
              s.id === activeId
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-black/5 text-neutral-600 hover:bg-black/10 dark:bg-white/10 dark:text-neutral-300 dark:hover:bg-white/20"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <Reveal key={stage.id} y={12}>
        <p className="mx-auto mb-8 max-w-md text-center font-mono text-sm text-neutral-500 dark:text-neutral-400">
          {stage.description}
        </p>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {Array.from({ length: stage.tileCount }).map((_, i) => (
            <DiagramPlaceholder
              key={i}
              icon={stageIcons[stage.icon]}
              caption={`${stage.label} — ${i + 1}`}
              note="Coming soon"
              aspect="square"
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
