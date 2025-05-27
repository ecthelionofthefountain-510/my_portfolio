/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // 🟢 detta är avgörande
  theme: {
    extend: {},
  },
  plugins: [
  require('@tailwindcss/line-clamp'),
],
};