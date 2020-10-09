import React, { Component } from "react";
import "./Layout.css";
import NavBar from "../../Components/NavBar/NavBar";
import DropDown from "../../Components/DropDown/DropDown";
import Intro from "../../Components/Intro/Intro"

class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenu = () => {
        this.setState({menu: !this.state.menu})
        console.log(this.state.menu)
    }

    render() {
        return (
            <div>
                <NavBar click={this.toggleMenu}><DropDown show={this.state.menu}/></NavBar>
                <Intro/>
            </div>
        )
    }
}

export default Layout