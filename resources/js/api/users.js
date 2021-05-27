import axios from "axios";

const usersApi = {
    /**
     * Get all available photographers
     *
     * @return JSON
     */
    get: () => axios.get("/api/v1/users/all"),
};

export default usersApi;
