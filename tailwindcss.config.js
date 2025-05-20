/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      // You can add custom animation, spacing, colors, etc. here
      animation: {
        gradientMove: "gradientMove 5s ease infinite",
      },
      keyframes: {
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
};