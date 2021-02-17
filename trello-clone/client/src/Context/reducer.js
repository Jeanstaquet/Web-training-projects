import { v4 as uuidv4 } from 'uuid';
export const ActionTypes = {
    ADD_COLUMN: "ADD_COLUMN",

    DELETE_COLUMN: "DELETE_COLUMN",

    SET_ITEM: "SET_ITEM",

    UPDATE_ITEM: "UPDATE_ITEM",

    UPDATE_COL: "UPDATE_COL"

  }
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COLUMN:
        return {...state, [uuidv4()]: {title: action.title, items: []}}

      case ActionTypes.SET_ITEM:
        return {...state, }

      case ActionTypes.UPDATE_COL:
        const itemCopy = {...state[action.sourceId].items[action.sourceIndex]}
        const prev = {...state}
        prev[action.sourceId].items.splice(action.sourceIndex, 1)
        prev[action.destDropId].items.splice(action.destIndex, 0, itemCopy)
        return {...prev}

      default:
        return state
    }
  }