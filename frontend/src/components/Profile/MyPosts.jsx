import React, {useState} from 'react'
import Post from "./Post"
import {Button, TextField, Typography} from "@mui/material"
import {Box} from "@mui/system"
import {useDispatch, useSelector} from "react-redux"
import {addPostAC} from "../../store/reducers/profileReducer"

const MyPosts = ({isItAuthUserAccount}) => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.profilePage.posts)
    const [postName, setPostName] = useState("")

    const addPost = () => {
        const id = new Date().getTime()
        const date = new Date(id)
        const formattedDate = new Intl.DateTimeFormat('en-GB', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
        }).format(date)

        const newPost = {id: id, name: postName, date: formattedDate}
        if (postName === "") {
            return 0
        } else dispatch(addPostAC(newPost))
        setPostName("")
    }

    const onInputName = (name) => {
        setPostName(name)
    }

    return (
        <Box style={{margin: 20}}>
            {isItAuthUserAccount
                ?
                <>
                    <Typography>My posts</Typography>
                    <Box style={{display: "flex"}}>
                        <TextField
                            style={{width: 300}}
                            value={postName}
                            onChange={(event) => {onInputName(event.target.value)}}
                            onKeyUp={(event) => {
                                if (event.key === "Enter") {
                                    addPost()
                                }}}
                        />
                        <Button
                            style={{marginLeft: 5}}
                            onClick={addPost}
                        >
                            Add post
                        </Button>
                    </Box>
                    <Box style={{display: "flex", flexDirection: "column-reverse"}}>
                        {posts ?
                            posts.map((p) => (
                                <Post key={p.id} id={p.id} name={p.name} date={p.date}></Post>
                            ))
                            : null
                        }
                    </Box>
                </>
                :
                null
            }
        </Box>
    )
}

export default MyPosts