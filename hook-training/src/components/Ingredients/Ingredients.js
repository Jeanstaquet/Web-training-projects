import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientHandler = ingredient => {
    fetch("https://react-burger-app-ffe1a.firebaseio.com/ingredients.json", 
      {method: "POST",
       body: JSON.stringify(ingredient),
       headers: {"Content-Type": "application/json"}}
       ).then(response => {
        //extraire le body et le convertir en JSON 
        return response.json();
      }).then( responseData => {
        console.log(responseData)
        setUserIngredients(prevIngredients => [
          ...prevIngredients, {id: responseData.name, ...ingredient}
        ])}
      ) 
  }

  const removeItemHandler = ingredientId => {
    setUserIngredients(prevIngredients => prevIngredients.filter((ingredient) => ingredient.id !== ingredientId))
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeItemHandler}/>
      </section>
    </div>
  );
};

export default Ingredients;
