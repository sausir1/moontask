export const toType = (input: unknown) => typeof input

export const isArray = (input: unknown) => Array.isArray(input)

export const isLooseObject = (input: unknown) => input !== null && toType(input) === 'object'

export const isObject = (input: unknown) => isLooseObject(input) && !isArray(input)

export const isString = (input: unknown) => toType(input) === 'string'

export const isNumber = (input: unknown) => toType(input) === 'number'

export const isFunction = (input: unknown) => toType(input) === 'function'
