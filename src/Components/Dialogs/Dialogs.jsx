import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/> )
    let messagesElements = props.messages.map( message => <Message message={message.message} id={message.id}/> )

    return (
        <div className={styles.Dialogs}>

            <p className={styles.header}>Dialogs</p>

            <div className={styles.wrapper}>
                <div className={styles.dialogItems}>
                    {dialogsElements}
                </div>

                <div className={styles.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs