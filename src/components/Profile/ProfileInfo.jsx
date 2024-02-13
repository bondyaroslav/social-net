import React from "react"
import {Box} from "@mui/system"
import userPhoto from "../../assets/images/userPhoto.jpg"

const ProfileInfo = ({profile}) => {

    return (
        <Box>
            {profile.photos.large
                ? <img style={{width: "100%", height: 150, objectFit: "cover"}} src={profile.photos.large}/>
                : <Box style={{width: "100%", height: 150, backgroundColor: "whitesmoke"}}></Box>
            }

            <Box style={{display: "flex", flexDirection: "row", margin: 20}}>
                {profile.photos.small ?
                    <img src={profile.photos.small}/>
                    :
                    <img src={userPhoto} style={{width: "10%", height: "10%"}}/>
                }
                <Box style={{marginLeft: 20}}>
                    <p style={{fontSize: 30}}>{profile.fullName}</p>
                    <Box>
                        {profile.lookingForAJob
                            ? <p>looking for a job</p>
                            : <p>not looking for a job</p>
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ProfileInfo