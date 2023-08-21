/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          text: {
            100: 'var(--clr-text-100)',
            200: 'var(--clr-text-200)'
          },
          main: {
            100: 'var(--clr-main-100)',
            200: 'var(--clr-main-200)'
          },
          accent: {
            100: 'var(--clr-accent-100)',
            200: 'var(--clr-accent-200)'
          },
          bg: {
            100: 'var(--clr-bg-100)',
            200: 'var(--clr-bg-200)',
            300: 'var(--clr-bg-300)'
          }
        }
      }
    }
  },
  plugins: []
}
