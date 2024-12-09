import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'

import { store } from './store/index'

createApp(App).use(store).mount('#app')
import "bootstrap/dist/js/bootstrap.js"
