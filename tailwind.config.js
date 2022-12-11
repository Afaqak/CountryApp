/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "md-min": "480px",
      },
      colors: {
        dark_blue: "hsl(209, 23%, 22%)",
        very_dark_blue: "hsl(207, 26%, 17%)",
        very_dark_blue_light_mode: "hsl(200, 15%, 8%)",
        dark_gray: "hsl(0, 0%, 52%)",
        very_light_gray: "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
}
