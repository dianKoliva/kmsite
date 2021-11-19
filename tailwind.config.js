const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Faster One', ],
       'body': ['"Open Sans"',],
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '1.2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
    },
    colors:{
      red: {
        light: '#E9E0E4',
        DEFAULT: '#591133',
        dark: '#772149',
        lighter:'#F8F6F7',

        
      },
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      yellow: colors.amber,
    },
    fontSize:{
      'tiny': '13px',
      '3xl': '1.875rem',
      'xs': '.75rem',
      'sm': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
    },
    backgroundImage: {
      'cic': "url('/circle.png')",
      'back':"url('/back.png')",
      'about':"url('/about.png')",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
