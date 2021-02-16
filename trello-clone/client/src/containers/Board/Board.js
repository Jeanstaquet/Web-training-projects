import React, { useState } from 'react';
import "./Board.css";
import  Navigation from "../../components/UI/Navigation/Navigation";
import Column from "../../components/Column/Column";
import Modal from "../../components/UI/Modal/Modal";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

const item = {
    id: "zefzef",
    name: "Clean the house"
  }
  
  const item2 = {
    id: "zefze",
    name: "Wash the car"
  }

  const item3 = {
    id: "eifjefd",
    name: "Go forward in this project"
  }

  const item4 = {
    id: "eifjzsefd",
    name: "Go forzszsward in this project"
  }

  const item5 = {
    id: "zdzjefd",
    name: "zdszorward in this project"
  }

const dataCol = {
    "todo": {
        title: "Todo",
        items: [item, item2]
      },
      "in-progress": {
        title: "In Progress",
        items: [item5]
      },
      "done": {
        title: "Completed",
        items: [item3, item4]}
}


const Board = () => {
  const [data, setData] = useState(dataCol)
  const [openModal, setOpenModal] = useState(false)

  const modalHandler = (arg) => {
    switch(arg) {
      case "close":
        setOpenModal(false);
        break;
      case "open":
        setOpenModal(true);
        break;
    }
  }

  const handleDragEnd = ({destination, source}) => {
    if(!destination) {
      return;
    }

    //If the user has reset the position of the element where it has started
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    const itemCopy = {...data[source.droppableId].items[source.index]}
    setData(prev => {
      prev = {...prev}
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1)


      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
    
  }
    return (
        <div className="board">
            <Navigation/>
            <Modal 
              modalHandler={modalHandler} show={openModal}/>
            <DragDropContext onDragEnd={handleDragEnd}>
              {Object.entries(data).map(([key, val]) => {
                return <Column title={val.title} key={key} data={val} id={key}/>
              })}
            </DragDropContext>
            <Column lastOne={true}/>
          
        </div>
    );
};

export default Board;