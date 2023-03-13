import React from 'react';
import styles from './Main.module.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import {Route, Routes, Link} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom'
import Profile from "./Components/Profile/Profile";

const Main = () => {
    return (
        <div className={styles.Main}>
            <Sidebar/>
            <Routes>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/dialogs" element={<Dialogs />}/>
            </Routes>
        </div>
    );
};

export default Main;