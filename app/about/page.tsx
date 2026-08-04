"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import BrowserWindow from "@/components/BrowserWindow";
import NowPlaying from "@/components/NowPlaying";

const PANEL_WIDTH = 420;
const GAP = 8;
const EXTRA_RIGHT_SHIFT = 24;

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(
    null
  );
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const panelWidth = Math.min(PANEL_WIDTH, window.innerWidth * 0.9);
    const triggerCenterX = rect.left + rect.width / 2;
    let left = triggerCenterX - panelWidth / 2 + EXTRA_RIGHT_SHIFT;
    left = Math.min(left, window.innerWidth - panelWidth - 16);
    left = Math.max(left, 16);

    const panelHeight = panelRef.current?.getBoundingClientRect().height ?? 0;
    let top = rect.bottom + GAP;
    if (panelHeight && top + panelHeight > window.innerHeight - 16) {
      const openUpwardsTop = rect.top - GAP - panelHeight;
      top = Math.max(
        openUpwardsTop >= 16 ? openUpwardsTop : window.innerHeight - panelHeight - 16,
        16
      );
    }

    setPosition({ top, left });
  };

  useLayoutEffect(() => {
    if (!isOpen || !position || !panelRef.current) return;
    const rect = triggerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const panelHeight = panelRef.current.getBoundingClientRect().height;
    if (position.top + panelHeight <= window.innerHeight - 16) return;

    const openUpwardsTop = rect.top - GAP - panelHeight;
    const correctedTop = Math.max(
      openUpwardsTop >= 16 ? openUpwardsTop : window.innerHeight - panelHeight - 16,
      16
    );
    if (Math.abs(correctedTop - position.top) > 1) {
      setPosition((p) => (p ? { ...p, top: correctedTop } : p));
    }
  }, [isOpen, position]);

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
          <div className="relative w-56 h-72 sm:w-72 sm:h-96 rounded-xl border-4 border-green-800 dark:border-indigo-950 shadow-md shrink-0 overflow-hidden">
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
            <p className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white">
              hi! i&apos;m shivani.
            </p>
            <p className="text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
              I&apos;m currently studying Math &amp; Computer Science at UC
              San Diego, hoping to pursue a full time career in software
              engineering. Currently, I am interested in mobile and web app development, particularly in iOS and frontend development. I love bringing ideas to life through software
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
                  left: position.left,
                  width: `min(${PANEL_WIDTH}px, 90vw)`,
                }}
                className="z-50 origin-top"
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
