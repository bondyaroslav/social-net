import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)