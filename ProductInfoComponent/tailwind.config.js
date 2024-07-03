/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/App.jsx",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#3b6abf", // Color original
          light: "#5f8bdf", // Tonalidad más clara
          dark: "#2a4f8f", // Tonalidad más oscura
        },
        indigo: {
          DEFAULT: "#214cfe",
          light: "#4a6efe",
          dark: "#1a3cde",
        },
        purple: {
          DEFAULT: "#542273",
          light: "#7a4f8e",
          dark: "#3e1759",
        },
        pink: {
          DEFAULT: "#eb3a7c",
          light: "#f06292",
          dark: "#b82a5e",
        },
        yellow: {
          DEFAULT: "#e9f56a",
          light: "#eff77d",
          dark: "#d0e045",
        },
      },
    },
  },
  plugins: [],
};
