
import "element-plus/dist/index.css";

import { createApp } from "vue";
import ElementPlus from "element-plus";
import locale from 'element-plus/dist/locale/zh-cn.js';

import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus, {locale});
app.mount("#app");