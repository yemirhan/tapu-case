module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["nunito", "sans-serif"],
    },
    extend: {
      screens: {
        xxs: '0px',
      },

      colors: {
        "primary-disabled": "#BBC3CF",
        "primary-black": "#121212",
        "accent-full": "#64738C",
        "accent-turquoise": "#0DAFC0",
        "primary-button": "#E82223",
        "accent-dark": "#4D4D4D",
        "accent-light": "#FAFAFA",

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
