import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: "Name1"},
        {id: 2, name: "Name2"},
        {id: 3, name: "Name3"}
    ]

    let dialogsMessages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Bye"}
    ]


    return (
        <div className={styles.Dialogs}>
            <p className={styles.header}>Dialogs</p>

            <div className={styles.wrapper}>
                <div className={styles.dialogItems}>

                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>

                </div>

                <div className={styles.messages}>
                    <Message text={dialogsMessages[0].message} id={dialogsMessages[0].id}/>
                    <Message text={dialogsMessages[1].message} id={dialogsMessages[1].id}/>
                    <Message text={dialogsMessages[2].message} id={dialogsMessages[2].id}/>
                </div>
            </div>
        </div>
    )
}

export default Dialogs