import {
  TILE_SIZE,
  tileAt,
  MAP_WIDTH,
  MAP_HEIGHT,
  LANDMARKS,
  SECTION_SIGN,
  type SectionKey,
} from "./world";

const COLORS = {
  grass: ["#a8c96d", "#7fae4e"],
  grassDark: "#5c8637",
  dirt: "#c9a373",
  path: "#d9c090",
  pathEdge: "#a67c52",
  water: "#7dc7d6",
  waterDeep: "#4a9db0",
  tree: "#3a6a2a",
  treeShadow: "#264a1c",
  trunk: "#5a3a26",
  rock: "#8a8477",
  fence: "#8b5a3c",
  petal: "#ef8fa3",
  petalCore: "#ffd166",
  buildingWall: "#f2d7a8",
  buildingWallDark: "#c98c5a",
  buildingDoor: "#5a3a26",
  window: "#7dc7d6",
  outside: "#2e2418",
  sign: "#f2d7a8",
  signPost: "#5a3a26",
};

// Little checker-noise so grass looks alive without art assets.
function grassColor(tx: number, ty: number): string {
  return (tx * 7 + ty * 13) % 5 === 0
    ? COLORS.grass[1]!
    : COLORS.grass[0]!;
}

function fillTile(
  ctx: CanvasRenderingContext2D,
  color: string,
  px: number,
  py: number,
) {
  ctx.fillStyle = color;
  ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
}

