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
    0: {
        title: "Todo",
        items: [item, item2]
      },
    1: {
        title: "In Progress",
        items: [item5]
      },
    2: {
        title: "Completed",
        items: [item3, item4]}
}

const Board = () => {
  const state = useAppData()
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState(dataCol)
  const {updateCol, newState, setCol} = useAppDispatch()
  const [modifiedCol, setModifiedCol] = useState({})
  const [modalDescription, setModalDescription] = useState("")

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

  // useEffect(() => {
  //     axios.get("http://localhost:5000/")
  //     .then((result) => {
  //       newState({...result.data})
  //     })
  // }, [])

  const handleDragEnd = ({destination, source}) => {
    if(!destination) {
      return;
    }

    //If the user has reset the position of the element where it has started
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    //return updateCol(source.droppableId, source.index, destination.droppableId, destination.index)
    

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
  
  const handleColumnName = (colNbr, data) => {
    setOpenModal(true);
    setCol(data, colNbr)
  }
  const changeDesModal = (des) => {
    setModalDescription(des)
  }
  const saveNewElement = (description) => {
    const prevItems = [...state.changedCol.items, {id: uuidv4(), name: description}];
    const neS = {...data}
    neS[state.index].items = prevItems;
    setData(neS)
     
    // console.log("debut", [...state.changedCol.items])
    // const previousitem = [...state.changedCol.items, {_id: uuidv4(), id: uuidv4(), name: description}]
    // console.log("fin", previousitem)

    // const nS = {...state}
    // nS[state.index].items = previousitem;
    // delete nS.index;
    // delete nS.changedCol;
    // setOpenModal(false);
    // setModalDescription("")
    // newState(nS)

    console.log(state)
  }
  console.log(data)
    return (
        <div className="board">
            <Navigation/>
            <Modal 
              val={modalDescription}
              changeDesc={changeDesModal}
              modalHandler={modalHandler} 
              show={openModal}
              title={modifiedCol.title}
              save={() => saveNewElement(modalDescription)}/>
            <DragDropContext onDragEnd={handleDragEnd}>
              {data ? 
                 Object.entries(data).map(([key, val]) => {
                  return <Column click={handleColumnName} title={val.title} key={key} data={val} id={key}/>
                })
              : null}
            </DragDropContext>
            <Column lastOne={true}/>
          
        </div>
    );
};

export default Board;