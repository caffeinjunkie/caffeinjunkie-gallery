/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        coolvetica: ['coolvetica-regular', 'sans-serif'],
        normal: ['Helvetica', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
