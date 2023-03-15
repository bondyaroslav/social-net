import React from "react";
import styles from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className={styles.dialog}>
            <NavLink to={path + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.text}</div>
    )
}

const Dialogs = (props) => {

    return (
        <div className={styles.Dialogs}>
            <p className={styles.header}>Dialogs</p>

            <div className={styles.wrapper}>
                <div className={styles.dialogItems}>

                    <DialogItem name={"Name1"} id={"1"}/>
                    <DialogItem name={"Name2"} id={"2"}/>
                    <DialogItem name={"Name3"} id={"3"}/>

                </div>

                <div className={styles.messages}>
                    <Message text={"Hi"}/>
                    <Message text={"How are you"}/>
                    <Message text={"Bye"}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs