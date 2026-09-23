import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/context/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F8FAFC",
        surface: "#FFFFFF",
        "surface-warm": "#FFF7F0",
        border: "#E2E8F0",
        "border-subtle": "#F1F5F9",
        heart: {
          DEFAULT: "#E11D48",
          dark: "#BE123C",
          light: "#F43F5E",
          tint: "#FFE4E6",
          subtle: "#FFF1F2",
        },
        home: {
          DEFAULT: "#0D9488",
          dark: "#0F766E",
          light: "#14B8A6",
          tint: "#CCFBF1",
          subtle: "#F0FDFA",
        },
        sage: {
          DEFAULT: "#0D9488",
          tint: "#CCFBF1",
          subtle: "#F0FDFA",
          light: "#14B8A6",
          dark: "#0F766E",
        },
        clay: {
          DEFAULT: "#E11D48",
          dark: "#BE123C",
          light: "#F43F5E",
          tint: "#FFE4E6",
          subtle: "#FFF1F2",
        },
        indigo: {
          DEFAULT: "#4F46E5",
          dark: "#3730A3",
          light: "#6366F1",
          tint: "#EEF2FF",
        },
        ink: "#0F172A",
        slate: "#475569",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
        bn: ["var(--font-hind)", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        soft: "0 8px 30px -8px rgba(31, 36, 33, 0.08)",
        card: "0 10px 30px -10px rgba(31, 36, 33, 0.06), 0 2px 6px -1px rgba(31, 36, 33, 0.02)",
        lift: "0 20px 44px -16px rgba(74, 107, 86, 0.22)",
        glass: "0 8px 32px 0 rgba(74, 107, 86, 0.06), 0 1px 2px 0 rgba(31, 36, 33, 0.03)",
        float: "0 24px 50px -12px rgba(31, 36, 33, 0.12)",
        glow: "0 0 60px -12px rgba(74, 107, 86, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.85" },
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
        "float-gentle": "float-gentle 6s ease-in-out infinite",
      },
      spacing: {
        safe: "env(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [],
};

export default config;
