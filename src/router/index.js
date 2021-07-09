import { createWebHashHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Games from "../views/Games.vue";
import Board from "../views/Board.vue";
import One from "../views/One.vue";
import Two from "../views/Two.vue";
import Pous from "../views/Pous.vue";
import Rows from "../views/Rows.vue";
import Svgs from "../views/Svgs.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/board",
    name: "Board",
    component: Board,
  },
  {
    path: "/games",
    name: "Games",
    component: Games,
  },
  {
    path: "/one",
    name: "One",
    component: One,
  },
  {
    path: "/two",
    name: "Two",
    component: Two,
  },
  {
    path: "/pous",
    name: "Pous",
    component: Pous,
  },
  {
    path: "/rows",
    name: "Rows",
    component: Rows,
  },
  {
    path: "/svgs",
    name: "Svgs",
    component: Svgs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
