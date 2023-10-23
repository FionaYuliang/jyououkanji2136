import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("src/pages/index/index.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("src/pages/index/detail.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
