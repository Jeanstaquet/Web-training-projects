import React from 'react';
import Item from "./item"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";


const column = (props) => {
    return (
      <div key={props.keyD} className={"column"}>
      <h3>{props.title}</h3>
        <Droppable droppableId={props.keyD} key={props.keyD}>
        {(provided, snapshot) => {
          return(
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={"droppable-col"}
            >
              {props.data.items.map((el, index) => {
                return(
                  <Item keyV={el} index={index} draggableId={el}/>
                )
              })}
              {provided.placeholder}
            </div>
          )
        }}
      </Droppable>
      </div>
    );
};

export default column;