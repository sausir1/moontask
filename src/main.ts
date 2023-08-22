import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { generateGlobalComponents } from './utils/file-based-menu'

import App from './App.vue'
import router from './router'

const globalComponents = generateGlobalComponents()
const app = createApp(App)
globalComponents.forEach(({ name, definition }) => {
  app.component(name, definition)
})
app.use(createPinia())
app.use(router)

app.mount('#app')
