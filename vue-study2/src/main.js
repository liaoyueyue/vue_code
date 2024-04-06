<<<<<<< HEAD
import "element-plus/dist/index.css";

import { createApp } from "vue";
import ElementPlus from "element-plus";
import locale from 'element-plus/dist/locale/zh-cn.js';

import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus, {locale});
app.mount("#app");
=======
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
>>>>>>> 80f3a9773694f75933c3cda3f842e22d6f24acde
