import React, {Component} from "react";
import Layout from "./Containers/Layout/Layout";
import OrderPage from "./Containers/OrderPage/OrderPage";
import Orders from "./Containers/Orders/Orders";
import {Route} from "react-router-dom";

class App extends Component {
  state = {
    numberOfItems: 0,
    func: null
  }

  changeValue = (elem) => {
    this.setState({numberOfItems: elem});
  }
  render() {
    return (
      <Layout number={this.state.numberOfItems}>
        <Route path="/" render={() => <OrderPage data={{changeValue: this.changeValue.bind(this)}}/>}></Route>
          
          <Orders/>
      </Layout>
    )
  }
}

export default App;
