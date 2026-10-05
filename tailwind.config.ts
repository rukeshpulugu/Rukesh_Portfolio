import type { Config } from "tailwindcss";
export default {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { bg: "rgb(var(--bg) / <alpha-value>)", card: "rgb(var(--card) / <alpha-value>)", fg: "rgb(var(--fg) / <alpha-value>)", mute: "rgb(var(--mute) / <alpha-value>)", line: "rgb(var(--line) / <alpha-value>)", accent: "rgb(var(--accent) / <alpha-value>)", accent2: "rgb(var(--accent2) / <alpha-value>)" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] } } },
  plugins: [],
} satisfies Config;
