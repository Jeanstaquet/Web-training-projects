import React from 'react';
import "./Banner.scss";

const Banner = (props) => {
    return (
        <div className="banner__container">
            <h2>You won XX$</h2>
            <button>Continue</button>
        </div>
    );
}

export default Banner;