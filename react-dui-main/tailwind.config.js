/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        "rubik": ["Rubik", "sans-serif"],
      },
      colors: {
        "button-bg": "#fddd4b",
      },
    },
  },
  plugins: [],
};
