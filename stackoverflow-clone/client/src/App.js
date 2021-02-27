import React, { useEffect } from 'react';
import "./App.css";
import MainLayout from "./containers/MainLayout/MainLayout";
import HomePage from "./containers/HomePage/HomePage";
import axios from "axios";
const App = () => {

  const URL = 'http://localhost:5000'

  useEffect(() => {
    axios.get(URL)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))


  }, [])
  return (
    <div>
      <MainLayout>
        <HomePage/>
      </MainLayout>
    </div>
  );
};

export default App;