import React, { Fragment, useEffect, useState } from "react"
import { Box } from "@mui/system"
import userPhoto from "../../assets/images/userPhoto.jpg"
import { Button, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { follow, unfollow } from "../../api/usersApi"
import axios from "axios"
import { useDispatch } from "react-redux"
import { createNewChat } from "../../store/reducers/messagesReducer"

const ProfileInfo = ({ profile, isItAuthUserAccount }) => {

    const dispatch = useDispatch()
    const [isUserFollow, setIsUserFollow] = useState(null)
    const [photo, setPhoto] = useState(null)

    const getIsUserFollow = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${profile.userId}`, { withCredentials: true })
            .then((response) => {
                setIsUserFollow(response.data)
            })
    }

    useEffect(() => {
        getIsUserFollow()
    }, [profile.id, follow(), unfollow()])

    const onSendMessageClick = (userId, userName) => {
        const newChat = {
            id: userId,
            userName: userName,
            messages: []
        }
        dispatch(createNewChat(newChat))
    }

    const handleFileChange = (event) => {
        setPhoto(event.target.files[0])
    }

    const setUserPhoto = () => {
        if (photo) {
            const formData = new FormData()
            formData.append('image', photo)
            axios.put('https://social-network.samuraijs.com/api/1.0/profile/photo', formData, {withCredentials: true})
                .then(response => {
                    console.log('success', response.data)
                })
        }
    }

    useEffect(() => {
        setUserPhoto()
    }, [photo])

    return (
        <Fragment>
            <Box>
                {profile.photos.large
                    ? <img style={{ width: "100%", height: 150, objectFit: "cover" }} src={profile.photos.large} />
                    : <Box style={{ width: "100%", height: 150, backgroundColor: "whitesmoke" }}></Box>
                }
            </Box>
            <Box style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                {profile.photos.small
                    ?
                    <Box style={{display: "flex", flexDirection: "column"}}>
                        <img src={profile.photos.small} style={{width: 150, height: 150}}/>
                        {isItAuthUserAccount
                            ? <input type="file" accept="image/*" style={{width: 150}} onChange={handleFileChange}/>
                            : null
                        }
                    </Box>
                    :
                    <img src={userPhoto} style={{width: 150, height: 150}}/>
            }
            <Box style={{ marginLeft: 20 }}>
                    <Typography style={{ fontSize: 30 }}>{profile.fullName}</Typography>
                    <Box>
                        {profile.lookingForAJob
                            ? <Typography>looking for a job</Typography>
                            : <Typography>not looking for a job</Typography>
                        }
                    </Box>
                    <Box>
                        {isItAuthUserAccount
                            ? null
                            :
                            <NavLink to={`/messages/${profile.userId}`} onClick={() => {
                                onSendMessageClick(profile.userId, profile.fullName)
                            }}>
                                <Button>send message</Button>
                            </NavLink>
                        }
                    </Box>
                </Box>
                <Box style={{ display: "flex", alignItems: "center", marginLeft: 50 }}>
                    {isItAuthUserAccount
                        ? null
                        : <>
                            {isUserFollow
                                ? <Button onClick={() => dispatch(unfollow(profile.userId))} style={{ width: 120, height: 50, fontSize: 18 }}>unfollow</Button>
                                : <Button onClick={() => dispatch(follow(profile.userId))} style={{ width: 120, height: 50, fontSize: 18 }}>follow</Button>
                            }
                        </>
                    }
                </Box>
            </Box>
        </Fragment>
    )
}
export default ProfileInfo
