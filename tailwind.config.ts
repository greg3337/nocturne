import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C97A",
          dim: "#A08030",
        },
        obsidian: "#08080A",
        charcoal: "#111114",
        surface: "#161619",
        "surface-raised": "#1E1E22",
        cream: "#F5E6C8",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
