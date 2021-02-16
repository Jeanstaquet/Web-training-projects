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

const dataCol = {
    "todo": {
        title: "Todo",
        items: [item, item2]
      },
      "in-progress": {
        title: "In Progress",
        items: []
      },
      "done": {
        title: "Completed",
        items: []}
}


const Board = () => {

  const [openModal, setOpenModal] = useState(true)

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
    return (
        <div className="board">
            <Navigation/>
            <Modal 
              modalHandler={modalHandler} show={openModal}/>
            <Column/>
            {Object.entries(dataCol).map(([key, val]) => {
              return <Column title={val.title} key={key} data={val}/>
            })}
            <Column lastOne={true}/>
          
        </div>
    );
};

export default Board;