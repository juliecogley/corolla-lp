import type { Config } from "tailwindcss";

const config: Config = {
 content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
 theme: {
 extend: {
 colors: {
 brand: {
 pink: "#EFE5E5",
 text: "#3A3A3A",
 dark: "#2E2E2E",
 },
 },
 fontFamily: {
serif: ["Times New Roman", "Times", "serif"],
sans: ["var(--font-noto)", "Noto Sans JP", "sans-serif"],
},
 boxShadow: {
 card: "0 6px 24px rgba(0,0,0,.08)",
 },
 borderRadius: {
 hero: "32px",
 },
 },
 },
 plugins: [],
};

export default config;