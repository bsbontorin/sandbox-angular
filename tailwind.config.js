/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  content: ['./src/**/*.{html,js}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
};
