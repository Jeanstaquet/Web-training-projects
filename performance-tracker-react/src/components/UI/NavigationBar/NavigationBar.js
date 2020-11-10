import React from 'react';
import "./NavigationBar.scss";
import {NavLink} from "react-router-dom";
function NavigationBar(props) {
    return (
        <React.Fragment>
            <div className="navigationBar__container">
                <section className="navigationBar__left">
                    <NavLink to="/" exact>My Dashboard</NavLink>
                    <NavLink to="/MyBestTime">My Best Times</NavLink>
                </section>
                <section className="navigationBar__middle">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="//"/>
                </section>
                <section className="navigationBar__right">
                    <NavLink to="/Benchmark">Benchmark</NavLink>
                    <NavLink to="/NewActivity">Add a new activity</NavLink>
                </section>
            </div>
            {props.children}
        </React.Fragment>
    );
}

export default NavigationBar;