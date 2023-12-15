import React, { useEffect } from "react"
import Profile from "./Profile"
import styles from "./ProfileContainer.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setUserProfile } from "../../store/reducers/profileReducer"
import {useParams} from "react-router-dom";

const ProfileContainer = () => {
    const dispatch = useDispatch()
    let profile = useSelector((profile) => profile.profilePage.profile)

    let {userId} = useParams()

    if (userId === undefined) {
        userId = 29913
    }

    useEffect(() => {
        fetch(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                return response.json()
            })
            .then((json) => {
                dispatch(setUserProfile(json))
            })
    }, [dispatch]);



    return (
        <div className={styles.ProfileContainer}>
            <Profile profile={profile} />
        </div>
    )
}

export default ProfileContainer