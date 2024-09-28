// SearchBar.js
import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const inputStyle = {
    width: '300px',  // Change the width to your desired size
    height: '40px',  // Change the height to your desired size
    padding: '2px', // Adjust padding if needed
    fontSize: '16px' // Adjust font size if needed
  };
  return (
    <input
      type="text"
      placeholder="Search eg, coffee..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={inputStyle}
    />
  );
};

export default SearchBar;