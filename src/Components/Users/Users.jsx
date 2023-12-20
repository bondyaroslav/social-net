import React, {useState, useEffect} from "react"
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/userPhoto.jpg"
import {NavLink} from "react-router-dom"
import Preloader from "../Preloader"
import {useDispatch} from "react-redux";
import axios from "axios";

const Users = ({currentPage, pageSize, totalUsersCount, followUserAC, unfollowUserAC}) => {

    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        fetchUsers(currentPage, pageSize)
    }, [currentPage, pageSize])

    const fetchUsers = (page, pageSize) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`, {withCredentials: true})
            .then((response) => {
                setUsers(response.data.items)
                setIsFetching(false)
            })
    }

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = Array.from({length: pagesCount}, (_, i) => i + 1)

    const follow = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, null, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followUserAC(userId))
                }
            })
    }

    const unfollow = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowUserAC(userId))
                }
            })
    }


    return (
        <div className={styles.Users}>
            {isFetching ?
                (<Preloader/>)
                :
                (
                    <div className={styles.pages}>
                        {pages.map((page) => (
                            <span
                                className={styles.page}
                                key={page}
                                onClick={() => fetchUsers(page, pageSize)}
                            >
                            {page}
                        </span>
                        ))}
                        {users.map((user) => (
                            <div className={styles.user} key={user.id}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img
                                        className={styles.userPhoto}
                                        src={user.photos.small || userPhoto}
                                        alt="user"
                                    />
                                </NavLink>
                                <p>{user.id}</p>
                                <p>{user.name}</p>
                                <p>followed: {user.followed ? "true" : "false"}</p>
                                {
                                    user.followed
                                        ?
                                        <button onClick={() => { unfollow(user.id) }}>
                                            unfollow
                                        </button>
                                        :
                                        <button onClick={() => { follow(user.id) }}>
                                            follow
                                        </button>
                                }
                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Users