/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      colors:{
        lightGrey:"#E4EBFA",
        mediumGrey:"#828FA3",
        mainPurple:"#635FC7",
       border:"#E4EBFA"

      },
    },
  },
  plugins: [],
}
