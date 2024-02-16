import React from "react"
import {Box} from "@mui/system"
import userPhoto from "../../assets/images/userPhoto.jpg"
import {Button, Typography} from "@mui/material"
import {NavLink} from "react-router-dom"

const ProfileInfo = ({profile, isItAuthUserAccount}) => {

    return (
        <Box>
            <Box>
                {profile.photos.large
                    ? <img style={{width: "100%", height: 150, objectFit: "cover"}} src={profile.photos.large}/>
                    : <Box style={{width: "100%", height: 150, backgroundColor: "whitesmoke"}}></Box>
                }
            </Box>

            <Box style={{display: "flex", flexDirection: "row", margin: 20}}>
                {profile.photos.small ?
                    <img src={profile.photos.small}/>
                    :
                    <img src={userPhoto} style={{width: "10%", height: "10%"}}/>
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
                        : <NavLink to={"/dialogs"}><Button>send message</Button></NavLink>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileInfo