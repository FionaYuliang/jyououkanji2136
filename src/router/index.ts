import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Detail from "../pages/detail/index.vue";
import Home from "../pages/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    redirect: "/pages/home",
  },
  {
    path: "/pages/home",
    // name: "index",
    component: Home,
  },
  {
    path: "/pages/detail",
    // name: "detail",
    component: Detail,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
