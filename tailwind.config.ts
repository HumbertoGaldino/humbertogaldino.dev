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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'yellow': '#ffff00',
        'almostWhite':'#e0e0e0',
        'moonLanding':'#a7a7a7',
        'blackJournal':'#282828'
      },
      spacing: {
        'extraSmall': '0.5rem',
        'small': '1rem',
        'medium': '2rem',
        'large': '3rem',
        'superLarge': '4rem',
        'container': '80rem',
        'containerLarge': '99.2rem',
      },
    },
  },
  plugins: [],
};
export default config;
