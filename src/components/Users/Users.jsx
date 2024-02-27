import React, {useEffect} from "react"
import userPhoto from "../../assets/images/userPhoto.jpg"
import {NavLink} from "react-router-dom"
import Preloader from "../Preloader"
import {Box, Container} from "@mui/system"
import {Button, Card, Pagination, Typography} from "@mui/material"

const Users = (
    {
        users,
        pageSize,
        totalUsersCount,
        isFetching,
        currentPage,
        setCurrentPage,
        getUsers,
        follow,
        unfollow,
    }) => {

    useEffect(() => {
        getUsers(currentPage, pageSize)
    }, [currentPage])

    const onChangePage = (event, page) => {
        console.log(currentPage)
        setCurrentPage(page)
    }

    return (
        <Container>
            {isFetching ?
                <Preloader/>
                :
                <Box>
                    {users.map((user) => (
                        <Card key={user.id} style={{display: "flex", alignItems: "flex-start", margin: 10}}>
                            <Box style={{maxWidth: 120, height: 120}}>
                                <NavLink to={`/profile/${user.id}`} style={{display: "flex", flexDirection: "column"}}>
                                    <img src={user.photos.small || userPhoto} style={{width: 120}}/>
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
                    />
                </Box>
            }
        </Container>
    )
}

export default Users