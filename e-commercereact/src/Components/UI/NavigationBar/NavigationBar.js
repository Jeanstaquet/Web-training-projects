import React from "react";
import "./NavigationBar.scss"
const navigationBar = () => {
    return (
        <div className="toolbar-container">
            <section className="toolbar-logo">
                <p>Logo</p>
            </section>
            <section className="toolbar-navitems">
                <ul>
                    <li>
                        <a href="/">Basket (n items)</a>
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