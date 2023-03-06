import React from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";

const Main = () => {
    return (
        <div className={"Main"}>
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Main;