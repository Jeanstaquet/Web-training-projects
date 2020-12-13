import React, { useState } from 'react';
import "./Chat.scss";
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from "../../components/Message/Message";
const Chat = () => {

    const [message, setMessage] = useState([
        {message: "Hello how are you ?", sender: false, timeStamp: "11-12-20 11:33"},
        {message: "Hello how are you ?", sender: true, timeStamp: "11-12-20 11:33"},]);

    let iconSend = message.length < 1 ? <MicIcon className="chat__sendMessageMic"/> : <SendIcon className="chat__sendMessageMic"/>

    return (
        <div className="chat__container">
            <div className="chat__banner">
                <div className="chat__bannerInfo">
                    <Avatar className="chat__bannerAvatar"/>
                    <div className="chat__info">
                        <p>Name</p>
                        <p>Person</p>
                    </div>

                </div>
                <div className="chat__bannerIcon">
                    <SearchIcon/>
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className="chat__content">
                {message.map((mess, i) => {
                    return <Message key={i} message={mess.message} timestamp={mess.timeStamp} reciever={mess.sender}/>
                })}
            </div>
            <div className="chat__sendMessage">
                <div className="chat__sendMessageEmoji">
                    <InsertEmoticonIcon/>
                    <AttachFileIcon/>
                </div>
                <form className="chat__sendMessageContent">
                    <input type="text" onChange={(e) => setMessage(e.target.value)}/>
                    <button type="submit"></button>
                </form>
                {iconSend}
            </div>
        </div>
    );
};

export default Chat;