import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return (
        <div className={styles.Profile}>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;