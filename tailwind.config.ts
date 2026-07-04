import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 28px rgba(34, 211, 238, 0.22)",
        violetGlow: "0 0 32px rgba(168, 85, 247, 0.24)",
        cartoon: "0 12px 0 rgba(15,23,42,.16), 0 24px 36px rgba(14,116,144,.16)",
        soft: "0 8px 18px rgba(15,23,42,.16)",
      },
      backgroundImage: {
        "factory-grid":
          "linear-gradient(rgba(34,211,238,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
