import React, {useState} from 'react'
import Post from "./Post"
import {Button, TextField, Typography} from "@mui/material"
import {Box} from "@mui/system"

const MyPosts = ({isItAuthUserAccount}) => {

    const [posts, setPosts] = useState([])
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

        const newPost = {
            id: id,
            name: postName,
            date: formattedDate,
        }
        setPosts([...posts, newPost])
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
                        />
                        <Button
                            style={{marginLeft: 5}}
                            onClick={addPost}
                        >
                            Add post
                        </Button>
                    </Box>
                </>

                :
                null
            }
            <Box>
                {posts.map((p) => (
                    <Post key={p.id} id={p.id} name={p.name} date={p.date}></Post>
                ))}
            </Box>
        </Box>
    )
}

export default MyPosts


