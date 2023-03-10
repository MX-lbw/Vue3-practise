import { createRouter, createWebHashHistory } from "vue-router";
import App from "@/App.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "",
          component: import("@/views/home/index.vue"),
        },
        {
          path: "/item",
          component: import("@/views/item/index.vue"),
        },
        {
          path: "/score",
          component: import("@/views/score/index.vue"),
        },
      ],
    },
  ],
});

export default router;
