import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo"
import Preloader from "../Preloader"
import {Box} from "@mui/system"
import MyPosts from "./MyPosts"

const Profile = ({profile, authUserId}) => {

    console.log(profile)

    return (
        profile
            ?
            <Box className={styles.Profile}>
                {authUserId === profile.userId
                ?
                    <>
                        <ProfileInfo profile={profile} isItAuthUserAccount={true}/>
                        <MyPosts isItAuthUserAccount={true}/>
                    </>
                :
                    <>
                        <ProfileInfo profile={profile} isItAuthUserAccount={false}/>
                        <MyPosts/>
                    </>
                }
            </Box>
            :
            <Preloader/>
    )
}

export default Profile