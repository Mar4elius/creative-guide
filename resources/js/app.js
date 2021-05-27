require("./bootstrap");

import { createApp } from "vue";
// declare global vue components
import IndexPage from "./components/views/IndexPage";
// Vuex Store
import store from "../store/index";
// \\ declare global vue components
createApp({}).component("index-page", IndexPage).use(store).mount("#app");
