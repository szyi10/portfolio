/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      fontFamily: {
        display: "Kumbh Sans",
      },
    },
  },
  plugins: [],
}
