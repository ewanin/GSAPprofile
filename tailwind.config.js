/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
        mazius: ["Mazius", "sans-serif"],
        agraham: ["Agraham", "sans-serif"],
      },
      colors: {
        'primary': '#383838',
        'secondary': '#14cf93',
        'tertiary': "#a2a2a2"
      },
      rotate: {
        '9': '9deg',
        '3': '3deg',
      }
    },
  },
  plugins: [],
}