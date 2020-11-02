import React, { Component } from "react";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom"
import './App.css';
import Sidebar from "./Components/UI/Sidebar/Sidebar";
import Chat from "./Containers/Chat/Chat";
function App {
    return (
      <div className="app">
        <div className="app__body">
        <BrowserRouter>
        <Sidebar/>
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
              <Chat/>
            </Route>

          </Switch>
        </BrowserRouter>
        </div>
      </div>
  )
}
export default App;