function drawTree(ctx: CanvasRenderingContext2D, px: number, py: number) {
  ctx.fillStyle = COLORS.trunk;
  ctx.fillRect(px + 13, py + 20, 6, 10);
  ctx.fillStyle = COLORS.treeShadow;
  ctx.beginPath();
  ctx.arc(px + 16, py + 18, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = COLORS.tree;
  ctx.beginPath();
  ctx.arc(px + 13, py + 15, 10, 0, Math.PI * 2);
  ctx.arc(px + 20, py + 15, 10, 0, Math.PI * 2);
  ctx.arc(px + 16, py + 11, 9, 0, Math.PI * 2);
  ctx.fill();
}

function drawRock(ctx: CanvasRenderingContext2D, px: number, py: number) {
  ctx.fillStyle = "#5a5449";
  ctx.beginPath();
  ctx.ellipse(px + 16, py + 22, 12, 6, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = COLORS.rock;
  ctx.beginPath();
  ctx.ellipse(px + 16, py + 18, 12, 10, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawFlower(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  variant: number,
) {
  fillTile(ctx, grassColor(px, py), px, py);
  const cx = px + 16;
  const cy = py + 16;
  const petals = [
    [-5, 0], [5, 0], [0, -5], [0, 5],
  ] as const;
  ctx.fillStyle = variant % 2 === 0 ? COLORS.petal : "#f2b6d0";
  petals.forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(cx + dx, cy + dy, 3, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = COLORS.petalCore;
  ctx.beginPath();
  ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
  ctx.fill();
}

function drawWater(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  t: number,
) {
  ctx.fillStyle = COLORS.waterDeep;
  ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);
  ctx.fillStyle = COLORS.water;
  const wiggle = Math.sin((px + t * 40) * 0.02) * 3;
  ctx.fillRect(px, py + 6 + wiggle, TILE_SIZE, TILE_SIZE - 12);
  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.fillRect(px + 8, py + 12 + wiggle, 4, 2);
}

function drawPath(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  tx: number,
  ty: number,
) {
  fillTile(ctx, COLORS.path, px, py);
  if ((tx * 5 + ty * 3) % 7 === 0) {
    ctx.fillStyle = COLORS.pathEdge;
    ctx.fillRect(px + 6, py + 8, 3, 3);
    ctx.fillRect(px + 20, py + 22, 3, 3);
  }
}

function drawFence(ctx: CanvasRenderingContext2D, px: number, py: number) {
  fillTile(ctx, grassColor(px, py), px, py);
  ctx.fillStyle = COLORS.fence;
  ctx.fillRect(px + 4, py + 10, 24, 4);
  ctx.fillRect(px + 4, py + 20, 24, 4);
  ctx.fillRect(px + 8, py + 6, 3, 22);
  ctx.fillRect(px + 21, py + 6, 3, 22);
}

// Tiles that count as building footprint — drawn as grass on the ground layer
// because the landmark is stamped on top in a separate pass.
const BUILDING_FOOTPRINT = new Set(["A", "J", "S", "P", "H", "C"]);
// Interactive door tiles — drawn as path (walkable) on the ground layer.
const DOOR_TILES = new Set(["a", "j", "s", "p", "h", "c"]);

export function drawGround(
  ctx: CanvasRenderingContext2D,
  t: number,
  viewX: number,
  viewY: number,
  viewW: number,
  viewH: number,
) {
  const startX = Math.max(0, Math.floor(viewX / TILE_SIZE));
  const startY = Math.max(0, Math.floor(viewY / TILE_SIZE));
  const endX = Math.min(MAP_WIDTH, Math.ceil((viewX + viewW) / TILE_SIZE));
  const endY = Math.min(MAP_HEIGHT, Math.ceil((viewY + viewH) / TILE_SIZE));

  for (let ty = startY; ty < endY; ty++) {
    for (let tx = startX; tx < endX; tx++) {
      const c = tileAt(tx, ty);
      const px = tx * TILE_SIZE - viewX;
      const py = ty * TILE_SIZE - viewY;

      if (c === ".") {
        fillTile(ctx, COLORS.outside, px, py);
      } else if (c === "G") {
        fillTile(ctx, grassColor(tx, ty), px, py);
      } else if (c === "D") {
        fillTile(ctx, COLORS.dirt, px, py);
      } else if (c === "#" || DOOR_TILES.has(c)) {
        drawPath(ctx, px, py, tx, ty);
      } else if (c === "W") {
        drawWater(ctx, px, py, t);
      } else if (c === "T") {
        fillTile(ctx, grassColor(tx, ty), px, py);
        drawTree(ctx, px, py);
      } else if (c === "R") {
        fillTile(ctx, grassColor(tx, ty), px, py);
        drawRock(ctx, px, py);
      } else if (c === "F") {
        drawFlower(ctx, px, py, tx + ty);
      } else if (c === "f") {
        drawFence(ctx, px, py);
      } else if (BUILDING_FOOTPRINT.has(c)) {
        fillTile(ctx, grassColor(tx, ty), px, py);
      } else {
        fillTile(ctx, grassColor(tx, ty), px, py);
      }
    }
  }
}

// Small glyphs (notes, sparks, ...) that rise, drift and fade above a
// house's roof while the player stands near its door. Shared by several
// per-house effects below; each gets its own glyph set and colors.
function drawFloatingGlyphs(
  ctx: CanvasRenderingContext2D,
  cx: number,
  topY: number,
  t: number,
  glyphs: string[],
  color: string,
  shadow: string,
) {
  const count = glyphs.length;
  const cycle = 2.6; // seconds per glyph's full rise-and-fade
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  for (let i = 0; i < count; i++) {
    const phase = ((t + (i * cycle) / count) % cycle) / cycle;
    const rise = 40;
    const y = topY - phase * rise;
    const spread = (i - (count - 1) / 2) * 13;
    const x = cx + Math.sin(t * 1.6 + i * 2.1) * 8 + spread;
    const size = 12 + (i % 3) * 2;
    const alpha = Math.sin(phase * Math.PI); // fades in, peaks mid-rise, fades out
    ctx.globalAlpha = alpha;
    ctx.font = `bold ${size}px var(--font-display), monospace`;
    // dark shadow copy underneath for contrast, then the color on top
    ctx.fillStyle = shadow;
    ctx.fillText(glyphs[i % glyphs.length]!, x + 1, y + 1);
    ctx.fillStyle = color;
    ctx.fillText(glyphs[i % glyphs.length]!, x, y);
  }
  ctx.globalAlpha = 1;
}
const NOTE_GLYPHS = ["♪", "♫", "♪", "♬", "♫"];
const SPARK_GLYPHS = ["✦", "✧", "✦"];
const GEAR_GLYPHS = ["◆", "◇", "◆"];
const COMPASS_GLYPHS = ["→", "›", "→", "←", "⇦", "⇧", "⇩"];
const ENVELOPE_GLYPHS = ["✉", "✦"];

// A gear that spins continuously above the Skills house while the player
// is standing near its door.
function drawSpinningGear(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  t: number,
) {
  const r = 10;
  const teeth = 6;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(t * 1.6);
  ctx.fillStyle = "#3a5f8a";
  ctx.beginPath();
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = a0 + Math.PI / teeth;
    ctx.lineTo(Math.cos(a0) * (r + 4), Math.sin(a0) * (r + 4));
    ctx.lineTo(Math.cos(a1) * r, Math.sin(a1) * r);
  }
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#7dc7d6";
  ctx.beginPath();
  ctx.arc(0, 0, 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// A little compass with a needle swinging back and forth (searching for
// direction), above the Journey house while the player stands near its door.
function drawSwingingCompass(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  t: number,
) {
  const r = 10;
  ctx.fillStyle = "#f7e9d0";
  ctx.strokeStyle = "#8a6f35";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(Math.sin(t * 1.8) * 1.3);
  ctx.fillStyle = "#c14e4e";
  ctx.beginPath();
  ctx.moveTo(0, -r + 2);
  ctx.lineTo(-2.5, 0);
  ctx.lineTo(2.5, 0);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "#3a2a1a";
  ctx.beginPath();
  ctx.moveTo(0, r - 2);
  ctx.lineTo(-2.5, 0);
  ctx.lineTo(2.5, 0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();

  ctx.fillStyle = "#3a2a1a";
  ctx.beginPath();
  ctx.arc(cx, cy, 1.8, 0, Math.PI * 2);
  ctx.fill();
}

// A little speech bubble with pulsing dots above the About house.
function drawSpeechBubble(
  ctx: CanvasRenderingContext2D,
  cx: number,
  bottomY: number,
  t: number,
) {
  const w = 42;
  const h = 26;
  const bx = cx - w / 2;
  const by = bottomY - h - 6;
  ctx.fillStyle = "#f7e9d0";
  ctx.strokeStyle = "#3a2a1a";
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  ctx.roundRect(bx, by, w, h, 6);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - 5, by + h);
  ctx.lineTo(cx, by + h + 9);
  ctx.lineTo(cx + 5, by + h);
  ctx.closePath();
  ctx.fillStyle = "#f7e9d0";
  ctx.fill();
  for (let i = 0; i < 3; i++) {
    const s = 2.6 + Math.sin(t * 4 + i * 1.4) * 1.5;
    ctx.fillStyle = "#3a2a1a";
    ctx.beginPath();
    ctx.arc(bx + w * 0.25 * (i + 1), by + h / 2, Math.max(0.8, s), 0, Math.PI * 2);
    ctx.fill();
  }
}

// A little envelope bobbing gently above the Contact house.
function drawBobbingEnvelope(
  ctx: CanvasRenderingContext2D,
  cx: number,
  topY: number,
  t: number,
) {
  const y = topY + Math.sin(t * 2.2) * 5;
  const w = 24;
  const h = 16;
  const x = cx - w / 2;
  ctx.fillStyle = "#f7e9d0";
  ctx.strokeStyle = "#3a2a1a";
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + w / 2, y + h * 0.6);
  ctx.lineTo(x + w, y);
  ctx.stroke();
}

// Each landmark drawn as a cozy little house.
export function drawLandmarks(
  ctx: CanvasRenderingContext2D,
  viewX: number,
  viewY: number,
  t: number,
  nearSection: SectionKey | null,
) {
  for (const lm of LANDMARKS) {
    const px = lm.tx * TILE_SIZE - viewX;
    const py = lm.ty * TILE_SIZE - viewY;
    const w = lm.w * TILE_SIZE;
    const h = lm.h * TILE_SIZE;

    // wall
    ctx.fillStyle = COLORS.buildingWall;
    ctx.fillRect(px, py + h * 0.4, w, h * 0.6);
    ctx.fillStyle = COLORS.buildingWallDark;
    ctx.fillRect(px, py + h - 8, w, 8);

    // roof
    ctx.fillStyle = lm.roof;
    ctx.beginPath();
    ctx.moveTo(px - 6, py + h * 0.4);
    ctx.lineTo(px + w * 0.5, py);
    ctx.lineTo(px + w + 6, py + h * 0.4);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = lm.roofDark;
    ctx.beginPath();
    ctx.moveTo(px + w * 0.5, py);
    ctx.lineTo(px + w + 6, py + h * 0.4);
    ctx.lineTo(px + w * 0.5, py + h * 0.4);
    ctx.closePath();
    ctx.fill();

    // door — centered on bottom
    const doorW = 20;
    const doorH = 32;
    const doorX = px + w * 0.5 - doorW * 0.5;
    const doorY = py + h - doorH;
    ctx.fillStyle = COLORS.buildingDoor;
    ctx.fillRect(doorX, doorY, doorW, doorH);
    ctx.fillStyle = "#c9a373";
    ctx.fillRect(doorX + doorW - 5, doorY + doorH * 0.5, 2, 2);

    // windows
    const winY = py + h * 0.55;
    const winW = 12;
    const winH = 14;
    [px + 10, px + w - 10 - winW].forEach((wx) => {
      ctx.fillStyle = COLORS.buildingDoor;
      ctx.fillRect(wx - 2, winY - 2, winW + 4, winH + 4);
      ctx.fillStyle = COLORS.window;
      ctx.fillRect(wx, winY, winW, winH);
      ctx.fillStyle = COLORS.buildingDoor;
      ctx.fillRect(wx + winW * 0.5 - 1, winY, 2, winH);
      ctx.fillRect(wx, winY + winH * 0.5 - 1, winW, 2);
    });

    // sign hanging under roof line — pulls its label from SECTION_SIGN
    const label = SECTION_SIGN[lm.section];
    ctx.font = 'bold 12px var(--font-display), monospace';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const signW = Math.max(50, label.length * 9);
    const signH = 16;
    const signX = px + w * 0.5 - signW * 0.5;
    const signY = py + h * 0.38 - signH * 0.5;
    ctx.fillStyle = COLORS.signPost;
    ctx.fillRect(signX - 2, signY - 2, signW + 4, signH + 4);
    ctx.fillStyle = COLORS.sign;
    ctx.fillRect(signX, signY, signW, signH);
    ctx.fillStyle = "#3a2a1a";
    ctx.fillText(label, px + w * 0.5, signY + signH * 0.5 + 1);

    if (lm.section === "hobbies" && nearSection === "hobbies") {
      drawFloatingGlyphs(
        ctx,
        px + w * 0.5,
        py - 4,
        t,
        NOTE_GLYPHS,
        "#4a2158",
        "#221028",
      );
    } else if (lm.section === "projects" && nearSection === "projects") {
      drawFloatingGlyphs(
        ctx,
        px + w * 0.5,
        py - 4,
        t,
        SPARK_GLYPHS,
        "#8a4a2a",
        "#3a1d10",
      );
    } else if (lm.section === "skills" && nearSection === "skills") {
      drawSpinningGear(ctx, px + w * 0.5, py - 10, t);
      drawFloatingGlyphs(ctx, px + w * 0.5, py - 4, t, GEAR_GLYPHS, "#1e3450", "#0c1824");
    } else if (lm.section === "journey" && nearSection === "journey") {
      drawSwingingCompass(ctx, px + w * 0.5, py - 10, t);
      drawFloatingGlyphs(ctx, px + w * 0.5, py - 4, t, COMPASS_GLYPHS, "#5c3f14", "#2c1c08");
    } else if (lm.section === "about" && nearSection === "about") {
      drawSpeechBubble(ctx, px + w * 0.5, py + 14, t);
    } else if (lm.section === "contact" && nearSection === "contact") {
      drawBobbingEnvelope(ctx, px + w * 0.5, py - 12, t);
      drawFloatingGlyphs(ctx, px + w * 0.5, py - 4, t, ENVELOPE_GLYPHS, "#3d5c26", "#1c2c10");
    }
  }
}

// The player character.
export function drawPlayer(
  ctx: CanvasRenderingContext2D,
  px: number,
  py: number,
  facing: "up" | "down" | "left" | "right",
  walking: boolean,
  t: number,
  nearSection: SectionKey | null = null,
) {
  const bob = walking ? Math.sin(t * 12) * 1.5 : 0;
  const cx = px;
  const cy = py + bob;

  // ground shadow
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.beginPath();
  ctx.ellipse(cx, py + 16, 10, 3.3, 0, 0, Math.PI * 2);
  ctx.fill();

  const HAIR = "#2a1c14";

  // long hair falling past the shoulders, drawn first so the head and
  // dress (drawn next) cover the inner part, leaving the sides visible
  ctx.fillStyle = HAIR;
  ctx.beginPath();
  ctx.roundRect(cx - 8.5, cy - 9, 3.5, 14, 2);
  ctx.fill();
  ctx.beginPath();
  ctx.roundRect(cx + 5, cy - 9, 3.5, 14, 2);
  ctx.fill();

  // dress: fitted bodice, flared skirt with a shaded hem
  const DRESS = "#e0748a";
  const DRESS_DARK = "#a8506a";
  ctx.fillStyle = DRESS;
  ctx.beginPath();
  ctx.moveTo(cx - 6.5, cy - 3);
  ctx.lineTo(cx + 6.5, cy - 3);
  ctx.lineTo(cx + 10.5, cy + 13);
  ctx.lineTo(cx - 10.5, cy + 13);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = DRESS_DARK;
  ctx.beginPath();
  ctx.moveTo(cx - 10.5, cy + 13);
  ctx.lineTo(cx + 10.5, cy + 13);
  ctx.lineTo(cx + 8.5, cy + 10);
  ctx.lineTo(cx - 8.5, cy + 10);
  ctx.closePath();
  ctx.fill();

  // small shoes peeking out from under the hem
  ctx.fillStyle = "#3a2a1a";
  ctx.fillRect(cx - 5.5, cy + 13, 4.5, 2.5);
  ctx.fillRect(cx + 1, cy + 13, 4.5, 2.5);

  // head
  ctx.fillStyle = "#f2c99a";
  ctx.beginPath();
  ctx.arc(cx, cy - 7, 7, 0, Math.PI * 2);
  ctx.fill();

  // hair cap over the top of the head
  ctx.fillStyle = HAIR;
  ctx.beginPath();
  ctx.arc(cx, cy - 9, 7.5, Math.PI, 0);
  ctx.fill();

  ctx.fillStyle = "#3a2a1a";
  if (facing === "down") {
    ctx.fillRect(cx - 3.5, cy - 7, 1.7, 1.7);
    ctx.fillRect(cx + 1.8, cy - 7, 1.7, 1.7);
  } else if (facing === "left") {
    ctx.fillRect(cx - 4.5, cy - 7, 1.7, 1.7);
  } else if (facing === "right") {
    ctx.fillRect(cx + 2.8, cy - 7, 1.7, 1.7);
  }

  // A pair of glasses appears while standing near the Projects door, with
  // a little glint of light sweeping across the lenses every so often.
  if (nearSection === "projects") {
    ctx.strokeStyle = "#2a2a2a";
    ctx.lineWidth = 1.1;
    ctx.beginPath();
    ctx.roundRect(cx - 7, cy - 9.5, 5, 4.5, 1);
    ctx.roundRect(cx + 2, cy - 9.5, 5, 4.5, 1);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - 2, cy - 7.3);
    ctx.lineTo(cx + 2, cy - 7.3);
    ctx.stroke();

    const glintCycle = 1.6;
    const gp = (t % glintCycle) / glintCycle;
    if (gp < 0.4) {
      const sweep = gp / 0.4; // 0..1 across the sweep window
      const sx = cx - 6.5 + sweep * 14;
      ctx.strokeStyle = `rgba(255,255,255,${0.9 * Math.sin(sweep * Math.PI)})`;
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(sx - 1.4, cy - 10.3);
      ctx.lineTo(sx + 1.4, cy - 7.5);
      ctx.stroke();
    }
  }

}
