/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        'dark-blue': '#2B4C9D',
        'royal-purple': '#5271FF',
        'slate-gray': '#A1A5B0',
        'slate-grey': '#A1A5B0',
      },
    },
  },
  plugins: [],
};
