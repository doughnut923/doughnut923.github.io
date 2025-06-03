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
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
