import React, { Component } from 'react';
import "./App.css";
import Chat from "./containers/Chat/Chat";
import Title from "./components/UI/Title/Title";
import Summary from "./containers/Summary/Summary";
import Details from "./components/UI/Details/Details";
import {BrowserRouter, Route, Switch} from "react-router-dom";


class App extends Component {
  state = {
    KPI: [{name: "Gross margin", currentAmount: "26%", sign: true, precedentAmount: "24%"},
          {name: "Revenue", currentAmount: "11000", sign: false, precedentAmount: "2000"},
          {name: "EBITDA", currentAmount: "56971", sign: false, precedentAmount: "54125"},
          {name: "Net margin", currentAmount: "11%", sign: true, precedentAmount: "10.5%"}]
  }
  render() {
    return (
      <div className="app">
        <div className="app__body">
        
        <BrowserRouter>
        <Switch>
        
          <Route path="/:data" exact component={Details}/>
          <Route path="/" exact>
            <Title/>
            <Summary data={this.state.KPI}/>
            <Title/>
            <Chat></Chat>
          </Route>
        </Switch>

        </BrowserRouter>
        
        </div>
      </div>
    );
  }
}

export default App;