import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registo",
    name: "Registo",
    component: () => import("@/views/Registo.vue"),
  },
  {
    path: "/registou",
    name: "Registou",
    component: () => import("@/views/Registou.vue"),
  },
    {
    path: "/AI4K12",
    name: "AI4K12",
    component: () => import("@/views/AI4K12.vue"),
  },
  {
    path: "/repositorio",
    name: "Repositorio",
    component: () => import("@/views/Repository.vue"),
  },
  {
    path: "/about",
    name: "Acerca",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/tool",
    name: "Ver ferramentas",
    component: () => import("@/views/Tool.vue"),
  },
  {
    path: "/rtool",
    name: "Registar ferramenta",
    component: () => import("@/views/rTool.vue"),
  },
  {
    path: "/mtools",
    name: "Menu feramentas",
    component: () =>import("@/views/mtool.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    component: () =>import("@/views/Menu.vue")
  },
  {
    path: "/contato",
    name: "Contato",
    component: () =>import("@/views/contact.vue")
  },

  // Redirect to 404 page, if no match found
  {
    path: "*",
    component: () => import("@/views/Error404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
