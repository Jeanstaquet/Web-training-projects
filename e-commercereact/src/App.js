import React, {Component} from "react";
import Layout from "./Containers/Layout/Layout";
import OrderPage from "./Containers/OrderPage/OrderPage";
import Orders from "./Containers/Orders/Orders"

class App extends Component {
  state = {
    numberOfItems: 0
  }

  changeValue = (elem) => {
    this.setState({numberOfItems: elem});
  }
  render() {
    return (
      <Layout number={this.state.numberOfItems}>
          <OrderPage data={{changeValue: this.changeValue.bind(this)}}/>
          <Orders/>
      </Layout>
    )
  }
}

export default App;
