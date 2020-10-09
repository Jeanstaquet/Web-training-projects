import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const navBar = (props) => {
    return (
        <div className="nav-bar_ultra">
            <div className="header">
                <div className="nav-bar__container">
                    <div className="nav-bar__menu">
                        <div className="nav-bar__toggle-container" onClick={props.click}>  
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                        <div className="nav-bar__toggle__menu">Menu</div>
                        <div>
                            <FontAwesomeIcon icon={faSearch} />
                            <input type="text" id="search" name="name" value="Search..."></input>
                        </div>
                    </div>
                    <img className="nav-bar__logo" src="https://picsum.photos/300/101"></img>
                    <div className="donate"><button className="nav-bar__donate">Donate</button></div>
                </div>
            </div>
            {props.children}
        </div>

    )
}

export default navBar;