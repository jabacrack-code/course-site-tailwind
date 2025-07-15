const colors = require('tailwindcss/colors')
// tailwind.config.js
module.exports = {
  purge: ["./*.html"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        orange: colors.orange,
        teal: colors.teal,
        "light-blue": colors.lightBlue,
      }
    },
  },
  plugins: [],
};
