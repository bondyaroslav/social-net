import React, { useState, useEffect } from "react"
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/userPhoto.jpg"
import { NavLink } from "react-router-dom"
import Preloader from "../Preloader"

const Users = (props) => {
    const [users, setUsers] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        fetchUsers(props.currentPage, props.pageSize)
    }, [props.currentPage, props.pageSize])

    const fetchUsers = (page, pageSize) => {
        const url = `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.items)
                setIsFetching(false)
            })
    }

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)

    return (
        <div className={styles.Users}>
            {isFetching ? (
                <Preloader/>
            ) :
                (
                <div className={styles.pages}>
                    {pages.map((page) => (
                        <span
                            className={styles.page}
                            key={page}
                            onClick={() => fetchUsers(page, props.pageSize)}
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
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Users