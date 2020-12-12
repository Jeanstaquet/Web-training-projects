import React from 'react';
import Auth from "./containers/Auth/Auth";
import Conversations from "./containers/Conversations/Conversations";
import Chat from "./containers/Chat/Chat"
import "./App.scss"
const App = () => {
  return (
    <div className="app__container">
      {/* <Auth/> */}
      <Conversations/>
      <Chat/>
    </div>
  );
};

export default App;