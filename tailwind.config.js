/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
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
        mainPurpleLight:"rgba(99, 95, 199, 0.1)",
        mainPurpleHover: "#A8A4FF",
        red:"#EA5555",
        redHover:"#FF9898",
        border: "#E4EBFA",
        borderTodo:"#49C4E5",
        borderDo:"#8471F2",
        borderDone:"#67E2AE",
        linear:"#E9EFFA"
      },
    },
  },
  plugins: [],
};
