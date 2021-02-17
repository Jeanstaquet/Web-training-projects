import React from 'react'
import { reducer, ActionTypes } from './reducer'


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

const initialContext = dataCol

const StateContext = React.createContext(initialContext)
const DispatchContext = React.createContext(undefined)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialContext)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export const useAppData = () => {
  return React.useContext(StateContext)
}

export const useAppDispatch = () => {
  const dispatch = React.useContext(DispatchContext)

  if (dispatch === undefined) {
    throw new Error('useBookingDispatch must be used within a BookingProvider')
  }

  const addColumn = React.useCallback((title, plus) => {
    dispatch({ type: ActionTypes.ADD_COLUMN, title: title, plus: plus })
  }, [dispatch])

  const substract = React.useCallback(() => {
    dispatch({ type: ActionTypes.SUBSTRACT })
  }, [dispatch])

  const updateCol = React.useCallback((sourceId, sourceIndex, destDropId, destIndex) => {
    dispatch({type: ActionTypes.UPDATE_COL, 
          sourceId: sourceId, 
          sourceIndex: sourceIndex, 
          destDropId: destDropId, 
          destIndex: destIndex})
  })

  return React.useMemo(
    () => ({
      addColumn,
      substract,
      updateCol
    }),
    [dispatch]
  )
}