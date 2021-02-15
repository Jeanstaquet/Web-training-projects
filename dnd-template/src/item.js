import React from 'react';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
const item = (props) => {
  console.log(props.keyV.id)
    return (
        <Draggable key={props.keyV.id} index={props.index} draggableId={props.draggableId.id}>
        {(provided, snapshot) => {
          console.log(snapshot)
          return(
            <div
              className={`item ${snapshot.isDragging && "dragging"}`}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {props.draggableId.name}
            </div>
          )
        }}
      </Draggable>
    );
};

export default item;