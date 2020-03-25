import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routerOptions = [
  { path: "/", name: "home", view: "Home", params: true },
  { path: "/about", name: "about", view: "About", params: true },
  { path: "/contact", name: "contact", view: "Contact", params: true },
  { path: "/fonts", name: "fonts", view: "Fonts" },
  { path: "/projects", name: "projects", view: "Projects", params: true },
  { path: "/people", name: "people", view: "People", params: true },
  { path: "/code-of-conduct", name: "coc", view: "COC", params: true },
  {
    path: "/fonts/manjari",
    name: "font-manjari",
    view: "Manjari",
    params: true
  },
  {
    path: "/fonts/#manjari",
    name: "font-manjari",
    view: "Manjari",
    params: true
  },
  { path: "/articles/:title", view: "Article" },
  { path: "/articles", view: "Article" },
  { path: "*", name: "404", view: "404", params: true }
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/views/${route.view}.vue`)
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
