import React from 'react';
import "./UserInfo.css";
const UserInfo = () => {
    return (
        <div className="UserInfo">
            <p className="UserInfo__lastModified">modified 9 secs ago</p>
            <div className="UserInfo__details">
                <div className="UserInfo__profilePic"></div>
                <div className="UserInfo__userdetails">
                    <p className="name">Mark</p>
                    <div className="UserInfo__points">
                        <p>578k 47g 375s 479b</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;