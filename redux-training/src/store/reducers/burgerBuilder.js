import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const addIngredient = (state, action) => {
    const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
    const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedState)
}

const removeIngredient = (state, action) => {
    const updatedIngred = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
    const updatedIngreds = updateObject(state.ingredients, updatedIngred);
    const updatedSt = {
        ingredients: updatedIngreds,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
    }
    return updateObject(state, updatedSt);
}

const setIngredients = (state, action) => {
    return updateObject(state, {error: false, totalPrice: 4, ingredients: action.ingredients})

}

const fetchIngredientFail = (state, action) => {
    return updateObject(state, {error: true})
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_INGREDIENT:
            // const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1}
            // const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            // const updatedState = {
            //     ingredients: updatedIngredients,
            //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            // }
            return addIngredient(state, action)
            // return {
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            //     },
            //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            // };
        case actionTypes.REMOVE_INGREDIENT:
            // const updatedIngred = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1}
            // const updatedIngreds = updateObject(state.ingredients, updatedIngred);
            // const updatedSt = {
            //     ingredients: updatedIngreds,
            //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            // }
            // return updateObject(state, updatedSt);
            return removeIngredient(state, action)
            // return {
            //     ...state,
            //     ingredients: {
            //         ...state.ingredients,
            //         [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            //     },
            //     totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            // };
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action)
            // return updateObject(state, {error: false, totalPrice: 4, ingredients: action.ingredients})
            // return {
            //     ...state,
            //     error: false,
            //     totalPrice: 4,
            //     ingredients: action.ingredients
            // };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientFail(state, action)
            // return updateObject(state, {error: true})
            // return {
            //     ...state,
            //     error: true
            // }
        default:
            return state;
    }
};

export default reducer;