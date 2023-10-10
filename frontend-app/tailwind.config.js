/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'dropdown': '0px 2px 4px 0px rgba(142, 152, 158, 0.35)'
      }
    },
  },
  plugins: [],
}

