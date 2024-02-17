import './App.css'
import React, {useEffect} from "react"
import {Route, Routes} from "react-router-dom"
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"
import ProfileContainer from "./components/Profile/ProfileContainer"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import NotFoundPage from "./components/NotFoundPage"
import AuthPage from "./components/AuthPage"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {setIsAuthAC, setUserEmailAC, setUserIdAC, setUserLoginAC} from "./store/reducers/authReducer"

const App = ({store}) => {

    const dispatch = useDispatch()
    const authStatus = useSelector( state => (state.auth.isAuth) )
    const userId = useSelector( state => state.auth.id )

    useEffect(() => {
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
    }, [dispatch])

    if (authStatus === true) {
        return (
            <div className="App">
                <Sidebar userId={userId}/>
                <div className={"wrapper"}>
                    <Header/>
                    <Routes>
                        <Route path="/" element={ <ProfileContainer store={store} userId={userId} />}/>
                        <Route path="/profile/:userId"  element={ <ProfileContainer store={store} />}/>
                        <Route path="/dialogs/*" element={ <DialogsContainer store={store} />}/>
                        <Route path="/users" element={ <UsersContainer />}/>
                        <Route path="/news" element={<News />}/>
                        <Route path="/music" element={<Music />}/>
                        <Route path="/settings" element={<Settings />}/>
                        <Route path="*" element={<NotFoundPage />}/>
                    </Routes>
                </div>
            </div>
        )
    } else return <AuthPage/>
}

export default App