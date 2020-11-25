import * as actionTypes from "../actions/actionsTypes";
import {updateObject} from "../utility";
const initalState = {
    orders: [],
    loading: false,
    purchased: false
}



const reducer = (state = initalState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, {purchased: false})
        case  actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, {loading: true})
            // return {
            //     ...state, 
            //     loading: true
            // }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updateObject(action.orderData, {id: action.orderId,purchased: true})
            // const newOrder = {
            //     ...action.orderData,
            //     id: action.orderId,
            //     purchased: true
            // }
            return updateObject(state, {loading: false, orders: state.orders.concat(newOrder)})
            // return {
            //     ...state,
            //     loading: false,
            //     orders: state.orders.concat(newOrder)
            // }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, {loading: false})
            // return {
            //     ...state,
            //     loading: false
            // }
        case actionTypes.FETCH_ORDERS_START:
            return updateObject(state, {loading: true})
            // return {
            //     ...state,
            //     loading: true 
            // }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, {orders: action.orders, loading: false})
            // return {
            //     ...state, 
            //     orders: action.orders,
            //     loading: false
            // }
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject(state, {loading: false})
            // return {
            //     ...state,
            //     loading: false
            // }
        default:
            return state;
    }
}

export default reducer;