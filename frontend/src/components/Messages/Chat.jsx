import React from "react"
import {Typography} from "@mui/material"
import {Link} from "react-router-dom"
import {Box} from "@mui/system"
import {useDispatch} from "react-redux"
import {setCurrentChatAC} from "../../store/reducers/messagesReducer"

const Chat = ({id, userName}) => {
    const dispatch = useDispatch()

    return (
        <Link to={`/messages/${id}`}>
            <Box style={{
                display: "flex",
                height: 50,
                backgroundColor: "bisque",
            }}
                 onClick={() => {dispatch(setCurrentChatAC(id))}}
            >
                <Typography>{userName}</Typography>
            </Box>
        </Link>
    )
}

export default Chat