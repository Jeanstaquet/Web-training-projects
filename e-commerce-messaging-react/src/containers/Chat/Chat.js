import React, { Component } from 'react';
import PersonIcon from '@material-ui/icons/Person';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { IconButton } from '@material-ui/core';

class Chat extends Component {
    render() {
        return (
            <div>
                <section>
                    <h3>Name: XXX</h3>
                    <p>Types of relations: XXX</p>
                    <p>Last seen: XXX</p>
                </section>
                <section>
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
                <section>
                    <p>Message1</p>
                    <p>Message2</p>
                    <p>Message3</p>
                    <p>Message4</p>
                    <p>Message5</p>
                </section>
                <section>
                    <IconButton>
                        <InsertEmoticonIcon/>
                    </IconButton>
                    <form>
                        <input type="text" placeholder="Send a message"/>
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>
        );
    }
}

export default Chat;