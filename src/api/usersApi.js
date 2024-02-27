import axios from "axios"
import {
    followUserAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setUsersAC,
    unfollowUserAC
} from "../store/reducers/usersReducer"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const getUsers = (page, pageSize) => {
    return (dispatch) => {
        // dispatch(setIsFetchingAC(true))
        instance.get(`users?page=${page}&count=${pageSize}`)
            .then((response) => {
                dispatch(setUsersAC(response.data.items))
                // dispatch(setIsFetchingAC(false))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        instance.post(`follow/${userId}`)
            .then(() => {
                dispatch(followUserAC(userId))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        instance.post(`follow/${userId}`)
            .then(() => {
                dispatch(unfollowUserAC(userId))
            })
    }
}

export const setCurrentPage = (page) => {
    return (dispatch) => {
        dispatch(setCurrentPageAC(page))
    }
}