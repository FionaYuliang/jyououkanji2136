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
    component: () => import("@/pages/index/index.vue"),
  },
  {
    path: "/detail",
    name: "detail",
    component: () => import("@/pages/detail/detail.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
