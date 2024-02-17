import React, {useState, useEffect} from "react"
import userPhoto from "../../assets/images/userPhoto.jpg"
import {NavLink} from "react-router-dom"
import Preloader from "../Preloader"
import {useDispatch} from "react-redux"
import axios from "axios"
import {Box, Container} from "@mui/system"
import {Button, Card, Pagination, Paper, Toolbar, Typography} from "@mui/material"
import {usersAPI} from "../../api/api"

const Users = ({pageSize, totalUsersCount, followUserAC, unfollowUserAC}) => {

    const dispatch = useDispatch()
    const [users, setUsers] = useState([])
    const [isFetching, setIsFetching] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

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

    const onChangePage = (event, page) => {
        setCurrentPage(page)
    }

    return (
        <Container>
            {isFetching ?
                <Preloader/>
                :
                <Box>
                    {users.map((user) => (
                        <Card key={user.id}>
                            <NavLink to={`/profile/${user.id}`}>
                                <img style={{width: "10%", height: "10%"}} src={user.photos.small || userPhoto}/>
                                <Typography>
                                    {user.name}
                                    {user.id}
                                    {user.status}
                                </Typography>
                                {user.followed}
                            </NavLink>
                        </Card>
                    ))}

                    <Pagination
                        count={Math.ceil(totalUsersCount / pageSize)}
                        page={currentPage}
                        onChange={onChangePage}
                    >
                    </Pagination>
                </Box>
            }
        </Container>
    )
}

export default Users