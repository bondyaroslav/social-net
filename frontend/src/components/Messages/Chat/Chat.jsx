import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Button, Card, TextField, Typography} from "@mui/material"
import {Box} from "@mui/system"
import {sendMessageAC} from "../../../store/reducers/messagesReducer"
import style from "./Chat.module.scss"
import Message from "./Message"

const Chat = () => {
    const dispatch = useDispatch()
    const currentChat = useSelector((state) => state.messagesPage.currentChat)
    const [messages, setMessages] = useState([])
    const [messageText, setMessageText] = useState("")

    const onInputMessage = (text) => {
        setMessageText(text)
    }

    function isEmpty(str) {
        if (str.trim() === "") {
            return true
        }
        return false
    }

    const sendMessage = (userId, userName, messageText) => {
        if (currentChat) {
            const newMessage = {
                date: new Date().getTime(),
                author: userName,
                text: messageText,
            }
            if (isEmpty(newMessage.text)) {
                return null
            } else {
                setMessages((prevMessages) => [...prevMessages, newMessage])
                dispatch(sendMessageAC(userId, newMessage))
                setMessageText("")
            }
        }
    }

    useEffect(() => {
        setMessages(currentChat?.messages || [])
    }, [currentChat])

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
                                    <Message key={message.date} date={message.date} text={message.text}/>
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

            <Box style={{ display: "flex", flexDirection: "row", width: "100%" }}>
                <TextField
                    style={{ width: "70%" }}
                    value={messageText}
                    onChange={(event) => {onInputMessage(event.target.value)}}
                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            sendMessage(currentChat.id, currentChat.userName, messageText)
                        }
                    }}
                />
                <Button
                    style={{ width: "30%" }}
                    onClick={() => {sendMessage(currentChat.id, currentChat.userName, messageText)}}
                >
                    send message
                </Button>
            </Box>
        </Box>
    )
}

export default Chat
