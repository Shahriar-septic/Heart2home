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
        slate: {
          DEFAULT: "#475569",
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
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
        "shimmer-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "button-shine": {
          "0%": { transform: "translateX(-140%) rotate(25deg)" },
          "20%, 100%": { transform: "translateX(240%) rotate(25deg)" },
        },
        "aurora-mesh": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "aurora-blob-1": {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(120px, -45px, 0) scale(1.15)" },
          "66%": { transform: "translate3d(-60px, 40px, 0) scale(0.9)" },
          "100%": { transform: "translate3d(0, 0, 0) scale(1)" },
        },
        "aurora-blob-2": {
          "0%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(-110px, 50px, 0) scale(1.18)" },
          "66%": { transform: "translate3d(70px, -40px, 0) scale(0.88)" },
          "100%": { transform: "translate3d(0, 0, 0) scale(1)" },
        },
        "aurora-blob-3": {
          "0%": { transform: "translate3d(0, 0, 0) scale(0.95)" },
          "50%": { transform: "translate3d(-40px, -30px, 0) scale(1.12)" },
          "100%": { transform: "translate3d(0, 0, 0) scale(0.95)" },
        },
        "heartbeat": {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.2)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.15)" },
          "70%": { transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        "glow-pulse": "glow-pulse 5s ease-in-out infinite",
        "float-gentle": "float-gentle 6s ease-in-out infinite",
        "shimmer-flow": "shimmer-flow 5s ease-in-out infinite",
        "button-shine": "button-shine 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "aurora-mesh": "aurora-mesh 12s ease-in-out infinite",
        "aurora-blob-1": "aurora-blob-1 11s ease-in-out infinite alternate",
        "aurora-blob-2": "aurora-blob-2 14s ease-in-out infinite alternate",
        "aurora-blob-3": "aurora-blob-3 9s ease-in-out infinite alternate",
        "heartbeat": "heartbeat 2.4s ease-in-out infinite",
      },
      spacing: {
        safe: "env(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [],
};

export default config;
