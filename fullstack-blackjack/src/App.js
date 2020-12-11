import './App.css';
import React, {useState} from "react";
import Board from "./containers/Board/Board";
import Auth from "./components/Auth/Auth";

const App = () => {
  const [type, setType] = useState("Signin");

  const loginHandler = () => {
    if(type === "Signin") {
      setType("Log-in")
    } else {
      setType("Signin")
    }
  }

  return (
    <div className="App">
      <Auth type={type} click={loginHandler}/>
      {/* <Board/> */}
    </div>
  );
}

export default App;
