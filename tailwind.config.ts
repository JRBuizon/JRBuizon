import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { rotate: '0deg' },
          '100%': { rotate: '360deg' }
        }
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "yawhite": {
          DEFAULT: '#e2e2e2'
        },
        "ox-blue": {
          DEFAULT: '#011638'
        },
        "charcoal": {
          DEFAULT: '#364156'
        },
        "sage": {
          DEFAULT: '#C9CBA3'
        },
        "peach": {
          DEFAULT: '#FFE1A8'
        },
        "bitter": {
          DEFAULT: '#E26D5C'
        },
      }

    },
    fontFamily: {
      josefin: ["JosefinSans", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;
