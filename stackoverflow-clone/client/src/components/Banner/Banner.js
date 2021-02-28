import React from 'react';
import "./Banner.css";
import Button from "../UI/Button/Button";
const Banner = () => {
    return (
        <div className="banner">
            <div className="orangeLine"></div>
            <div className="logo"></div>
            <div className="banner__profile">
                <Button btnOk={true}>Login</Button>
                <Button btnOk={true}>Sign up</Button>
                <div className="banner__profilePhoto"></div>
                <p>2 *</p>
            </div>
        </div>
    );
};

export default Banner;