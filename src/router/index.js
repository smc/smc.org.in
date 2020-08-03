import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routerOptions = [
  { path: "/", name: "home", view: "Home", params: true },
  { path: "/about", name: "about", view: "About", params: true },
  { path: "/contact", name: "contact", view: "Contact", params: true },
  { path: "/fonts", name: "fonts", view: "Fonts" },
  { path: "/projects", name: "projects", view: "Projects", params: true },
  { path: "/research", name: "research", view: "Research", params: true },
  { path: "/people", name: "people", view: "People", params: true },
  { path: "/code-of-conduct", name: "coc", view: "COC", params: true },
  { path: "/media", name: "media", view: "Media", params: false },
  {
    path: "/fonts/manjari",
    name: "font-manjari",
    view: "Manjari",
    params: true,
  },
  {
    path: "/fonts/gayathri",
    name: "font-gayathri",
    view: "Gayathri",
    params: true,
  },
  {
    path: "/fonts/chilanka",
    name: "font-chilanka",
    view: "Chilanka",
    params: true,
  },
  {
    path: "/fonts/dyuthi",
    name: "font-dyuthi",
    view: "Dyuthi",
    params: true,
  },
  {
    path: "/fonts/anjali",
    name: "font-anjali",
    view: "Anjali",
    params: true,
  },
  {
    path: "/fonts/anjalioldlipi",
    name: "font-anjalioldlipi",
    view: "Anjali",
    params: true,
  },
  {
    path: "/fonts/keraleeyam",
    name: "font-keraleeyam",
    view: "Keraleeyam",
    params: true,
  },
  {
    path: "/fonts/uroob",
    name: "font-uroob",
    view: "Uroob",
    params: true,
  },
  {
    path: "/fonts/suruma",
    name: "font-suruma",
    view: "Suruma",
    params: true,
  },
  {
    path: "/fonts/karumbi",
    name: "font-karumbi",
    view: "Karumbi",
    params: true,
  },
  {
    path: "/fonts/meera",
    name: "font-meera",
    view: "Meera",
    params: true,
  },
  {
    path: "/fonts/rachana",
    name: "font-rachana",
    view: "Rachana",
    params: true,
  },
  {
    path: "/fonts/raghumalayalam",
    name: "font-raghumalayalam",
    view: "RaghuMalayalam",
    params: true,
  },
  {
    path: "/fonts/raghumalayalamsans",
    name: "font-raghumalayalamsans",
    view: "RaghuMalayalam",
    params: true,
  },
  { path: "/blog/:title", view: "Blog" },
  { path: "/blog", view: "Blog" },
  { path: "/articles/:title", view: "Article" },
  { path: "/articles", view: "Article" },
  { path: "*", name: "404", view: "404", params: true },
];

const routes = routerOptions.map((route) => {
  return {
    ...route,
    component: () => import(`@/views/${route.view}.vue`),
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
