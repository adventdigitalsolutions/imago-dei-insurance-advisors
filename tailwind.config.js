/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2f4ea4',
        'royal-purple': '#5f72ff',
        'slate-gray': '#8f99c2',
        'slate-grey': '#8f99c2',
        navy: '#16255c',
        'pale-blue': '#edf0ff',
        'medical-navy': '#253b8e',
        'medical-blue': '#4f63ff',
        'medical-sky': '#eef1ff',
        'clinical-border': '#d9e0ff',
        ink: '#29418f',
        'muted-ink': '#5a68a2',
      },
      fontFamily: {
        montserrat: ['var(--font-brand)', 'sans-serif'],
        lora: ['var(--font-brand)', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};
