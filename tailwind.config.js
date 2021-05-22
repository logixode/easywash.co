const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      teal: colors.teal,
      orange: colors.orange,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
};
