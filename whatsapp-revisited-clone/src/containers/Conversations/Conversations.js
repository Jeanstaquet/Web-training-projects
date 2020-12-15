import React, {useState} from 'react';
import "./Conversations.scss";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import Conversation from "../../components/Conversation/Conversation";

const Conversations = () => {

    const [data, setData] = useState([{Name: "Jean", last: "Hello, how it's going ?", timeStamp: "10:01"},
                                      {Name: "Igor", last: "Hello, how it's going ?", timeStamp: "10:02"},
                                      {Name: "Igor", last: "Hello, how it's going ?", timeStamp: "10:02"},
                                      {Name: "Igor", last: "Hello, how it's going ?", timeStamp: "10:02"},
                                      {Name: "Igor", last: "Hello, how it's going ?", timeStamp: "10:02"}]);

    const expandMenuHandler = () => {
        console.log("press")
    }
    
    return (
        <div className="converstations__container">
            <div className="conv__account">
                <Avatar />
                <button>FEATURES</button>
                <div className="conv__accountIcons">
                    <AddIcon/>
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className="conv__searchBar">
                <input type="text"/>
                <SearchIcon className="conv__glass"/>
            </div>
            <div className="conv__list">
                {data.map((conv, i) => {
                    return <Conversation key={i} 
                                         name={conv.Name} 
                                         lastMessage={conv.last} 
                                         timeStamp={conv.timeStamp}
                                         click={expandMenuHandler}/>
                })}
            </div>
        </div>
    );
};

export default Conversations;