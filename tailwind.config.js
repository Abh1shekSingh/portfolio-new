/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'sacramento': ['Sacramento', 'cursive'],
        'labelle': ['La Belle Aurore', 'cursive'],
        'lora':['Lora', 'serif'],
        'fira':['Fira Sans Condense', 'sans-serif'],
        'archivo':['Archivo Black', 'sans-serif']
      }
    },
  },
  plugins: [],
}