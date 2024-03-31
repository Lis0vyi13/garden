/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#339933",
      hoverGreen: "#1e641e",
      white: "#fff",
      gray: "#8B8B8B",
      hoverGray: "#4d4d4d",
      black: "#000",
      divider: "#DDDDDD",
      transparent: "transparent",
      linearGreen1: "#339933",
      linearGreen2: "#0B710B",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1390px",
    },
  },
  plugins: [],
};

