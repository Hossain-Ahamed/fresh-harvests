/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary : '#737373',
      black : '#737373',
      green : '#737373',
      grey: {
        20 : '#737373',
        50 : '#737373',
        80 : '#737373',
        100 : '#737373',
      }
    },
  },
  plugins: [],
}

