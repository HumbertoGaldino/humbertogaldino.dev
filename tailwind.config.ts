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
        'midnight': '#121063',
        'mostarda': '#ffb647',
        'gray': '#999999',
        'green': '#50fa7b',
        'purple': '#896ceb',
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
      fontSize: {
        'small': '1.4rem',
        'medium': '1.8rem',
        'large': '2.4rem',
        'extraLarge': '3.4rem',
        'superLarge': '4.8rem',
      },
    },
  },
  plugins: [],
};
export default config;
