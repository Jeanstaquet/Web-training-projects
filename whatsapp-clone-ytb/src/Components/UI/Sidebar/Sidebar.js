//Installer le package avant
import "./Sidebar.css"
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import {useState, useEffect} from "react"
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat/SidebarChat";
import db from "../../../firebase"
import {useStateValue} from "../../../StateProvider";

function Sidebar() {
    const [rooms, setRooms] = useState([])
    const [{user}, dispatch] = useStateValue();
    useEffect(() => {
        const unsubsrcibe = db.collection("Rooms").onSnapshot((snapshot) => 
               setRooms(snapshot.docs.map((doc) => ({
                   id: doc.id,
                   data: doc.data(),
                })) 
            ))
        return () => {
            unsubsrcibe()
        }
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>   
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                <SearchOutlined/>
                <input placeholder="Search or start new chat"/> 
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.Name}/>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;