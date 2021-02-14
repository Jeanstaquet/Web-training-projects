
import React, {useState} from 'react';
import './App.css';
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import _ from "lodash";
import {v4} from "uuid";
import Column from "./column"

const item = {
  id: v4(),
  name: "Clean the house"
}

const item2 = {
  id: v4(),
  name: "Wash the car"
}

function App() {
  const [text, setText] = useState("")
  const [state, setState] = useState({
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
      items: []
    }
  })

  const handleDragEnd = ({destination, source}) => {
    if (!destination) {
      return
    }

    //Si l'user à remis la position de l'élément la ou elle à commencé
    if (destination.index === source.index && destination.droppableId === source.droppableId) {
      return
    }

    // Creating a copy of item before removing it from state
    const itemCopy = {...state[source.droppableId].items[source.index]}
    console.log(itemCopy)
    setState(prev => {
      prev = {...prev}
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1)


      // Adding to new items array location
      prev[destination.droppableId].items.splice(destination.index, 0, itemCopy)

      return prev
    })
  }

  const addItem = () => {
    setState(prev => {
      return {
        ...prev,
        todo: {
          title: "Todo",
          items: [
            {
              id: v4(),
              name: text
            },
            ...prev.todo.items
          ]
        }
      }
    })

    setText("")
  }

  return (
    <div className="App">
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={addItem}>Add</button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          console.log(key)
          return(
              <Column data={data} title={data.title} keyD={key}/>
          )
        })}
      </DragDropContext>
    </div>
  );
}

export default App;