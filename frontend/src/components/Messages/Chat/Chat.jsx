import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { sendMessage } from "../../../store/reducers/messagesReducer";
import style from "./Chat.module.scss";
import Message from "./Message";

const Chat = () => {
    const dispatch = useDispatch();
    const currentChat = useSelector((state) => state.messagesPage.currentChat);
    const messages = useSelector((state) => currentChat ? state.messagesPage.chats.find(chat => chat.id === currentChat.id)?.messages : []);
    const [messageText, setMessageText] = useState("");

    const onInputMessage = (text) => {
        setMessageText(text);
    }

    function isEmpty(str) {
        if (str.trim() === "") {
            return true
        }
        return false
    }

    const onSendMessage = async () => {
        if (currentChat) {
            if (!isEmpty(messageText)) {
                const newMessage = {
                    messageId: Date.now(),
                    messageSenderId: "me",
                    messageTakerId: currentChat.id,
                    messageText: messageText,
                    messageData: new Date().toISOString()
                };
                const response = await fetch("http://localhost:5000/api/messages", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newMessage)
                });
                const result = await response.json();
                if (result.success) {
                    dispatch(sendMessage({ chatId: currentChat.id, message: newMessage }));
                    setMessageText("");
                } else {
                    console.error("Error sending message:", result.message);
                }
            }
        }
    }

    useEffect(() => {
        setMessageText("");
    }, [currentChat]);

    return (
        <Box className={style.ChatPage}>
            <Box className={style.messages}>
                {currentChat ? (
                    <>
                        <Box className={style.userName}>
                            <Typography>{currentChat.userName}</Typography>
                        </Box>
                        {messages.length > 0 ? (
                            <>
                                {messages.map((message) => (
                                    <Box key={message.id} style={{ display: "flex", justifyContent: message.messageSenderId === "me" ? "flex-end" : "flex-start", width: "100%" }}>
                                        <Message date={message.date} author={message.author} text={message.text} />
                                    </Box>
                                ))}
                            </>
                        ) : (
                            <Typography className={style.noMessages}>no messages yet</Typography>
                        )}
                    </>
                ) : (
                    <Typography className={style.unSelectedChat}>chat not selected</Typography>
                )}
            </Box>

            <Box className={style.textFieldWrapper}>
                <TextField
                    sx={{ width: "70%", borderRadius: 50 }}
                    value={messageText}
                    onChange={(event) => { onInputMessage(event.target.value) }}
                    onKeyUp={(event) => { if (event.key === "Enter") { onSendMessage() } }}
                />
                <Button
                    sx={{ width: "30%", borderRadius: 10 }}
                    onClick={onSendMessage}
                >
                    send message
                </Button>
            </Box>
        </Box>
    )
}

export default Chat;
