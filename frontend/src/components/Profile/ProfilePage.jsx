import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { setUserProfile } from "../../store/reducers/profileReducer"
import {useParams} from "react-router-dom"
import axios from "axios"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPosts from "./MyPosts/MyPosts"
import Preloader from "../Preloader"

const ProfilePage = () => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profilePage.profile)
    const authUserId = useSelector( state => state.auth.id )
    let {userId} = useParams()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId || authUserId}`)
            .then((response) => {
                dispatch(setUserProfile(response.data))
            })
    }, [authUserId])

    return (
        <>
            {profile ? (
                <>
                    {authUserId === profile.userId ? (
                        <>
                            <ProfileInfo profile={profile} isItAuthUserAccount={true}/>
                            <MyPosts isItAuthUserAccount={true}/>
                        </>
                    ) : (
                        <>
                            <ProfileInfo profile={profile} isItAuthUserAccount={false}/>
                            <MyPosts/>
                        </>
                    )}
                </>
            ) : (
                <Preloader/>
            )}
        </>
    )
}

export default ProfilePage