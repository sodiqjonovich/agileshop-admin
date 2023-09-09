import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from './plugins/axios'

import './index.css'
import i18n from './locales/i18n'
import Icon from "./assets/icons/Icon.vue"

const app = createApp(App)

app.component('icon', Icon);

app.use(createPinia())
app.use(router)
app.use(i18n);
app.mount('#app')
