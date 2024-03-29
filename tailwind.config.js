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
        bgBColor: "#1D232A",
        textBColor: "#A2ACBA",
        bgColorW: "#FFE27A",
        bgColorS: "#FFC700",
        accentRed: "#7e0000",
      },
      backgroundImage: {
        wall: "url('/src/Assets/wall.png')",
        frame1: "url('/src/Assets/f1.png')",

      },
    },
  },
  plugins: [require("daisyui")],
};
