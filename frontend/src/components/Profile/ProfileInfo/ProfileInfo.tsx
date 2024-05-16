import React, { Fragment, useEffect, useState } from "react"
import { Box } from "@mui/system"
import userPhoto from "../../../assets/images/userPhoto.jpg"
import { Button, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"
import { follow, unfollow } from "../../../api/usersApi"
import axios from "axios"
import { useDispatch } from "react-redux"
import { createNewChat } from "../../../store/reducers/messagesReducer"
import style from "./ProfileInfo.module.scss"

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
            <Box className={style.profileInfoContainer}>
                <Box className={style.userPhotoContainer}>
                    {profile.photos.small
                        ?
                        <Fragment>
                            <img src={profile.photos.small} className={style.smallUserPhoto}/>
                            {isItAuthUserAccount
                                ? <input type="file" accept="image/*" className={style.photoInput} onChange={handleFileChange}/>
                                : null
                            }
                        </Fragment>
                        :
                        <img src={userPhoto} className={style.smallUserPhoto}/>
                    }
                </Box>
                <Box className={style.userInfoContainer}>
                    <Typography className={style.userName}>{profile.fullName}</Typography>
                    <Typography className={style.jobStatus}>
                        {profile.lookingForAJob ? "looking for a job" : "not looking for a job"}
                    </Typography>
                    <Box className={style.messageButtonContainer}>
                        {!isItAuthUserAccount && (
                            <NavLink to={`/messages/${profile.userId}`} onClick={() => {
                                onSendMessageClick(profile.userId, profile.fullName);
                            }}>
                                <Button className={style.messageButton}>send message</Button>
                            </NavLink>
                        )}
                    </Box>
                </Box>
                <Box className={style.followButtonContainer}>
                    {!isItAuthUserAccount && (
                        <>
                            {isUserFollow
                                ? <Button onClick={() => dispatch(unfollow(profile.userId))} className={style.followButton}>unfollow</Button>
                                : <Button onClick={() => dispatch(follow(profile.userId))} className={style.followButton}>follow</Button>
                            }
                        </>
                    )}
                </Box>
            </Box>
        </Fragment>
    )
}
export default ProfileInfo
