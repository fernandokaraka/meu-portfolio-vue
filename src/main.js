import './assets/main.css' // Geralmente é main.css ou base.css, dependendo da sua instalação

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')