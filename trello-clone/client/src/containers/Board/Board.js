import React, { useEffect, useState } from 'react';
import "./Board.css";
import  Navigation from "../../components/UI/Navigation/Navigation";
import Column from "../../components/Column/Column";
import Modal from "../../components/UI/Modal/Modal";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {useAppDispatch} from "../../Context/index";
import {useAppData} from "../../Context/index";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
const item = {
    id: "zefzef",
    name: "Clean the house",
    tags: "Urgent S.O.S."
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
  const state = useAppData()
  const [data, setData] = useState()
  const [openModal, setOpenModal] = useState(false)
  const {updateCol, newState} = useAppDispatch()
  console.log(state)

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

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:5000/")
      .then((result) => {
        newState({...result.data})
      })
    }, 2000)

  }, [])

  const handleDragEnd = ({destination, source}) => {
    if(!destination) {
      return;
    }

    //If the user has reset the position of the element where it has started
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    return updateCol(source.droppableId, source.index, destination.droppableId, destination.index)
    

    // const itemCopy = {...data[source.droppableId].items[source.index]}
    // setData(prev => {
    //   prev = {...prev}
    //   // Remove from previous items array
    //   prev[source.droppableId].items.splice(source.index, 1)


    //   // Adding to new items array location
    //   prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

    //   return prev
    // })
    

  }
  let objData;
  if(state) {
    objData = 
    Object.entries(state).map(([key, val]) => {
      return <Column title={val.title} key={key} data={val} id={key}/>
    })
  }
    return (
        <div className="board">
            <Navigation/>
            <Modal 
              modalHandler={modalHandler} show={openModal}/>
            <DragDropContext onDragEnd={handleDragEnd}>
              {state ? 
                 Object.entries(state).map(([key, val]) => {
                   console.log(key, val)
                  return <Column title={val.title} key={key} data={val} id={key}/>
                })
              : null}
            </DragDropContext>
            <Column lastOne={true}/>
          
        </div>
    );
};

export default Board;