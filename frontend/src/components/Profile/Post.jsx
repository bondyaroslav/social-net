import React, {useRef, useState} from 'react'
import {Card, IconButton, Typography} from "@mui/material"
import {Box} from "@mui/system"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/Check'
import {useDispatch} from "react-redux"
import {deletePostAC, editPostTextAC} from "../../store/reducers/profileReducer"

const Post = ({ id, text, date }) => {
    const dispatch = useDispatch()
    const [isPostEditing, setIsPostEditing] = useState(false)
    const [editedText, setEditedText] = useState(text)
    const textAreaRef = useRef()

    const handleDelete = () => {
        dispatch(deletePostAC(id))
    }

    const editPost = () => {
        setIsPostEditing(true)
    }

    const handleTextAreaChange = (event) => {
        setEditedText(event.target.value)
    }

    const confirmEditingPost = () => {
        if (textAreaRef.current) {
            const newText = textAreaRef.current.value
            dispatch(editPostTextAC(id, newText))
            setIsPostEditing(false)
        }
    }

    return (
        <Card style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
            minHeight: 100,
            padding: 20,
            position: 'relative'
        }}>
            <Typography style={{ marginBottom: 10, fontSize: 16 }}>{date}</Typography>
            {isPostEditing ? (
                <textarea
                    ref={textAreaRef}
                    style={{
                        minHeight: 50,
                        margin: '10px 0',
                        maxWidth: "100%",
                        border: '1px solid #ccc',
                        borderRadius: 5,
                        padding: 5,
                        resize: 'vertical',
                        fontSize: 14
                    }}
                    value={editedText}
                    onChange={handleTextAreaChange}
                />
            ) : (
                <Typography style={{ overflowWrap: "break-word", marginBottom: 10 }}>{text}</Typography>
            )}
            <Box style={{ position: 'absolute', bottom: 10, right: 10 }}>
                <IconButton aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
                {isPostEditing ? (
                    <IconButton aria-label="confirm" onClick={confirmEditingPost}>
                        <CheckIcon />
                    </IconButton>
                ) : (
                    <IconButton aria-label="edit" onClick={editPost}>
                        <EditIcon />
                    </IconButton>
                )}
            </Box>
        </Card>
    )
}

export default Post