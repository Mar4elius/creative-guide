import axios from "axios";

const usersApi = {
    /**
     * Get all available photographers
     *
     * @return JSON
     */
    get: () => axios.get("/users"),
};
