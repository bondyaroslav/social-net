import axios from "axios"
import {setIsAuth, setUserEmail, setUserId, setUserLogin} from "../store/reducers/authReducer"

export const authMe = () => {
    return (dispatch: Function) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then( response => {
                if (response.data.resultCode === 0) {
                    const email = response.data.data.email
                    const id = response.data.data.id
                    const login = response.data.data.login
                    dispatch(setUserEmail(email))
                    dispatch(setUserId(id))
                    dispatch(setUserLogin(login))
                    dispatch(setIsAuth(true))
                }
            })
            .catch(error => {
                console.error("Error: ", error)
            })
    }
}