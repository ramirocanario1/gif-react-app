/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#00C49A",
        color2: "#F8E16C",
        color3: "#FFC2B4",
        color4: "#303030",
        color5: "#121212",
      },
      fontFamily: {
        sans: ["Sen", "serif"],
        title: ["Gabarito", "cursive"],
      },
    },
  },
  plugins: [],
};
