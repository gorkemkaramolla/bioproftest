/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: [
        'Lucida\\ Grande',
        'Futura\\ PT\\ Demi',
        'HelveticaNeue-Light',
        'Helvetica\\ Neue\\ Light',
        'Helvetica\\ Neue',
        'Helvetica',
        'Arial',
        'Roboto',
        'Nunito',
        'sans-serif',
      ],
    },
    extend: {
      colors: {
        secondary: '#f5f5f5',
        white: '#ffffff',

        transparent: 'transparent',
        current: 'currentColor',
        primary: colors.gray,
        phospor: 'rgba(230, 255, 7, 0.863)',
      },
    },
  },
  plugins: [],
};
