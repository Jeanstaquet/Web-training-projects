import React, {useEffect, useState} from 'react';
import "./Conversations.scss";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import Conversation from "../../components/Conversation/Conversation";
import {connect} from "react-redux";
import Tooltip from '@material-ui/core/Tooltip';
import Modal from "../../components/UI/Modal/Modal";
import db from "../../firebase"
const Conversations = (props) => {

    const [data, setData] = useState([{Name: "Jean", last: "Hello, how it's going ?", timeStamp: "10:01"}]);
    const [modal, setModal] = useState(false); 
    const [conversationName, setConversationName] = useState("")

    const toggleModal = () => {
        setModal(true)
    }

    const toggleModalClose = (e) => {
        e.preventDefault();
        setModal(false)
    }

    const changeModalHandler = (e) => {
        setConversationName(e.target.value)
    }

    const addConversationHandler = (e) => {
        e.preventDefault()
        db.collection("Users").doc(props.userId).add({
            name: conversationName
        })
        setConversationName("");
    }

    return (
        <div className="converstations__container">
            <Modal show={modal} click={toggleModalClose} change={changeModalHandler} ok={addConversationHandler}/>
            <div className="conv__account">
                <Avatar src={props.photo}/>
                <button>FEATURES</button>
                <div className="conv__accountIcons">
                    <Tooltip title="Add a new feature" arrow>
                        <AddIcon/>
                    </Tooltip>
 
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className="conv__searchBar">
                <input type="text"/>
                <SearchIcon className="conv__glass"/>
            </div>
            <div className="conv__list">
                <Conversation addNewConv={true} click={toggleModal}/>
                {data.map((conv, i) => {
                    return <Conversation key={i} 
                                         name={conv.Name} 
                                         lastMessage={conv.last} 
                                         timeStamp={conv.timeStamp}/>
                })}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        photo: state.photo,
        userId: state.userId
    }
}


export default connect(mapStateToProps, null)(Conversations);