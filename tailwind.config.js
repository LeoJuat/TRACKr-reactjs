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
    screens: {
      mobileM: "375px",
      mobileL: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
