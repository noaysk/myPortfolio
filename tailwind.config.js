/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "7xl": [
          "4.5rem",
          {
            lineHeight: "4.25rem",
            letterSpacing: "-0.006em",
            fontWeight: "800",
          },
        ],
        "d7xl": [
          "14.5rem",
          {
            lineHeight: "14.25rem",
            letterSpacing: "-0.006em",
            fontWeight: "1800",
          },
        ],
      },
      colors: {
        fontColor: "#00004A",
        bgColor: "#FCDC4A",
        accentRed: "#7e0000",
      },
      backgroundImage: {
        wall: "url('/src/Assets/wall.png')",
        wall1: "url('/src/Assets/w1.webp')",
        wall2: "url('/src/Assets/w2.webp')",
        flame1: "url('/src/Assets/flame1.jpg')",
        flame2: "url('/src/Assets/flame2.jpg')",
        flame3: "url('/src/Assets/flame3.jpg')",

      },
    },
  },
  plugins: [require("daisyui")],
};
