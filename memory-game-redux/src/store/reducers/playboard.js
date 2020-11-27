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
        case "CURRENTCARD_ADD":
            return {
                ...state,
                currentCard: action.currentCard
            }
        case "NEXTCARD_ADD":
            return {
                ...state,
                nextCard: action.nextCard
            }
        case "COUNTER_HANDLER":
            return {
                ...state,
                counter: action.count
            }    
        case "CARDS_TURN_HANDLER":
            const newState = [...state.cards];
            newState[index].turn = true;
            return {
                ...state,
                cards : {...newState, 
                    } 
            }
        case "FOUND_HANDLER":
            const newSt = [...state.cards];
            newSt[index].finded = true;
            newSt[index + 1].finded = true;
            return {
                ...state,
                cards: {
                    ...newSt;
                }
            }
    }
}