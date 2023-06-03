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
      },
      colors: {
        fontColor: "#00004A",
        bgColor: "#FCDC4A",
        accentRed: "#7e0000",
      },
      
    },
  },
  plugins: [require("daisyui")],
}

