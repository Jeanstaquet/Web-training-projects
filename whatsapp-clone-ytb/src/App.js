import React, { useState } from "react";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom"
import './App.css';
import Sidebar from "./Components/UI/Sidebar/Sidebar";
import Chat from "./Containers/Chat/Chat";
import Login from "./Containers/Login/Login"
import {useStateValue} from "./StateProvider";

function App() {
  const [{user}, dispatch] = useStateValue();
    return (
      <div className="app">

        {user ? (
          <Login/>
        ): (
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
        )}
      </div>
  )
}
export default App;
