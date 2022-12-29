/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/imgs/scrollRope.webp')",
        "girl-fight": "url('/src/imgs/girlFight.webp')",
      }),
    },
  },
  plugins: [],
};
