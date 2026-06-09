/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2DD4BF',      // Teal/mint accent
        dark: '#0B1121',         // Dark background
        darkCard: '#111827',     // Slightly lighter dark
      },
    },
  },
  plugins: [],
}
