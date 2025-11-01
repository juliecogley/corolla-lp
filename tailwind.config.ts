import type { Config } from "tailwindcss";

const config: Config = {
 content: [
'./src/app/**/*.{ts,tsx,mdx}',
'./src/components/**/*.{ts,tsx}',
"./src/**/*.{js,ts,jsx,tsx,mdx}"],

 theme: {
 extend: {
 colors: {
 brand: {
 pink: "#EFE5E5",
 text: "#3A3A3A",
 dark: "#2E2E2E",
 },
 },
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
},
animation: {
marquee: 'marquee 30s linear infinite',
},


 fontFamily: {
serif: ["Times New Roman", "Times", "serif"],
sans: ["Zen Kaku Gothic New", "Noto Sans JP", "sans-serif"],
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