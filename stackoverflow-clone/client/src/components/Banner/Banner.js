import React from 'react';
import "./Banner.css";
const Banner = () => {
    return (
        <div className="banner">
            <div className="orangeLine"></div>
            <div className="logo"></div>
            <div className="banner__profile">
                <div className="banner__profilePhoto"></div>
                <p>2 *</p>
            </div>
        </div>
    );
};

export default Banner;