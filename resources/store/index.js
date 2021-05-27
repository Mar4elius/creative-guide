import { createStore, createLogger } from "vuex";
// modules
import users from "../store/modules/users.js";
const debug = process.env.NODE_ENV !== "production";

export default createStore({
    modules: {
        users,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});
