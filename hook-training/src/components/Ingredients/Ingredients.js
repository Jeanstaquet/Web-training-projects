import React, { useState, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from "../UI/ErrorModal";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();


  const filterIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients)
  }, [])

  const addIngredientHandler = ingredient => {
    setIsLoading(true)
    fetch("https://react-burger-app-ffe1a.firebaseio.com/ingredients.json", 
      {method: "POST",
       body: JSON.stringify(ingredient),
       headers: {"Content-Type": "application/json"}}
       ).then(response => {
        //extraire le body et le convertir en JSON 
        return response.json();
      }).then( responseData => {
        setIsLoading(false)
        setUserIngredients(prevIngredients => [
          ...prevIngredients, {id: responseData.name, ...ingredient}
        ])}
      ) 
  }

  const removeItemHandler = ingredientId => {
    setIsLoading(true)
    fetch(`https://react-burger-app-ffe1a.firebaseio.com/ingredients/${ingredientId}.json`, 
      {method: "DELETE"}
       ).then(response => {
        setIsLoading(false) 
        setUserIngredients(prevIngredients => prevIngredients.filter((ingredient) => ingredient.id !== ingredientId));
       }
       ).catch(error => {
         setError("Something went wrong");
         setIsLoading(false);
       })
  }

  const clearError = () => {
    setError(null);
  }

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm 
        onAddIngredient={addIngredientHandler}
        loading={isLoading}/>

      <section>
        <Search onLoadIngredients={filterIngredientsHandler}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={removeItemHandler}/>
      </section>
    </div>
  );
};

export default Ingredients;
