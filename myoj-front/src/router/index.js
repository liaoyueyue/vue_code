import { createRouter, createWebHistory } from "vue-router";
// 1. 定义路由组件.
import LoginView from "@/views/Login.vue";
import ManageView from "@/views/Manage.vue";
import TempView from "@/views/Temp.vue";

// 2. 定义路由
const routes = [
  { path: "/login", component: LoginView },
  { path: "/", component: ManageView },
  { path: "/manage", component: ManageView },
  { path: "/temp", component: TempView },
];

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

// 4. 导出路由
export default router;
