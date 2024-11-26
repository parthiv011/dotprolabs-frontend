/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '960px',
      lg: '1200px',
    },
    extend: {
      fontFamily: {
        machina: ['"Neue Machina"', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        conthrax: ['Conthrax', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
