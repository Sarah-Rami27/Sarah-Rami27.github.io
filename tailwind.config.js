/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        "serif-display": ['"DM Serif Display"', "Serif"],
        brittany: ["Brittany", "Serif"],
      },
      colors: {
        lightblue: "#CBDBEB",
        darkbrown: "#272526",
        gray: "#686974",
        white: "#ffffff",
        offwhite: "#f5f9fe",
      },
      backgroundImage: {
        // eslint-disable-next-line quotes
        "ucr-belltower": "url('/public/belltower.png')",
      },
    },
  },
  plugins: [],
};
