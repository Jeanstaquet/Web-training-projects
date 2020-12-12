import React from 'react';
import "./Conversations.scss";
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
const Conversations = () => {
    return (
        <div className="converstations__container">
            <div className="conv__account">
                <p>img</p>
                <div className="conv__accountIcons">
                    <AddIcon/>
                    <MoreHorizIcon/>
                </div>
            </div>
            <div className="conv__searchBar">
                <input type="text"/>
                <SearchIcon/>
            </div>
            <div className="conv__list">
                <p>test</p>
            </div>
        </div>
    );
};

export default Conversations;