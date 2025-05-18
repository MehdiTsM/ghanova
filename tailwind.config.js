/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: '#007727',
        customColor3: '#01521b',
        customColor2: '#090907',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}