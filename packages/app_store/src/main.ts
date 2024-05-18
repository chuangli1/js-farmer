import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {  os, app as nApp } from '@neutralinojs/lib'
import App from './App.vue'
import router from './router'
const app = createApp(App)
os.showMessageBox('Confirm', 'Are you sure you want to quit?', 'YES_NO', 'QUESTION').then(
  (res: string) => {
    if (res == 'YES') {
      nApp.exit()
    }
  }
)

app.use(createPinia())
app.use(router)

app.mount('#app')
