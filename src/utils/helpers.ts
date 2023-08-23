import { isArray, isString } from './inspect'

export function capitalize(input: string) {
  return input[0].toUpperCase() + input.slice(1)
}
export function capitalizeAll(input: string | string[]) {
  if (!isArray(input)) input = input.split(' ')
  return input.map(capitalize)
}
