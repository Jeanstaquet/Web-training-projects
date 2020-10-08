import React, { Component } from "react";
import "./Layout.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import MainContent from "../MainContent/MainContent";


class Layout extends Component {
    state = {
        value: "Project"
    };

    changeValue = (element) => {
        this.setState({value: element})
    }
    render() {
        return (
        <div>
            <NavigationBar data= {{changeValue: this.changeValue.bind(this)}}/>
            <MainContent data={this.state.value}/>
        </div>
        )
    }

}
export default Layout;