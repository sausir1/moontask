import { computed } from 'vue'

export function createValidator(propName: string, allowedValues: any[]) {
  return (value: any) => {
    if (!allowedValues.includes(value)) {
      console.warn(
        `[${propName}]: only <${allowedValues.join(
          ' | ',
        )}> values are accepted. received unexpected value - "${value}"`,
      )
      return false
    }
    return true
  }
}

function useVariants() {}

const cvas = variantBuilder('AccordionItem')

const sizeVariants = cvas.addVariant('size', {
  sm: {
    wrapper: 'p-2',
    header: 'text-xs',
  },
  md: 'px-3 py-2',
})
