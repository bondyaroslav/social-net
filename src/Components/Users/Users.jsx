import React, {useState, useEffect} from "react"
import styles from "./Users.module.css"
import userPhoto from "../../assets/images/userPhoto.jpg"
import {NavLink} from "react-router-dom"
import Preloader from "../Preloader"
import {useDispatch} from "react-redux";

const Users = ({currentPage, pageSize, totalUsersCount, followUserAC, unfollowUserAC, count}) => {

    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        fetchUsers(currentPage, pageSize)
    }, [currentPage, pageSize])

    const fetchUsers = (page, pageSize) => {
        const url = `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data.items)
                setIsFetching(false)
            })
    }

    // const isFollow = () => {
    //     fetch(`https://social-network.samuraijs.com/api/1.0/follow/${30500}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //         })
    // }

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const pages = Array.from({length: pagesCount}, (_, i) => i + 1)

    const follow = (userId) => {
        dispatch(followUserAC(userId))
    }

    const unfollow = (userId) => {
        dispatch(unfollowUserAC(userId))
    }

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
                                        <button onClick={() => { unfollow(user.id) }}>unfollow</button>
                                        :
                                        <button onClick={() => { follow(user.id) }}>follow</button>
                                }
                            </div>
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Users