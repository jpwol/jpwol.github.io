export default [
  {
    name: "thorn.nvim",
    slug: "thorn",
    description: "A light and dark green colorscheme for Neovim, with extras",
    component: () => import("./pages/ProjectPages/Thorn.vue"),
  },
  {
    name: "bitwise-cli",
    slug: "bitwisecli",
    description: "A command-line arithematic REPL with bitwise support.",
    component: () => import("./pages/ProjectPages/Bitwise.vue"),
  },
];
