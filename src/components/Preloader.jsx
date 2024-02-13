import React from "react";
import styles from "./Users/Users.module.css";

const Preloader = () => {

    return (
        <img
            className={styles.loading}
            src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
            alt="loading"
        />)
}

export default Preloader