/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#345261",
        secondary: "#345220",
        active : "#345261"
      },
    },
  },
  plugins: [],
};
