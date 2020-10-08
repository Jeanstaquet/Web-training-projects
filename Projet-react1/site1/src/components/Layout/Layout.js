import React, { Component } from "react";
import "./Layout.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import MainContent from "../MainContent/MainContent";
import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop"


class Layout extends Component {
    state = {
        value: "Resume",
        contact: false
    };

    changeValue = (element) => {
        this.setState({value: element})
    }

    modalHandler = () => {
        this.setState({contact: !this.state.contact});
        console.log("push")
    }

    openModal = () => {
        this.setState({contact: true})
    }

    render() {
        return (
        <div>
            <Modal show={this.state.contact}><Backdrop contact={this.modalHandler}/></Modal>
            <NavigationBar data={{changeValue: this.changeValue.bind(this)}} contact={this.openModal}/>
            <MainContent data={this.state.value}/>
        </div>
        )
    }

}
export default Layout;