import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.Profile}>
            <MyPosts/>
        </div>
    );
};

export default Profile;