/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        modak: ["Modak", "system-ui"],
      },
      colors: {
        "button-bg": "#fddd4b",
        "golden-yellow": "#FFDF00",
      },
    },
  },
  plugins: [],
};
