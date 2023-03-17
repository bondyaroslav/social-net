import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.Profile}>
            <ProfileInfo />
            <MyPosts/>
        </div>
    );
};

export default Profile;