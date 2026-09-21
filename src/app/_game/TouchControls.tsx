"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  onMove: (x: number, y: number) => void;
  onAction: () => void;
};

/**
 * On-screen d-pad + action button. Only shown on touch devices (coarse pointer).
 * Uses pointer events so it works for touch + stylus.
 */
export function TouchControls({ onMove, onAction }: Props) {
  const [isTouch, setIsTouch] = useState(false);
  const pressedRef = useRef<{ up: boolean; down: boolean; left: boolean; right: boolean }>({
    up: false,
    down: false,
    left: false,
    right: false,
  });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    setIsTouch(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const emit = () => {
    const p = pressedRef.current;
    onMove(
      (p.right ? 1 : 0) + (p.left ? -1 : 0),
      (p.down ? 1 : 0) + (p.up ? -1 : 0),
    );
  };

  const pressHandlers = (dir: "up" | "down" | "left" | "right") => ({
    onPointerDown: (e: React.PointerEvent) => {
      e.preventDefault();
      pressedRef.current[dir] = true;
      emit();
    },
    onPointerUp: (e: React.PointerEvent) => {
      e.preventDefault();
      pressedRef.current[dir] = false;
      emit();
    },
    onPointerLeave: (e: React.PointerEvent) => {
      e.preventDefault();
      pressedRef.current[dir] = false;
      emit();
    },
    onPointerCancel: (e: React.PointerEvent) => {
      e.preventDefault();
      pressedRef.current[dir] = false;
      emit();
    },
  });

  if (!isTouch) return null;

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex touch-none items-end justify-between px-4 pb-[env(safe-area-inset-bottom)]">
      {/* D-pad */}
      <div className="pointer-events-auto relative h-40 w-40">
        <button
          aria-label="Up"
          className="panel panel-title absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2 text-xl"
          {...pressHandlers("up")}
        >
          ▲
        </button>
        <button
          aria-label="Left"
          className="panel panel-title absolute left-0 top-1/2 h-12 w-12 -translate-y-1/2 text-xl"
          {...pressHandlers("left")}
        >
          ◀
        </button>
        <button
          aria-label="Right"
          className="panel panel-title absolute right-0 top-1/2 h-12 w-12 -translate-y-1/2 text-xl"
          {...pressHandlers("right")}
        >
          ▶
        </button>
        <button
          aria-label="Down"
          className="panel panel-title absolute bottom-0 left-1/2 h-12 w-12 -translate-x-1/2 text-xl"
          {...pressHandlers("down")}
        >
          ▼
        </button>
      </div>

      {/* Action button */}
      <div className="pointer-events-auto">
        <button
          aria-label="Interact"
          onClick={onAction}
          className="panel panel-title h-20 w-20 text-2xl"
        >
          E
        </button>
      </div>
    </div>
  );
}
