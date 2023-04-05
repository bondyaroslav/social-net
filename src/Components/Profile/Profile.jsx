import React from 'react';
import styles from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {
    return (
        <div className={styles.Profile}>
            <div className={styles.wrapper}>
                <ProfileInfo />
                <MyPosts posts={props.profilePage.posts}
                         newPostText={props.profilePage.newPostText}
                         dispatch={props.dispatch}
                         />
            </div>
        </div>
    );
};

export default Profile;