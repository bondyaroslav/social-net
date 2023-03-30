import React from 'react';
import styles from './Main.module.css'
import Sidebar from "./Components/Sidebar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import {addPost} from "./redux/state";

const Main = (props) => {
    console.log(props)
    return (
        <div className={styles.Main}>

        </div>
    );
};

export default Main;