import React from "react";
import "./NavigationBar.scss";
import {NavLink} from "react-router-dom";

const navigationBar = (props) => {
    return (
        <div className="toolbar-container">
            <section className="toolbar-logo">
                <p>Logo</p>
            </section>
            <section className="toolbar-navitems">
                <ul>
                    <li>
                        <a href="/" >Basket ({props.number} item(s))</a>
                    </li>
                    <li>
                        <NavLink to="/previous_orders">Articles</NavLink>
                    </li>
                    <li>
                        <a href="/">Orders</a>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default navigationBar;