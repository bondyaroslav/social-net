import React from 'react'
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"

const Profile = ({store, profile}) => {

    return (
        <div className={styles.Profile}>
            <div className={styles.wrapper}>
                <ProfileInfo profile={profile}/>
                <MyPostsContainer/>
            </div>
        </div>
    );
};

export default Profile;