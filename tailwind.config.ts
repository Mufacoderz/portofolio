import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream:        "#f0ead8",
        "cream-dim":  "#e2d9c3",
        "cream-deep": "#cfc5aa",
        parchment:    "#f7f3e9",
        army:         "#3d4a35",
        "army-mid":   "#4f5e45",
        "army-light": "#6b7d5e",
        "army-pale":  "#8fa082",
        moss:         "#2a3324",
        earth:        "#7a6448",
        "earth-light":"#a68b65",
        sand:         "#b5a48a",
        "text-dark":  "#1e2219",
        "text-body":  "#3a3d32",
        "text-muted": "#7a7a6a",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        jetbrains:  ["var(--font-jetbrains)", "monospace"],
        outfit:     ["var(--font-outfit)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
