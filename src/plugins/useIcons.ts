import { defineAsyncComponent, type App } from 'vue'

type IconName = keyof typeof import('@heroicons/vue/24/outline')
export type Icon = IconName extends `${infer Name}Icon` ? Name : never

const icons = import.meta.glob(
  ['../../node_modules/@heroicons/vue/24/outline/esm/*.js'],
  { eager: false },
)

export default {
  install(app: App<any>) {
    Object.entries(icons)
      .filter(([k]) => !k.endsWith('index.js'))
      .forEach(([name, definition]) => {
        name = name
          .replace('../../node_modules/@heroicons/vue/24/outline/esm/', '')
          .slice(0, -7)
          .slice(1)
          .toLowerCase()
        app.component(name, defineAsyncComponent(definition as any))
      })
  },
}
