/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./public/**/*.svg"],
  theme: {
    extend: {
      typography: {
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      colors: {
        dark: '#111010',
      },
      fontSize: {
        '2xl': '1.75rem',
        '3xl': '2rem',
        'xxl': '12.25rem'
      },
      scale: {
        '150': '1.5',
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-left-fast-slow": {
          "0%": { transform: "translateX(0%)" },
          "8%": { transform: "translateX(-15%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slide-right-fast-slow": {
          "0%": { transform: "translateX(-50%)" },
          "8%": { transform: "translateX(-35%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-left-normal": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "slide-right-normal": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 25s linear infinite",
        "slide-right": "slide-right 25s linear infinite ",
        "slide-left-fast-slow": "slide-left-fast-slow 25s cubic-bezier(0.25, 0.1, 0.25, 1) infinite",
        "slide-right-fast-slow": "slide-right-fast-slow 25s cubic-bezier(0.25, 0.1, 0.25, 1) infinite",
        "slide-left-normal": "slide-left-normal 25s linear infinite",
        "slide-right-normal": "slide-right-normal 25s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
