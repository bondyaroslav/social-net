import './App.css'
import React, {useEffect} from "react"
import {Route, Routes} from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import ProfilePage from "./components/Profile/ProfilePage"
import NewsPage from "./components/News/NewsPage"
import Settings from "./components/Settings/Settings"
import MessagesPage from "./components/Messages/MessagesPage"
import UsersContainer from "./components/Users/UsersContainer"
import NotFoundPage from "./components/NotFoundPage"
import AuthPage from "./components/AuthPage"
import {authMe} from "./api/authApi"
import {useAppDispatch, useAppSelector} from './hooks/hooks'

const App = () => {
    const dispatch = useAppDispatch()
    const authStatus = useAppSelector(state => state.auth.isAuth)

    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])

    return (
        <div className="App">
            {authStatus ? (
                <>
                    <Sidebar/>
                    <Routes>
                        <Route path="/" element={<ProfilePage/>}/>
                        <Route path="/profile/:userId" element={<ProfilePage/>}/>
                        <Route path="/messages" element={<MessagesPage/>}/>
                        <Route path="/messages/:userId" element={<MessagesPage/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<NewsPage/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </>
            ) : (
                <AuthPage/>
            )}
        </div>
    )
}

export default App