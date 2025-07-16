/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        text: "#ffffff",
        buttonPurple: "#D8B4FE",
        primaryGrey: "#5A6F73",
      },
      transformOrigin: {
        center: "center",
      },
    },
  },
  plugins: [],
};
