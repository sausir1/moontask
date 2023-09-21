import { capitalizeAll } from './helpers'
import { toKeys } from './object'
import MarkdownParser from '@/layouts/MarkdownParser.vue'

export function generateMenu(rootPathName: string = 'Root') {
  const files = import.meta.glob('../views/**/*.vue', { eager: false })
  const paths = toKeys(files)
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

export function getMarkdownContents(rootPathName: string = 'Docs') {
  const files = import.meta.glob('../components/**/*.md', {
    eager: true,
    as: 'raw',
  })
  return toKeys(files).map((filePath) => {
    const url = filePath
      .replace('../components', '/docs')
      .replace('README', '')
      .replace('.md', '')
    const splitPath = url.split('/').filter(Boolean)
    let name: string = rootPathName
    if (splitPath.length > 0) {
      name = splitPath.at(-1)!
    }
    return {
      name: capitalizeAll(['docs', name]).join(' '),
      path: url.toLowerCase(),
      component: MarkdownParser,
      props: { markdown: files[filePath] },
    }
  })
}

export function generateGlobalComponents() {
  const files = import.meta.glob('../components/**/*.vue', {
    eager: true,
    import: 'default',
  })
  return toKeys(files).map((key) => ({
    name: key.split('/').at(-1)?.slice(0, -4) as string,
    definition: files[key],
  }))
}
