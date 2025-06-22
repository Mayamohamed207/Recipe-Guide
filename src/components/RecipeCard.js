import React, { useState } from "react";
import { Link } from "react-router-dom";
import { StarIcon, ClockIconCard, IngredientsIcon, HeartIcon } from "../components/Icons";

const RecipeCard = ({ recipe, toggleFavorite }) => {
  const [userRating, setUserRating] = useState(recipe.rating || 0);

  const handleStarClick = (rating) => {
    setUserRating(rating);
  };

  const renderStars = (count, onClick) => {
    return [...Array(5)].map((_, i) => (
      <StarIcon key={i} filled={i < count} onClick={() => onClick && onClick(i + 1)} />
    ));
  };

  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img src={recipe.cardImage} alt={recipe.title} />
      </Link>

      <button
        className="favorite-button"
        onClick={(e) => {
          e.preventDefault();
          toggleFavorite(recipe.id);
        }}
      >
        <HeartIcon filled={recipe.isFavorite} />
      </button>

      <div className="recipe-info">
        <div className="recipe-rating">{renderStars(userRating, handleStarClick)}</div>

        <h3>
          <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
        </h3>

        <div className="recipe-tags">
          {recipe.cuisine && <span className="tag">{recipe.cuisine}</span>}
          <span className="tag">{recipe.level}</span>
        </div>

        <div className="recipe-stats">
          <div className="stat-row">
            <ClockIconCard /> {recipe.time}
          </div>

          <div className="stat-row">
            <IngredientsIcon /> {recipe.ingredients?.length || 0} ingredients
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
