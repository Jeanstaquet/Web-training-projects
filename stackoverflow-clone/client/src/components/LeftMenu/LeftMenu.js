import React from 'react';
import "./LeftMenu.css";
import PublicIcon from '@material-ui/icons/Public';
const LeftMenu = () => {
    return (
        <div className="leftMenu">
            <div className="leftMenu__content">
                <div className="leftMenu__stackOverflow">
                    <PublicIcon className="leftMenu__world"/>
                    <p>Stack Overflow</p>
                </div>
                <p className="leftMenu__tags leftMenuActive">Tags</p>
                <p className="leftMenu__users">Users</p>
            </div>
        </div>
    );
};

export default LeftMenu;