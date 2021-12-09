import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";

import page_404 from "@/views/Page_404.vue";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  //首页
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { first_level: true, title: "一级页面" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: page_404,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  // history: createWebHashHistory(), //createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
