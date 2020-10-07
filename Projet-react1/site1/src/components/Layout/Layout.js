import React, { Component } from "react";
import "./Layout.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import MainContent from "../MainContent/MainContent";


class Layout extends Component {
    state = {
        value: ""
    }
    render() {
        return (
        <div>
            <NavigationBar/>
            <MainContent/>
        </div>
        )
    }

}
export default Layout;