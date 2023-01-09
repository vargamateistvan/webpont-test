import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import "@popperjs/core";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

require("bootstrap");
require("popper.js");

createApp(App).use(i18n).mount("#app");
