import { createRouter, createWebHistory } from "vue-router";
import HelloApp from "../views/HelloApp.vue";

const routes = [
  {
    path: "/",
    name: "HelloApp",
    component: HelloApp,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/one_way_binding",
    name: "OneWayBinding",
    component:() =>  import("/src/views/OneWayBinding.vue"),
  },
  {
    path: "/two_way_binding",
    name: "TwoWayBinding",
    component: () => import("/src/views/TwoWayBinding.vue"),
  },
  {
    path: "/methods",
    name: "Methods",
    component: () => import("../views/Methods.vue"),
  },
  {
    path: "/computed",
    name: "Computed",
    component:()=> import("../views/Computed.vue"),
  },
  {
    path: "/scoped",
    name: "Scoped",
    component:()=> import("../views/ScopedStyle.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name:"NotFound",
    component:()=> import("../components/NotFound.vue"),
  },
  {
    path: "/lifecycleHook&Axios",
    name:"LifecycleHook",
    component: () => import("../views/LifecycleHook&Axios.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
