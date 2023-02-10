/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,jsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'palen': {
        DEFAULT: '#6B7280',
        0:'#fff',
        50: '#CDD0D5',
        100: '#C2C5CC',
        200: '#ACB0BA',
        300: '#969BA7',
        400: '#7F8694',
        450:'#242424',
        500: '#6B7280',
        600: '#515761',
        700: '#383C43',
        800: '#1E2024',
        900: '#050506',

      },
      'flamingo': {
        DEFAULT: '#EF4444',
        50: '#FDEDED',
        100: '#FCDADA',
        200: '#F9B5B5',
        300: '#F58F8F',
        400: '#F26A6A',
        500: '#EF4444',
        600: '#E71414',
        700: '#B30F0F',
        800: '#800B0B',
        900: '#4C0707'
      },
      'blue': {
        DEFAULT: '#3B82F6',
        50: '#EBF2FE',
        100: '#D7E6FD',
        200: '#B0CDFB',
        300: '#89B4FA',
        400: '#629BF8',
        500: '#3B82F6',
        600: '#0B61EE',
        700: '#084BB8',
        800: '#063583',
        900: '#041F4D'
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
 },
  plugins: [],
}
