import React from 'react';
import styles from './Main.module.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route, Routes} from "react-router-dom";

const Main = () => {
    return (
        <div className={styles.Main}>
            <Sidebar/>

            <Routes>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/dialogs" element={<Dialogs />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/music" element={<Music />}/>
                <Route path="/settings" element={<Settings />}/>
            </Routes>
        </div>
    );
};

export default Main;