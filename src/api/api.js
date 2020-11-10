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
    },
    follow(userId){
        return instance.post(`users/follow/${userId}`, {},)
            .then(response => {
                return response.data
            });
    },
    unFollow(userId){
        return instance.delete(`users/follow/${userId}`)
            .then(response => {
                return response.data
            });
    },
    getProfile(userId) {
        return instance.get(`profiles/${userId}`)
            .then(response => {
                return response.data
            });
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            });
    }
}