/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        redhat: ['RedHatDisplayVF', 'sans-serif'],
        saaseriesb: ['SaaSeriesBDOT', 'sans-serif'],
        saaseriesc: ['SaaSeriesCDOT', 'sans-serif'],
      }
    },
    colors: {
      naranja: '#F68217',
      negro: '#262626',
      clarito: '#F8F7F4',
      menosclarito: '#ECE7E1',
      blanco: '#FFFFFF',
      gris: '#A3988F'
    }
  },
  plugins: [],
};
