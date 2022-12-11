/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{html, js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        shiny: {
          '0%': {
            transform: 'scale(0) rotate(45deg)',
            opacity: '0'
          },
          '60%': {
            transform: 'scale(0) rotate(45deg)',
            opacity: '0.5'
          },
          '61%': {
            transform: 'scale(4) rotate(45deg)',
            opacity: '1'
          },
          '100%': {
            transform: 'scale(50) rotate(45deg)',
            opacity: '0'
          }
        }
      },
      animation: {
        shiny: 'shiny 3s ease-in-out infinite'
      },
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"],
        "Roboto": ["Roboto", "sans-serif"]
      },
      colors: {
        'light-color': '#9747FF',
        'dark-color': '#3B2166',
      }
    },
  },
  plugins: [
    // require('flowbite/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}