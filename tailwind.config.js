/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      orbitron: ["Orbitron Variable", "sans-serif"],
      sans: ["Chivo Variable", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#F27218",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
