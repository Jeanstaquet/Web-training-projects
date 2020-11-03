import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
import db from '../../../../firebase';
import "./SidebarChat.css"

const SidebarChat = ({ id, name, addNewChat }) => {
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState("");

    useEffect(() => {
        if(id) {
            db.collection("Rooms").doc(id).collection("messages")
                .orderBy("timestamp", "desc").onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map((doc) => 
                        doc.data()))
                ))
        }
    }, [id])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");

        if(roomName) {
            //do some stuff
            db.collection("Rooms").add({
                Name: roomName
            });
        }
    }

    return !addNewChat ? (
        <Link to={`rooms/${id}`}>
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
            <h2>{name}</h2>
                <p>{messages[0]?.messages}</p>
            </div>
        </div>
        </Link>

    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
};
//3h17
export default SidebarChat;