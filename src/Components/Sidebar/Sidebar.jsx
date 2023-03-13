import React from 'react';
import styles from './Sidebar.module.css';
import {Route, Routes, Link} from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";

const Sidebar = () => {
    console.log(styles)
    return (
        <div className={styles.Sidebar}>

            <nav className={styles.nav}>
                <div className={styles.item}><Link to="/profile">Profile</Link></div>
                <div className={styles.item}><Link to="/dialogs">Messages</Link></div>
                <div className={styles.item}><a href="src/Components/Main/Main#">News</a></div>
                <div className={styles.item}><a href="src/Components/Main/Main#">Music</a></div>
                <div className={styles.item}><a href="src/Components/Main/Main#">Settings</a></div>
            </nav>

        </div>
    );
};

export default Sidebar;