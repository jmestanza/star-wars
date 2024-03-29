import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        primary: "Matterhorn",
      },
      colors: {
        "sw-gray": "#b5b7b7",
      },
      width: {
        "people-card": "241px",
        "movie-card": "241px",
        "planet-card": "241px",
        "ship-card": "241px",
      },
      height: {
        "74px": "74px",
        "92vh": "92vh",
        "people-card": "330px",
        "movie-card": "330px",
        "planet-card": "240px",
        "ship-card": "330px",
      },
      animation: {
        pulse: "pulse 1.5s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        pulse: {
          "0%,100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
