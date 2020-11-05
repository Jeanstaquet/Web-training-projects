import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import AddIcon from '@material-ui/icons/Add';
import "./Chat.scss"

class Chat extends Component {
    state= {
        messages: [{message: "Hi this is my first message", author: "Jean S.", time:"11:45"},
                   {message: "I can be there soon", author: "Me", time:"11:46"},
                   {message: "What is the sizes of the items ?", author: "Jean S.", time:"11:47"},
                   {message: "Should i take a truck ? ", author: "Me", time:"11:48"},
                   {message: "I will be there ASAP ", author: "Jean S.", time:"11:49"},
                   {message: "adazdad ", author: "Jean S.", time:"11:50"},
                   {message: "Sorry it was a typo", author: "Jean S.", time:"11:55"}],

        currentMessage: "",
        //
    }
    
    currentMessageHandler = (input) => {
        this.setState({currentMessage: input});      
    }

    sendMessageHandler = (e) => {
        e.preventDefault();
        const prevState = [...this.state.messages];
        prevState.push({message: this.state.currentMessage, author: "Me", time:"02:52"});
        this.setState({messages: prevState, currentMessage: ""})
    }

    render() {
        const messages = this.state.messages.map((msg, index) => {
            if(msg.author === "Me") {
                return <p key={index} className="chat__msg chat__msgMe"><span className="chat__msgAuthor">Matilde G.</span>{msg.message} <span className="chat__msgTimestamp">{msg.time}</span></p>
            } else {
                return <p key={index} className="chat__msg"><span className="chat__msgAuthor">{msg.author}</span>{msg.message} <span className="chat__msgTimestamp">{msg.time}</span></p>
            }
        })
        return (
            <div className="chat__container">
                <div className="chat__logoContainer">
                    <section className="chat__logo">
                        <Avatar src="https://avatars.dicebear.com/api/human/4484.svg"/>
                    </section>
                </div>
                <section className="chat__header">
                    <h3>Name: Jean Staquet</h3>
                    <p>Types of relations: Provider</p>
                    <p>Last seen: Mon. 11:54 pm</p>
                </section>
                <section className="chat__contact">
                    <IconButton onClick={() => console.log("oo")}>
                        <SearchOutlined />
                        <input type="text"></input>
                    </IconButton>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <PersonIcon><span>0</span></PersonIcon>
                    </IconButton>
                    <IconButton>
                        <PersonIcon><span>0</span></PersonIcon>
                    </IconButton>
                    <IconButton>
                        <PersonIcon><span>0</span></PersonIcon>
                    </IconButton>
                    <IconButton>
                        <PersonIcon><span>0</span></PersonIcon>
                    </IconButton>
                    <IconButton>
                        <PersonIcon><span>0</span></PersonIcon>
                    </IconButton>
                </section>
                <section className="chat__messages">
                    {messages}
                </section>
                <section className="chat__input">
                    <IconButton>
                        <InsertEmoticonIcon/>
                    </IconButton>
                    <form>
                        <input type="text" placeholder="Send a message" value={this.state.currentMessage} onChange={e => this.currentMessageHandler(e.target.value)}/>
                        <button type="submit" onClick={this.sendMessageHandler}>Submit</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default Chat;