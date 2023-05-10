import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import routes from './router/index.js'
import App from './App.vue'
import './style/_app.scss'

const router = createRouter({
  scrollBehavior: () => ({ top: 0 }),
  history: createWebHistory(),
  routes
})

createApp(App)
.use(router)
.mount('#app')
