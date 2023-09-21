import { isFunction } from '@/utils/inspect'

export function toKeys<T extends Record<string, unknown>>(
  object: T,
): (keyof T)[] {
  return Object.keys(object) as (keyof T)[]
}
export function toEntries<T extends Record<string, unknown>, K extends keyof T>(
  object: T,
): [K, T[K]][] {
  return Object.entries(object) as [K, T[K]][]
}

export function groupBy<T>(
  predicate: keyof T | ((item: T) => string | keyof T),
  array: T[],
) {
  const getCategory = isFunction(predicate)
    ? predicate
    : (item: T) => item[predicate]
  return array.reduce(
    (sum, item) => {
      const category = getCategory(item) as string
      if (!sum[category]) sum[category] = []
      sum[category].push(item)
      return sum
    },
    {} as Record<string, T[]>,
  )
}
