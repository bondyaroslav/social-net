import React from 'react'
import styles from "./MyPosts.module.css"
import Post from "./Post"
import {TextField} from "@mui/material"

const MyPosts = ({posts, newPostText, addPost, postChange}) => {

    const newPostElement = React.createRef()

    const onAddPost = () => {
        addPost()
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        postChange(text)
        console.log(text)
    }

    return (
        <div className={styles.MyPosts}>
            <h3>My posts</h3>
            <div className={styles.addPost}>
                <TextField ref={newPostElement} value={newPostText} onChange={onPostChange}></TextField>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {posts.map( p =>
                    <Post
                        key={p.id}
                        message={p.message}
                        likesCount={p.likesCount}
                    />
                )}
            </div>
        </div>
    )
}

export default MyPosts