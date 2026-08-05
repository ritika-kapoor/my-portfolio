// The overworld map. Each character = one tile.
//
// Ground / decoration:
//   G = grass       D = dirt          F = flowers
//   # = stone path  W = water (solid)
//   T = tree (solid)   R = rock (solid)   f = fence (solid)
//   . = out-of-bounds (solid)
//
// Buildings (uppercase = footprint / solid, lowercase = interactive door tile):
//   Top row (doors on the south side):
//     A / a = About        J / j = Journey     S / s = Skills
//   Bottom row (doors on the NORTH side so the player enters from the plaza):
//     P / p = Projects     H / h = Hobbies     C / c = Contact

export const TILE_SIZE = 32;

// 21 rows × 32 cols. Every row MUST be exactly 32 chars — see the assertion below.
export const MAP: readonly string[] = [
  "................................", //  0
  ".GTGGGFGGGGGGGGGGGGGGGGFGGGGTGG.", //  1
  ".GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.", //  2
  ".GGGAAAAGGGGGJJJJGGGGGSSSSGGGGG.", //  3  top buildings
  ".GGGAAAAGGGGGJJJJGGGGGSSSSGGGGG.", //  4
  ".GGGAAAAGGGGGJJJJGGGGGSSSSGGGGG.", //  5
  ".GGGGGaGGGGGGGGjGGGGGGGGsGGGGGG.", //  6  top doors
  ".GGGGG#GGGGGGGG#GGGGGGGG#GGGGGG.", //  7  stems
  ".GGGGG###################GGGGGG.", //  8  horizontal path A
  ".GGGWWGGGGGGTGGGGGGGTGGGGGGWWGG.", //  9  ponds + trees
  ".GGGWWGGGGGGGDDDDDGGGGGGGGWWGGG.", // 10  dirt plaza (spawn)
  ".GGGGGGGFGGGGGGFGGGGGGGFGGGGGGG.", // 11  flower belt
  ".GGGGG###################GGGGGG.", // 12  horizontal path B
  ".GGGGG#GGGGGGGG#GGGGGGGG#GGGGGG.", // 13  stems
  ".GGGGGpGGGGGGGGhGGGGGGGGcGGGGGG.", // 14  bottom doors (north-facing)
  ".GGGPPPPGGGGGHHHHGGGGGCCCCGGGGG.", // 15  bottom buildings
  ".GGGPPPPGGGGGHHHHGGGGGCCCCGGGGG.", // 16
  ".GGGPPPPGGGGGHHHHGGGGGCCCCGGGGG.", // 17
  ".GGGGGGGGGGGGGGGGGGGGGGGGGGGGGG.", // 18
  ".GGTGGGFGGGGGGGGGGGGGGGFGGGTGGG.", // 19
  "................................", // 20
];

export const MAP_HEIGHT = MAP.length;
export const MAP_WIDTH = MAP[0]!.length;

// Fail fast in dev if any row is the wrong width — the map is fragile to typos.
for (let i = 0; i < MAP.length; i++) {
  if (MAP[i]!.length !== MAP_WIDTH) {
    throw new Error(
      `world.ts: MAP row ${i} is ${MAP[i]!.length} chars, expected ${MAP_WIDTH}`,
    );
  }
}

// Solid tiles the player can't walk through.
const SOLID = new Set([
  "T", "R", "W", "f", ".",
  "A", "J", "S", "P", "H", "C",
]);

export function isSolid(char: string | undefined): boolean {
  return char === undefined || SOLID.has(char);
}

export function tileAt(tx: number, ty: number): string {
  if (ty < 0 || ty >= MAP_HEIGHT) return ".";
  const row = MAP[ty];
  if (!row || tx < 0 || tx >= row.length) return ".";
  return row[tx]!;
}

// ---------- sections ----------

export type SectionKey =
  | "about"
  | "journey"
  | "skills"
  | "projects"
  | "hobbies"
  | "contact";

export const DOOR_TO_SECTION: Record<string, SectionKey> = {
  a: "about",
  j: "journey",
  s: "skills",
  p: "projects",
  h: "hobbies",
  c: "contact",
};

export const SECTION_TITLE: Record<SectionKey, string> = {
  about: "About Me",
  journey: "Journey",
  skills: "Skills",
  projects: "Projects",
  hobbies: "Hobbies & Camera Roll",
  contact: "Say Hi",
};

// Short label used on the building sign — must fit on the roof plaque.
export const SECTION_SIGN: Record<SectionKey, string> = {
  about: "ABOUT",
  journey: "JOURNEY",
  skills: "SKILLS",
  projects: "PROJECTS",
  hobbies: "HOBBIES",
  contact: "CONTACT",
};

// ---------- landmarks (used by the renderer) ----------

export type Landmark = {
  tx: number;
  ty: number;
  w: number;
  h: number;
  roof: string;
  roofDark: string;
  section: SectionKey;
};

export const LANDMARKS: Landmark[] = [
  { tx: 4, ty: 3, w: 4, h: 3, roof: "#c14e4e", roofDark: "#8a3535", section: "about" },
  { tx: 13, ty: 3, w: 4, h: 3, roof: "#c19f4e", roofDark: "#8a6f35", section: "journey" },
  { tx: 22, ty: 3, w: 4, h: 3, roof: "#5c8ec1", roofDark: "#3a5f8a", section: "skills" },
  { tx: 4, ty: 15, w: 4, h: 3, roof: "#c1704e", roofDark: "#8a4a35", section: "projects" },
  { tx: 13, ty: 15, w: 4, h: 3, roof: "#a05cc1", roofDark: "#6f3a8a", section: "hobbies" },
  { tx: 22, ty: 15, w: 4, h: 3, roof: "#7fae4e", roofDark: "#5c8637", section: "contact" },
];

// Player spawn — on the dirt plaza in the middle of the map.
export const SPAWN = { tx: 15, ty: 10 };
