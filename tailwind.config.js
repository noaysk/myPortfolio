/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '7xl': ['4.5rem', {
          lineHeight: '4.25rem',
          letterSpacing: '-0.006em',
          fontWeight: '800',
        }],
      }
      
    },
  },
  plugins: [require("daisyui")],
}

