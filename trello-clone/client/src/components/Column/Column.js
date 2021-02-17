import React, { useState } from 'react';
import Card from "../Card/Card";
import AddIcon from '@material-ui/icons/Add';
import { Droppable, Draggable} from "react-beautiful-dnd";
import {useAppDispatch} from "../../Context/index";
import {useAppData} from "../../Context/index";
import "./Column.css";


const Column = (props) => {
    const [title, setTitle] = useState("")
    const {addColumn} = useAppDispatch()
    const state = useAppData()

    const newColumnHandler = (title) => {
        addColumn(title)
        console.log(state)
    }

    let column = null;
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
                <div className="column__addACard" onClick={() => props.click(props.id, props.data)}>
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
                <div className="column__addACardContainer">
                    <AddIcon onClick={() => newColumnHandler(title)}/>
                    <input value={title} className="column__add" onChange={e => setTitle(e.target.value)}/>
                </div>
            </div>
        </div>
        )
    }
    return (
        column
    );
};

export default Column;