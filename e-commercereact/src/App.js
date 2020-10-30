import React, {Component} from "react";
import Layout from "./Containers/Layout/Layout";
import OrderPage from "./Containers/OrderPage/OrderPage"
class App extends Component {
  render() {
    return (
      <Layout>
          <OrderPage/>
      </Layout>
    )
  }
}

export default App;
