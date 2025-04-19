/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "custom-white": "#ffffff",
                "custom-grayText": "#777777",
                "custom-green": "#1CA855",
                "custom-yellow": "#ffbb3c",
                "custom-blue": "#62c8ff",
                "custom-black": "#000000",
            },
        },
    },
    plugins: [],
};