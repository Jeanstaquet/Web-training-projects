import React from 'react';
import "./Navigation.css";
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation__homeIconContainer">
                <HomeIcon className="navigation__homeIcon"/>
            </div>
            <div className="navigation__logo"></div>
            <div className="navigation__iconRightContainer">
                    <AddIcon className="navigation__addIcon"/>
                <AccountCircleIcon className="navigation__AccountIcon"/>
            </div>

        </div>
    );
};

export default Navigation;