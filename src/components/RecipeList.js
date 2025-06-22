import React from 'react'
import RecipeCard from './RecipeCard' 

const RecipeList = ({ recipes, toggleFavorite }) => {
  return (
    <div className="recipe-container">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} toggleFavorite={toggleFavorite} />
    ))}
  </div>
  )
}

export default RecipeList
