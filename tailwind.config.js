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
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 3s 2s infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
