/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/icons/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blu: "#6895D2",
        ylow: "#FDE767",
        rd: "#D04848",
        pnk: "#FF69B4"
      }
    },
  },
  plugins: [],
}

