"use client";

import { useRef, useState } from "react";

let dragZCounter = 10;

export default function BrowserWindow({
  title,
  children,
  maxWidthClassName = "max-w-5xl",
  tight = false,
  draggable = true,
  onClose,
}: {
  title: string;
  children: React.ReactNode;
  maxWidthClassName?: string;
  tight?: boolean;
  draggable?: boolean;
  onClose?: () => void;
}) {
  const dotSize = tight ? "w-2 h-2" : "w-3 h-3";

  const rootRef = useRef<HTMLDivElement>(null);
  const dragState = useRef<{
    startX: number;
    startY: number;
    rect: DOMRect;
    startTranslate: { x: number; y: number };
  } | null>(null);

  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [zIndex, setZIndex] = useState(1);
  const [dragging, setDragging] = useState(false);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggable) return;
    if (e.pointerType === "touch") return;
    if ((e.target as HTMLElement).closest("button")) return;

    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;

    e.currentTarget.setPointerCapture(e.pointerId);
    dragState.current = {
      startX: e.clientX,
      startY: e.clientY,
      rect,
      startTranslate: translate,
    };
    setDragging(true);
    setZIndex(++dragZCounter);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const state = dragState.current;
    if (!state) return;

    const deltaX = e.clientX - state.startX;
    const deltaY = e.clientY - state.startY;

    let newLeft = state.rect.left + deltaX;
    let newTop = state.rect.top + deltaY;
    newLeft = Math.min(Math.max(newLeft, 0), window.innerWidth - state.rect.width);
    newTop = Math.min(Math.max(newTop, 0), window.innerHeight - state.rect.height);

    setTranslate({
      x: state.startTranslate.x + (newLeft - state.rect.left),
      y: state.startTranslate.y + (newTop - state.rect.top),
    });
  }

  function handlePointerUp() {
    dragState.current = null;
    setDragging(false);
  }

  return (
    <div
      ref={rootRef}
      className={`w-full ${maxWidthClassName} rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-[#fffdf7] dark:bg-slate-900 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.75)]`}
      style={{
        transform: `translate(${translate.x}px, ${translate.y}px)`,
        zIndex,
      }}
    >
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`flex items-center justify-between bg-neutral-800 select-none ${
          draggable ? "cursor-grab active:cursor-grabbing" : ""
        } ${tight ? "px-3 py-2" : "px-5 py-3"} ${
          dragging ? "cursor-grabbing" : ""
        }`}
      >
        <span
          className={`font-mono text-neutral-200 ${tight ? "text-xs" : "text-sm"}`}
        >
          {title}
        </span>
        <div className={tight ? "flex gap-1.5" : "flex gap-2"}>
          {onClose ? (
            <button
              onClick={onClose}
              aria-label="Close"
              className={`${dotSize} rounded-full bg-red-400 hover:brightness-110 transition`}
            />
          ) : (
            <span className={`${dotSize} rounded-full bg-red-400`} />
          )}
          <span className={`${dotSize} rounded-full bg-amber-400`} />
          <span className={`${dotSize} rounded-full bg-green-400`} />
        </div>
      </div>
      <div className={tight ? "p-4 sm:p-5" : "p-8 sm:p-12"}>{children}</div>
    </div>
  );
}
