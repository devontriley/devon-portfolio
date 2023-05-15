/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      transitionDuration: {
        '5000': '5000ms'
      }
    }
  },
  plugins: [],
}

