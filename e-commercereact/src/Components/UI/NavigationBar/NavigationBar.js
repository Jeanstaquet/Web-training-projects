import React from "react";
import "./NavigationBar.scss"
const navigationBar = (props) => {
    return (
        <div className="toolbar-container">
            <section className="toolbar-logo">
                <p>Logo</p>
            </section>
            <section className="toolbar-navitems">
                <ul>
                    <li>
                        <a >Basket ({props.number} item(s))</a>
                    </li>
                    <li>
                        <a href="/">Articles</a>
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