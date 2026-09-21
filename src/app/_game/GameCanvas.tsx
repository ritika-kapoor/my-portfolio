"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  TILE_SIZE,
  MAP_WIDTH,
  MAP_HEIGHT,
  SPAWN,
  tileAt,
  isSolid,
  DOOR_TO_SECTION,
  SECTION_TITLE,
  type SectionKey,
} from "./world";
import { drawGround, drawLandmarks, drawPlayer } from "./render";
import { Dialog } from "./Dialog";
import { Hud } from "./Hud";
import { TouchControls } from "./TouchControls";

const PLAYER_SPEED = 130; // pixels per second
const PLAYER_RADIUS = 8;

type Facing = "up" | "down" | "left" | "right";

export function GameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const keysRef = useRef<Record<string, boolean>>({});
  const touchRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const playerRef = useRef<{
    x: number;
    y: number;
    facing: Facing;
    walking: boolean;
  }>({
    x: SPAWN.tx * TILE_SIZE + TILE_SIZE / 2,
    y: SPAWN.ty * TILE_SIZE + TILE_SIZE / 2,
    facing: "down",
    walking: false,
  });

  const [openSection, setOpenSection] = useState<SectionKey | null>(null);
  const [nearSection, setNearSection] = useState<SectionKey | null>(null);
  const [showIntro, setShowIntro] = useState(true);

  // Mirror state into refs so the animation loop can read fresh values
  // without needing to restart every time a state changes.
  const openSectionRef = useRef(openSection);
  const showIntroRef = useRef(showIntro);
  const nearSectionRef = useRef(nearSection);
  useEffect(() => {
    openSectionRef.current = openSection;
  }, [openSection]);
  useEffect(() => {
    showIntroRef.current = showIntro;
  }, [showIntro]);
  useEffect(() => {
    nearSectionRef.current = nearSection;
  }, [nearSection]);

  const tryInteract = useCallback(() => {
    const p = playerRef.current;
    const dx = p.facing === "left" ? -1 : p.facing === "right" ? 1 : 0;
    const dy = p.facing === "up" ? -1 : p.facing === "down" ? 1 : 0;
    const frontTx = Math.floor((p.x + dx * TILE_SIZE) / TILE_SIZE);
    const frontTy = Math.floor((p.y + dy * TILE_SIZE) / TILE_SIZE);
    const hereTx = Math.floor(p.x / TILE_SIZE);
    const hereTy = Math.floor(p.y / TILE_SIZE);
    for (const t of [tileAt(frontTx, frontTy), tileAt(hereTx, hereTy)]) {
      const sec = DOOR_TO_SECTION[t];
      if (sec) {
        setOpenSection(sec);
        return;
      }
    }
  }, []);

  // --- input ---
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      keysRef.current[k] = true;
      if (openSectionRef.current) {
        if (k === "escape" || k === "e" || k === " ") {
          setOpenSection(null);
          e.preventDefault();
        }
        return;
      }
      if (showIntroRef.current && (k === " " || k === "enter" || k === "e")) {
        setShowIntro(false);
        e.preventDefault();
        return;
      }
      if (k === "e" || k === " " || k === "enter") {
        tryInteract();
        e.preventDefault();
        return;
      }
      if (
        ["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(k)
      ) {
        e.preventDefault();
      }
    };
    const up = (e: KeyboardEvent) => {
      keysRef.current[e.key.toLowerCase()] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [tryInteract]);

  // --- resize canvas ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = container.clientWidth;
      const h = container.clientHeight;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // --- game loop ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let lastT = performance.now();

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - lastT) / 1000);
      lastT = now;

      const p = playerRef.current;
      const keys = keysRef.current;
      const touch = touchRef.current;
      const paused = !!openSectionRef.current || showIntroRef.current;

      let vx = 0;
      let vy = 0;
      if (!paused) {
        if (keys.arrowup || keys.w) vy -= 1;
        if (keys.arrowdown || keys.s) vy += 1;
        if (keys.arrowleft || keys.a) vx -= 1;
        if (keys.arrowright || keys.d) vx += 1;
        vx += touch.x;
        vy += touch.y;
      }

      const mag = Math.hypot(vx, vy);
      if (mag > 0) {
        vx /= mag;
        vy /= mag;
        if (Math.abs(vx) > Math.abs(vy)) {
          p.facing = vx > 0 ? "right" : "left";
        } else {
          p.facing = vy > 0 ? "down" : "up";
        }
        p.walking = true;
      } else {
        p.walking = false;
      }

      const nx = p.x + vx * PLAYER_SPEED * dt;
      const ny = p.y + vy * PLAYER_SPEED * dt;
      if (!collides(nx, p.y)) p.x = nx;
      if (!collides(p.x, ny)) p.y = ny;
      p.x = Math.max(
        PLAYER_RADIUS,
        Math.min(MAP_WIDTH * TILE_SIZE - PLAYER_RADIUS, p.x),
      );
      p.y = Math.max(
        PLAYER_RADIUS,
        Math.min(MAP_HEIGHT * TILE_SIZE - PLAYER_RADIUS, p.y),
      );

      // Proximity detection — only push a state update when it actually changes
      const dx =
        p.facing === "left" ? -1 : p.facing === "right" ? 1 : 0;
      const dy = p.facing === "up" ? -1 : p.facing === "down" ? 1 : 0;
      const frontTx = Math.floor((p.x + dx * TILE_SIZE) / TILE_SIZE);
      const frontTy = Math.floor((p.y + dy * TILE_SIZE) / TILE_SIZE);
      const hereTx = Math.floor(p.x / TILE_SIZE);
      const hereTy = Math.floor(p.y / TILE_SIZE);
      const near =
        DOOR_TO_SECTION[tileAt(frontTx, frontTy)] ??
        DOOR_TO_SECTION[tileAt(hereTx, hereTy)] ??
        null;
      if (near !== nearSectionRef.current) {
        nearSectionRef.current = near;
        setNearSection(near);
      }

      // Camera
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      const worldW = MAP_WIDTH * TILE_SIZE;
      const worldH = MAP_HEIGHT * TILE_SIZE;
      let viewX = p.x - cw / 2;
      let viewY = p.y - ch / 2;
      viewX =
        worldW < cw
          ? (worldW - cw) / 2
          : Math.max(0, Math.min(worldW - cw, viewX));
      viewY =
        worldH < ch
          ? (worldH - ch) / 2
          : Math.max(0, Math.min(worldH - ch, viewY));

      // Render
      ctx.fillStyle = "#2e2418";
      ctx.fillRect(0, 0, cw, ch);
      drawGround(ctx, now / 1000, viewX, viewY, cw, ch);
      drawLandmarks(ctx, viewX, viewY);
      drawPlayer(
        ctx,
        p.x - viewX,
        p.y - viewY,
        p.facing,
        p.walking,
        now / 1000,
      );

      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden bg-[#2e2418]">
      <canvas ref={canvasRef} />
      <Hud
        nearLabel={nearSection ? SECTION_TITLE[nearSection] : null}
        showIntro={showIntro}
        onDismissIntro={() => setShowIntro(false)}
        onOpenSection={(k) => setOpenSection(k)}
      />
      <TouchControls
        onMove={(x, y) => {
          touchRef.current.x = x;
          touchRef.current.y = y;
        }}
        onAction={() => {
          if (showIntroRef.current) setShowIntro(false);
          else if (openSectionRef.current) setOpenSection(null);
          else tryInteract();
        }}
      />
      {openSection && (
        <Dialog
          section={openSection}
          onClose={() => setOpenSection(null)}
        />
      )}
    </div>
  );
}

function collides(x: number, y: number): boolean {
  const r = PLAYER_RADIUS;
  const points: Array<[number, number]> = [
    [x - r, y - r],
    [x + r, y - r],
    [x - r, y + r],
    [x + r, y + r],
  ];
  for (const [px, py] of points) {
    const tx = Math.floor(px / TILE_SIZE);
    const ty = Math.floor(py / TILE_SIZE);
    if (isSolid(tileAt(tx, ty))) return true;
  }
  return false;
}
