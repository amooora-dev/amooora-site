// tailwind.config.js
import { COLORS } from './src/utils/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 isso é essencial para next-themes
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: COLORS
    },
  },
  plugins: [],
}
