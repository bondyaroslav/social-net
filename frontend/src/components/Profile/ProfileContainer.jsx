import React, {useEffect} from "react"
import Profile from "./Profile"
import { useDispatch, useSelector } from "react-redux"
import { setUserProfileAC } from "../../store/reducers/profileReducer"
import {useParams} from "react-router-dom"
import axios from "axios"

const ProfileContainer = (props) => {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profilePage.profile)
    const authUserId = useSelector(state => state.auth.id)
    let {userId} = useParams()

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${props.userId || userId}`)
            .then((response) => {
                dispatch(setUserProfileAC(response.data))
            })
    }, [userId])

    return (
        <div>
            <Profile profile={profile} authUserId={authUserId}/>
        </div>
    )
}

export default ProfileContainer