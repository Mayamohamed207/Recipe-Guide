import React, { useState, useEffect } from "react";
import { recipes as initialRecipes } from "../data";
import RecipeList from "../components/RecipeList";
import "../App.css";
import { SearchIcon, HeartIcon } from "../components/Icons";

const Home = () => {
  // State management
  const [allRecipes, setAllRecipes] = useState(initialRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState(initialRecipes);
  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState("time"); // Default sorting by time

  // Function to filter recipes based on search, cuisine, level, and favorites
  const filterRecipes = () => {
    let filtered = allRecipes.filter((recipe) => {
      return (
        (!showOnlyFavorites || recipe.isFavorite) && // Filter favorites if toggled
        (selectedCuisine === "All" || recipe.cuisine === selectedCuisine) &&
        (selectedLevel === "All" || recipe.level.toLowerCase() === selectedLevel.toLowerCase()) &&
        (searchTerm === "" || recipe.title.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });

    // Sorting logic
    filtered.sort((a, b) => {
      if (sortBy === "time") return (parseInt(a.time) || 0) - (parseInt(b.time) || 0);
      if (sortBy === "name") return a.title.localeCompare(b.title);
      if (sortBy === "level") {
        const levelOrder = { easy: 1, medium: 2, hard: 3 };
        return (levelOrder[a.level.toLowerCase()] || 0) - (levelOrder[b.level.toLowerCase()] || 0);
      }
      return 0;
    });

    setFilteredRecipes(filtered);
  };

  // Toggle favorite recipe
  const toggleFavorite = (id) => {
    const updatedRecipes = allRecipes.map((recipe) =>
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    );

    setAllRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes)); // Save to localStorage
    filterRecipes(); // Re-filter after updating favorites
  };

  // Load saved favorites when the component mounts
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (savedRecipes) {
      setAllRecipes(savedRecipes);
    }
  }, []);

  // Re-filter recipes when dependencies change
  useEffect(filterRecipes, [allRecipes, searchTerm, selectedCuisine, selectedLevel, showOnlyFavorites, sortBy]);

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="search-filters">
          {/* Search Input */}
          <div className="filter-item search-input">
            <input
              type="text"
              placeholder="Keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
           <button><SearchIcon /></button>
          </div>

          {/* Cuisine Filter */}
          <div className="filter-item filter-dropdown">
            <select value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)}>
              <option value="All">All Cuisines</option>
              <option value="Beverage">Beverage</option>
              <option value="Main Dish">Main Dish</option>
              <option value="Side Dish">Side Dish</option>
              <option value="Dessert">Dessert</option>
              <option value="Snack">Snack</option>
            </select>
          </div>

          {/* Level Filter */}
          <div className="filter-item filter-dropdown">
            <select value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)}>
              <option value="All">All Levels</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
        </div>
      </header>

      {/* Meta Info */}
      <div className="recipe-meta">
        <div className="recipe-count">{filteredRecipes.length} recipes</div>

        {/* Toggle Favorites Button */}
        <div className="favorites-toggle" onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}>
                  <HeartIcon filled={showOnlyFavorites} /> Show only favorites
                </div>

        {/* Sorting Options */}
        <div className="sort-options">
          <span>Sort by</span>
          <div className="filter-dropdown">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="time">Time</option>
              <option value="name">Name</option>
              <option value="level">Level</option>
            </select>
          </div>
        </div>
      </div>

      {/* Recipe List */}
      <div className="recipe-container">
        <RecipeList recipes={filteredRecipes} toggleFavorite={toggleFavorite} />
      </div>
    </div>
  );
};

export default Home;
