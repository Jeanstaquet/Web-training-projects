import React from 'react';
import "./NavigationBar.scss";
function NavigationBar(props) {
    return (
        <React.Fragment>
            <div className="navigationBar__container">
                <section className="navigationBar__left">
                    <h1>My Dashboard</h1>
                    <h1>My Best Times</h1>
                </section>
                <section className="navigationBar__middle">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="//"/>
                </section>
                <section className="navigationBar__right">
                    <h1>Benchmark</h1>
                    <h1>Add a new activity</h1>
                </section>
            </div>
            {props.children}
        </React.Fragment>
    );
}

export default NavigationBar;