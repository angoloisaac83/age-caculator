/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'smm': {'max': '520px'},
        'mdd': {'min': '521px', 'max': '830px'}
      }
    },
  },
  plugins: [],
}