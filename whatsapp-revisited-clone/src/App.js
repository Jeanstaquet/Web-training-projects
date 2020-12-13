import React from 'react';
import Auth from "./containers/Auth/Auth";
import Conversations from "./containers/Conversations/Conversations";
import Chat from "./containers/Chat/Chat"
import "./App.scss";
import {Route, Switch} from "react-router-dom";
const App = () => {
  return (
    <div className="app__container">
      <Switch>
        <Route  exact path="/">
          <Auth/>
        </Route>
        <Route exact path="/app">
          <Conversations/>
          <Chat/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;