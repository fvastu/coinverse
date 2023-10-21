/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const { withAnimations } = require('animated-tailwindcss');

module.exports = withAnimations({
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      height: {
        '9/10': '90%',
      },
      colors: {
        primary: '#FEBC02',
        secondary: '#ffffff',
        background: '#ffffff',
      },
      backgroundImage: {
        'gradient-radial':
          'radial-gradient(ellipse at center, #2C3E50 0%, #000000 100%);',
      },
      animation: {
        vote: 'vote 1s ease-in-out',
      },
      keyframes: {
        vote: {
          '0%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(-30deg)',
          },
          '75%': {
            transform: 'rotate(30deg)',
          },
        },
      },
      screens: {
        'below-lg': { max: '1024px' }, // New breakpoint for screens below 1024px
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-animatecss')],
});
