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
        primary: {
          DEFAULT: "#E63946",
          dark: "#C62E3A",
          light: "#FFB3BA",
        },
        secondary: {
          DEFAULT: "#1a1a1a",
          light: "#4A4A4A",
        },
        accent: {
          pink: "#FFE5E8",
          purple: "#B8A4D9",
          gold: "#FFD700",
        },
        "gray-light": "#F5F5F5",
        "gray-medium": "#9CA3AF",
        "gray-dark": "#4B5563",
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
