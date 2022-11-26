/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'light-color': '#9747FF',
                'dark-color': '#3B2166',
            }
        },
    },
    plugins: [],
}