require("./bootstrap");

import { createApp } from "vue";
// declare global vue components
import IndexPage from "./components/views/IndexPage";
import ShowUserPage from "./components/views/users/ShowPage";
// Vuex Store
import store from "../store/index";
// \\ declare global vue components
createApp({})
    .component("index-page", IndexPage)
    .component("show-user-page", ShowUserPage)
    .use(store)
    .mount("#app");
