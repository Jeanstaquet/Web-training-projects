import * as actionTypes from "./actionTypes";

export const currentCardAdd = (currentCard) => {
    return {
        type: actionTypes.CURRENTCARD_ADD,
        currentCard: currentCard
    }
}

export const nextCardAdd = (nextCard) => {
    return {
        type: actionTypes.NEXTCARD_ADD,
        nextCard: nextCard
    }
}

export const counterHandler = (counter) => {
    return {
        type: actionTypes.COUNTER_HANDLER,
        count: counter
    }
}

export const turnHandler = (idx, b) => {
    return {
        type: actionTypes.TURN_HANDLER,
        index: idx,
        bool: b
    }
}

export const findedHandler = (idx) => {
    return {
        type: actionTypes.FINDED_HANDLER,
        index: idx,
    }
}

export const indexAdd = (idx) => {
    return {
        type: actionTypes.INDEX_ADD,
        index: idx
    }
}