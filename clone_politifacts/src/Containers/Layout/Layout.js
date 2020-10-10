import React, { Component } from "react";
import "./Layout.css";
import NavBar from "../../Components/NavBar/NavBar";
import DropDown from "../../Components/DropDown/DropDown";
import Intro from "../../Components/Intro/Intro";
import QuotesCarrousel from "../../Components/QuotesCaroussel/QuotesCarrousel"


class Layout extends Component {
    state = {
        menu: false,
        index: 2
    }

    toggleMenu = () => {
        this.setState({menu: !this.state.menu})
    }

    nextHandler = () => {

    }

    prevHandler = () => {
        let current = this.state.index;
        if (current == 0) {
            current = 3
        } else {
            current -= 1
        }
        this.setState({index: current})
        console.log(this.state.index)
    }

    changeIndex(arg, funct) {
        let newIndex = funct(arg)
        this.setState({index: newIndex})
    }

    render() {
        return (
            <div>
                <NavBar click={this.toggleMenu}><DropDown show={this.state.menu}/></NavBar>
                <Intro/>
                <QuotesCarrousel next={this.nextHandler} prev={this.prevHandler} index={this.state.index} data={{changeIndex: this.changeIndex.bind(this)}}/>
            </div>
        )
    }
}

export default Layout