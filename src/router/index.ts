import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// import Index from "src/pages/index/index.vue";
import Detail from "src/pages/index/detail.vue";

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
    component: () => Detail,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
