import * as actionTypes from "../actions/actionsTypes";
import {updateObject} from "../utility";
const initalState = {
    orders: [],
    loading: false,
    purchased: false
}

const purchaseInit = (state, action) => {
    return updateObject(state, {purchased: false}) 
}

const purchaseBurgerStart = (state, action) => {
    return updateObject(state, {loading: true})
}

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.orderData, {id: action.orderId,purchased: true})
    return updateObject(state, {loading: false, orders: state.orders.concat(newOrder)})
}

const purchaseBurgerFail = (state, action) => {
    return updateObject(state, {loading: false})
}

const purchaseBurgerstart = (state, action) => {
    return updateObject(state, {loading: true})

}

const pruchaseBurgerSucess = (state, action) => {
    return updateObject(state, {orders: action.orders, loading: false})

}

const purchaseFetchOrdersFail = (state, action) => {
    return updateObject(state, {loading: false})
}
const reducer = (state = initalState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_INIT:
            return purchaseInit(state, action);
            // return updateObject(state, {purchased: false})
        case  actionTypes.PURCHASE_BURGER_START:
            return purchaseBurgerStart(state, action)
            // return updateObject(state, {loading: true})
            // return {
            //     ...state, 
            //     loading: true
            // }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return purchaseBurgerSuccess(state, action)
            // const newOrder = updateObject(action.orderData, {id: action.orderId,purchased: true})
            // const newOrder = {
            //     ...action.orderData,
            //     id: action.orderId,
            //     purchased: true
            // }
            // return updateObject(state, {loading: false, orders: state.orders.concat(newOrder)})
            // return {
            //     ...state,
            //     loading: false,
            //     orders: state.orders.concat(newOrder)
            // }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return purchaseBurgerFail(state, action)
            // return updateObject(state, {loading: false})
            // return {
            //     ...state,
            //     loading: false
            // }
        case actionTypes.FETCH_ORDERS_START:
            return purchaseBurgerstart(state, action)
            // return updateObject(state, {loading: true})
            // return {
            //     ...state,
            //     loading: true 
            // }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return pruchaseBurgerSucess(state, action);
            // return updateObject(state, {orders: action.orders, loading: false})
            // return {
            //     ...state, 
            //     orders: action.orders,
            //     loading: false
            // }
        case actionTypes.FETCH_ORDERS_FAIL:
            return purchaseFetchOrdersFail(state, action);
            // return updateObject(state, {loading: false})
            // return {
            //     ...state,
            //     loading: false
            // }
        default:
            return state;
    }
}

export default reducer;