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
import {connect} from "react-redux"
const Chat = (props) => {

    const [mess, setMessage] = useState("");
    const [messageCanal, setMessageCanal] = useState([])

    let iconSend = mess.length < 1 ? <MicIcon className="chat__sendMessageMic"/> : <SendIcon onClick={(e) => sendMessage(e, mess)} className="chat__sendMessageMic"/>

    useEffect(() => {
        if(props.userId && props.roomName) {
            const unsubscribe = 
            db
            .collection("Users")
            .doc(props.userId)
            .collection("conversations")
            .doc(props.roomName)
            .collection("messages")
            .orderBy("timestamp", "asc")
            .onSnapshot(snapshot => (
                setMessageCanal(snapshot.docs.map(doc => (
                    {
                        data: doc.data()
                    }
                )))
            ))
        }


        return () => {

        }
    }, [props.roomName])


    const sendMessage = (event, message) => {
        if(event) {
            event.preventDefault()
        }

        db
            .collection("Users")
            .doc(props.userId)
            .collection("conversations")
            .doc(props.roomName)
            .collection("messages")
            .add({
                message: mess,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                sender: "eee"
            })

            setMessage("")
    }

    // .set({
    //     message: message,
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //     sender: props.email
    // })

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
                    <Message key={room.id} message={room.data.message}/>
                ))}
            </div>
            <div className="chat__sendMessage">
                <div className="chat__sendMessageEmoji">
                    <InsertEmoticonIcon/>
                    <AttachFileIcon/>
                </div>
                <form className="chat__sendMessageContent">
                    <input type="text" onChange={(e) => setMessage(e.target.value)} value={mess}/>
                    <button type="submit" onClick={(event) => sendMessage(event, mess)}></button>
                </form>
                {iconSend}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        userId: state.userId,
        roomName: state.roomName,
        email: state.email
    }
}


export default connect(mapStateToProps, null)(Chat);