import React from 'react';
import "./Chat.scss";
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
const Chat = () => {
    return (
        <div className="chat__container">
            <div className="chat__banner">
                <div className="chat__bannerInfo">
                    <p>img</p>
                    <p>Name</p>
                    <p>Person</p>
                </div>
                <div className="chat__banner ">
                    <SearchIcon/>
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className="chat__content">
                <p>messgae here</p>
            </div>
            <div className="chat__sendMessage">
                <div className="chat__sendMessageEmoji">
                    <InsertEmoticonIcon/>
                    <AttachFileIcon/>
                </div>
                <div className="chat__sendMessageContent">
                    <input type="text"/>
                    <button type="submit"></button>
                </div>
                <MicIcon className="chat__sendMessageMic"/>
            </div>
        </div>
    );
};

export default Chat;