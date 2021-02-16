export const ActionTypes = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
  }
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case ActionTypes.ADD:
        return {...state, good: "ok"}
      case ActionTypes.SUBTRACT:
        return --state
      default:
        return state
    }
  }