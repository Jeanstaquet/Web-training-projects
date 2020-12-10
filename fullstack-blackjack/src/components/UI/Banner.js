import React from 'react';
import "./Banner.scss";

const Banner = (props) => {
    return (
        <div className="banner__container">
            <h2>{props.mess} {props.amount}</h2>
            <button>Continue</button>
        </div>
    );
}

export default Banner;