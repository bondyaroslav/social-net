import React, { useEffect } from "react"
import Profile from "./Profile"
import styles from "./ProfileContainer.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setUserProfile } from "../../store/reducers/profileReducer"

const ProfileContainer = () => {
    const dispatch = useDispatch()
    let profile = useSelector((profile) => profile.profilePage.profile)
    useEffect(() => {
        const fetchProfile = () => {
            const url = `https://social-network.samuraijs.com/api/1.0/profile/2`
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok')
                    }
                    return response.json()
                })
                .then((json) => {
                    dispatch(setUserProfile(json))
                })
                .catch((error) => {
                    console.error('There has been a problem with your fetch operation:', error)
                })
        }
        fetchProfile()
    }, [dispatch])

    return (
        <div className={styles.ProfileContainer}>
            <Profile profile={profile} />
        </div>
    )
}

export default ProfileContainer
