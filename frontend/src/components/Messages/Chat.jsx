import React from "react"
import {Card, Typography} from "@mui/material"
import {Link} from "react-router-dom"

const Chat = ({id, messages, userName}) => {

    const lastMessage = messages[messages.length - 1].text

    return (
        <Link to={`/messages/${id}`}>
            <Card style={{display: "flex", marginTop: 10}}>
                <Typography>{userName}: {lastMessage}</Typography>
            </Card>
        </Link>
    )
}

export default Chat