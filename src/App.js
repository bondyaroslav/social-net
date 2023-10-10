import './App.css'
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import {Route, Routes} from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import React from "react";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";

const App = ({store, dispatch}) => {

    return (
        <div className="App">
            <Header/>
            <div className="wrapper">
                <Sidebar/>
                <Routes>
                    <Route path="/profile" element={
                        <Profile store={store}
                                 dispatch={dispatch} />}/>
                    <Route path="/dialogs/*" element={ <DialogsContainer store={store} />}/>
                    <Route path="/users" element={ <UsersContainer />}/>
                    <Route path="/news" element={<News />}/>
                    <Route path="/music" element={<Music />}/>
                    <Route path="/settings" element={<Settings />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;