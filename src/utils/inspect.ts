export const toType = (input: unknown) => typeof input

export const isArray = (input: unknown): input is any[] => Array.isArray(input)

export const isLooseObject = (input: unknown): input is object =>
  input !== null && toType(input) === 'object'

export const isObject = (input: unknown): input is Record<string, unknown> =>
  isLooseObject(input) && !isArray(input)

export const isString = (input: unknown): input is string =>
  toType(input) === 'string'

export const isNumber = (input: unknown): input is number =>
  toType(input) === 'number'

export const isFunction = (input: unknown): input is (...args: any[]) => any =>
  toType(input) === 'function'
