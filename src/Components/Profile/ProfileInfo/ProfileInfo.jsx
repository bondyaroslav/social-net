import React from "react"
import styles from "./ProfileInfo.module.css"

const ProfileInfo = ({profile}) => {
    return (
        <div>
            <div>
                <img className={styles.backgroundPhoto} src={profile.photos.large} alt="loading"/>
                <div className={styles.wrapper}>
                    <img src={profile.photos.small} alt="loading"/>
                    <div className={styles.aboutMeWrapper}>
                        <div className={styles.fullName}>{profile.fullName}</div>
                        <div>{profile.lookingForAJob === true ?
                            <p>looking for a job</p>
                            :
                            <p>not looking for a job</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo