/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0B',
        charcoal: '#121215',
        alabaster: '#F6F5F1',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8CC6B',
          dark: '#A98520',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
