import React from 'react';
import Post from "./Posts/Post";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {

    let postElements = props.posts.map( post => <Post id={post.id} message={post.message} likes={post.likes} /> )

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;