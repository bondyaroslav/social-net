import axios from "axios"
import {setIsAuthAC, setUserEmailAC, setUserIdAC, setUserLoginAC} from "../store/reducers/authReducer"

export const authMe = () => {
    return (dispatch) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then( response => {
                if (response.data.resultCode === 0) {
                    dispatch(setIsAuthAC(true))
                    const email = response.data.data.email
                    const id = response.data.data.id
                    const login = response.data.data.login
                    dispatch(setUserEmailAC(email))
                    dispatch(setUserIdAC(id))
                    dispatch(setUserLoginAC(login))
                }
            })
            .catch(error => {
                console.error("Error: ", error)
            })
    }
}