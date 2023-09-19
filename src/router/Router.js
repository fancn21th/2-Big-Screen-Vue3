import { createRouter, createWebHashHistory } from "vue-router";
import BasicLayout from "../layouts/basicLayout/BasicLayout.vue";

const Home = () => import("@/pages/home/Home.vue");
const Foo = () => import("@/pages/foo/Foo.vue");
const Bar = () => import("@/pages/home/pages/bar/Bar.vue");

const routes = [
  { path: "/", redirect: { name: "nav" } },
  {
    path: "/nav/",
    name: "nav",
    component: BasicLayout,
    redirect: { name: "home" },
    children: [
      {
        path: "home",
        name: "home",
        component: Home,
        redirect: { name: "bar" },
        children: [
          {
            path: "bar",
            name: "bar",
            component: Bar,
          },
        ],
      },
      {
        path: "foo",
        name: "foo",
        component: Foo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
