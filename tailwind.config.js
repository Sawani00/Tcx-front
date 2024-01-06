/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Gilroy: ["Gilroy-Regular", "sans-serif"],
    },
    extend: {
      textColor: {
        'theblue': '#3366cc',
        'thegreen': '#38CFBB',
      },
    },
  },
  plugins: [],
}

