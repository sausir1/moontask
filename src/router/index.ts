import { generateMenu, getMarkdownContents } from '@/utils/file-based-menu'
import { createRouter, createWebHistory } from 'vue-router'

const routes = generateMenu()

const docs = getMarkdownContents('DOCS')
console.log(routes, docs)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes, ...docs],
})

export default router
