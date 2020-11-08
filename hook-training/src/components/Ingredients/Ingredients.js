import React, {useCallback, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter(ing => ing.id !== action.id);
    default: 
      throw new Error("Should not get there!")
  }
}

const httpReducer = (currHttpState, action) => {
  switch(action.type) {
    case "SEND":
      return {loading: true, error: null};
    case "RESPONSE":
      return {...currHttpState, loading: false}
    case "ERROR":
      return {loading: false, error: action.errorMessage}
    case "CLEAR":
      return {...currHttpState, error: null}
    default: 
      throw new Error("Should not be reached!")
  }
}

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
  const [httpState, dispatchHttp] = useReducer(httpReducer, {loading: false, error: null})

  // const [userIngredients, setUserIngredients] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState();


  const filterIngredientsHandler = useCallback(filteredIngredients => {
    //setUserIngredients(filteredIngredients)
    dispatch({type: "SET", ingredients: filteredIngredients})
  }, [])

  const addIngredientHandler = ingredient => {
    //setIsLoading(true)
    dispatchHttp({type: "SEND"});
    fetch("https://react-burger-app-ffe1a.firebaseio.com/ingredients.json", 
      {method: "POST",
       body: JSON.stringify(ingredient),
       headers: {"Content-Type": "application/json"}}
       ).then(response => { 
        //setIsLoading(false)
        dispatchHttp({type: "RESPONSE"});
        //extraire le body et le convertir en JSON 
        return response.json();
      }).then( responseData => {


        // setUserIngredients(prevIngredients => [
        //   ...prevIngredients, {id: responseData.name, ...ingredient}
        // ])
        dispatch({type:"ADD", ingredient: {id: responseData.name, ...ingredient}})
      }
      ) 
  }

  const removeItemHandler = ingredientId => {
    dispatchHttp({type: "SEND"});
    fetch(`https://react-burger-app-ffe1a.firebaseio.com/ingredients/${ingredientId}.json`, 
      {method: "DELETE"}
       ).then(response => {
        //setIsLoading(false) 
        //setUserIngredients(prevIngredients => prevIngredients.filter((ingredient) => ingredient.id !== ingredientId));
        dispatch({type:"DELETE", id: ingredientId})
      }
       ).catch(error => {
        dispatchHttp({type: "ERROR", errorMessage: error.message});
         //setError("Something went wrong");
         //setIsLoading(false);
       })
  }

  const clearError = () => {
    dispatchHttp({type:"CLEAR"})
  }

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <IngredientForm 
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}/>

      <section>
        <Search onLoadIngredients={filterIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeItemHandler}/>
      </section>
    </div>
  );
};

export default Ingredients;
