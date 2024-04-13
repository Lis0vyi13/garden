/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      green: "#339933",
      hoverGreen: "#1e641e",
      black: "#000",
      white: "#fff",
      gray: "#8B8B8B",
      hoverGray: "#4d4d4d",
      red: "#ff0000",
      hoverRed: "#951113",
      divider: "#DDDDDD",
      transparent: "transparent",
      linearGreen1: "#339933",
      linearGreen2: "#0B710B",
      lightGray: "#F1F3F4",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      lgXl: "1200px",
      xl: "1390px",
    },
  },
  plugins: [],
};

