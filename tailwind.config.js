/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      colors: {
        custGrey: "#1F2833",
        custLightGrey: "#C5C6C7",
        custLightBlue: "#66FCF1",
        custMidBlue: "#4fbdb5",
        custMixBlue: "#45A29E",
        custPython: "#3474a4"
      }
    },
  },
  plugins: [],
}

