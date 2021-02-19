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

  const setItem = React.useCallback((itemSelected, item) => {
    dispatch({ type: ActionTypes.SET_ITEM, itemSelected: itemSelected, item: item })
  }, [dispatch])

  const newState = React.useCallback((newState) => {
    dispatch({type: ActionTypes.NEW_STATE, newState: newState})
  }, [dispatch])

  const setCol = React.useCallback((changedCol, index) => {
    dispatch({type: ActionTypes.SET_COL, changedCol: changedCol, index: index})
  }, [dispatch])

  const labelHandler = React.useCallback((addLabels) => {
    dispatch({type: ActionTypes.LABELS_UPDATE, addLabels: addLabels})
  }, [dispatch]);
  
  return React.useMemo(
    () => ({
      addColumn,
      setItem,
      newState,
      setCol,
      labelHandler
    }),
    [dispatch]
  )
}