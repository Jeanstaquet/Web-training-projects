import React from 'react';
import "./Board.css";
import  Navigation from "../../components/UI/Navigation/Navigation";
import Column from "../../components/Column/Column"

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
            <Column/>
        </div>
    );
};

export default Board;