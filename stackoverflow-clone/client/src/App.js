import React from 'react';
import "./App.css";
import MainLayout from "./containers/MainLayout/MainLayout";
import HomePage from "./containers/HomePage/HomePage";
const App = () => {
  return (
    <div>
      <MainLayout>
        <HomePage/>
      </MainLayout>
    </div>
  );
};

export default App;