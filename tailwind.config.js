/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-google)"],
      },
      maxWidth: {
        "40px": "40px",
        "60px": "60px",
      },
      width: {
        "46vw": "46.4vw",
      },
      height: {
        "46vw": "46.4vw",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require('tailwindcss-animated')],
};
