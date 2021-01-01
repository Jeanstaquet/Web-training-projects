import React, {useEffect, useRef, useState} from 'react';
import "./Conversations.scss";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import Conversation from "../../components/Conversation/Conversation";
import {connect} from "react-redux";
import Tooltip from '@material-ui/core/Tooltip';
import Modal from "../../components/UI/Modal/Modal";
import db from "../../firebase";
import FeatureMenu from "../FeatureMenu/FeatureMenu";
import * as actions from "../../store/action/index"
const Conversations = (props) => {
    const [modal, setModal] = useState(false); 
    const [conversationName, setConversationName] = useState("");
    const [fetchedConversations, setFetchecConversations] = useState([])
    const [contact, setContact] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [menuOpenClose, setMenuOpenClose] = useState(true)

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


    const changeContactHandler = (e) => {
        setContact(e.target.value)
    }

    const addConversationHandler = (e) => {
        e.preventDefault()
        if(contact.length === 0 || conversationName.length === 0) {
            setErrorMessage("You have to add an chat name and/or a valid pseudo name")
            setTimeout(() => {
                setErrorMessage("")
            }, 2500)
        } else {
            checkPseudo(contact)
        }

    }

    const checkPseudo = (name) => {
        db.collection("Users").where("pseudo", "==", name)
        .get()
        .then((querySnapshot) => {
            if(querySnapshot.empty) {
                setErrorMessage("This userd don't exist")
                setTimeout(() => {
                    setErrorMessage("")
                }, 2500)
            }
            querySnapshot.forEach(function(doc) {
                props.contactDetails(doc.data())
                db.collection("Users").doc(props.userId).collection("conversations").doc(conversationName).set({
                    name: conversationName,
                    contact: doc.data()

                })

                db.collection("Users").doc(doc.data().userId).collection("conversations").doc(conversationName).set({
                    name: conversationName,
                    contact: props.dataForContact
                })
                setConversationName("");
                setModal(false)
            });
        })
    }

    useEffect(() => {
        const unsubcribe = db.collection("Users")
                .doc(props.userId)
                .collection("conversations")
                .onSnapshot(snapshot => setFetchecConversations(snapshot.docs.map((doc) => doc.data())))
    
        return () => {
            unsubcribe();
        }
    
    }, [])

    const handleMenu = () => {
        setMenuOpenClose(!menuOpenClose)
    }

    return (
        <div className="converstations__container" >
            <FeatureMenu toggle={handleMenu} open={menuOpenClose}/>
            <Modal show={modal} 
                   click={toggleModalClose} 
                   change={changeModalHandler}
                   changeContact={changeContactHandler} 
                   ok={addConversationHandler}
                   errorMessage={errorMessage}/>
            <div className="conv__account">
                <Avatar className="conv__avatar" src={props.photo}>{props.pseudo !== null ? props.pseudo.pseudo[0] : null}</Avatar>
                <button onClick={handleMenu}>MENU</button>
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
                {fetchedConversations.map((conv, i) => {
                    return <Conversation key={i} 
                                         name={conv.name} 
                                         roomname={conv.name}
                                         dispatchRoomName={() => props.roomNameHandler(conv.name, conv.contact.pseudo, conv.contact)}/>
                })}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        photo: state.photo,
        userId: state.userId,
        pseudo: state.pseudo,
        contactData: state.contactDetails,
        dataForContact: state.pseudo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        roomNameHandler: (r, c, d) => dispatch(actions.roomNameHandler(r, c, d)),
        contactDetails: (d) => dispatch(actions.contactDetails(d))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Conversations);