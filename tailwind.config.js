/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'labelle':['La Belle Aurore', 'cursive'],
        'syne':['Syne', 'sans-serif']
      }
    },
  },
  plugins: [],
}