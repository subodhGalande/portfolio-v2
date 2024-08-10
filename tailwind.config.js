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
      colors: {
        grey: "#b3b3b3",
      },
      animation: {
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      backgroundImage: {
        noise:
          "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22512%22 height=%22512%22 viewBox=%220 0 512 512%22%3E%3Crect width=%22100%%22 height=%22100%%22 fill=%22%23000000%22 /%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Crect width=%221%22 height=%221%22 x=%2213%22 y=%229%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2236%22 y=%2242%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22172%22 y=%2288%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2212%22 y=%22294%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22473%22 y=%2228%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2258%22 y=%22400%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2219%22 y=%22256%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22174%22 y=%22120%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22376%22 y=%2216%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2258%22 y=%22464%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22436%22 y=%22500%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22172%22 y=%22168%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2250%22 y=%22280%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22296%22 y=%22148%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22200%22 y=%2236%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2254%22 y=%22212%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2294%22 y=%22488%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22472%22 y=%22243%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22320%22 y=%22346%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22456%22 y=%22144%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22160%22 y=%22365%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22305%22 y=%22206%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22484%22 y=%22248%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2220%22 y=%22442%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22448%22 y=%22424%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22120%22 y=%220%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22464%22 y=%22484%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22488%22 y=%2216%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22296%22 y=%22264%22 /%3E%3Crect width=%221%22 height=%221%22 x=%220%22 y=%22304%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22442%22 y=%2299%22 /%3E%3Crect width=%221%22 height=%221%22 x=%22468%22 y=%22160%22 /%3E%3Crect width=%221%22 height=%221%22 x=%2268%22 y=%22376%22 /%3E%3C/g%3E%3C/svg%3E')",
      },
    },
    plugins: [],
  },
};
