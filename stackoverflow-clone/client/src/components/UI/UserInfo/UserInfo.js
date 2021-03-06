import React from 'react';
import "./UserInfo.css";
const UserInfo = (props) => {
    Date.daysBetween = ( date1, date2 ) => {
        //Get 1 day in milliseconds
        let one_day=1000*60*60*24;
        // Convert both dates to milliseconds
        let date1_ms = date1.getTime();
        let date2_ms = date2.getTime();
        // Calculate the difference in milliseconds
        let difference_ms = date2_ms - date1_ms;
        // Convert back to days and return
        return Math.round(difference_ms/one_day); 
    }
    let time = Date.daysBetween(new Date(props.time), new Date())
    return (
        <div className="UserInfo">
            <p className="UserInfo__lastModified">created {time} day(s) ago</p>
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