/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        foreground: "#4C4747",
        background: "#FFF",
        primary: "#0284C7",
        accent: "#F97316",
        white: "#FFFFFF",
        "muted-primary": "#F6F4ED",
        muted: "#E8E8E8",
        destructive: "#f44336",
      },
      fontFamily: {
        primary: ["Manrope", "sans-serif"],
        secondary: ["Playfair Display", "serif"],
      },
    },
  },
};
