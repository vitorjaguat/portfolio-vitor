// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        signika: ['var(--signika-font)'],
      },
      colors: {
        primary: '#c1c1c1',
        secondary: '#909090',
        tertiary: '#242424',
      },
    },
  },
  plugins: [],
};
