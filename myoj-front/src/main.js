import "./assets/main.css";
import "element-plus/dist/index.css";

import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";

import { createPinia } from "pinia";

import Router from "@/router";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
const Pinia = createPinia();

app.use(ElementPlus, {
  locale: zhCn,
});
app.use(Pinia);
app.use(Router);

app.mount("#app");

