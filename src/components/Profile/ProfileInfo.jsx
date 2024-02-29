import React, {useEffect, useState} from "react"
import {Box} from "@mui/system"
import userPhoto from "../../assets/images/userPhoto.jpg"
import {Button, Typography} from "@mui/material"
import {NavLink} from "react-router-dom"
import {follow, unfollow} from "../../api/usersApi"
import axios from "axios"
import {useDispatch} from "react-redux"

const ProfileInfo = ({profile, isItAuthUserAccount}) => {

    const dispatch = useDispatch()
    const [isUserFollow, setIsUserFollow] = useState(null)

    const getIsUserFollow = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/follow/${profile.userId}`, {withCredentials: true})
            .then((response) => {
                setIsUserFollow(response.data)
            })
    }

    useEffect(() => {
        getIsUserFollow()
    }, [follow(), unfollow()])

    return (
        <Box>
            <Box>
                {profile.photos.large
                    ? <img style={{width: "100%", height: 150, objectFit: "cover"}} src={profile.photos.large}/>
                    : <Box style={{width: "100%", height: 150, backgroundColor: "whitesmoke"}}></Box>
                }
            </Box>
            <Box style={{display: "flex", flexDirection: "row"}}>
                {profile.photos.small
                    ? <img src={profile.photos.small}/>
                    : <img src={userPhoto} style={{width: "10%", height: "10%"}}/>
                }
                <Box style={{marginLeft: 20}}>
                    <Typography style={{fontSize: 30}}>{profile.fullName}</Typography>
                    <Box>
                        {profile.lookingForAJob
                            ? <Typography>looking for a job</Typography>
                            : <Typography>not looking for a job</Typography>
                        }
                    </Box>
                    {isItAuthUserAccount
                        ? null
                        : <NavLink to={`/messages/${profile.userId}`}><Button>send message</Button></NavLink>
                    }
                </Box>
                <Box style={{display: "flex", alignItems: "center", marginLeft: 50}}>
                    {isItAuthUserAccount
                        ? null
                        : <>
                            {isUserFollow
                                ? <Button onClick={() => dispatch(unfollow(profile.userId))} style={{width: 120, height: 50, fontSize: 18}}>unfollow</Button>
                                : <Button onClick={() => dispatch(follow(profile.userId))} style={{width: 120, height: 50, fontSize: 18}}>follow</Button>
                            }
                        </>
                    }
                </Box>
            </Box>
        </Box>
    )
}
export default ProfileInfo
