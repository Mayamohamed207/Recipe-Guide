import React from "react";

// Star Icon
export const StarIcon = ({ filled, onClick }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#E25640" : "none"}
    stroke="#E25640"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: onClick ? "pointer" : "default" }}
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Clock Icon
export const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25640" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path d="M12 6V12L16 14" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Small Clock Icon for Cards
export const ClockIconCard = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E25640" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
    <path d="M12 6V12L16 14" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Ingredients Icon
export const IngredientsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E25640" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 2H9C8.44772 2 8 2.44772 8 3V7C8 7.55228 8.44772 8 9 8H15C15.5523 8 16 7.55228 16 7V3C16 2.44772 15.5523 2 15 2Z" strokeWidth="2"/>
    <path d="M16 4H18C19.1046 4 20 4.89543 20 6V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V6C4 4.89543 4.89543 4 6 4H8" strokeWidth="2"/>
    <path d="M9 14H15" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 18H15" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Heart (Favorite) Icon
export const HeartIcon = ({ filled, onClick }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "#E25640" : "none"}
    stroke={filled ? "#E25640" : "#E25640"}
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    style={{ cursor: "pointer" }}
  >
    <path
      d="M4.45 13.9L12 21.45L19.55 13.9C21.35 12.1 21.35 9.2 19.55 7.4C17.75 5.6 14.85 5.6 13.05 7.4L12 8.45L10.95 7.4C9.15 5.6 6.25 5.6 4.45 7.4C2.65 9.2 2.65 12.1 4.45 13.9Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Level Icon
export const LevelIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25640" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Search Icon
export const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" 
      stroke="#E25640" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Sort Icon
export const SortIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E25640" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H21M3 12H15M3 18H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
