import axios from "axios";

const usersApi = {
    /**
     * Get all available photographers
     *
     * @return JSON
     */
    get: () => axios.get("/api/v1/users/all"),

    /**
     * Get photographer data
     *
     * @return JSON
     */
    show: (payload) => axios.get(`/api/v1/users/${payload.id}`),
};

export default usersApi;
