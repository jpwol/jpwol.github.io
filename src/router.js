import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Blog from "./pages/Blog.vue";
import Contact from "./pages/Contact.vue";

import projects from "./projects.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: { title: "Projects" },
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: { title: "Blog" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: { title: "Contact" },
  },
  ...projects.map((proj) => ({
    path: `/projects/${proj.slug}`,
    name: proj.name,
    component: proj.component,
    meta: { title: proj.name },
  })),
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
