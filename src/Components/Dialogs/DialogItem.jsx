import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/"

    return (
        <div className={styles.dialog}>
            <NavLink to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem