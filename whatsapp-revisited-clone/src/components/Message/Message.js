import React from 'react';
import "./Message.scss";
const Message = (props) => {
    return (
        <div className={props.reciever ? "message__container" : "message__container sender"}>
            <p>{props.message}</p>
            <span>{props.timestamp}</span>
        </div>
    );
};

export default Message;