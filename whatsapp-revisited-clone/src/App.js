import React from 'react';
import Auth from "./containers/Auth/Auth";
import Conversations from "./containers/Conversations/Conversations";
import Chat from "./containers/Chat/Chat";
import {connect} from "react-redux"
import "./App.scss";
import Spinner from "./components/UI/Spinner/Spinner";
import {Route, Switch} from "react-router-dom";
const App = (props) => {

  let auth = <Auth/>

  if(props.loading) {
    auth = <Spinner />
  }
  return (
    <div className="app__container">

      <Switch>
        <Route  exact path="/">
          {auth}
        </Route>
        <Route exact path="/app">
          <Conversations/>
          <Chat/>
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}


export default connect(mapStateToProps, null)(App);