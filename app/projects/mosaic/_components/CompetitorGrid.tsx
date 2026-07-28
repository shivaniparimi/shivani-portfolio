import { Check, X } from "lucide-react";
import Reveal from "@/components/case-study/Reveal";
import AppIcon, { type AppIconName } from "./AppIcon";

type Competitor = {
  product: AppIconName;
  strengths: string[];
  tradeoffs: string[];
};

const competitors: Competitor[] = [
  {
    product: "Things 3",
    strengths: ["Beautiful UX", "Organization", "Simplicity"],
    tradeoffs: ["No NLP", "No attachments", "No location reminders", "No AI workflows"],
  },
  {
    product: "Todoist",
    strengths: ["Natural language input", "Collaboration"],
    tradeoffs: ["Less polished visual experience"],
  },
  {
    product: "TickTick",
    strengths: ["Calendar", "Habits", "Pomodoro"],
    tradeoffs: ["Feature-heavy interface"],
  },
  {
    product: "Apple Reminders",
    strengths: ["Native integrations", "NLP", "Location reminders"],
    tradeoffs: ["Limited organization"],
  },
  {
    product: "Motion",
    strengths: ["AI scheduling"],
    tradeoffs: ["Expensive", "Highly automated"],
  },
  {
    product: "Notion",
    strengths: ["Flexible information management"],
    tradeoffs: ["High setup cost", "Slower capture"],
  },
];

export default function CompetitorGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {competitors.map((c, i) => (
        <Reveal key={c.product} delay={(i % 3) * 0.08}>
          <div className="h-full rounded-2xl border border-black/5 bg-white/50 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
            <div className="mb-4 flex items-center gap-3">
              <AppIcon name={c.product} />
              <h3 className="font-mono text-base font-semibold text-neutral-900 dark:text-white">{c.product}</h3>
            </div>

            <ul className="mb-4 space-y-1.5">
              {c.strengths.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300"
                >
                  <Check
                    size={14}
                    strokeWidth={2.5}
                    className="mt-0.5 shrink-0 text-green-700 dark:text-green-500"
                    aria-hidden="true"
                  />
                  {s}
                </li>
              ))}
            </ul>

            <ul className="space-y-1.5">
              {c.tradeoffs.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-500"
                >
                  <X
                    size={14}
                    strokeWidth={2.5}
                    className="mt-0.5 shrink-0 text-red-600 dark:text-red-500"
                    aria-hidden="true"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
