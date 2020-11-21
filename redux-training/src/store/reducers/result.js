//actionTypes est mnt un obj
import * as actionTypes from "../actions";

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                //retourne l'ancien array + la valeur
                //on ne fait pas push car celui-ci manipule l'array originale
                results: state.results.concat({id: new Date(), value: action.result})
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