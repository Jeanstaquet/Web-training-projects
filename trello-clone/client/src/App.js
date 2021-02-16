import React, { useEffect } from 'react';
import "./App.css";
import Board from "./containers/Board/Board";
import {ContextProvider} from "./Context/index";

const App = () => {
  return (
    <ContextProvider>
      <div className="App">
        <Board/>
      </div>
    </ContextProvider>
  );
};

export default App;