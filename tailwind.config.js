/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        "roboto-medium": ["var(--font-roboto-medium)"],
      },
    },
  },
};
