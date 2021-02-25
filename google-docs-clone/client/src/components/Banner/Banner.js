import React from 'react';
import "./Banner.css";
import DescriptionIcon from '@material-ui/icons/Description';
import CommentIcon from '@material-ui/icons/Comment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import FolderIcon from '@material-ui/icons/Folder';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__logo">
                <DescriptionIcon className="banner__folderLogo"/>
            </div>
            <div className="banner__details">
                <div className="banner__docInfo">
                    <h3>Hello World</h3>
                    <FolderIcon/>
                    <CloudDoneIcon/>
                </div>
                <div className="banner__subMenu">
                    <p>File</p>
                    <p>View</p>
                    <p>Editor</p>
                </div>
            </div>
            <div className="banner__account">
                <div>
                    <AccountCircleIcon/>
                    <CommentIcon/>
                </div>
            </div>
        </div>
    );
};

export default Banner;