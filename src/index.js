import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let posts = [
    {id: 1, message: "Hi, how are you?", likes: 11},
    {id: 2, message: "My first post", likes: 20}
]

let dialogs = [
    {id: 1, name: "Name1"},
    {id: 2, name: "Name2"},
    {id: 3, name: "Name3"}
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you"},
    {id: 3, message: "Bye"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App posts={posts} dialogs={dialogs} messages={messages}/>
        </BrowserRouter>
    </React.StrictMode>
);