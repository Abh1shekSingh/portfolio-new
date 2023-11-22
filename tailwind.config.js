/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'labelle':['La Belle Aurore', 'cursive'],
        'saira':['Saira', 'sans-serif'],
      },
      colors: {
        'bgdark':'#0e0e0c',
        'bglight':'#f4f4f6',
        'textdark':'#ddddd5',
        'textlight':'#0e0e0c',
      }
    },
  },
  plugins: [],
}