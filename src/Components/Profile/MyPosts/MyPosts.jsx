import React from 'react';
import Post from "./Posts/Post";
import style from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={style.posts}>
                <Post message='Hi, how are you?' likes={14}/>
                <Post message='My first post' likes={10}/>
            </div>
        </div>
    );
};

export default MyPosts;