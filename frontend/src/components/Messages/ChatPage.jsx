import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {Button, Card, TextField} from "@mui/material"
import {Box} from "@mui/system"
import {sendMessageAC} from "../../store/reducers/messagesReducer"

const ChatPage = () => {
    const dispatch = useDispatch()
    const currentChat = useSelector((state) => state.messagesPage.currentChat)

    const [messages, setMessages] = useState([])

    const [messageText, setMessageText] = useState("")
    const onInputMessage = (text) => {
        setMessageText(text)
    }

    const sendMessage = (userId, userName, messageText) => {
        if (currentChat) {
            const newMessage = {
                id: new Date().getTime(),
                author: userName,
                text: messageText,
            }
            setMessages((prevMessages) => [...prevMessages, newMessage])
            dispatch(sendMessageAC(userId, newMessage))
            setMessageText("")
        }
    }

    useEffect(() => {
        setMessages(currentChat?.messages || [])
    }, [currentChat])

    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 500,
                backgroundColor: "whitesmoke",
            }}
        >
            <Box>
                {currentChat ? (
                    <>
                        <p>{currentChat.userName}</p>
                        {messages.length > 0 ? (
                            <>
                                {messages.map((message) => (
                                    <Card key={message.id}>{message.text}</Card>
                                ))}
                            </>
                        ) : (
                            <p>no messages yet</p>
                        )}
                    </>
                ) : (
                    <p>chat not selected</p>
                )}
            </Box>

            <Box style={{ display: "flex", flexDirection: "row" }}>
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

export default ChatPage
