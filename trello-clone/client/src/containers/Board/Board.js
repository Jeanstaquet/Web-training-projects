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
  const {setCol} = useAppDispatch();
  const state = useAppData();

  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState(dataCol)
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

  useEffect(() => {
    console.log("fetching new data")
    fetchData()
  }, [data.keys])

  // useEffect(() => {
  //   axios.get(url + encodeURIComponent(JSON.stringify(item)))
  //     .then(result => console.log(result))
  //     .catch(err => console.log(err.message))
  // }, [])

  const fetchData = () => {
    axios.get(url)
      .then(result => {
        setData(result.data)
        console.log(data)
      })
  }

  // useEffect(() => {
  //   const dataToSend = {
  //     title: "ok let's go guys"
  //   }
  //   axios.post(url, dataToSend)
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
    const dataForSwop = {srcDroppableId: data[source.droppableId], 
                  srcIndex: source.index,
                  destDroppableId: data[destination.droppableId],
                  destIndex: destination.index,
                  itemCopyt: itemCopy}
    
    axios.post(url + "swop", dataForSwop)
      .then(r => console.log(r))

    setData(prev => {
      prev = {...prev}
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1)


      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  const labelChangeHandler = (type) => {
    const prevState = {...labelsHandler}
    if(prevState[type]) {
        prevState[type] = false
    } else {
        prevState[type] = true
    }
    
    setLabelsHandler(prevState)
  }

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
  
  const handleColumnName = (colNbr, data) => {
    setOpenModal(true);
    setCol(data, colNbr)
  }
  const changeDesModal = (des) => {
    setModalDescription(des)
  }
  const saveNewElement = (description) => {
    let labels = []
    Object.entries(labelsHandler).map(([key, val]) => {
      if(val) {
        labels.push(key)
      }
    })
    const prevItems = [...state.changedCol.items, {id: uuidv4(), name: description, tags: labels.join(" ")}];
    const neS = {...data}
    neS[state.index].items = prevItems;
    setOpenModal(false);
    setModalDescription("");
    setData(neS);
  }
    return (
        <div className="board">
            <Navigation/>
            <Modal 
              labelsHandler={labelsHandler}
              labelChangeHandler={labelChangeHandler}
              val={modalDescription}
              changeDesc={changeDesModal}
              modalHandler={modalHandler} 
              show={openModal}
              title={state ? state.changedCol.title: null}
              save={() => saveNewElement(modalDescription)}/>
            <DragDropContext onDragEnd={handleDragEnd}>
              {data ? 
                 Object.entries(data).map(([key, val]) => {
                  return <Column click={handleColumnName} title={val.title} key={key} data={val} id={key}/>
                })
              : null}
            </DragDropContext>
            <Column newColHandler={newColHandler} setNewCol={setTitleNewCol} newTitle={titleNewCol} lastOne={true}/>
          
        </div>
    );
};

export default Board;