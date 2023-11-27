/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        primary: {
          50: '#ffe1e5',
          100: '#ffbac2',
          200: '#ff929f',
          300: '#fb6e7e',
          400: '#fa475c',
          500: '#f3364c',
          600: '#eb273e',
          700: '#de1d33',
          800: '#c22134',
          900: '#a82433',
        },
        secondary: {
          50: '#f6fbfe',
          100: '#d3ecfa',
          200: '#b1dcf4',
          300: '#92cbeb',
          400: '#70bbe5',
          500: '#63afdc',
          600: '#56a4d1',
          700: '#4b98c4',
          800: '#448bb3',
          900: '#447c9c',
        },
        tertiary: {
          50: '#3539bc',
          100: '#323697',
          200: '#2d2f74',
          300: '#262754',
          400: '#191a38',
          500: '#141426',
          600: '#0d0d16',
          700: '#040407',
          800: '#000000',
          900: '#000000',
        },
        other: {
          50: '#FA475C',
          100: '#E31581',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
