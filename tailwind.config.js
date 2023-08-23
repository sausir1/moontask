/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'DM Sans',
      },
      borderWidth: {
        ds: {
          s: 'var(--border-width)',
          i: 'var(--border-i-width)',
        },
      },
      borderRadius: {
        ds: {
          // Interactive elements
          i: {
            xs: 'var(--radius-i-xs)',
            sm: 'var(--radius-i-sm)',
            md: 'var(--radius-i-md)',
          },
          // Static elements
          s: {
            xs: 'var(--radius-s-xs)',
            sm: 'var(--radius-s-sm)',
            md: 'var(--radius-s-md)',
            lg: 'var(--radius-s-lg)',
          },
        },
      },
      boxShadow: {
        ds: {
          xs: 'var(--shadow-xs)',
          sm: 'var(--shadow-sm)',
          md: 'var(--shadow-md)',
          lg: 'var(--shadow-lg)',
          xl: 'var(--shadow-xl)',
        },
      },
      colors: {
        ds: {
          piccolo: useOpacity('var(--piccolo)'),
          hit: useOpacity('var(--hit)'),
          beerus: useOpacity('var(--beerus)'),
          gohan: useOpacity('var(--gohan)'),
          goten: useOpacity('var(--goten)'),
          goku: useOpacity('var(--goku)'),
          bulma: useOpacity('var(--bulma)'),
          trunks: useOpacity('var(--trunks)'),
          popo: useOpacity('var(--popo)'),
          jiren: 'rgba(var(--jiren))',
          heles: 'rgba(var(--heles))',
          zeno: 'rgba(var(--zeno))',
          krillin: useOpacity('var(--krillin)'),
          chichi: useOpacity('--var(--chichi)'),
          roshi: useOpacity('--var(--roshi)'),
          dodoria: useOpacity('--var(--dodoria)'),
          cell: useOpacity('--var(--cell)'),
          raditz: useOpacity('--var(--raditz)'),
          whis: useOpacity('--var(--whis)'),
          frieza: useOpacity('--var(--frieza)'),
          nappa: useOpacity('--var(--nappa)'),
          'krillin-60': `rgba(var(--krillin-60))`,
          'krillin-10': `rgba(var(--krillin-10))`,
          'chichi-60': `rgba(var(--chichi-60))`,
          'chichi-10': `rgba(var(--chichi-10))`,
          'roshi-60': `rgba(var(--roshi-60))`,
          'roshi-10': `rgba(var(--roshi-10))`,
          'dodoria-60': `rgba(var(--dodoria-60))`,
          'dodoria-10': `rgba(var(--dodoria-10))`,
          'cell-60': `rgba(var(--cell-60))`,
          'cell-10': `rgba(var(--cell-10))`,
          'raditz-60': `rgba(var(--raditz-60))`,
          'raditz-10': `rgba(var(--raditz-10))`,
          'whis-60': `rgba(var(--whis-60))`,
          'whis-10': `rgba(var(--whis-10))`,
          'frieza-60': `rgba(var(--frieza-60))`,
          'frieza-10': `rgba(var(--frieza-10))`,
          'nappa-60': `rgba(var(--nappa-60))`,
          'nappa-10': `rgba(var(--nappa-10))`,
        },
      },
    },
  },
  plugins: [],
}

function useOpacity(input) {
  return ({ opacityValue }) => `rgba(${input}, ${opacityValue ?? 1})`
}
