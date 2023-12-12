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
        primaryLight: {
          10: '#fa475c1a',
          85: '#fa475cd9',
          400: '#fa475c',
        },
        primaryDark: {
          10: '#E315811a',
          85: '#c72f79d9',
          400: '#c72f79',
        },
        secondary: {
          400: '#70bbe5',
        },
        tertiary: {
          400: '#191a38',
        },
        background: {
          400: '#EDEDED',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
