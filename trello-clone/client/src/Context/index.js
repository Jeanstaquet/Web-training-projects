import React from 'react'
import { reducer, ActionTypes } from './reducer'

const initialContext = null

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

  const setItem = React.useCallback((itemSelected) => {
    dispatch({ type: ActionTypes.SET_ITEM, itemSelected: itemSelected })
  }, [dispatch])

  const updateCol = React.useCallback((sourceId, sourceIndex, destDropId, destIndex) => {
    dispatch({type: ActionTypes.UPDATE_COL, 
          sourceId: sourceId, 
          sourceIndex: sourceIndex, 
          destDropId: destDropId, 
          destIndex: destIndex})
  })

  const newState = React.useCallback((newState) => {
    dispatch({type: ActionTypes.NEW_STATE, newState: newState})
  })

  const setCol = React.useCallback((changedCol, index) => {
    dispatch({type: ActionTypes.SET_COL, changedCol: changedCol, index: index})
  })
  return React.useMemo(
    () => ({
      addColumn,
      setItem,
      updateCol,
      newState,
      setCol
    }),
    [dispatch]
  )
}