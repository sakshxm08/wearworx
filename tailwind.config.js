/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Poppins",
        titleFont: "Raleway",
      },
      screens: {
        mobile: "500px",
        tablets: "850px",
      },
    },
  },
  plugins: [],
};
