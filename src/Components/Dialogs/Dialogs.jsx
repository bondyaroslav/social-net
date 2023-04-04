import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem";
import Message from "./Message";
import TextArea from "./TextArea";

const Dialogs = (props) => {


    let dialogsElements = props.store._state.dialogsPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogsPage.messages.map(message => <Message message={message.message} id={message.id}/>)

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

                <TextArea/>
            </div>
        </div>
    )
}

export default Dialogs