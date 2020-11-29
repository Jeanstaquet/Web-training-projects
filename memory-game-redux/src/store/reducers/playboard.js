import * as actionTypes from "../actions/actionTypes";
const initialState = {
    currentCard: null,
    nextCard: null,
    index: null, 
    counter: 0,
    cards: [{number: 1, turn: false, finded: false},
        {number: 1, turn: false, finded: false},
        {number: 2, turn: false, finded: false},
        {number: 2, turn: false, finded: false},
        {number: 3, turn: false, finded: false},
        {number: 3, turn: false, finded: false},
        {number: 4, turn: false, finded: false},
        {number: 4, turn: false, finded: false},
        {number: 5, turn: false, finded: false},
        {number: 5, turn: false, finded: false},
        {number: 6, turn: false, finded: false},
        {number: 6, turn: false, finded: false},
        {number: 7, turn: false, finded: false},
        {number: 7, turn: false, finded: false},
        {number: 8, turn: false, finded: false},
        {number: 8, turn: false, finded: false},
        {number: 9, turn: false, finded: false},
        {number: 9, turn: false, finded: false}]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CURRENTCARD_ADD:
            return {
                ...state,
                currentCard: action.currentCard
            }
        case actionTypes.NEXTCARD_ADD:
            return {
                ...state,
                nextCard: action.nextCard
            }
        case actionTypes.COUNTER_HANDLER:
            return {
                ...state,
                counter: action.count
            }    
        case actionTypes.TURN_HANDLER:
            const newState = [...state.cards];
            if(action.bool === true) {
                newState[action.index].turn = true;
            } else if(action.bool === false) {
                newState[action.index].turn = false;
            }
            
            return {
                ...state,
                cards : [...newState, 
                    ] 
            }
        case actionTypes.FINDED_HANDLER:
            const newSt = [...state.cards];
            newSt[action.index].finded = true;
            newSt[action.index + 1].finded = true;
            return {
                ...state,
                cards: [
                    ...newSt
                ]
            }
        case actionTypes.INDEX_ADD:
            return {
                ...state,
                index: action.index
            }
        default:
            return state;
    }
}

export default reducer;