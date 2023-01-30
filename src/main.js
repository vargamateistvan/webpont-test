import "@babel/polyfill";
import "mutationobserver-shim";
import { createRouter, createWebHashHistory } from "vue-router";
import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import "@popperjs/core";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";

require("bootstrap");
require("popper.js");

const routes = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(i18n).use(router).mount("#app");
