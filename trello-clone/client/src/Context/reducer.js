import { v4 as uuidv4 } from 'uuid';
export const ActionTypes = {
    ADD_COLUMN: "ADD_COLUMN",

    SET_ITEM: "SET_ITEM",

    SET_COL: "SET_COL",

    ADD_ITEM: "ADD_ITEM",

    UPDATE_ITEM: "UPDATE_ITEM",

    NEW_STATE: "NEW_STATE",

    LABELS_UPDATE: "LABELS_UPDATE"
  }
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COLUMN:
        return {...state, [uuidv4()]: {title: action.title, items: []}}

      case ActionTypes.SET_ITEM:
        return {...state, itemSelected: action.itemSelected, item: action.item}
      
      case ActionTypes.NEW_STATE:
        return {
          ...action.newState
        }
      case ActionTypes.SET_COL: 
        return {
          changedCol: action.changedCol, index: action.index
        }

      case ActionTypes.LABELS_UPDATE:
        return {
          ...state, labels: [action.addLabels]
        }

      default:
        return state
    }
  }