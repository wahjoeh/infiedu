import { createApp } from 'vue'
import './style.css'
import './assets/home.css'
import './assets/level.css'
import './assets/program.css'
import './assets/about.css'
import App from './App.vue'
import router from './router'
import reveal from './directives/reveal'

createApp(App).directive('reveal', reveal).use(router).mount('#app')
