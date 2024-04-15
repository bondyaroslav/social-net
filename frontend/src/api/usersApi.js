import axios from "axios"
import {
    followUser,
    setCurrentPage,
    setUsers,
    unfollowUser
} from "../store/reducers/usersReducer"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        instance.get(`users?page=${page}&count=${pageSize}`)
            .then((response) => {
                dispatch(setUsers(response.data.items))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        instance.post(`follow/${userId}`)
            .then(() => {
                dispatch(followUser(userId))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        instance.delete(`follow/${userId}`)
            .then(() => {
                dispatch(unfollowUser(userId))
            })
    }
}

export const setCurrentPageFunc = (page) => {
    return (dispatch) => {
        dispatch(setCurrentPage(page))
    }
}
