import React, { useContext } from 'react';
import "./Banner.css";
import Button from "../UI/Button/Button";

const Banner = (props) => {
    return (
        <div className="banner">
            <div className="orangeLine"></div>
            <div className="logo"></div>
            <div className="banner__profile">
                <Button 
                    btnOk={true} 
                    onClick={() => props.showModalHandler("Login")}>Login
                </Button>
                <Button 
                    btnOk={true}
                    onClick={() => props.showModalHandler("Signup")}>Sign up
                </Button>
                <div className="banner__profilePhoto"></div>
                <p></p>
            </div>
        </div>
    );
};

export default Banner;