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
      fontSize: {
        '2xl': '1.75rem',
        '3xl': '2rem',
        'xxl': '12.25rem'
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
      },
      animation: {
        "slide-left": "slide-left 25s linear infinite",
        "slide-right": "slide-right 25s linear infinite ",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
