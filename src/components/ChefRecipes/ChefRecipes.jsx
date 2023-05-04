import React from 'react';
import PropTypes from 'prop-types';
import './ChefRecipes.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const recipes = [
  {
    id: 1,
    name: "Pesto Pasta",
    ingredients: ["pasta", "basil", "pine nuts", "garlic", "parmesan cheese", "olive oil"],
    method: "1. Cook pasta according to package directions. 2. In a food processor, blend basil, pine nuts, garlic, and parmesan cheese until finely chopped. 3. With the food processor running, slowly add olive oil until the mixture is smooth. 4. Toss cooked pasta with pesto sauce and serve.",
    rating: 4.5
  },
  {
    id: 2,
    name: "Chicken Curry",
    ingredients: ["chicken", "onion", "garlic", "ginger", "tomatoes", "curry powder", "coconut milk"],
    method: "1. Heat oil in a large skillet over medium heat. 2. Add onion, garlic, and ginger, and sauté until the onion is translucent. 3. Add chicken and cook until browned on all sides. 4. Add tomatoes, curry powder, and coconut milk. 5. Simmer for 15-20 minutes, until the chicken is cooked through. 6. Serve with rice.",
    rating: 4.2
  },
  {
    id: 3,
    name: "Roasted Vegetables",
    ingredients: ["sweet potato", "carrots", "broccoli", "red onion", "olive oil", "salt", "pepper"],
    method: "1. Preheat oven to 400°F. 2. Cut sweet potato and carrots into bite-sized pieces. Cut broccoli into florets. Slice red onion. 3. Toss vegetables with olive oil, salt, and pepper. 4. Spread vegetables in a single layer on a baking sheet. 5. Roast for 20-25 minutes, until the vegetables are tender and slightly caramelized. 6. Serve as a side dish or over rice or quinoa.",
    rating: 4.8
  }
];

function ChefRecipes({ favoriteRecipes, onFavoriteClick }) {

  const handleFavoriteClick = (id) => {
    onFavoriteClick(id);
    toast.success("Recipe added to favorites!");
  };

  return (
    <div className='chef-recipes'>
            <ToastContainer />

      <div className='recipe-card'>
        {recipes && recipes.map(recipe => (
          <div key={recipe.id}>
            <h2>{recipe.name}</h2>
            <ul><strong>Ingredients: </strong>
              {recipe.ingredients.map(ingredient => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <p><strong>Method: </strong>{recipe.method}</p>
            <p><span className='span'>Rating:</span> {recipe.rating}</p>
            <button onClick={() => handleFavoriteClick(recipe.id)}>
  {favoriteRecipes && favoriteRecipes.includes(recipe.id) ? 'Unfavorite' : 'Favorite'}
</button>
          </div>
        ))}
      </div>
    </div>
  );
}

ChefRecipes.propTypes = {
  favoriteRecipes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  onFavoriteClick: PropTypes.func.isRequired
};

export default ChefRecipes;
