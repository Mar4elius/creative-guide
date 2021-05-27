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
