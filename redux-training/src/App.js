import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from "./containers/Auth/Auth";
import Layout from './hoc/Layout/Layout';
import {connect} from "react-redux";
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Logout from "./containers/Auth/Logout/Logout";
import * as actions from "./store/actions/index";

class App extends Component {
  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={Auth} />
        <Redirect to="/"/>
      </Switch>

    );

    if(this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/logout" component={Logout}/>
          <Route path="/" exact component={Auth} />
          <Redirect to="/"/>
      </Switch>
      )
    }
    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mpaStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mpaStateToProps, mapDispatchToProps)(App));
