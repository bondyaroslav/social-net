import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo"
import MyPostsContainer from "./MyPostsContainer"
import Preloader from "../Preloader"

const Profile = ({profile}) => {

    return (
        profile
            ?
            <div className={styles.Profile}>
                <ProfileInfo profile={profile}/>
                <MyPostsContainer/>
            </div>
            :
            <Preloader/>
    )
}

export default Profile