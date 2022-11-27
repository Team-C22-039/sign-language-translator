/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/**/*.{.html, .js}",
        "./node_modules/flowbite/**/*.js"
    ],
    theme: {
        extend: {
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
        require('flowbite/plugin'),
    ],
}