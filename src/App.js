import './App.css'
import React, {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import Header from "./Components/Header/Header"
import Sidebar from "./Components/Sidebar/Sidebar"
import ProfileContainer from "./Components/Profile/ProfileContainer"
import News from "./Components/News/News"
import Music from "./Components/Music/Music"
import Settings from "./Components/Settings/Settings"
import DialogsContainer from "./Components/Dialogs/DialogsContainer"
import UsersContainer from "./Components/Users/UsersContainer"
import NotFoundPage from "./Components/NotFoundPage"
import AuthPage from "./Components/AuthPage"

const App = ({store, dispatch}) => {

    const [auth, setAuth] = useState(null)
    useEffect(() => {
        fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`)
            .then( response => response.json() )
            .then( json => console.log(setAuth(json.messages[0])) )
    }, [])

    if (auth === "You are not authorized") { // !==
        return (
            <div className="App">
                <Header/>
                <div className="wrapper">
                    <Sidebar/>
                    <Routes>
                        <Route path="/profile" element={ <ProfileContainer store={store} dispatch={dispatch}/>}/>
                        <Route path="/profile/:userId"  element={ <ProfileContainer store={store} dispatch={dispatch}/>}/>
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
    } else {
        return <AuthPage/>
    }
}

export default App