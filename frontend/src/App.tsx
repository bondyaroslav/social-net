import './App.css'
import React, {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import Sidebar from "./components/Sidebar/Sidebar"
import ProfilePage from "./components/Profile/ProfilePage"
import NewsPage from "./components/News/NewsPage"
import Settings from "./components/Settings/Settings"
import MessagesPage from "./components/Messages/MessagesPage"
import UsersContainer from "./components/Users/UsersContainer"
import NotFoundPage from "./components/NotFoundPage"
import AuthModal from "./components/Auth/AuthModal"
import {useGetIsUserAuthQuery} from "./api/authService"

const App = () => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
    const { data, error, isLoading } = useGetIsUserAuthQuery({})

    useEffect(() => {
        if (!isLoading) {
            if (!data || data.resultCode !== 0) {
                setIsAuthModalOpen(true)
            }
        }
    }, [data, error, isLoading])

    return (
        <div className="App">
            {isAuthModalOpen ? (
                <AuthModal open={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
            ) : (
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
            )}
        </div>
    )
}

export default App