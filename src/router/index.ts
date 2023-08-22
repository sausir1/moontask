import { generateMenu } from '@/utils/file-based-menu'
import { createRouter, createWebHistory } from 'vue-router'

const routes = generateMenu()
console.log(routes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
