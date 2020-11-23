import * as actionTypes from "./actions";

export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    //permis grâce a thunk
    return (dispatch) => {
        setTimeout(() => {
            //permet de dispatcher les actions dont nous avons besoins
            dispatch(saveResult(res))
        }, 2000)
    }
}

export const deleteResult = (resltElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resltElId
    }
}