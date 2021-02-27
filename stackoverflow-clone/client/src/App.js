import React, { useEffect, useState } from 'react';
import "./App.css";
import MainLayout from "./containers/MainLayout/MainLayout";
import HomePage from "./containers/HomePage/HomePage";
import axios from "axios";
import AuthModal from "./containers/Auth/AuthModal/AuthModal";
const App = () => {
  //Show the modal
  const [showModal, setShowModal] = useState(true)
  //Set modal to Login or sign up
  const [authMethod, setAuthMethod] = useState("Login")

  //Open close the modal
  const showModalHandler = () => {
    setShowModal(false)
  }

  //Change the auth method
  const authMethodHandler = () => {
    authMethod === "Login" ? setAuthMethod("Signup") : setAuthMethod("Login")
  }

  const URL = 'http://localhost:5000/signin'

  // useEffect(() => {
  //   const dataa = {
  //     email: "jeanstaquet8@gmail.com",
  //     password: "hello"
  //   }

  //   axios.post(URL, dataa)
  //     .then(resp => console.log(resp))
  //     .catch(err => console.log(err))


  // }, [])
  return (
    <div>
      <MainLayout>
        <AuthModal 
          close={showModalHandler} 
          show={showModal}
          changeMethod={authMethodHandler}
          method={authMethod}
        />
        <HomePage/>
      </MainLayout>
    </div>
  );
};

export default App;