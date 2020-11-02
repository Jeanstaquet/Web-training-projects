import React, { Component } from "react"
import './App.css';
import Sidebar from "./Components/UI/Sidebar/Sidebar";
import Chat from "./Containers/Chat/Chat";
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__body">
          <Sidebar/>
          <Chat />
        </div>
      </div>
    )
  }
}
export default App;
