import { createApp } from 'vue'
import App from './App.vue'
import path from './pages/path'
import './style/index.css'
import { createPinia } from 'pinia'

createApp(App).use(path).use(createPinia()).mount('#app')
