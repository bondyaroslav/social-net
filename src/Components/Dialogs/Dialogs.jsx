import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = (props) => {

    let state = props.dialogsPage
    let newMessageBody = state.newMessageBody

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id} key={message.id}/>)

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={styles.Dialogs}>
            <p className={styles.header}>Dialogs</p>
            <div className={styles.wrapper}>
                <div>{dialogsElements}</div>
                <div>{messagesElements}</div>
                <div className={styles.textarea_wrapper}>
                    <div><textarea placeholder={"enter"}
                                   value={newMessageBody}
                                   onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>send message</button></div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs