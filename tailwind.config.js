/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--plus-jakarta-sans)", "sans-serif"],
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.2)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "3000" },
          "100%": { strokeDashoffset: "0" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        blob: "blob 6s infinite",
        "draw-line": "drawLine 10s linear infinite",
        "slide-right": "slideRight 20s linear infinite",
        "slide-left": "slideLeft 20s linear infinite",
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
};
