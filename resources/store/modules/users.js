import usersApi from "../../js/api/users";
//initial state
const state = {
    active: null,
};

// getter
const getters = {
    //
};

// actions
const actions = {
    /**
     * Get all users data
     *
     * @returns JSON
     */
    get({ commit }) {
        try {
            return usersApi.get();
        } catch (error) {
            if (process.env.NODE_ENV !== "production") {
                console.error(error);
            }
            return error.response.data;
        }
    },

    /**
     * Get specific user data
     *
     * @returns JSON
     */
    show({ commit }, user) {
        try {
            return usersApi.show(user);
        } catch (error) {
            if (process.env.NODE_ENV !== "production") {
                console.error(error);
            }
            return error.response.data;
        }
    },
};

const mutations = {
    //
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
