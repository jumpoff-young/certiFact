/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        },
        letterSpacing: {
          '10p': '10%', // 10% letter-spacing
          '5p': '5%',   // 5% letter-spacing
          '15p': '15%',
        },
      },
      },
  plugins: [],
}
