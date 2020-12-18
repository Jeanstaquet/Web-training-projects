import React, { useEffect, useState } from 'react';
import "./Chat.scss";
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';
import { Avatar } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from "../../components/Message/Message";
import db from "../../firebase";
import firebase from "firebase"
import { withRouter } from "react-router";
const Chat = (props) => {

    const [message, setMessage] = useState("");
    const [messageCanal, setMessageCanal] = useState([])

    let iconSend = message.length < 1 ? <MicIcon className="chat__sendMessageMic"/> : <SendIcon onClick={(e) => sendMessage(e, message)} className="chat__sendMessageMic"/>

    useEffect(() => {
        const unsubscribe = db.collection("messages").onSnapshot(snapshot => (
            setMessageCanal(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))

        return () => {
            unsubscribe();
        }
    }, [])

    const sendMessage = (event, message) => {
        if(event) {
            event.preventDefault()
        }
        setMessage("")
        db
            .collection("messages")
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: message
            });
        console.log(messageCanal)
    }

    console.log(props.match.params)

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
                {/* {messageCanal.map(mess => {
                    return <Message message={mess.message} timestamp={mess.timestamp} reviever={true}/>
                })} */}
                {messageCanal.map(room => (
                    <Message key={room.id} id={room.id} message={room.data.message}/>
                ))}
            </div>
            <div className="chat__sendMessage">
                <div className="chat__sendMessageEmoji">
                    <InsertEmoticonIcon/>
                    <AttachFileIcon/>
                </div>
                <form className="chat__sendMessageContent">
                    <input type="text" onChange={(e) => setMessage(e.target.value)} value={message}/>
                    <button type="submit" onClick={(event) =>sendMessage(event, message)}></button>
                </form>
                {iconSend}
            </div>
        </div>
    );
};

export default withRouter(Chat);