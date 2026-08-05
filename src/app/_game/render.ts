import {
  TILE_SIZE,
  tileAt,
  MAP_WIDTH,
  MAP_HEIGHT,
  LANDMARKS,
  SECTION_SIGN,
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

// Each landmark drawn as a cozy little house.
export function drawLandmarks(
  ctx: CanvasRenderingContext2D,
  viewX: number,
  viewY: number,
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
) {
  const bob = walking ? Math.sin(t * 12) * 1.5 : 0;
  const cx = px;
  const cy = py + bob;

  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.beginPath();
  ctx.ellipse(cx, py + 14, 9, 3, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#c14e4e";
  ctx.beginPath();
  ctx.roundRect(cx - 7, cy - 2, 14, 12, 3);
  ctx.fill();

  ctx.fillStyle = "#3a4a6a";
  ctx.fillRect(cx - 5, cy + 8, 4, 5);
  ctx.fillRect(cx + 1, cy + 8, 4, 5);

  ctx.fillStyle = "#f2c99a";
  ctx.beginPath();
  ctx.arc(cx, cy - 6, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#3a2a1a";
  ctx.beginPath();
  ctx.arc(cx, cy - 8, 6.5, Math.PI, 0);
  ctx.fill();
  ctx.fillStyle = "#3a2a1a";
  if (facing === "down") {
    ctx.fillRect(cx - 3, cy - 6, 1.5, 1.5);
    ctx.fillRect(cx + 1.5, cy - 6, 1.5, 1.5);
  } else if (facing === "left") {
    ctx.fillRect(cx - 4, cy - 6, 1.5, 1.5);
  } else if (facing === "right") {
    ctx.fillRect(cx + 2.5, cy - 6, 1.5, 1.5);
  }
}
