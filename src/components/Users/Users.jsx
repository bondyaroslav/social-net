import React, {useEffect} from "react"
import userPhoto from "../../assets/images/userPhoto.jpg"
import {NavLink} from "react-router-dom"
import Preloader from "../Preloader"
import {useDispatch} from "react-redux"
import axios from "axios"
import {Box, Container} from "@mui/system"
import {Button, Card, Pagination, Typography} from "@mui/material"

const Users = (
    {
        users,
        pageSize,
        totalUsersCount,
        currentPage,
        isFetching,
        followUserAC,
        unfollowUserAC,
        setUsersAC,
        setCurrentPageAC,
        setIsFetchingAC
    }) => {

    const dispatch = useDispatch()
    // const [users, setUsers] = useState([])
    // const users = useSelector( state => state.usersPage.users )
    // const [isFetching, setIsFetching] = useState(true)
    // const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        fetchUsers(currentPage, pageSize)
    }, [currentPage])

    const fetchUsers = (page, pageSize) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`, {withCredentials: true})
            .then((response) => {
                // setUsers(response.data.items)
                dispatch(setUsersAC(response.data.items))
                dispatch(setIsFetchingAC(false))
            })
    }

    const follow = (userId) => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, null, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    // setUsers(users.map(user => user.id === userId ? { ...user, followed: true } : user))
                    dispatch(followUserAC(userId))
                }
            })
    }

    const unfollow = (userId) => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    // setUsers(users.map(user => user.id === userId ? { ...user, followed: false } : user))
                    dispatch(unfollowUserAC(userId))
                }
            })
    }

    const onChangePage = (event, page) => {
        setCurrentPageAC(page)
    }

    return (
        <Container>
            {isFetching ?
                <Preloader/>
                :
                <Box>
                    {users.map((user) => (
                        <Card key={user.id} style={{display: "flex", alignItems: "flex-start"}}>
                            <Box style={{maxWidth: "12%"}}>
                                <NavLink to={`/profile/${user.id}`} style={{display: "flex", flexDirection: "column"}}>
                                    <img src={user.photos.small || userPhoto} style={{backgroundSize: "contain"}}/>
                                </NavLink>
                            </Box>
                            <Box>
                                <Typography style={{margin: 10}}>{user.name}</Typography>
                                {user.status
                                    ? <Typography style={{margin: 10}}>{user.status}</Typography>
                                    : <Typography style={{margin: 10}}>no status</Typography>
                                }
                                {user.followed
                                    ? <Button onClick={() => unfollow(user.id)}>unfollow</Button>
                                    : <Button onClick={() => follow(user.id)}>follow</Button>
                                }
                            </Box>
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