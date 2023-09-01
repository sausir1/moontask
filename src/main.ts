import './assets/main.css'

import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import { generateGlobalComponents } from './utils/file-based-menu'

import App from './App.vue'
import router from './router'

const globalComponents = generateGlobalComponents(true)
const app = createApp(App)
globalComponents.forEach(({ name, definition }) => {
  // app.component(name, defineAsyncComponent(definition as any))
  app.component(name, definition)
})
app.use(createPinia())
app.use(router)

app.mount('#app')
