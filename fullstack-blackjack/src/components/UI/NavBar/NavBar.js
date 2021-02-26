import React from 'react';
import "./NavBar.scss";
import {NavLink, withRouter} from "react-router-dom"
function NavBar(props) {
    return (
        <div className="navbar__container">
            <NavLink to="/">Home</NavLink>
            {!props.connected ? <NavLink to="/auth">Register</NavLink> : <NavLink to="/auth">{props.email}</NavLink>}   
            {!props.connected ? null : <NavLink to="/" onClick={props.logout}>Logout</NavLink>}   
        </div>
    );
}

export default withRouter(NavBar);