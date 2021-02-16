import React from 'react';
import Card from "../Card/Card";
import AddIcon from '@material-ui/icons/Add';

import "./Column.css";
const Column = (props) => {
    let column = null
    if(props.title) {
        column = (
            <div className="column">
                <h3 className="column__title">{props.title}</h3>
                <Card/>
                {props.data.items.map(({id, name}) => {
                    return <Card text={name} key={id} />
                })}
                <div className="column__addACard">
                    <AddIcon/>
                    <p>Add a card</p>
                </div>
            </div>
        )
    
    }

    if(props.lastOne) {
        column = (
            <div className="column">
            <div className="column__addACard">
                <AddIcon/>
                <p>Add a list</p>
            </div>
        </div>
        )
    }
    return (
        column
    );
};

export default Column;