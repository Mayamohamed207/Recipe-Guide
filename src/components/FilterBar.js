import React from "react";

const FilterBar = ({ selectedCuisine, setSelectedCuisine }) => {
  return (
    <div className="filter-bar">
      <select value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)}>
        <option value="All">All</option>
        <option value="Beverage">Beverage</option>
        <option value="Main Dish">Main Dish</option>
      </select>
    </div>
  );
};

export default FilterBar;
