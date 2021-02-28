import React, { useEffect, useState } from 'react';
import "./App.css";
import MainLayout from "./containers/MainLayout/MainLayout";
import HomePage from "./containers/HomePage/HomePage";
import axios from "axios";
import AskQuestion from "./components/AskQuestion/AskQuestion";
import AuthModal from "./containers/Auth/AuthModal/AuthModal";
import {Route, Switch} from "react-router-dom";
const App = () => {
  //Show the modal
  const [showModal, setShowModal] = useState(false)
  //Set modal to Login or sign up
  const [authMethod, setAuthMethod] = useState("Login")
  //Input tracking
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");
  //Error message for the auth flow
  const [errorAuth, setErrorAuth] = useState("")
  //Open close the modal


  const showModalHandler = (type) => {
    setShowModal(!showModal)
    type === "Login" ? setAuthMethod("Login") : setAuthMethod("Signup")
  }


  //Change the auth method
  const authMethodHandler = () => {
    authMethod === "Login" ? setAuthMethod("Signup") : setAuthMethod("Login")
  }

  //URL for requests
  const URL = 'http://localhost:5000/signin'

  //Login Method
  const authHandler = (e, method) => {
    e.preventDefault()
    const data = {
      email: email,
      password: password,
      pseudo: pseudo
    }
    switch(method) {
      case "Login":
        axios.post('http://localhost:5000/signin', data, {
          headers: {
            'Content-Type': 'application/json'
          },
           withCredentials: true 
        })
          .then(resp => {
            if(resp.data === "Existing User" || resp.data === "User not found") {
              setErrorAuth(resp.data)
              setTimeout(() => {
                setErrorAuth("")
              }, 5000)
            } else {
              setEmail("");
              setPassword("");
              setPseudo("")
              setErrorAuth("")
              setShowModal(false)
              console.log(resp.data)
            }
          })
          .catch(err => {
            setErrorAuth(err)
            console.log(err)
          })
          break;
      case "Signup":
        axios.post('http://localhost:5000/signup', data)
          .then(resp => {
            if(resp.data === "Existing User") {
              console.log(resp)
              setErrorAuth(resp.data)
              setTimeout(() => {
                setErrorAuth("")
              }, 5000)
            } else {
              setEmail("")
              setPassword("")
              setPseudo("")
              setErrorAuth("")
              console.log(resp.data)
            }
          })
          .catch(err => setErrorAuth(err))
          break;
    } 
  }

  const authModal = (
        <AuthModal 
            close={showModalHandler} 
            show={showModal}
            changeMethod={authMethodHandler}
            authMethod={authMethod}
            //Send auth requests
            authHandler={authHandler}
            setEmail={setEmail}
            email={email}
            setPassword={setPassword}
            password={password}
            setPseudo={setPseudo}
            pseudo={pseudo}
            errorAuth={errorAuth}
          />
  )

  return (
    <div>
      <Switch>
      <Route exact path="/ask">
        {authModal}
        <AskQuestion showModalHandler={showModalHandler}/>
      </Route>
      <MainLayout showModalHandler={showModalHandler}>
          {authModal}
          <Route exact path="/">
              <HomePage/>
          </Route>
      </MainLayout>
      </Switch>
    </div>
  );
};

export default App;