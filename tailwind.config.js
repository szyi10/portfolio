/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Sora",
    },
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        display: "Sora",
      },
    },
  },
  plugins: [],
}
