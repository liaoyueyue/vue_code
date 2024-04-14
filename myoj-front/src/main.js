import './assets/main.css'
import 'element-plus/dist/index.css'

import ElementPlus from 'element-plus'

import Router from '@/router';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(Router)
app.use(ElementPlus)
app.mount('#app')
