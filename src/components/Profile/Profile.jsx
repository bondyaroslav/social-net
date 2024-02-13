import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo"
import MyPostsContainer from "./MyPostsContainer"
import Preloader from "../Preloader"

const Profile = ({profile}) => {

    if (profile !== null) {
        return (
            <div className={styles.Profile}>
                <ProfileInfo profile={profile}/>
                <MyPostsContainer/>
            </div>
        )
    } else {
        return <Preloader/>
    }
}

export default Profile