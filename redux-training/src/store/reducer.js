//actionTypes est mnt un obj
import * as actionTypes from "./actions";

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD: 
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                //retourne l'ancien array + la valeur
                //on ne fait pas push car celui-ci manipule l'array originale
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1);

            //filter retourne un nouvel array, il ne touche pas le précédent
            const updatedArray = state.results.filter(res => res.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;