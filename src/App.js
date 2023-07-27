import './App.css'
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import React from "react";

const App = (props) => {

    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Sidebar/>
                <Routes>
                    <Route path="/profile" element={
                        <Profile store={props.store}
                                 dispatch={props.dispatch} />}/>

                    <Route path="/dialogs/*" element={ <Dialogs store={props.store} />}/>
                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music />}/>
                    <Route path="/settings" element={<Settings />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;