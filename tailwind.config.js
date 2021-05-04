const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      workattack: {
        DEFAULT: "#ff811c",
        dark: "#1e252b",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "focus", "group-hover"],
      fontWeight: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
