// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu-400": "Ubuntu Regular, sans-serif",
        "ubuntu-500": "Ubuntu Medium, sans-serif",
        "ubuntu-700": "Ubuntu Bold, sans-serif",
      },
      colors: {
        "light-blue": "hsl(206, 94%, 87%)",
        "marine-blue": "hsl(213, 96%, 18%)",
        "cool-gray": "hsl(231, 11%, 63%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "hsl(213, 96%, 18%)",
            secondary: "hsl(243, 100%, 62%)",
          },
        },
        dark: {
          colors: {
            primary: "hsl(213, 96%, 18%)",
            secondary: "hsl(243, 100%, 62%)",
          },
        },
      },
    }),
  ],
};
