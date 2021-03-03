import React from 'react';
import "./UserInfo.css";
const UserInfo = (props) => {
    return (
        <div className="UserInfo">
            <p className="UserInfo__lastModified">created {props.time} ago</p>
            <div className="UserInfo__details">
                <div className="UserInfo__profilePic"></div>
                <div className="UserInfo__userdetails">
                    <p className="name">{props.pseudo}</p>
                    <div className="UserInfo__points">
                        <p>578k 47g 375s 479b</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;