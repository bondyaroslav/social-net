import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const usersAPI = {
    getUsers(page, pageSize) {
        instance.get(`users?page=${page}&count=${pageSize}`)
            .then( response => {
                return response.data
            })
    },
    follow(userId) {
        instance.post(`follow/${userId}`)
            .then( response => response.data )
    },
    unfollow(userId) {
        instance.post(`follow/${userId}`)
            .then( response => response.data )
    }
}