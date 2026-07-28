import type { LucideIcon } from "lucide-react";

type DiagramAspect = "video" | "square" | "portrait";
type PhoneSize = "default" | "hero";

const aspectClass: Record<DiagramAspect, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

const phoneWidth: Record<PhoneSize, string> = {
  default: "w-[190px] sm:w-[220px]",
  hero: "w-[240px] sm:w-[300px]",
};

export function PhonePlaceholder({
  icon: Icon,
  caption,
  note = "Screen coming soon",
  size = "default",
  className = "",
}: {
  icon: LucideIcon;
  caption: string;
  note?: string;
  size?: PhoneSize;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col items-center gap-3 ${className}`}>
      <div
        className={`relative ${phoneWidth[size]} aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-neutral-900 bg-neutral-900 shadow-xl`}
      >
        <div className="absolute inset-[2px] flex flex-col items-center justify-center gap-2 overflow-hidden rounded-[2.1rem] bg-gradient-to-br from-amber-50 via-orange-50 to-pink-100 px-4 text-center dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
          <Icon size={26} strokeWidth={1.5} className="text-neutral-500 dark:text-neutral-400" aria-hidden="true" />
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {note}
          </span>
        </div>
        <div className="absolute inset-x-0 top-0 flex justify-center pt-2">
          <div className="h-5 w-20 rounded-full bg-neutral-900" />
        </div>
      </div>
      <figcaption className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
        {caption}
      </figcaption>
    </figure>
  );
}

export function DiagramPlaceholder({
  icon: Icon,
  caption,
  note = "Visual coming soon",
  aspect = "video",
  className = "",
}: {
  icon: LucideIcon;
  caption: string;
  note?: string;
  aspect?: DiagramAspect;
  className?: string;
}) {
  return (
    <figure className={`flex flex-col gap-3 ${className}`}>
      <div
        className={`relative ${aspectClass[aspect]} flex w-full flex-col items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/40 bg-[radial-gradient(circle,rgba(0,0,0,0.07)_1px,transparent_1px)] [background-size:16px_16px] dark:border-white/10 dark:bg-white/[0.03] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.09)_1px,transparent_1px)]`}
      >
        <Icon size={24} strokeWidth={1.5} className="text-neutral-500 dark:text-neutral-400" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
          {note}
        </span>
      </div>
      <figcaption className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
        {caption}
      </figcaption>
    </figure>
  );
}
