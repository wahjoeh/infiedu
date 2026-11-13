import { createApp } from 'vue'
import './style.css'
import './assets/home.css'
import './assets/level.css'
import './assets/program.css'
import './assets/about.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
