import type { Config } from "tailwindcss";

export default {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                army: "var(--army)",
                cream: "var(--cream)",
                earth: "var(--earth)",
                parchment: "var(--parchment)",
                muted: "var(--text-muted)",
                text: "var(--text)",
                "border-soft": "var(--border)",
                "border-strong": "var(--border-strong)",
            },

            fontFamily: {
                serif: ["Cormorant Garamond", "serif"],
                sans: ["Outfit", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
            },
        },
    },

    plugins: [],
} satisfies Config;