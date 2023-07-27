import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={styles.Profile}>
            <div className={styles.wrapper}>
                <ProfileInfo />
                <MyPostsContainer store={props.store}/>
            </div>
        </div>
    );
};

export default Profile;