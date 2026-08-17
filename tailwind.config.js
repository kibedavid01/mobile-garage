/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        asphalt: {
          DEFAULT: "#1B1F27",
          light: "#252B36",
        },
        steel: "#4A5568",
        chrome: "#9CA3AF",
        paper: "#F6F4EF",
        hivis: "#F2C230",
        rust: "#C1442A",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        body: ["Work Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}