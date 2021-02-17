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
const Board = () => {
  const state = useAppData()
  const [openModal, setOpenModal] = useState(false)
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

  useEffect(() => {
      axios.get("http://localhost:5000/")
      .then((result) => {
        newState({...result.data})
      })
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
  const handleColumnName = (colNbr, data) => {
    setOpenModal(true);
    setCol(data, colNbr)

  }
  const changeDesModal = (des) => {
    setModalDescription(des)
  }

  const saveNewElement = (description) => {
    const previousitem = [...state.changedCol.items]
    previousitem.push({id: uuidv4(), name: description})

    const nS = {...state}
    nS[state.index].items = previousitem
    delete nS.index
    delete nS.changedCol
    setOpenModal(false);
    setModalDescription(" ")
    newState(nS)
  }

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
              {state ? 
                 Object.entries(state).map(([key, val]) => {
                  return <Column click={handleColumnName} title={val.title} key={key} data={val} id={key}/>
                })
              : null}
            </DragDropContext>
            <Column lastOne={true}/>
          
        </div>
    );
};

export default Board;