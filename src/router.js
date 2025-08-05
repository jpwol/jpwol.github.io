import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";
import Temp from "./pages/Temp.vue";

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
    path: "/secret",
    name: "For You",
    component: Temp,
    meta: { title: "For You" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
