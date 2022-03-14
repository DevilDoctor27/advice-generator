const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '21.25rem',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'clr-light-cyan': 'hsl(193, 38%, 86%)',
        'clr-neon-green': 'hsl(150, 100%, 66%)',
        'clr-grayish-blue': 'hsl(217, 19%, 38%)',
        'clr-dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'clr-dark-blue': 'hsl(218, 23%, 16%)',
      },
    },
  },
  plugins: [],
}
