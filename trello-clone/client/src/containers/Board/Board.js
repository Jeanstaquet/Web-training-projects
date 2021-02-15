import React from 'react';
import "./Board.css";
import  Navigation from "../../components/UI/Navigation/Navigation";
import Column from "../../components/Column/Column";
import Modal from "../../components/UI/Modal/Modal";

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
    return (
        <div className="board">
            <Navigation/>
            <Modal/>
            <Column/>
            <Column lastOne={true}/>
          
        </div>
    );
};

export default Board;