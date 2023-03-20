import React from 'react';
import style from "./MyPosts.module.css"
import Post from "./Posts/Post";
import {addPost} from "../../../redux/state";

const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post id={post.id} message={post.message} likes={post.likes} /> )

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;