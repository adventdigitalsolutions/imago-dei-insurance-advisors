/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2B4C9D',
        'royal-purple': '#5271FF',
        'slate-gray': '#A1A5B0',
        'slate-grey': '#A1A5B0',
        navy: '#0d2137',
        'pale-blue': '#EEF2FF',
        'medical-navy': '#1F3A63',
        'medical-blue': '#2F6FAE',
        'medical-sky': '#EAF3FB',
        'clinical-border': '#D7E3EF',
        ink: '#1C2F46',
        'muted-ink': '#4D6077',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        lora: ['var(--font-lora)', 'serif'],
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
