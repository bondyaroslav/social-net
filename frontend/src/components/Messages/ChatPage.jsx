import React, {useEffect, useState} from "react"
import {useSelector} from "react-redux"
import {Button, Card, TextField} from "@mui/material"
import {Box} from "@mui/system"

const ChatPage = () => {
    const currentChat = useSelector(state => state.messagesPage.currentChat)

    return (
        <Box style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 500,
            backgroundColor: "whitesmoke"
        }}>
            <Box>
                {currentChat
                    ? <>
                        <p>{currentChat.userName}</p>
                        {currentChat.messages
                            ? <>
                                {currentChat.messages.map((message) => (
                                    <Card key={message.id}>
                                        {message.text}
                                    </Card>
                                ))}
                            </>
                            : <p>no messages yet</p>
                        }
                    </>
                    : <p>chat not selected</p>
                }
            </Box>

            <Box style={{display: "flex", flexDirection: "row"}}>
                <TextField style={{width: "70%"}}/>
                <Button style={{width: "30%"}}>send message</Button>
            </Box>
        </Box>
    )
}


export default ChatPage