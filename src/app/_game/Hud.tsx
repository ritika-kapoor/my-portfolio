"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { SectionKey } from "./world";
import { SECTION_SIGN, SECTION_TITLE } from "./world";
import { PROFILE } from "./content";

type Props = {
  nearLabel: string | null;
  showIntro: boolean;
  onDismissIntro: () => void;
  onOpenSection: (k: SectionKey) => void;
};

export function Hud({ nearLabel, showIntro, onDismissIntro, onOpenSection }: Props) {
  return (
    <>
      {/* Corner controls hint (keyboard only; touch devices get the d-pad) */}
      <div className="absolute left-2 top-14 z-10 flex flex-col items-start gap-2 sm:left-4 sm:top-4">
        <div className="panel pointer-events-none px-3 py-2 text-sm [@media(pointer:coarse)]:hidden">
          <div className="panel-title text-base">Move: WASD / Arrows</div>
          <div>Interact: E · Space</div>
        </div>
        <Link
          href="/resume"
          className="panel panel-title px-3 py-1 text-sm transition hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_rgba(58,42,26,0.9)]"
        >
          Plain version ▸
        </Link>
      </div>

      {/* Quick jump menu, top-right */}
      <div className="pointer-events-auto absolute inset-x-2 top-2 z-10 flex justify-between gap-1 sm:left-auto sm:right-4 sm:top-4 sm:max-w-[60vw] sm:flex-wrap sm:justify-end sm:gap-2">
        {(Object.keys(SECTION_TITLE) as SectionKey[]).map((k) => (
          <button
            key={k}
            onClick={() => onOpenSection(k)}
            className="panel panel-title px-1.5 py-1 text-xs transition hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_rgba(58,42,26,0.9)] sm:px-3 sm:text-sm"
            title={SECTION_TITLE[k]}
          >
            {SECTION_SIGN[k]}
          </button>
        ))}
      </div>

      {/* "Press E" prompt near a door */}
      <AnimatePresence>
        {nearLabel && !showIntro && (
          <motion.div
            key={nearLabel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute bottom-24 left-1/2 z-10 -translate-x-1/2"
          >
            <div className="panel px-4 py-2 text-center">
              <div className="panel-title text-lg">{nearLabel}</div>
              <div className="text-sm">
                Press <span className="pill">E</span>{" "}
                <span className="blink">▮</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Intro splash */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
            onClick={onDismissIntro}
          >
            <motion.div
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="panel max-w-md px-8 py-6 text-center"
            >
              <div
                className="panel-title mb-1 text-3xl"
                style={{ letterSpacing: "0.04em" }}
              >
                {PROFILE.name}&apos;s Island
              </div>
              <div className="mb-3 text-sm opacity-70">{PROFILE.tagline}</div>
              <p className="mb-4">
                A small, walkable portfolio.
                <br />
                Wander over to any house, then knock.
              </p>
              <div className="mb-4 hidden text-sm [@media(pointer:coarse)]:block">
                Use the on-screen pad to walk, then tap <span className="pill">E</span> at a door.
              </div>
              <div className="mb-4 grid grid-cols-2 gap-2 text-sm [@media(pointer:coarse)]:hidden">
                <div className="panel px-2 py-1">
                  <span className="pill">WASD</span> or arrows to move
                </div>
                <div className="panel px-2 py-1">
                  <span className="pill">E</span> or space to interact
                </div>
              </div>
              <button
                onClick={onDismissIntro}
                className="panel panel-title px-4 py-2 text-lg transition hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_rgba(58,42,26,0.9)]"
              >
                Start ▸
              </button>
              <div className="mt-4 text-sm">
                In a hurry?{" "}
                <Link
                  href="/resume"
                  onClick={(e) => e.stopPropagation()}
                  className="underline"
                >
                  Read the plain version
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
