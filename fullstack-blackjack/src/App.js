import './App.css';
import React, {useEffect, useState} from "react";
import Board from "./containers/Board/Board";
import Auth from "./components/Auth/Auth";
import NavBar from "./components/UI/NavBar/NavBar";
import {Route, Switch, Redirect, Link } from "react-router-dom";
import {connect} from "react-redux";

const App = (props) => {
  const [type, setType] = useState("Signin");

  const loginHandler = () => {
    if(type === "Signin") {
      setType("Log-in")
    } else {
      setType("Signin")
    }
  }


  useEffect(() => {
    console.log(props.token, props.userId, props.isLoggin)
  }, [props.token, props.userId, props.isLoggin])
      
  return (
    <div className="App">
      <NavBar email={props.emailAddress} connected={props.isLoggin}/>
      <Switch>
        <Route path="/auth">
          <Auth type={type} click={loginHandler}/>
        </Route>
        <Route exact path="/" component={Board}></Route>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    isLoggin: state.auth.token ? true : false,
    emailAddress: state.auth.email
  }
}

export default connect(mapStateToProps, null)(App);
