import React from "react";
import styles from "./ProfileInfo.module.css"

const ProfileInfo = ({profile}) => {
    return (
        <div className={styles.ProfileInfo}>
            <div className={styles.background_photo}>background photo</div>
            <img src={profile.photos.small} alt="loading"/>
            <div>{profile.aboutMe}</div>
            <div>
                <div>{profile.contacts.facebook}</div>
                <div>{profile.contacts.website}</div>
                <div>{profile.contacts.twitter}</div>
                <div>{profile.contacts.instagram}</div>
                <div>{profile.contacts.github}</div>
            </div>
            <div>{profile.lookingForAJob}</div>
            <div>{profile.lookingForAJobDescription}</div>
            <div>{profile.fullName}</div>
            <div>{profile.userId}</div>
            <div className={styles.description}>description</div>
        </div>
    )
}

export default ProfileInfo