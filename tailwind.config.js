/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
        'serif-display': ['"DM Serif Display"', 'Serif'],
      },
      colors: {
        lightblue: '#CBDBEB',
        darkbrown: '#272526',
      },
    },
  },
  plugins: [],
};
