import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "yablue": {
          DEFAULT: '#187498'
        },
        "yagreen": {
          DEFAULT: '#36AE7C'
        },
        "yared": {
          DEFAULT: '#EB5353'
        },
        "yayellow": {
          DEFAULT: '#F9D923'
        },
        'yawhite': {
          DEFAULT: '#e2e2e2'
        }
      }

    },
    fontFamily: {
      josefin: ["JosefinSans", "sans-serif"],
    }
  },
  plugins: [],
};
export default config;
