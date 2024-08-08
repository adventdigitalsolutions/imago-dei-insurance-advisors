/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': {
          50: '#ecf4ff',
          100: '#ddeaff',
          200: '#c2d9ff',
          300: '#9cbeff',
          400: '#7598ff',
          500: '#5271ff',
          600: '#3649f5',
          700: '#2a39d8',
          800: '#2533ae',
          900: '#263389',
          950: '#161b50',
        },
      },
    },
    fontSize: {
      xs: ['clamp(0.64rem, 0vi + 0.64rem, 0.64rem)', '1rem'],
      sm: ['clamp(0.8rem, 0vi + 0.8rem, 0.8rem)', '1.25rem'],
      base: ['clamp(1rem, 0vi + 1rem, 1rem)', '1.5rem'],
      md: ['clamp(1.25rem, 0vi + 1.25rem, 1.25rem)', '1.65rem'],
      lg: ['clamp(1.56rem, 0vi + 1.56rem, 1.56rem)', '1.85rem'],
      xl: ['clamp(1.95rem, 0vi + 1.95rem, 1.95rem)', '2.25rem'],
      '2xl': ['clamp(2.44rem, 0vi + 2.44rem, 2.44rem)', '2.75rem'],
      '3xl': ['clamp(3.05rem, 0vi + 3.05rem, 3.05rem)', '3rem'],
      '4xl': ['clamp(3.81rem, 0vi + 3.81rem, 3.81rem)', '4rem'],
      '5xl': ['clamp(4.77rem, 0vi + 4.77rem, 4.77rem)', '5rem'],
      '6xl': ['clamp(5.96rem, 0vi + 5.96rem, 5.96rem)', '7.5rem'],
      '7xl': ['clamp(7.45rem, 0vi + 7.45rem, 7.45rem)', '8rem'],
      '8xl': ['clamp(9.31rem, 0vi + 9.31rem, 9.31rem)', '9rem'],
      '9xl': ['clamp(11.64rem, 0vi + 11.64rem, 11.64rem)', '12rem'],
    },
  plugins: [],
  }
}