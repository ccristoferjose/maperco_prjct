/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MAPERCO brand system: refined blues, cool neutrals, and white space.
        brand: {
          primary: "#12146F",
          secondary: "#142172",
          gray: "#A5A4AA",
          white: "#FFFFFF",
          navy: "#090B3F",
          light: "#EEF1F8",
          soft: "#F7F8FB",
          border: "#DDE2EF",
        },
        ink: {
          DEFAULT: "#101244",
          900: "#090B3F",
          800: "#12146F",
        },
        sand: {
          50: "#F7F8FB",
          100: "#EEF1F8",
          200: "#DDE2EF",
          300: "#C8CFDE",
        },
        clay: {
          DEFAULT: "#12146F",
          50: "#EEF1F8",
          100: "#DDE2EF",
          200: "#BFC7DA",
          300: "#7F89B7",
          400: "#48549B",
          500: "#12146F",
          600: "#142172",
          700: "#0D104F",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
