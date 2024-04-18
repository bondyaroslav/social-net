import './App.css'
import React, {useEffect} from "react"
import {Route, Routes} from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import ProfileContainer from "./components/Profile/ProfileContainer"
import NewsPage from "./components/News/NewsPage"
import Settings from "./components/Settings/Settings"
import MessagesPage from "./components/Messages/MessagesPage"
import UsersContainer from "./components/Users/UsersContainer"
import NotFoundPage from "./components/NotFoundPage"
import AuthPage from "./components/AuthPage"
import {useDispatch, useSelector} from "react-redux"
import {authMe} from "./api/authApi"

const App = ({store}) => {
    const dispatch = useDispatch()
    const authStatus = useSelector( state => (state.auth.isAuth) )
    const userId = useSelector( state => state.auth.id )

    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])

    if (authStatus === true) {
        return (
            <div className="App">
                <Sidebar userId={userId}/>
                <Routes>
                    <Route path="/" element={ <ProfileContainer store={store} userId={userId} />}/>
                    <Route path="/profile/:userId"  element={ <ProfileContainer store={store} />}/>
                    <Route path="/messages" element={ <MessagesPage />}/>
                    <Route path="/messages/:userId" element={ <MessagesPage />}/>
                    <Route path="/users" element={ <UsersContainer />}/>
                    <Route path="/news" element={<NewsPage />}/>
                    <Route path="/settings" element={<Settings />}/>
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </div>
        )
    } else return <AuthPage/>
}

export default App