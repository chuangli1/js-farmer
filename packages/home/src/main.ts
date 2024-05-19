import './assets/main.css'
import './neutralino.js'
import '@common/assets/css/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { init } from '@neutralinojs/lib'
import App from './App.vue'
import router from './router'
init()
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
