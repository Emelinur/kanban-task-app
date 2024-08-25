/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000112",
        veryDarkGreyBG:"#20212C",
        darkGrey: "#2B2C37",
        linesDark:"#3E3F4E",
        mediumGrey: "#828FA3",
        linesLight: "#E4EBFA",
        lightGreyBG: "#F4F7FD",
        mainPurple: "#635FC7",
        mainPurpleHover: "#A8A4FF",
        red:"#EA5555",
        redHover:"#FF9898",
        border: "#E4EBFA",
      },
    width:{
      "300":"18.75rem",
      "276":"17.25rem",
      "251":"15.688rem",
    },

    },
  },
  plugins: [],
};
