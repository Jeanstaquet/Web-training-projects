import React from 'react';
import "./Banner.css";
import DescriptionIcon from '@material-ui/icons/Description';
import CommentIcon from '@material-ui/icons/Comment';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import FolderIcon from '@material-ui/icons/Folder';
import Avatar from '@material-ui/core/Avatar';

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
                    <div className="banner__subMenuFile subMenuItem"><p>File</p></div>
                    <div className="banner__subMenuEdit subMenuItem"><p>Edit</p></div>
                    <div className="banner__subMenuInsert subMenuItem"><p>Insert</p></div>
                </div>
            </div>
            <div className="banner__account">
                <CommentIcon className="banner__commentIcon"/>
                <Avatar className="banner__avatarIcon"/>
            </div>
        </div>
    );
};

export default Banner;