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
        foreground: "#212529",
        background: "#FFF",
        primary: "#C8A53F",
        "muted-primary": "#F6F4ED",
        muted: "#E8E8E8",
        destructive: "#f44336",
      },
    },
  },
};
