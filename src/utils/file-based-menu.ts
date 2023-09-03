import { capitalizeAll } from './helpers'
import { objKeys } from './object'

export function generateMenu(rootPathName: string = 'Root') {
  const files = import.meta.glob('../views/**/*.vue', { eager: false })
  const paths = objKeys(files)
    .sort((a, b) => (a.split('/').length >= b.split('/').length ? 1 : -1))
    .map((key) => {
      const _fixedPath = key
        .slice(8, -4)
        .replace(/\[([a-zA-Z0-9])\]/g, ':$1')
        .replace('index', '')
      const splitPath = _fixedPath.split('/').filter(Boolean)
      let name: string = rootPathName
      if (splitPath.length > 0) {
        name = splitPath.at(-1)!
      }
      return {
        name: capitalizeAll(name).join(' '),
        path: _fixedPath.toLowerCase(),
        component: files[key],
      }
    })
  return paths
}

export function generateGlobalComponents() {
  const files = import.meta.glob('../components/**/*.vue', { eager: false })
  return objKeys(files).map((key) => ({
    name: key.split('/').at(-1)?.slice(0, -4) as string,
    definition: files[key],
  }))
}
