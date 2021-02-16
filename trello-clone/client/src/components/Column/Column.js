import React from 'react';
import Card from "../Card/Card";
import AddIcon from '@material-ui/icons/Add';
import { Droppable, Draggable} from "react-beautiful-dnd";

import "./Column.css";
const Column = (props) => {
    let column = null
    if(props.title) {
        column = (
            <div className="column">
                <h3 className="column__title">{props.title}</h3>
                <Droppable droppableId={props.id} key={props.id}>
                    {(provided, snapshot) => {
                        return (
                            <div ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={snapshot.isDraggingOver ? "droppable-col skyblue" : "droppable-col"}>
                                {props.data.items.map(({id, name, tags}, index) => {
                                    return <Card tags={tags} dragggableId={id} data={props.data} id={id} text={name} key={id} index={index}/>
                                })}
                                {provided.placeholder}
                                
                            </div>
                        )
                    }}
                </Droppable>
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