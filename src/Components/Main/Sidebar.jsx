import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    console.log(styles)
    return (
        <div className={styles.Sidebar}>

            <nav className={styles.nav}>
                <div className={styles.item}><a href="#">Profile</a></div>
                <div className={styles.item}><a href="#">Messages</a></div>
                <div className={styles.item}><a href="#">News</a></div>
                <div className={styles.item}><a href="#">Music</a></div>
                <div className={styles.item}><a href="#">Settings</a></div>
            </nav>

        </div>
    );
};

export default Sidebar;