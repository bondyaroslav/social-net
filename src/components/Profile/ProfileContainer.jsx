import React, { useEffect } from "react"
import Profile from "./Profile"
import styles from "./ProfileContainer.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setUserProfile } from "../../store/reducers/profileReducer"
import {useParams} from "react-router-dom"
import axios from "axios"

const ProfileContainer = () => {
    const dispatch = useDispatch()
    let profile = useSelector((profile) => profile.profilePage.profile)
    let {userId} = useParams()

    const authUserId = useSelector(state => state.auth.id)

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                dispatch(setUserProfile(response.data))
            })
    }, [userId])

    return (
        <div className={styles.ProfileContainer}>
            <Profile profile={profile} authUserId={authUserId}/>
        </div>
    )
}

export default ProfileContainer