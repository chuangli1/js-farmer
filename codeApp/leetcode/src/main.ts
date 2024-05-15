import './assets/main.css'
import './neutralino.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { init, os, app as nApp } from '@neutralinojs/lib'
import App from './App.vue'
import router from './router'
init()
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
