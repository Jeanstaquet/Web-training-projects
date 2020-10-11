import React, { Component } from "react";
import "./Layout.css";
import NavBar from "../../Components/NavBar/NavBar";
import DropDown from "../../Components/DropDown/DropDown";
import Intro from "../../Components/Intro/Intro";
import QuotesCarrousel from "../../Components/QuotesCaroussel/QuotesCarrousel";
import Modal from "../../Components/Modal/Modal";
import Backdrop from "../../Components/Backdrop/Backdrop";


class Layout extends Component {
    state = {
        menu: false,
        index: 2,
        modal: true
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

    changeIndex = (arg, funct) => {
        let newIndex = funct(arg)
        this.setState({index: newIndex})
    }
    
    modalHandler = () => {
        this.setState({modal: !this.state.modal});
        console.log("qql")
    }

    render() {
        return (
            <div className="Big-container">
                <NavBar click={this.toggleMenu} open={this.modalHandler}><DropDown show={this.state.menu}/></NavBar>
                <Intro/>
                <QuotesCarrousel next={this.nextHandler} prev={this.prevHandler} index={this.state.index} data={{changeIndex: this.changeIndex.bind(this)}}/>
                <Modal show={this.state.modal} open={this.modalHandler}><Backdrop/></Modal>
            </div>
        )
    }
}

export default Layout