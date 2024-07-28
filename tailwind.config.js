/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "hero-height": "calc(100vh - 10rem)",
      },
      fontFamily: {
        heading: "Author, ui-serif",
        sans: "Roboto, ui-serif",
      },
    },
  },
  plugins: [],
};
