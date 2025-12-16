import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      colors: {
        // Paleta "Calma Clínica Moderna"
        primary: {
          50: "#E8EEEE",
          100: "#D1DDDC",
          200: "#A3BCB9",
          300: "#749A97",
          400: "#46786F",
          500: "#2F5D62", // Primária: azul petróleo suave
          600: "#285355",
          700: "#204A4D",
          800: "#184244",
          900: "#0F393C",
        },
        secondary: {
          50: "#F9FBFB",
          100: "#F2F7F6",
          200: "#E5EFED",
          300: "#D8E7E5",
          400: "#BDD3CF",
          500: "#A7C4C2", // Secundária: azul claro acinzentado
          600: "#95B4B1",
          700: "#83A4A1",
          800: "#6D9290",
          900: "#577B78",
        },
        surface: {
          white: "#FFFFFF",
          light: "#F2F2F2",
        },
        text: {
          primary: "#2E2E2E", // Cinza grafite
          secondary: "#666666",
          tertiary: "#999999",
          inverse: "#FFFFFF",
        },
      },
      backgroundColor: {
        base: "#FFFFFF",
        elevated: "#F2F2F2",
      },
      textColor: {
        base: "#2E2E2E",
      },
    },
  },
  plugins: [],
};

export default config;
