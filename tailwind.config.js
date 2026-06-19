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
        // Paleta premium, cálida y elegante — orientada a interiores.
        ink: {
          DEFAULT: "#14110E",
          900: "#1C1813",
          800: "#262019",
        },
        sand: {
          50: "#FBF9F5",
          100: "#F5F1EA",
          200: "#EBE4D8",
          300: "#DCD1BE",
        },
        clay: {
          DEFAULT: "#B07A3C",
          50: "#FAF3EA",
          100: "#F0E0CA",
          200: "#E0C193",
          300: "#CFA362",
          400: "#BE8A45",
          500: "#B07A3C",
          600: "#915F2C",
          700: "#714A24",
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
