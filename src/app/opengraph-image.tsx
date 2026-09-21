import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { PROFILE } from "./_game/content";

export const alt = `${PROFILE.name}: ${PROFILE.role} in Tokyo. A playable portfolio.`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#3a2a1a";
const PARCHMENT = "#f7e9d0";
const FIREFLY = "#ffd166";

const SKILLS = ["Rails", "React / Next.js", "Svelte", "AWS"];

export default async function OpengraphImage() {
  const portrait = await readFile(
    path.join(process.cwd(), "public", PROFILE.portrait),
  );
  const portraitSrc = `data:image/jpeg;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2e2418",
          padding: 48,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 48,
            width: "100%",
            height: "100%",
            padding: 48,
            background: PARCHMENT,
            border: `8px solid ${INK}`,
            borderRadius: 16,
            boxShadow: "14px 14px 0 0 rgba(58, 42, 26, 0.9)",
            color: INK,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            width={280}
            height={280}
            alt=""
            style={{
              width: 280,
              height: 280,
              objectFit: "cover",
              border: `6px solid ${INK}`,
              borderRadius: 12,
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>
              {PROFILE.name}
            </div>
            <div style={{ fontSize: 36, marginTop: 14 }}>
              {`${PROFILE.role} · Tokyo`}
            </div>
            <div style={{ fontSize: 28, marginTop: 22, opacity: 0.75 }}>
              A walkable portfolio. Wander over to any house and knock.
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 30 }}>
              {SKILLS.map((s) => (
                <div
                  key={s}
                  style={{
                    display: "flex",
                    fontSize: 24,
                    padding: "6px 18px",
                    border: `3px solid ${INK}`,
                    borderRadius: 999,
                    background: "#fff4e6",
                  }}
                >
                  {s}
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  padding: "6px 18px",
                  border: `3px solid ${INK}`,
                  borderRadius: 999,
                  background: FIREFLY,
                }}
              >
                1st place, 2025 company hackathon
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
