import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  theme: {
    fontSize: mutateKeys(
      {
        9: ['.5625rem', '1rem'],
        10: ['.625rem', '1rem'],
        12: ['.75rem', '1rem'],
        14: ['.875rem', '1.5rem'],
        16: ['1rem', '1.5rem'],
        18: ['1.125rem', '1.5rem'],
        20: ['1.25rem', '2rem'],
        24: ['1.5rem', '2rem'],
        32: ['2rem', '2.5rem'],
        40: ['2.5rem', '3rem'],
        48: ['3rem', '3.5rem'],
        56: ['3.5rem', '4rem'],
        64: ['4rem', '4.5rem'],
        72: ['4.5rem', '4.75rem'],
      },
      { suffix: '-ds' },
    ),
    extend: {
      fontFamily: {
        sans: 'DM Sans',
      },
      borderWidth: {
        'ds-s': 'var(--border-width)',
        'ds-i': 'var(--border-i-width)',
      },
      borderRadius: {
        // Interactive elements
        'ds-i-xs': 'var(--radius-i-xs)',
        'ds-i-sm': 'var(--radius-i-sm)',
        'ds-i-md': 'var(--radius-i-md)',
        // Static elements
        'ds-s-xs': 'var(--radius-s-xs)',
        'ds-s-sm': 'var(--radius-s-sm)',
        'ds-s-md': 'var(--radius-s-md)',
        'ds-s-lg': 'var(--radius-s-lg)',
      },
      // boxShadow: {
      //   xs: 'var(--shadow-xs)',
      //   sm: 'var(--shadow-sm)',
      //   md: 'var(--shadow-md)',
      //   lg: 'var(--shadow-lg)',
      //   xl: 'var(--shadow-xl)',
      // },
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
          chichi: useOpacity('var(--chichi)'),
          roshi: useOpacity('var(--roshi)'),
          dodoria: useOpacity('var(--dodoria)'),
          cell: useOpacity('var(--cell)'),
          raditz: useOpacity('var(--raditz)'),
          whis: useOpacity('var(--whis)'),
          frieza: useOpacity('var(--frieza)'),
          nappa: useOpacity('var(--nappa)'),
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
  plugins: [
    // require('@tailwindcss/forms'),
    plugin(({ addVariant }) => {
      addVariant('item-start', [
        '&[data-item-start="true"]',
        '[data-item-start="true"] &',
      ])
      addVariant('item-end', [
        '&[data-item-end="true"]',
        '[data-item-end="true"] &',
      ])
      // experimental
      addVariant('item-sm', ['&[data-size="sm"]', '[data-size="sm"] &'])
      addVariant('aria-invalid', ['&[aria-invalid="true"]'])
    }),
  ],
}

function useOpacity(input) {
  return ({ opacityValue }) => `rgb(${input} / ${opacityValue ?? 1})`
}

function mutateKeys(inputObj, { prefix = '', suffix = '' }) {
  return forEachEntry(inputObj, ([key]) => ({
    key: `${prefix}${key}${suffix}`,
  }))
}

function forEachEntry(inputObject, cb) {
  return Object.entries(inputObject).reduce((sum, entry) => {
    const { key = entry[0], value = entry[1] } = cb(entry)
    sum[key] = value
    return sum
  }, {})
}
