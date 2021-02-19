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
  const {setCol, setItem} = useAppDispatch();
  const state = useAppData();
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState({})
  const [titleNewCol, setTitleNewCol] = useState("")
  const [modalDescription, setModalDescription] = useState("")
  const [labelsHandler, setLabelsHandler] = useState(
    {Urgent: true,
    TeamIt: false,
    Soonfinished: false,
    Prioritize: false,
    SOS: false
  });
  const url = "http://localhost:5000/"

  //fetch datas for every modal opening and changes
  useEffect(() => {
    console.log("fetching new data")
    fetchData()
  }, [data.keys, openModal])


  //Used to fetch data from the server
  const fetchData = () => {
    axios.get(url)
      .then(result => {
        setData(result.data)
      })
  }

  //Set items the the datalayer
  const setItemState = (itemSelected, item) => {
    setItem(itemSelected, item);
    setOpenModal(true);
  }

  //Handle the dragend props for a draggable & droppable from rbdnd
  const handleDragEnd = ({destination, source}) => {
    if(!destination) {
      return;
    }

    const itemCopy = {...data[source.droppableId].items[source.index]}
    const dataForSwop = {srcDroppableId: data[source.droppableId], 
                  srcIndex: source.index,
                  destDroppableId: data[destination.droppableId],
                  destIndex: destination.index,
                  itemCopyt: itemCopy}

    
    axios.post(url + "swop", dataForSwop)
      .then(r => {
        setData(prev => {
          prev = {...prev}
          // Remove from previous items array
          prev[source.droppableId].items.splice(source.index, 1)
      
          return prev
        })
      })
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

  }

  //Manages the change of labels in the modal
  const labelChangeHandler = (type) => {
    const prevState = {...labelsHandler}
    if(prevState[type]) {
        prevState[type] = false
    } else {
        prevState[type] = true
    }
    setLabelsHandler(prevState)
  }

  //Manages the opening & closing of the modal
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
  
  //Create a new column
  const newColHandler = () => {
    const dataToSend = {
      title: titleNewCol
    }
    axios.post(url, dataToSend)
    setTitleNewCol("")
    setData(prev => {
      return {...prev, [uuidv4()]: {title: titleNewCol, items: []}}
    })
  }
  
  //Add a column's data to the data layer
  const handleColumnName = (colNbr, data) => {
    setOpenModal(true);
    setCol(data, colNbr)
  }
  const changeDesModal = (des) => {
    setModalDescription(des)
  }

  //Add a new card to a column
  const saveNewElement = (description) => {
    let labels = []
    Object.entries(labelsHandler).map(([key, val]) => {
      if(val) {
        labels.push(key)
      }
    })
    const newItem = {id: uuidv4(), name: description, tags: labels.join(" ")};
    const idCol = state.changedCol._id

    const dataToSend = {newItem: newItem, 
                        idCol: idCol}
                        

    axios.post(url + "newcard", dataToSend).
      then(res => {
        setOpenModal(false);
        setModalDescription("");
      })
  }

  //Update the informations about an item
  const updateItem = () => {
    let labels = []
    Object.entries(labelsHandler).map(([key, val]) => {
      if(val) {
        labels.push(key)
      }
    })
    const dataToSend = {
      colId: state.itemSelected,
      completeItem: {
        id: state.item.id,
        name: modalDescription,
        tags: labels.join(" ")
      }
    }
    axios.post(url + "update", dataToSend)
      .then(res => {
              setModalDescription("")
              setOpenModal(false)})

  }
    return (
        <div className="board">
            <Navigation/>
            <Modal 
              setLabelsHandler={setLabelsHandler}
              labelsHandler={labelsHandler}
              labelChangeHandler={labelChangeHandler}
              val={modalDescription}
              changeDesc={changeDesModal}
              modalHandler={modalHandler} 
              show={openModal}
              updateItem={updateItem}
              save={() => saveNewElement(modalDescription)}
              stateItem={state !== null ? state.item: null}/>
            <DragDropContext onDragEnd={handleDragEnd}>
              {data ? 
                 Object.entries(data).map(([key, val]) => {
                  return <Column setItemState={setItemState} click={handleColumnName} title={val.title} key={key} data={val} id={key}/>
                })
              : null}
            </DragDropContext>
            <Column newColHandler={newColHandler} setNewCol={setTitleNewCol} newTitle={titleNewCol} lastOne={true}/>
          
        </div>
    );
};

export default Board;