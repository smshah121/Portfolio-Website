/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // all your React files
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A192F",
        darkNavy: "#112240",
        neonBlue: "#64FFDA",
      },
    },
  },
  plugins: [],
}
