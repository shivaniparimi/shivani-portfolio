"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProjectScreenshot({
  src,
  alt,
  why,
  sizes,
}: {
  src: string;
  alt: string;
  why?: string;
  sizes: string;
}) {
  const [isRevealed, setIsRevealed] = useState(false);

  const show = () => setIsRevealed(true);
  const hide = () => setIsRevealed(false);

  function handlePointerEnter(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    show();
  }

  function handlePointerLeave(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    hide();
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "touch") return;
    setIsRevealed((prev) => !prev);
  }

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-lg border border-black/10 dark:border-white/10"
      onPointerEnter={why ? handlePointerEnter : undefined}
      onPointerLeave={why ? handlePointerLeave : undefined}
      onPointerUp={why ? handlePointerUp : undefined}
      onFocus={why ? show : undefined}
      onBlur={why ? hide : undefined}
      tabIndex={why ? 0 : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover object-top"
      />

      {why && (
        <>
          <span
            className={`absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-1 font-mono text-[10px] text-white/80 transition-opacity duration-200 ${
              isRevealed ? "opacity-0" : "opacity-100"
            }`}
          >
            why ↗
          </span>

          <div
            className={`absolute inset-0 flex items-center justify-center overflow-y-auto p-4 text-center transition-opacity duration-200 sm:p-6 ${
              isRevealed ? "opacity-100" : "pointer-events-none opacity-0"
            } bg-neutral-900/85`}
          >
            <div className="my-auto">
              <p className="mb-2 font-mono text-xs tracking-widest text-neutral-400">
                why
              </p>
              <p className="font-mono text-sm leading-relaxed text-white">
                {why}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
