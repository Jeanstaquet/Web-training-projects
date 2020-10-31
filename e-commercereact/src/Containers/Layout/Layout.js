import React, { Component } from "react";
import NavigationBar from "../../Components/UI/NavigationBar/NavigationBar"
import "./Layout.css"
class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar number={this.props.number}/>
                <main className="Content">
                    {this.props.children}
                </main>
            </React.Fragment>
        )
    }
}

export default Layout;