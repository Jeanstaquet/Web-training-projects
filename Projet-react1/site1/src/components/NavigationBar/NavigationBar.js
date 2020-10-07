import React from "react";
import "./NavigationBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faAddressCard, faTasks } from '@fortawesome/free-solid-svg-icons'

const navigationBar = (props) => (
    <div className="container">
        <nav className="nav-nav">
            <ul className="nav-list">
                <li className="Resume">
                    <FontAwesomeIcon icon={faFile} />
                    <span>Resume</span>
                </li>
                <li className="AboutMe">
                    <FontAwesomeIcon icon={faAddressCard} />
                   <span>About Me</span>
                </li>
                <li className="Project">
                    <FontAwesomeIcon icon={faTasks} />
                    <span>Project</span>
                </li>
            </ul>
        </nav>
    </div>
)

export default navigationBar;