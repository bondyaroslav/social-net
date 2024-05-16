import React, {useEffect, useState} from "react"
import userPhoto from "../../assets/images/userPhoto.jpg"
import {NavLink} from "react-router-dom"
import Preloader from "../Preloader"
import {Box} from "@mui/system"
import {Button, Card, Pagination, Typography} from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import {createNewChat, setCurrentChat} from "../../store/reducers/messagesReducer"
import {follow, unfollow} from "../../api/usersApi"

const Users = (
    {
        users,
        pageSize,
        totalUsersCount,
        isFetching,
        currentPage,
        setCurrentPageFunc,
        getUsers,
    }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        getUsers(currentPage, pageSize)
    }, [currentPage])

    const onChangePage = (event, page) => {
        setCurrentPageFunc(page)
    }

    const onSendMessageClick = (userId, userName) => {
        const newChat = {
            id: userId,
            userName: userName,
            messages: []
        }
        dispatch(createNewChat(newChat))
        dispatch(setCurrentChat(newChat.id))
    }

    return (
        <Box>
            {isFetching ?
                <Preloader/>
                :
                <Box>
                    {users.map((user) => (
                        <Card key={user.id}
                              style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  marginTop: 10,
                                  marginBottom: 10
                              }}>
                            <Box style={{display: "flex"}}>
                                <NavLink to={`/profile/${user.id}`}
                                         style={{
                                             display: "flex",
                                             flexDirection: "column",
                                             maxWidth: 120,
                                             height: 120
                                         }}
                                >
                                    <img src={user.photos.small || userPhoto} style={{width: 120}}/>
                                </NavLink>
                                <Box style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginLeft: 20
                                }}>
                                    <Typography style={{fontSize: 22}}>{user.name}</Typography>
                                    <Box>
                                        {user.status
                                            ? <Typography>{user.status}</Typography>
                                            : <Typography>no status</Typography>
                                        }
                                    </Box>
                                    <NavLink to={`/messages/${user.id}`}
                                             style={{
                                                 display: "flex",
                                                 flexDirection: "column",
                                                 textDecoration: "none"
                                             }}>
                                        <Button style={{width: 150, marginTop: 15}} onClick={() => {
                                            onSendMessageClick(user.id, user.name)
                                        }}>send message</Button>
                                    </NavLink>
                                </Box>
                            </Box>
                            <Box style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                alignContent: "center",
                                width: "20%",
                                height: 120
                            }}
                            >
                                {user.followed
                                    ? <Button onClick={() => dispatch(unfollow(user.id))}>unfollow</Button>
                                    : <Button onClick={() => dispatch(follow(user.id))}>follow</Button>
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
        </Box>
    )
}

export default Users