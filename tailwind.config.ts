import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "monospace"],
        // Japanese pixel-style equivalent of `display`, for the house
        // signs / quick-jump buttons when the language toggle is on 日本語.
        "display-ja": ["var(--font-display-ja)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        // Cozy game palette — warm, low-saturation
        grass: {
          light: "#a8c96d",
          DEFAULT: "#7fae4e",
          dark: "#5c8637",
        },
        dirt: {
          light: "#c9a373",
          DEFAULT: "#a67c52",
          dark: "#7a5a3a",
        },
        water: {
          light: "#7dc7d6",
          DEFAULT: "#4a9db0",
          dark: "#2e6a7a",
        },
        sky: {
          DEFAULT: "#f7e9d0", // warm parchment sky (used for UI bg)
          dusk: "#e8b98a",
        },
        wood: {
          light: "#c98c5a",
          DEFAULT: "#8b5a3c",
          dark: "#5a3a26",
        },
        roof: {
          DEFAULT: "#c14e4e",
          dark: "#8a3535",
        },
        ink: {
          DEFAULT: "#3a2a1a", // warm dark for text
          light: "#5a4a3a",
        },
        // UI accents
        firefly: "#ffd166",
        petal: "#ef8fa3",
      },
      boxShadow: {
        pixel: "4px 4px 0 0 rgba(58, 42, 26, 0.9)",
        "pixel-sm": "2px 2px 0 0 rgba(58, 42, 26, 0.9)",
      },
    },
  },
  plugins: [],
} satisfies Config;
