/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  plugins: [require("tailwindcss-radix")()],
  theme: {
    extend: {
      fontFamily: {
        "roboto-medium": ["var(--font-roboto-medium)"],
      },
    },
  },
};
