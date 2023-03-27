import React from "react";
import styles from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={styles.ProfileInfo}>
            <div className={styles.background_photo}>background photo</div>
            <div className={styles.avatar}></div>
            <div className={styles.description}>description</div>
        </div>
    )
}

export default ProfileInfo