import './App.css';
import React, {useState} from "react";
import Board from "./containers/Board/Board";
import Auth from "./components/Auth/Auth";
import {Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  const [type, setType] = useState("Signin");

  const loginHandler = () => {
    if(type === "Signin") {
      setType("Log-in")
    } else {
      setType("Signin")
    }
  }

  let statusAuth = 
    <div className="login__textContainer">
      <p className="login__text">Login</p>
      <p className="login__text">Logout</p>
    </div>
  return (
    <div className="App">
      {statusAuth}
      <Switch>
        <Route path="/auth">
          <Auth type={type} click={loginHandler}/>
        </Route>
        <Route exact path="/" component={Board}></Route>
      </Switch>
    </div>
  );
}

export default App;
