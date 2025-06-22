import React from "react";
import { useParams, Link } from "react-router-dom";
import { recipes } from "../data";
import { StarIcon, ClockIcon, LevelIcon } from "../components/Icons";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <h2>Recipe not found</h2>;

  const renderStars = (count) => (
    <div className="rating-container" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} filled={i < count} />
      ))}
      <span className="rating-count" style={{ color: "#666", fontSize: "14px" }}>(189)</span>
    </div>
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
          <img
            src={recipe.detailImage}
            alt={recipe.title}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>

        <div style={{ flex: "1 1 500px", minWidth: "300px" }}>
          {/* Title and Rating */}
          <div style={{ marginBottom: "20px" }}>
            {renderStars(recipe.rating || 4)}
            <h1 style={{ fontSize: "32px", margin: "10px 0" }}>{recipe.title}</h1>
          </div>

          <div style={{ display: "flex", gap: "30px", marginBottom: "20px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div className="icon-container">
                <ClockIcon />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="meta-label">TOTAL TIME</span>
                <span className="meta-value">{recipe.time || "30 minutes"}</span>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div className="icon-container">
                <LevelIcon />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="meta-label">LEVEL</span>
                <span className="meta-value">{recipe.level || "Easy"}</span>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div style={{ marginBottom: "30px" }}>
            <h2 className="section-title">INGREDIENTS</h2>
            <ul className="ingredients-list">
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <input type="checkbox" id={`ing-${index}`} className="ingredient-checkbox" />
                  <label htmlFor={`ing-${index}`} className="ingredient-label">
                    {ingredient}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="section-title">INSTRUCTIONS</h2>
            <ol className="instructions-list">
              {recipe.instructions?.map((step, index) => (
                <li key={index} className="instruction-step">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div style={{ marginTop: "40px" }}>
        <Link to="/" className="back-link">
          Back to all recipes
        </Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
