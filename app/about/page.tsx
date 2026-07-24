"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import BrowserWindow from "@/components/BrowserWindow";
import NowPlaying from "@/components/NowPlaying";

const PANEL_WIDTH = 420;
const GAP = 8;

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; right: number } | null>(
    null
  );
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition({
      top: rect.bottom + GAP,
      right: window.innerWidth - rect.right,
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    updatePosition();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    function handlePointerDown(e: PointerEvent) {
      const target = e.target as Node;
      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-28">
      <BrowserWindow title="about">
        <div className="flex flex-col sm:flex-row-reverse items-center gap-8 sm:gap-12">
          <div className="relative w-56 h-72 sm:w-72 sm:h-96 rounded-xl border-4 border-green-800 shadow-md shrink-0 overflow-hidden">
            <Image
              src="/about-photo.png"
              alt="Shivani Parimi"
              fill
              sizes="(min-width: 640px) 288px, 224px"
              className="object-cover object-[50%_25%] scale-125"
              priority
            />
          </div>
          <div className="flex-1 space-y-4 text-left font-mono min-w-0">
            <p className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
              hi! i&apos;m shivani.
            </p>
            <p className="text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
              I&apos;m currently studying Math &amp; Computer Science at UC
              San Diego, hoping to pursue a full time career in software
              engineering. I love bringing ideas to life through software
              by crafting interactive experiences where every interaction
              feels intentional. If this resonates with you, I’d love to connect!
            </p>
            <div className="text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
              In my free time, I enjoy chasing new PRs in the gym, finding
              new recipes to cook, and going to concerts. Currently, my
              favorite artists are Malcolm Todd and Daniel Caesar.{" "}
              <button
                ref={triggerRef}
                onClick={() => setIsOpen((o) => !o)}
                aria-label={
                  isOpen ? "Hide currently listening" : "Show currently listening"
                }
                aria-expanded={isOpen}
                className="inline-flex items-center justify-center align-middle ml-1 text-xl leading-none drop-shadow-[0_3px_5px_rgba(0,0,0,0.35)] hover:scale-110 hover:drop-shadow-[0_5px_8px_rgba(0,0,0,0.45)] active:scale-95 transition-all"
              >
                🎧🎵
              </button>
            </div>
          </div>
        </div>
      </BrowserWindow>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && position && (
              <motion.div
                ref={panelRef}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{
                  position: "fixed",
                  top: position.top,
                  right: position.right,
                  width: `min(${PANEL_WIDTH}px, 90vw)`,
                }}
                className="z-50 origin-top-right"
              >
                <BrowserWindow
                  title="currently listening"
                  maxWidthClassName="max-w-[420px]"
                  tight
                  onClose={() => setIsOpen(false)}
                >
                  <NowPlaying />
                </BrowserWindow>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </main>
  );
}
