import React, {Component} from "react";
import Layout from "./Containers/Layout/Layout";
import OrderPage from "./Containers/OrderPage/OrderPage";
import {Route, Switch} from "react-router-dom";
import Checkout from "./Containers/Checkout/Checkout";
import PreviousOrders from "./Containers/PreviousOrders/PreviousOrders";

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
          <Route path="/" exact render={() => <OrderPage data={{changeValue: this.changeValue.bind(this)}}/>}></Route>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/previous_orders" component={PreviousOrders} />
      </Layout>
    )
  }
}

export default App;
