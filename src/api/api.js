import * as axios from "axios";

const instance = axios.create( {
    baseURL: 'https://localhost:5001/api/',
    withCredentials: true
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    }

}