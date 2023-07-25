import React from "react";
import styles from "./Dialogs.module.css"
import DialogItem from "./DialogItem";
import Message from "./Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messagesElements = state.messages.map(message => <Message message={message.message} id={message.id} key={message.id}/>)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={styles.Dialogs}>
            <p className={styles.header}>Dialogs</p>

            <div className={styles.wrapper}>
                <div className={styles.dialogItems}>
                    {dialogsElements}
                </div>

                <div className={styles.messages}>
                    <div>{messagesElements}</div>

                </div>

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