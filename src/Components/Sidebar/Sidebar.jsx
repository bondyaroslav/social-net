import React from 'react';
import styles from './Sidebar.module.css';
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>

            <nav className={styles.nav}>
                <div className={styles.item}><Link to="/profile">Profile</Link></div>
                <div className={styles.item}><Link to="/dialogs">Messages</Link></div>
                <div className={styles.item}><Link to="/news">News</Link></div>
                <div className={styles.item}><Link to="/music">Music</Link></div>
                <div className={styles.item} itemID={"settings"}><Link to="/settings">Settings</Link></div>
            </nav>

        </div>
    );
};

export default Sidebar;