import { MessageSquareText, Paperclip, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/case-study/Reveal";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
};

const features: Feature[] = [
  {
    icon: MessageSquareText,
    title: "Natural Language Task Entry",
    description:
      'Create structured tasks by typing naturally, such as "Email Haley tomorrow at 2 PM."',
  },
  {
    icon: Paperclip,
    title: "Photo & File Attachments",
    description:
      "Keep screenshots, PDFs, and reference materials directly connected to the task they support.",
  },
  {
    icon: MapPin,
    title: "Location-Based Reminders",
    description: "Trigger reminders based on arriving at or leaving specific locations.",
  },
];

export default function FeatureList() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {features.map((f, i) => (
        <Reveal key={f.title} delay={(i % 2) * 0.08}>
          <div className="h-full rounded-2xl border border-black/5 bg-white/50 p-6 backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04]">
            <div className="mb-4 flex items-center gap-3">
              <f.icon
                size={20}
                strokeWidth={1.75}
                className="text-neutral-700 dark:text-neutral-300"
                aria-hidden="true"
              />
              <h3 className="font-mono text-base font-semibold text-neutral-900 dark:text-white">{f.title}</h3>
              {f.tag && (
                <span className="rounded-full bg-black/5 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:bg-white/10 dark:text-neutral-400">
                  {f.tag}
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {f.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
