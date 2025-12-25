/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            },
            colors: {
                'brand-yellow': '#FACC15',
                'brand-blue': '#1e3a8a',
            }
        },
    },
    plugins: [],
}
