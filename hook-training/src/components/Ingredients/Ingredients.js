import React, {useCallback, useEffect, useReducer, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from "../UI/ErrorModal";
import useHttp from "../../hooks/https";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter(ing => ing.id !== action.id);
    default: 
      throw new Error("Should not get there!");
  }
}


const Ingredients = () => {
  const {isLoading, error, data, sendRequest} =  useHttp();

  const [userIngredients, dispatch] = useReducer(ingredientReducer, [])


  useEffect(() => console.log("render"))
  // const [userIngredients, setUserIngredients] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState();


  const filterIngredientsHandler = useCallback(filteredIngredients => {
    //setUserIngredients(filteredIngredients)
    dispatch({type: "SET", ingredients: filteredIngredients})
  }, [])

  const addIngredientHandler = useCallback(ingredient => {
    //setIsLoading(true)
    // dispatchHttp({type: "SEND"});
    // fetch("https://react-burger-app-ffe1a.firebaseio.com/ingredients.json", 
    //   {method: "POST",
    //    body: JSON.stringify(ingredient),
    //    headers: {"Content-Type": "application/json"}}
    //    ).then(response => { 
    //     //setIsLoading(false)
    //     dispatchHttp({type: "RESPONSE"});
    //     //extraire le body et le convertir en JSON 
    //     return response.json();
    //   }).then( responseData => {


    //     // setUserIngredients(prevIngredients => [
    //     //   ...prevIngredients, {id: responseData.name, ...ingredient}
    //     // ])
    //     dispatch({type:"ADD", ingredient: {id: responseData.name, ...ingredient}})
    //   }
    //   ) 
  }, [])

  const removeItemHandler = useCallback(ingredientId => {
    //dispatchHttp({type: "SEND"});
    sendRequest(`https://react-burger-app-ffe1a.firebaseio.com/ingredients/${ingredientId}.json`, "DELETE")
  }, [sendRequest])

  const clearError = useCallback(() => {
    //dispatchHttp({type:"CLEAR"})
  }, [])

  const ingredientList = useMemo(() => {
    return <IngredientList ingredients={userIngredients} onRemoveItem={removeItemHandler}/>

  }, [userIngredients, removeItemHandler])

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm 
        onAddIngredient={addIngredientHandler}
        loading={isLoading}/>

      <section>
        <Search onLoadIngredients={filterIngredientsHandler}/>
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
