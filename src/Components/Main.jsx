import React from 'react';
import Sidebar from "./Main/Sidebar";
import Content from "./Main/Content";
import styles from './Main.module.css'

const Main = () => {
    return (
        <div className={styles.Main}>
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Main;