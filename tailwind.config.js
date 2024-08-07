/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ds: "320px",
        xs: "380px",
        xxs: "420px",
        xl: "1280px",
        xxl: "1580px",
        doc: "620px"
      }
    },
  },
  plugins: [],
}