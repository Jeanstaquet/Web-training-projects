import React, { Component } from 'react';
import "./App.css";
import Chat from "./containers/Chat/Chat"
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__body">
        <Chat></Chat>
        </div>
      </div>
    );
  }
}

export default App;