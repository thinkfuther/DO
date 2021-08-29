import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import MoneyTree from "@/views/money_tree/index.vue";
import PointList from "@/views/money_tree/components/PointList.vue";
import FlowRecord from "@/views/money_tree/components/FlowRecord.vue";
import Recharge from "@/views/money_tree/components/Recharge.vue";
import WithDrawal from "@/views/money_tree/components/Withdrawal.vue";
import page_404 from "@/views/page_404.vue";
const routes: Array<RouteRecordRaw> = [
  //摇钱树首页
  {
    path: "/",
    name: "MoneyTree",
    component: MoneyTree,
  },
  // 我的积分
  {
    path: "/point",
    name: "point",
    component: PointList,
  },
  // 充值提现记录
  {
    path: "/record",
    name: "record",
    component: FlowRecord,
  },
  //充值
  {
    path: "/recharge",
    name: "recharge",
    component: Recharge,
  },
  //提现
  {
    path: "/withDrawal",
    name: "withDrawal",
    component: WithDrawal,
  },
  {
    path: "/:pathMatch(.*)", // 页面不存在的情况下会跳到404页面
    redirect: "/404",
    component: page_404,
  },
  //充值提现记录
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
