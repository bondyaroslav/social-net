import axios from "axios"
import {useDispatch} from "react-redux"

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

const dispatch = useDispatch

const getUsers = (page, pageSize) => {
    return (dispatch) => {
        instance.get(`users?page=${page}&count=${pageSize}`)
            .then( response => {
                dispatch()
            })
    }
}

const follow = (userId) => {
    instance.post(`follow/${userId}`)
        .then( response => {
            dispatch()
        })
}

const unfollow = (userId) => {
    instance.post(`follow/${userId}`)
        .then( response => {
            dispatch()
        })
}