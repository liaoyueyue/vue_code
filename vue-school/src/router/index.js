import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MottoView from "../views/MottoView.vue";
import SceneryView from "../views/SceneryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/motto",
      name: "motto",
      component: MottoView,
    },
    {
      path: "/scenery",
      name: "scenery",
      component: SceneryView,
    },
  ],
});

export default router;
