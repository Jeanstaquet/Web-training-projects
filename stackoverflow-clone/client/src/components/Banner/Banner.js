import React, { useContext } from 'react';
import "./Banner.css";
import Button from "../UI/Button/Button";
import {UserContext} from "../../UserContext";

const Banner = (props) => {
    const {user} = useContext(UserContext);

    return (
        <div className="banner">
            <div className="orangeLine"></div>
            <div className="logo"></div>
            <div className="banner__profile">
                {user && <div className="banner__profilePhoto"></div>}
                {user ? <>
                            <p className="banner__points">{user.points}</p>
                            <p className="banner__pseudo">{user.pseudo}</p>
                        </> : 
                        <Button 
                            btnOk={true} 
                            onClick={() => props.showModalHandler("Login")}>Login
                        </Button>
                }
                {user ? 
                        <p 
                            onClick={props.logoutHandler}
                            className="banner__logout">Logout
                        </p> : 
                        <Button 
                            btnOk={true}
                            onClick={() => props.showModalHandler("Signup")}>Sign up
                        </Button>
                }
                
                <p></p>
            </div>
        </div>
    );
};

export default Banner;