import React from 'react';
import "./Spinner.css";
const Spinner = (props) => {
    return (
        <div className={props.loading ? "spinner__container" : "spinner__container hide"}>
            <div className="loader">Loading...</div>
        </div>

    );
};

export default Spinner;