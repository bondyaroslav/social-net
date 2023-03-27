import React from 'react';
import styles from "./MyPosts.module.css"
import Post from "./Posts/Post";
import {rerenderEntireTree} from "../../../render";

const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post id={post.id} message={post.message} likes={post.likes} /> )

    let newPostElement = React.createRef()

    let addPost = () => {
        debugger
        let text = newPostElement.current.value
        props.addPost(text)
        rerenderEntireTree()
    }

    return (
        <div className={styles.MyPosts}>
            <h3>My posts</h3>
            <div className={styles.addPost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={styles.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;