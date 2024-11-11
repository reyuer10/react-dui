/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        "concert-one": ["Concert One", "sans-serif"],
      },
      colors: {
        "button-bg": "#fddd4b",
        "golden-yellow": "#FFDF00",
      },
      gridTemplateColumns: {
        // Custom grid column counts
        "custom-101": "repeat(1000, minmax(auto, 1fr))",
        "custom-6": "repeat(6, minmax(0, 1fr))",
      },
      animation: {
        "pulse-alternate-1.5sec": "pulseAlternate 1.5s infinite",
        "pulse-alternate-2sec": "pulseAlternate 2s infinite",
        "pulse-alternate-1sec": "pulseAlternate 1s infinite",
      },
      keyframes: {
        pulseAlternate: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
