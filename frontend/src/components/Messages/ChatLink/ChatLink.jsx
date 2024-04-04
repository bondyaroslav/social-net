import React from "react"
import {Typography} from "@mui/material"
import {Link} from "react-router-dom"
import {Box} from "@mui/system"
import {useDispatch} from "react-redux"
import {setCurrentChatAC} from "../../../store/reducers/messagesReducer"
import style from "./ChatLink.module.scss"

const ChatLink = ({id, userName, lastMessage}) => {
    const dispatch = useDispatch()

    return (
        <Link to={`/messages/${id}`} className={style.chatLink}>
            <Box className={style.Chat}
                 onClick={() => {dispatch(setCurrentChatAC(id))}}
            >
                <Typography className={style.chatName}>{userName}</Typography>
                <Typography className={style.lastMessage}>{lastMessage}</Typography>
            </Box>
        </Link>
    )
}

export default ChatLink