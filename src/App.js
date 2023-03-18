import './App.css'
import Header from "./Components/Header/Header";
import Main from "./Main";

function App(props) {

    return (
        <div className="App">
            <Header/>
            <Main posts={props.posts} dialogs={props.dialogs} messages={props.messages}/>
        </div>
    );
}

export default App;