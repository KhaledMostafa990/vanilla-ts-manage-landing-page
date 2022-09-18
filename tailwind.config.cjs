/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts}'],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
    },
    fontFamily: {
      primary: ['Be Vietnam Pro, sans-serif'],
    },
    extend: {
      colors: {
        primary: 'hsl(12, 88%, 59%)',
        'primary-200': 'hsl(12 88% 59% / 0.15)',
        secondary: 'hsl(228, 39%, 23%)',
        'Dark-Grayish-Blue': 'hsl(227, 12%, 61%)',
        'very-dark-blue': 'hsl(233, 12%, 13%)',
        'very-pale-ged': 'hsl(13, 100%, 96%)',
        'vary-light-gray': 'hsl(0, 0%, 98%)',
      },
    },
  },

  plugins: [],
};
