require("./bootstrap");

import { createApp } from "vue";
// declare global vue components
import IndexPage from "./components/views/IndexPage";
// \\ declare global vue components
createApp({}).component("index-page", IndexPage).mount("#app");
