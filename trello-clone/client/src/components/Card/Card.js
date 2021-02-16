import React from 'react';
import "./Card.css"
import CreateIcon from '@material-ui/icons/Create';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {Draggable} from "react-beautiful-dnd";

const Card = (props) => {

    return (
        <Draggable key={props.id} index={props.index} draggableId={props.id}>
            {(provided, snapshot) => {
                return (
                    <div className="card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                        <div className="card__labelContainer">
                        <p>To do: Urgent</p>
                        </div>
                        <div className="card__createIconContainer">
                        <CreateIcon className="card__createIcon"/>
                        </div>
                        <div className="card__labelText"></div>
                        <p className="card__text">{props.text}</p>
                        <div className="card__labelTimeContainer">
                            <ScheduleIcon className="card__labelTimeIcon"/>
                            <p>24 june 2021</p>
                        </div>
                    </div>
                )
            }}

        </Draggable>
    );
};

export default Card;