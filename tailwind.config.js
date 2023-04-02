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
    extend: {
      colors: {
        secondary: '#f5f5f5',
        white: '#ffffff',

        transparent: 'transparent',
        current: 'currentColor',
        primary: colors.gray,
        phospor: 'rgba(230, 255, 7, 0.863)',
      },
      backgroundColor: {
        insta: {
          background:
            'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
          '--webkit-background-cli': 'text',

          'background-clip': 'text',
          '--webkit-text-fill-color': 'transparent',
        },
      },
    },
  },
  plugins: [],
};
