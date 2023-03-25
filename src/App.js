import './App.css'
import Header from "./Components/Header/Header";
import Main from "./Main";
import {addPost} from "./redux/state";

function App(props) {

    return (
        <div className="App">
            <Header/>
            <Main posts={props.posts} dialogs={props.dialogs} messages={props.messages} addPost={addPost}/>
        </div>
    );
}

export default App;