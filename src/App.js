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